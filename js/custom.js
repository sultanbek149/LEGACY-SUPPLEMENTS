
$(function () {

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  // SMOOTHSCROLL NAVBAR
  $(function () {
    $('.navbar-brand, .navbar-nav a, .hero-text a, .brands a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });
});

const body = document.querySelector('body')
const membershipForm = document.querySelector('#membershipForm')
const nav = document.querySelector('nav')
const modal = document.querySelector('.modal')

//First form
const modalForm = document.querySelector('#modal-form')
const modalName = document.querySelector('#modal-name')
const modalEmail = document.querySelector('#modal-email')
const modalPhone = document.querySelector('#modal-phone')
const modalMessage = document.querySelector('#modal-message')

modalForm.addEventListener('submit', (e) => {
  e.preventDefault()
  sendMessage(modalName, modalEmail, modalMessage, modalPhone)
})


//Second form
const contactForm = document.querySelector('#contact-form')
const contactName = document.querySelector('#contact-name')
const contactEmail = document.querySelector('#contact-email')
const contactMessage = document.querySelector('#contact-message')


contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  sendMessage(contactName, contactEmail, contactMessage)
})


const openModal = document.querySelector('#open-modal')


function sendMessage(name, email, message, phone) {
  // console.log(modalName.value, modalEmail.value, modalPhone.value, modalMessage.value)
  const text = `<b>Web data:</b> %0A<b>Name:</b> <i>${name.value}</i> %0A<b>Email:</b> <i>${email.value}</i>%0A<b>Phone number:</b> <i>${phone ? phone.value : 'not provided'}</i> %0A<b>Message:</b> <i>${message.value}</i>`


  const t = "6776512405:AAG4hJef-NsCNBIgUV3d2_1TYaFdvW3cHaA"
  const cid = -4193427991
  const url = `https://api.telegram.org/bot${t}/sendMessage?chat_id=${cid}&text=${text}&parse_mode=html`


  const xhr = new XMLHttpRequest();

  // Handle the 'load' event for successful completion of the request    

  if (!window.navigator.onLine) return alert("Please, check internet connection!!!")



  xhr.open("GET", url, true);
  xhr.send();


  openModal.classList.toggle('active')

  setTimeout(() => {
    openModal.classList.toggle('active')
  }, 3000)



  reset(name, email, message, phone)
}

function reset(name, email, message, phone) {
  name.value = ""
  email.value = ""
  message.value = ""
  if (typeof phone === 'undefined') return
  phone.value = ""
}

