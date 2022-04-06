var menu = document.getElementById('menu-toggle')
var silde = document.getElementById('silde')
var toggel = document.querySelectorAll('.toggle')

menu.addEventListener('click', function() {
    silde.classList.add('slide')
})

window.addEventListener('scroll', function() {
    silde.classList.remove('slide')
});