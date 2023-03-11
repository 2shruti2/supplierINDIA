// sidebar closed when clicked outside 

const sidebar= document.querySelector('#navbarSupportedContent');

const tog= document.querySelector('.navbar-toggler');
const navv= document.querySelector('.sidebar');

document.addEventListener('click', e=>{
    if(e.target.closest('#navbarSupportedContent')) return;
    sidebar.classList.remove('show');
})

tog.addEventListener('click', e=>{
    if(!sidebar.classList.contains('show')){
        console.log("hello");
    }
})






















