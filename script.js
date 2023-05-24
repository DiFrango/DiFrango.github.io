$(document).ready(function() {
    var d = new Date(); // Cria um objeto Date com a data e hora atuais
    var weekday = d.getDay(); // Retorna o dia da semana (0-6), onde 0 é domingo e 6 é sábado
    if (weekday == 6) {
      $('.diamenu-item:eq(0)').addClass('selected'); 
      $('.menu-item').hide();
      $('.menu-item.' + 'sabado').show();
      $('.secao').hide();
      $('.secao.' + 'sabado').show();
    } else {
      $('.diamenu-item:eq(1)').addClass('selected'); 
      $('.menu-item').hide();
      $('.menu-item.' + 'domingo').show();
      $('.secao').hide();
      $('.secao.' + 'domingo').show();
    }

    $('.diamenu-item').click(function() {
      $('.diamenu-item').removeClass('selected'); // remove a classe de todos os elementos
      $(this).addClass('selected'); // adiciona a classe ao elemento clicado
    });

    $(".secao").click(function() {
      $(this).find('.conteudo').toggle('slow');
    });
      
    $('.secao .conteudo').click(function(event){
    event.stopPropagation();
    });

    $('.diamenu-item').click(function() {
      var dia = $(this).data('dia'); // Obtém o dia a partir do atributo de dados 'dia'
      $('.menu-item').hide(); // Oculta todos os itens de menu
      $('.menu-item.' + dia).show(); // Exibe apenas os itens de menu com a classe de dia correspondente
    
      $('.secao').hide(); // Oculta todos os itens de menu
      $('.secao.' + dia).show();
    });

    //modais

    //frito
    $('#abrirfrito').click(function(){
      $('#frito').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#frito').css('display', 'none');
    });

    //especial/tulipa
    $('#abrirespecial').click(function(){
      $('#especial').css('display', 'block');
    });
    
    $('#abrirtulipa').click(function(){
      $('#especial').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#especial').css('display', 'none');
    });

    //maionese    
    $('#abrirmaionese').click(function(){
      $('#maionese').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#maionese').css('display', 'none');
    });

    //salpicao    
    $('#abrirsalpicao').click(function(){
      $('#salpicao').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#salpicao').css('display', 'none');
    });

    //bifum    
    $('#abrirbifum').click(function(){
      $('#bifum').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#bifum').css('display', 'none');
    });

    //vinagrete    
    $('#abrirvinagrete').click(function(){
      $('#vinagrete').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#vinagrete').css('display', 'none');
    });

    //caponata    
    $('#abrircaponata').click(function(){
      $('#caponata').css('display', 'block');
    });

    $('.fechar').click(function(){
      $('#caponata').css('display', 'none');
    });

    alert("Nosso cardápio ainda está em desenvolvimento, agradecemos a compreensão");

  });
  
