const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelector('.show-modal')


const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// for(let i = 0; i < btnOpenModal.length; i++){
//     btnOpenModal[i].addEventListener('click', openModal)
// }

btnOpenModal.addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keyup', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }
})