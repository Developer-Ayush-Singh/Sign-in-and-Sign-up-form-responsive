// const signinBtn = document.querySelector('.signinBtn')
// const signupBtn = document.querySelector('.signupBtn')
// const formBx    = document.querySelector('.formBx')
// signupBtn.addEventListener('click', () =>{
//   console.log('click')
//   formBx.classList.add('active')
// })

$(document).ready(function(){
  $('.signupBtn').on('click' , function(){
    $('.formBx').addClass('active')
    $('body').addClass('active')
  })
  
  $('.signinBtn').on('click' , function(){
    $('.formBx').removeClass('active')
    $('body').removeClass('active')
  })
});