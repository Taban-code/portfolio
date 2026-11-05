const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(menuButton&&nav){
 menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
 });
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
 }));
}
const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('contact-form');
form?.addEventListener('submit',event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 const data=new FormData(form);
 const subject=encodeURIComponent('Portfolio enquiry: '+data.get('subject'));
 const body=encodeURIComponent('Hello Taban,\n\n'+data.get('message')+'\n\nFrom: '+data.get('name')+'\nEmail: '+data.get('email'));
 const status=document.getElementById('form-status');
 if(status)status.textContent='Opening your email app…';
 window.location.href='mailto:tabansalimsaleh@gmail.com?subject='+subject+'&body='+body;
});