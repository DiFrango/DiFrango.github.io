$(document).ready(function() {
    $('.diamenu-item').click(function() {
      $('.diamenu-item').removeClass('selected'); // remove a classe de todos os elementos
      $(this).addClass('selected'); // adiciona a classe ao elemento clicado
    });

    $(document).ready(function() {
      $(".secao").click(function() {
        $(this).find('.conteudo').toggle('invisivel');
      });
    });

  });
  
