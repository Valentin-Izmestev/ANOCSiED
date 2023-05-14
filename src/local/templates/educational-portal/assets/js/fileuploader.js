 class FileUploader {

     constructor(form) {
         this.form = form;
     }
     arFiles = [];

     bytesToSize(bytes) {
         let sizes = ['Байт', 'Кбайт', 'Мбайт', 'Гбайт', 'Тбайт'];
         if (!bytes) {
             return '0 байт';
         }
         let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
         return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
     }

     init() {

         let fileOpenBtn = this.form.querySelector('.btn-file--open');
         let fileUploadBtn = this.form.querySelector('.btn-file--upload');
         let uploadFileInput = this.form.querySelector('input[type="file"]');
         let fileList = this.form.querySelector('.file-list');
         let btnBox = this.form.querySelector('.btn-box');


         // открытие окна выбора файлов
         fileOpenBtn.addEventListener('click', () => {
             uploadFileInput.click();
         });

         // выбор файлов для отправки на сервер
         uploadFileInput.addEventListener('change', (e) => {
             if (!e.target.files.length) {
                 return;
             }
            //  fileOpenBtn.style.display = 'none';
            //  fileUploadBtn.style.display = 'flex';

            btnBox.classList.add('btn-box--active');

             fileList.innerHTML = '';

             this.arFiles = Array.from(e.target.files);
             console.log(this.arFiles)
             this.arFiles.forEach(file => {
                 fileList.insertAdjacentHTML('beforeend', `
               <li>
                   <span class="file-link" >
                       <span class="file-link__icon-box file-link__icon-box--mask">
                            <span class="mask-icon"></span>
                       </span>
                       <span class="file-link__description">
                           <span class="file-link__caption">${file.name}</span>
                           <span class="file-link__size">(${this.bytesToSize(file.size)})</span>
                       </span>
                       <button type="button" class="file-link__remove-btn" data-name="${file.name}"></button>
                   </span> 
               </li>
               `);
             });
         });
         // удаление файлов из списка выбранных
         this.form.addEventListener('click', (e) => {
             if (e.target.className == 'file-link__remove-btn') {
                 let {
                     name
                 } = e.target.dataset;
                 this.arFiles = this.arFiles.filter(file => {
                     return file.name !== name;
                 });

                 const delFile = document.querySelector(`[data-name="${name}"]`).closest('li');
                 delFile.classList.add('removing');
                 setTimeout(function () {
                     delFile.remove();
                 }, 300);
                 if (this.arFiles.length == 0) {
                    btnBox.classList.remove('btn-box--active');
                 }
             }
         });

         //отправка файлов на сервер
        //  this.form.addEventListener('submit', (e)=>{
        //     e.preventDefault();
        //     console.log(this.arFiles)
        //  });

     }

 }
