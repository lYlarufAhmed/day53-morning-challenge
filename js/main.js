let notificationDiv = document.getElementById('notification')
let notificationBtn = document.getElementById('message')
let alertBtn = document.getElementById('alert')


let mouseOnNotification = false
let disabledBtn
let timeoutHandler

notificationBtn.addEventListener('click', e => {
    disabledBtn = alertBtn
    disabledBtn.disabled = true
    document.documentElement.style.setProperty('--notification-bacground', 'rgba(0,0,0,.6)')
    notificationDiv.style.top = '0'
    if (timeoutHandler) clearTimeout(timeoutHandler)
    timeoutHandler = setTimeout(() => {
        if (!mouseOnNotification) {
            disabledBtn.disabled = false
            notificationDiv.style.top = '-4rem'
        }
    }, 2000)
})

notificationDiv.addEventListener('mouseover', e => {
    mouseOnNotification = true
    // disabledBtn.disabled = true
    // console.log('mouseove', timeoutHandler)
    if (timeoutHandler) clearTimeout(timeoutHandler)
    disabledBtn.disabled = true
    notificationDiv.style.top = '0'
})

notificationDiv.addEventListener('mouseleave', e => {
    // console.log('mouseleave', timeoutHandler)
    if (timeoutHandler) clearTimeout(timeoutHandler)
    mouseOnNotification = false
    if (timeoutHandler) clearTimeout(timeoutHandler)
    timeoutHandler = setTimeout(() => {
        disabledBtn.disabled = false
        notificationDiv.style.top = '-4rem'
    }, 1000)
})

alertBtn.addEventListener('click', e => {
    disabledBtn = notificationBtn
    disabledBtn.disabled = true
    notificationDiv.style.top = '0'
    document.documentElement.style.setProperty('--notification-bacground', 'red')
    if (timeoutHandler) clearTimeout(timeoutHandler)
    timeoutHandler = setTimeout(() => {
        if (!mouseOnNotification) {
            disabledBtn.disabled = false
            notificationDiv.style.top = '-4rem'
        }
    }, 2000)
})