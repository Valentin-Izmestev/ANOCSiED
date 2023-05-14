// активатор кнопок в модалке
let nlCheckboxActivators = document.querySelectorAll('.checkbox-activator');
if(nlCheckboxActivators){
    nlCheckboxActivators.forEach(item=>{
        item.addEventListener('click', function(){
            let modal = item.closest('.modal');
            let activatedElement = modal.querySelector('.' + item.getAttribute('data-activate'));
            if(item.checked){ 
                activatedElement.classList.remove('btn--disabled');
            }else{
                activatedElement.classList.add('btn--disabled');
            }
        });
    });
}


let nlBtnSubmit = document.querySelectorAll('.btn-submit');

let authForm = document.querySelector('.auth-form');

// authForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     let formData = new FormData(this);
//     console.log(Array.from(formData));
//     console.log(window.__token);
// })