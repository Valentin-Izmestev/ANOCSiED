document.addEventListener('DOMContentLoaded', function(){

    //window.__token = 'b09727219f2bee70974437c64db619f0'; //не испольовать на боевом

     // работа модальных окон 

     let greatShadow = document.querySelector('.great-shadow');
     let nlModalsWr = document.querySelectorAll('.modal-wr');
     let nlGgoToLinks = document.querySelectorAll('.go-to-modal');
     /**
      * showModalFull - окрывает конкретное моальное окно
      * modalId - строка с id модалки, которую нужно открыть
      */
     function showModalFull(modalId) {
         let currentModal = document.querySelector('#' + modalId);
         greatShadow.classList.add('great-shadow--show');
         setTimeout(function () {
             currentModal.classList.add('active');
         }, 200);
     }
 
     function hideModalFull() {
         nlModalsWr.forEach(item => { 
             item.classList.remove('active'); 
             let currentForm = item.querySelector('form');
             if(currentForm){
                 currentForm.reset();
             }
             let currentFormErrorBox = item.querySelector('.form-error-box');
             if(currentFormErrorBox){
                currentFormErrorBox.innerHTML = '';
             }
             let currentRFS = item.querySelector('.response-from-server');
             if(currentRFS){
                 currentRFS.classList.remove('active');
                 currentRFS.innerHTML = '';
             }
         });
         setTimeout(function () {
             greatShadow.classList.remove('great-shadow--show');
         }, 200);
     }
 
     function goToModall(nodeFrom, modalIdTo) {
         nodeFrom.classList.remove('active'); 
         let currentModal = document.querySelector(modalIdTo);
         currentModal.classList.add('active');
     }
 
     let nlOpenModalBtn = document.querySelectorAll('.open-modal');
     if (nlOpenModalBtn) {
         nlOpenModalBtn.forEach(item => {
             item.addEventListener('click', function (e) {
                 e.preventDefault();
                 showModalFull(item.getAttribute('data-modal-id'));
             });
         });
     }
     if (greatShadow) {
         greatShadow.addEventListener('click', function (e) {
             if (e.target.classList.contains('great-shadow') || e.target.classList.contains('modal-wr')) {
                 hideModalFull();
             }
         });
     }
     if (nlGgoToLinks) {
         nlGgoToLinks.forEach(link => {
             link.addEventListener('click', function (e) {
                 e.preventDefault();
                 goToModall(e.currentTarget.closest('.modal-wr'), e.currentTarget.getAttribute('href'))
             });
         });
     }
// ========================обработка форм========================
    // форма авторизации
    let authForm = document.querySelector('.auth-form');
    if(authForm){
        authForm.addEventListener('submit', function(e){
            e.preventDefault(); 
            if(this.querySelector('.btn--disabled')){
                console.log('return');
                return;
            }
            let errorBox = this.querySelector('.form-error-box'); 
            let authFormData = new FormData(this);
            authFormData.append('sessid', window.__token);
            let toServer = [];
            authFormData.forEach((value, key)=>{
                toServer[key] = value;
            });

            axios.post(
                '/ajax/secure/auth',
                toServer
            ).then((response) => { 
              if (response.data.done == 1) {
                window.location.href = window.location; 
              }
            }).catch(({response}) => {
                errorBox.insertAdjacentHTML('beforeEnd', `<li>${response.data.error}</li>`);
            //   alert(response.data.error); 
            }); 
        });
    } 

    // форма регистрации
    let regForm = document.querySelector('.reg-form');
    if(regForm){
        regForm.addEventListener('submit', function(e){
            e.preventDefault();
             
            if(this.querySelector('.btn--disabled')){ 
                return;
            }
            let errorBox = this.querySelector('.form-error-box'); 
            let regPassportPass = this.querySelector('.form-elem__input[name="reg-password"]');
            let regPassportRepeatPass = this.querySelector('.form-elem__input[name="repeat-password"]');

            regPassportPass.addEventListener('click', function(e){
                if(this.classList.contains('form-elem__input--error')){
                    this.classList.remove('form-elem__input--error');
                    regPassportRepeatPass.classList.remove('form-elem__input--error');
                    
                }
            });
            regPassportRepeatPass.addEventListener('click', function(e){
                if(this.classList.contains('form-elem__input--error')){
                    this.classList.remove('form-elem__input--error');
                    regPassportPass.classList.remove('form-elem__input--error');
                }
            });

            let regFormData = new FormData; 
            regFormData.append('name', this.querySelector('.form-elem__input[name="name"]').value);
            regFormData.append('surname', this.querySelector('.form-elem__input[name="surname"]').value);
            regFormData.append('email', this.querySelector('.form-elem__input[name="reg-email"]').value);
            regFormData.append('phone', this.querySelector('.form-elem__input[name="phone"]').value); 
            regFormData.append('password', regPassportPass.value); 
            regFormData.append('passwordRepeat', regPassportRepeatPass.value);
            regFormData.append('sessid', window.__token); 
             
            if(regPassportPass.value === regPassportRepeatPass.value){
                // let test = [];
                // regFormData.forEach((value, key)=>{
                //     test[key] = value;
                // }); 
                axios.post(
                    '/ajax/secure/register',
                    regFormData
                ).then((response) => {
                  console.log(response);
                  if (response.data.done == 1) {
                    window.location.href = window.location;
                    // authForm.reset();
                  }
                }).catch(({response}) => {
                  alert(response.data.error);
                  errorBox.innerHTML = '';
                  errorBox.insertAdjacentHTML('beforeEnd', `<li>${response.data.error}</li>`);
                });
            }else{
                regPassportPass.classList.add('form-elem__input--error');
                regPassportRepeatPass.classList.add('form-elem__input--error');
                errorBox.innerHTML = '';
                errorBox.insertAdjacentHTML('beforeEnd', `<li>Пароль и повтор пароля не совпадают</li>`);
            }
        });
    }

    // форма восстановления пароля
    let recoveryForm = document.querySelector('.recovery-form');
    if(recoveryForm){
        recoveryForm.addEventListener('submit', function(e){
            e.preventDefault();
            let formErrorBox = recoveryForm.querySelector('.form-error-box');
            let recoveryFormData = new FormData();
            recoveryFormData.append('email', recoveryForm.querySelector('.form-elem__input[name="email"]').value); 
            recoveryFormData.append('sessid', window.__token);

            axios.post(
                '/ajax/secure/recovery',
                recoveryFormData
            ).then((response) => { 
              if (response.data.done == 1) { 
                let responseWindow = recoveryForm.querySelector('.response-from-server');
                // responseWindow.insertAdjacentHTML('beforeEnd', `Данные для востановлеиня пароля высланны на указанную почту`);
                responseWindow.insertAdjacentHTML('beforeEnd', `${response.data.message}`);
                responseWindow.classList.add('active');
                setTimeout(function(){
                    // hideModalFull();
                    window.location.href = '/';
                }, 2000); 
              }
            }).catch(({response}) => {
                formErrorBox.insertAdjacentHTML('beforeEnd', `${response.data.error}`);
            //   alert(response.data.error);
            });
        });
    }

});