$(document).ready(function () {
  $("#carrosel-imagens").slick({
    //seleciona o elemento que vai ser o carrosel
    autoplay: true, //autoplay
  });

  $(".menu-hamburguer").click(function () {
    //quando clicar no menu hamburguer
    $("nav").slideToggle(); //abre e fecha o menu
  });

  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
    },
    messages: {
      nome: '<span class="campoErrado">Por favor, insira o seu nome.</span>',
      email:
        '<span class="campoErrado">"Por favor, insira o seu email."</span>',
      telefone:
        '<span class="campoErrado">"Por favor, insira o seu telefone."</span>',
      mensagem:
        '<span class="campoErrado">"Por favor, insira a sua mensagem"</span>',
    },
    submiHandler: function (form) { //quando o formulário for enviado
      console.log(form); //mostra o formulário no console
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids(); //pega o número de campos incorretos
      if (camposIncorretos) { //se existir campos incorretos
        alert(`Existem ${camposIncorretos} campos incorretos`); //alerta o número de campos incorretos
      }
    },
  });

  $(".lista-veiculos button").click(function () { //quando clicar no botão
    const destino = $("#contato"); //pega o elemento que vai ser o destino
    const nomeVeiculo = $(this).parent().find('h3').text(); //pega o texto do elemento pai do botão

    $('#veiculo-interesse').val(nomeVeiculo); //coloca o texto do elemento pai do botão no input

    $('html').animate({ //realiza a animação
      scrollTop: destino.offset().top //define o destino
    }, 1000); //1000 é a velocidade da animação

  });
});
