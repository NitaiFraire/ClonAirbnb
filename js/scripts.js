// Boton flotante



document.addEventListener('DOMContentLoaded', () => {

    //obtener la imagen
    const imagen = document.querySelector('.hero');

    // Arreglo con imgs de fondo
    const imagenes = ['arriba.jpg', 'arriba2.jpg'];

    //inicializar variables
    let i = 0;
    let tiempo = 0;

    setInterval(() => {

        imagen.style.backgroundPositionY = '-' + tiempo + 'px';

        if (tiempo > 40) {
            tiempo = 0;

            imagen.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

            if (i === imagenes.length - 1) {
                i = 0;
            } else {
                i++;
            }

        }

        tiempo++;

    }, 100)


    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e) => {
        e.preventDefault();

        //prevenimos default pero se ejecuta el siguiente codigo

        const footer = document.querySelector('#footer');

        if (footer.classList.contains('activo')) {

            footer.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
            btnFlotante.classList.remove('activo');

        } else {

            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }
    });
});

/* imagenes */