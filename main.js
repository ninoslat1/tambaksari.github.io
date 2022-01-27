const scriptURL = '<https://script.google.com/macros/s/AKfycbx4ygZ5xEk7v5S9xHHGnS8zRA2hfdpRq33AqhdkVJ5xi-2bYNKVcfsCdD6mpTf6t_aX/exec>'
const form = document.forms['submit-pengaduan-ke-google-sheet']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('btn-loading');
const myAlert = document.querySelector('alert'); 

form.addEventListener('submit', e => {
    e.preventDefault();
    //Ketika button submit diklik
    //Tampil tombol loading dan hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            //Tampilkan tombol kirim dna hilangkan tombol laoding
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            //Tampilkan alert
            myAlert.classList.toggle('d-none');
            //reset form
            form.reset();
            console.log('Success!', response);
            })
        .catch(error => console.error('Error!', error.message))
    })

const focusForm = document.querySelector('.form-control');
    focusForm.addEventListener('onclick', function(){
        this.style.background = 'lightblue';
    });