let form = document.querySelector('form')
let input = document.querySelector('input')
let refreshBtn = document.querySelector('.btn-refresh')
let user = document.querySelector('.user-list')
let clearBtn = document.querySelector('.btn-clear')

// refresh

refreshBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    reload()
    clearBtn.classList.remove('hidden')
})

// clear

clearBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    user.innerHTML = ''
    clearBtn.classList.add('hidden')
})

// search

input.addEventListener('input', ()=>{
    const qiymat = input.value.toLowerCase()
    const ism = document.querySelectorAll('.user-name')

    ism.forEach((item)=>{
        if(item.textContent.toLowerCase().includes(qiymat)){
            item.parentElement.classList.remove('hidden')
        }else{
            item.parentElement.classList.add('hidden')
        }
    })
})

// delete

document.addEventListener('click', (e)=>{

    
    if(e.target.classList[0] === 'x-btn'){
        e.target.parentElement.remove()
    }

    if(!user.children.length){
        clearBtn.classList.add('hidden')
    }
    
})

// users

function update  (data){
    user.innerHTML = ''
    data.forEach((item) => {
        const {gender, name, picture, location, dob} = item
        user.innerHTML += `
                   <li class="user" >
                       <img src=${picture.large} width="150"><br>
                       <span class="user-name"><i class="bi bi-person-vcard"></i> - ${name.title} ${name.first} ${name.last}</span><br><br>
                       <span><i class="bi bi-card-checklist"></i> - ${dob.age} years old</span><br><br>
                       <span><i class="bi bi-geo-alt-fill"></i> - ${location.city}, ${location.country}</span><br><br>
                       <span><i class="bi bi-person-standing"></i> - ${gender}</span><br>
                       <button class="x-btn">✕</button>
                   </li>
                `
    });
}


