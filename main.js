var notification = document.querySelector('.alert')
var container = document.querySelector('.container')
var result = document.querySelector('.result')
var key = document.querySelector('.key p:last-child')
var locations = document.querySelector('.location p:last-child')
var which = document.querySelector('.which p:last-child')
var code = document.querySelector('.code p:last-child')

document.addEventListener('keydown',function(e){
    notification.classList.add('hiden')
    container.classList.remove('hiden')
    result.innerHTML = e.which
    key.innerHTML = e.key
    locations.innerHTML = e.location
    which.innerHTML = e.which
    code.innerHTML = e.code
})