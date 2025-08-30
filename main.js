function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

/*document.querySelector('.tecla_pom').onclick = () => tocaSom('#som_tecla_pom');
document.querySelector('.tecla_clap').onclick = () => tocaSom('#som_tecla_clap');
document.querySelector('.tecla_tim').onclick = () => tocaSom('#som_tecla_tim');
document.querySelector('.tecla_puff').onclick = () => tocaSom('#som_tecla_puff');
document.querySelector('.tecla_splash').onclick = () => tocaSom('#som_tecla_splash');
document.querySelector('.tecla_toim').onclick = () => tocaSom('#som_tecla_toim');
document.querySelector('.tecla_psh').onclick = () => tocaSom('#som_tecla_psh');
document.querySelector('.tecla_tic').onclick = () => tocaSom('#som_tecla_tic');
document.querySelector('.tecla_tom').onclick = () => tocaSom('#som_tecla_tom');
document.querySelector('.tecla_rapaix').onclick = () => tocaSom('#som_tecla_rapaix');
document.querySelector('.tecla_copao').onclick = () => tocaSom('#som_tecla_copao');
document.querySelector('.tecla_hino').onclick = () => tocaSom('#som_tecla_hino');
document.querySelector('.tecla_ai').onclick = () => tocaSom('#som_tecla_ai');
document.querySelector('.tecla_romarinho').onclick = () => tocaSom('#som_tecla_romarinho');*/


/*  ( antigo) function tocaSomTic () {
document.querySelector('#som_tecla_tic).play();
}
document.querySelector('.tecla_tic).onclick=tocaSomTic */

const listaDeTeclas = document.querySelectorAll('.tecla')
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

   const instrumento =  tecla.classList[1];
   
    console.log(instrumento)

    const idAudio =`#som_${instrumento} `
    console.log(idAudio);

tecla.onclick =  function () {
    tocaSom(idAudio);
    }

contador = contador + 1;
console.log(contador)

}

