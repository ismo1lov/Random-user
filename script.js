// mode

let light = document.querySelector('.light')
let dark = document.querySelector('.dark')
let body = document.querySelector('body')

light.addEventListener('click', () => {
    light.classList.toggle('hidden')
    dark.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
    localStorage.setItem('mode', '')
})

dark.addEventListener('click', () => {
    light.classList.toggle('hidden')
    dark.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
    localStorage.setItem('mode', 'dark')
})

let mode = localStorage.getItem('mode')

if (mode) {
    body.classList.add('dark-mode')
    light.classList.toggle('hidden')
    dark.classList.toggle('hidden')
}

// overlay

let overlay = document.querySelector('.overlay')

function Loader(load) {
    if (load) {
        overlay.classList.remove('hidden')
    } else {
        overlay.classList.add('hidden')
    }
}

// request

function getData() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                Loader(true)
            } else if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText)
                resolve(data.results)
                Loader(false)
            } else if (request.readyState === 4) {
                reject('Malumot kelmadi error !!!')
                Loader(false)
            }
        })

        request.open('GET', 'https://randomuser.me/api/?results=9')
        request.send()
    })
}

function reload() {
    getData().then((data) => {
        update(data)
    }).catch((error) => {
        console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', reload)


