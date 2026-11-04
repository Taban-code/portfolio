const typing = document.getElementById("typing");

const word = "Developer";

let i = 0;

function typeEffect() {
  if (i < word.length) {
    typing.innerHTML += word.charAt(i);
    i++;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(eraseEffect, 2000); 
  }
}

function eraseEffect() {
  if (i >= 0) {
    typing.innerHTML = word.substring(0, i - 1);
    i--;
    setTimeout(eraseEffect, 50); 
  } else {
    i++;
    if (i >= word.length) {
       i = 0; 
    }
    setTimeout(typeEffect, 200);
  }
}; typeEffect();






/* Initialize Swiper */ 
var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});








// accordion
/* document.querySelectorAll('.accordion-header div').forEach(header => {
  header.addEventListener('click', () => {
    const currentItem = header.parentElement;
    
    // Toggle active class on clicked item
    currentItem.classList.toggle('active');

    let sign = currentItem.querySelector(".accordion-header :last-child");
    sign.innerHTML = "-";
  });
});
 */

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', (e) => {
    const accordionItem = e.currentTarget.closest('.accordion-item');
    const sign = accordionItem.querySelector('.sign');
    
    // Toggle the active class on the item container
    accordionItem.classList.toggle('active');
    
    // Change sign based on active state
    if (accordionItem.classList.contains('active')) {
      sign.textContent = '-';
    } else {
      sign.textContent = '+';
    }
  });
});









/* header intersection observer */
// Select the header and the hero section
const header = document.querySelector('.header');
const hero = document.getElementById('hero'); // Replace with your hero class/ID

const observerOptions = {
  root: null, // Uses the browser viewport as the container
  rootMargin: '0px',
  threshold: 0 // Fires when exactly 10% of the hero is visible (90% is scrolled past)
};

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // If the hero is NOT intersecting the viewport anymore (scrolled past 90%)
    if (!entry.isIntersecting && window.innerWidth >= 768) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}, observerOptions);

// Start observing the hero section
if (hero) {
  heroObserver.observe(hero);
}

/* if (window.innerWidth <= 768){
  heroObserver.unobserve(hero);
} */







const hamOffIcon = document.querySelector(".ham-off-icon");
const mobileNav = document.querySelector(".header .nav");
const mobileHamOffIcon = document.querySelector(".nav .ham-icon");
hamOffIcon.onclick = () => {
  mobileNav.classList.add("show");
}
mobileHamOffIcon.onclick = () => {
  mobileNav.classList.remove("show");
}




form.addEventListener('submit', async (e) => {
   e.preventDefault();

   const formData = new FormData(e.target);

   const data = { 
      // 1. Add your Web3Forms Access Key right here
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
   };

   // 2. Change the fetch URL to Web3Forms submission endpoint
   const res = await fetch('https://web3forms.com', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify(data),
   });

   const result = await res.json();
   
   if (res.status === 200) {
      alert("Message sent successfully!");
      form.reset();
   } else {
      alert(result.message || "Oops! There was a problem submitting your form.");
   }
});
