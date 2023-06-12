console.log('hello, world')

function validarFormulario() {
   
    const nombre = $('#nombre').val();
    const email = $('#email').val();
    const telefono = $('#telefono').val();
    const mensaje = $('#mensaje').val();
  
    
    if (nombre === '') {
      alert('Por favor ingresa tu nombre');
      return false; 
    }
  
    if (email === '') {
      alert('Por favor ingresa tu email');
      return false; 
    }
  
    return true; 
  }
  






  

$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault(); 
  
      const telefono = $('#telefono').val();
      const apiKey = '144d86d0929a7b02dd3959d5e27ffa7b'; 
    console.log('telefono:', telefono);
      const url = `https://apilayer.net/api/validate?access_key=${apiKey}&number=${telefono}`;
  
      $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(data) {
          console.log(data);
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });
  






const URL = 'https://api.thecatapi.com/v1/images/search';


function cargarImagen() {
fetch(URL)
.then(res => res.json())
.then(data => {
    const img = document.getElementById('fotogato');
    img.src = data[0].url;
    img.style.width = '300px'; 
    img.style.height = '200px'; 
    document.cookie = "nombreCookie=valor; SameSite=None; Secure";
    const nombreCookie = "miCookie";
    const valorCookie = "miValor";
    img.onload = function() {
      img.classList.add('loaded');

    document.cookie = `${nombreCookie}=${valorCookie}; SameSite=None; Secure`;
 
};
});
  }
  

const botonCargar = document.getElementById('cargarImagen');
botonCargar.addEventListener('click', cargarImagen);

