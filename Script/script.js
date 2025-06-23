const frontEnd = document.querySelector('.icones_de_habilidades_front-end');
const backEnd = document.querySelector('.icones_de_habilidades_back-end');

if (frontEnd && backEnd) {
  const habilidadesFront = frontEnd.querySelectorAll('.habilidade_em_html, .habilidade_em_css, .habilidade_em_js');
  const iconesFront = frontEnd.querySelectorAll('.icone_HTML, .icone_css, .icone_js');
  const barrasFront = frontEnd.querySelectorAll('.barra_carregamento_html, .barra_carregamento_css, .barra_carregamento_js');

                                                                          //acima temos duas variaveis que estão pegando a classe aonde estão armazenadas os elementos front-end e back-end, verificando se esses elementos existem na página de fato para fazer a correta manipulação.

  const habilidadesBack = backEnd.querySelectorAll('.habilidade_em_python, .habilidade_em_mysql');
  const iconesBack = backEnd.querySelectorAll('.icone_python, .icone_mysql');
  const barrasBack = backEnd.querySelectorAll('.barra_carregamento_python, .barra_carregamento_mysql');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Observer acionado');
        // Animações para o Front-End
        habilidadesFront.forEach(hab => hab.style.animation = 'surgir_esquerda 5s forwards');
        iconesFront.forEach(icon => icon.style.animation = 'surgir_esquerda 3s forwards');
        barrasFront.forEach(barra => barra.style.animation = 'surgir_direita 8s forwards');

        // Animações para o Back-End
        habilidadesBack.forEach(hab => hab.style.animation = 'surgir_esquerda 5s forwards');
        iconesBack.forEach(icon => icon.style.animation = 'surgir_esquerda 3s forwards');
        barrasBack.forEach(barra => barra.style.animation = 'surgir_direita 8s forwards');

        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(frontEnd);
  observer.observe(backEnd);
} else {
  console.log("Elementos não encontrados.");
}

                                                                          //se de fato os elementos existem então o algoritmo por meio da const "observer" vai:  1-captar o momento em que o usuário estiver na seção de habilidades da página; 2- vai disparar a animação tanto das habilidades front e back-end,fazendo tanto os icones quanto as barras de carregamento surgirem  e mostrar na tela; Toda via se não existir (impossivel), vai ser mostrado no console que os elementos não existem.


