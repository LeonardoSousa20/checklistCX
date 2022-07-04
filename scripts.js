// Cria a lista de opções de categorias

listaCategoria = [
  "Mapa de categorias está bem estruturado",
  "Usa palavras-chave nos nomes das categorias",
  "Leva em consideração regionalismos e particularidades",
  "Categorias organizadas de acordo com a relevância dos produtos",
  "SEO das categorias foi configurado",
];

// Popula a lista de categorias no formulário (remove caracteres especiais, espaços e transforma em minúsculo)
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
for (let i = 0; i < listaCategoria.length; i++) {
  let element = listaCategoria[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox"  id="' +
        element.replace(" ", "_") +
        '" value="categoria-' +
        i +
        '">' +
        '<label for="' +
        element.replace(" ", "_") +
        '" value="categoria-text">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#categoriaItem").append(check);
  }
}

// Cria a lista de opções de Produtos

listaProdutos = [
  "Fotos de qualidade",
  "Bons títulos dos produtos",
  "Boas descrições dos produtos",
  "SEO dos produtos configurado",
  "Exibe opiniões dos compradores na página da loja",
  "Botão de comprar com destaque na página da loja",
  "Produtos relacionados",
  "Compre junto",
  "Avaliações do produto",
  "Vídeos de uso",
  "Dimensões cadastradas",
  "Cadastro de marca",
  "Cadastro de ncm",
  "Ao menos uma caracteristica",
  "Apresentar preço promocional em alguns produtos",
];

// Popula a lista de produtos no formulário

for (let i = 0; i < listaProdutos.length; i++) {
  let element = listaProdutos[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '"> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#produtoItem").append(check);
  }
}

// Criação Lista itens Banner
listaBanners = [
  "Imagens de qualidade",
  "mínimo de 2 banners",
  "Banners com CTA",
];

// Popula a lista de banners no formulário

for (let i = 0; i < listaBanners.length; i++) {
  let element = listaBanners[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '" > ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#bannerItem").append(check);
  }
}

// Criação Lista itens Pagamento e frete
listaFrete = [
  "Tem uma forma de pagamento transparente configurada",
  "Oferecer parcelamento sem juros",
  "Oferecer desconto para pix/boleto",
  "Oferecer PIX via Pagali",
  "Ter um envio especial para sua cidade de origem motoboy/retirar pessoalmente",
  "Mais de uma opção de frete configurada",
];

// Popula a lista de frete no formulário

for (let i = 0; i < listaFrete.length; i++) {
  let element = listaFrete[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '" "> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#freteItem").append(check);
  }
}

// Criação Lista itens Confiabilidade
listaConfiabilidade = [
  "Informar canais de atendimento",
  "Chat e/ou WhatsApp disponíveis",
  "Página Quem Somos criada",
  "Página Como Comprar criada",
  "Página Políticas de Troca criada",
  "Página Política de Privacidade criada",
  "Aviso de coleta de cookies (LGPD) ativado",
  "Redes Sociais cadastradas",
  "Google avaliações",
  "Certificado de segurança ativo - SSL",
  "Selo google safe browsing",
];

// Popula a lista de Confiabilidade no formulário

for (let i = 0; i < listaConfiabilidade.length; i++) {
  let element = listaConfiabilidade[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '"> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#confiabilidadeItem").append(check);
  }
}

// Criação Lista itens Layout/Tema
listaLayout = [
  "Logo legível",
  "Favicon",
  "Possui um tema",
  "Edição de cores com base na logo",
  "Ofertar desconto na caixa de newsletter",
];

// Popula a lista de Layout/Tema no formulário

for (let i = 0; i < listaLayout.length; i++) {
  let element = listaLayout[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '"> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#layoutItem").append(check);
  }
}

// Criação Lista itens Vendas
listaVendas = [
  "Usa o Google Shopping",
  "Usa o TikTok",
  "Usa a Sacolinha do Instagram",
  "Usa cupons de desconto",
  "Faz campanhas de email marketing",
  "Faz campanhas de Carrinhos Abandonados",
  "Faz promoções de frete",
  "Acompanhamento do negócio",
  "Usa Google Analytics",
  "Campanhas/ divulgação nas redes Instagram, Facebbok e Whatsapp",
];

// Popula a lista de Vendas no formulário

for (let i = 0; i < listaVendas.length; i++) {
  let element = listaVendas[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '"> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#vendasItem").append(check);
  }
}

// Criação Lista itens Aplicativos Indicados
listaApps = [
  "Avaliações do Consumidor",
  "Enviou - E-mail Marketing",
  "Enviou - Recuperador de Carrinho",
  "TrustVox",
  "Melhor Envio",
  "Botão Whatsapp flutuante",
];

// Popula a lista de Aplicativos Indicados no formulário

for (let i = 0; i < listaApps.length; i++) {
  let element = listaApps[i];
  id = element
    ? element
        .replaceAll(" ", "_")
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
    : null;
  if (id) {
    check = $(
      '<p> <input type="checkbox" id="' +
        element.replace(" ", "_") +
        '"> ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
        element +
        "</label>" +
        " </input> </p>"
    );
    $("#appItem").append(check);
  }
}
// Função para calcular o percentual de acordo com a quantidade de TODOS checkbox marcados

$(document).on("change", "input[type=checkbox]", function () {
  total_geral = document.querySelectorAll('input[type="checkbox"]').length;
  total_selecionado = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  percentual = Math.trunc((total_selecionado * 100) / total_geral);

  if (percentual != 0) {
    document.getElementById("percentual").innerHTML = percentual + "%";
  } else {
    document.getElementById("percentual").innerHTML = "0%";
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados de Categorias

$("#divCategoria").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divCategoria").find(":input");
  total_selecionado = $("#divCategoria").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;
  porcenturalCategoria = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalCategoria != 0) {
    $("#valueCategoria").text(porcenturalCategoria + "%");
  } else {
    $("#valueCategoria").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados de Produto

$("#divProdutos").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divProdutos").find(":input");
  total_selecionado = $("#divProdutos").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalProduto = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalProduto != 0) {
    $("#valueProduto").text(porcenturalProduto + "%");
  } else {
    $("#valueProduto").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados de Banners

$("#divBanners").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divBanners").find(":input");
  total_selecionado = $("#divBanners").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalBanner = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalBanner != 0) {
    $("#valueBanner").text(porcenturalBanner + "%");
  } else {
    $("#valueBanner").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados de Pagamentos e Frete

$("#divFrete").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divFrete").find(":input");
  total_selecionado = $("#divFrete").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalFrete = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalFrete != 0) {
    $("#valueFrete").text(porcenturalFrete + "%");
  } else {
    $("#valueFrete").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados Confiabilidade

$("#divConfiabilidade").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divConfiabilidade").find(":input");
  total_selecionado = $("#divConfiabilidade").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalConfiabilidade = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalConfiabilidade != 0) {
    $("#valueConfiabilidade").text(porcenturalConfiabilidade + "%");
  } else {
    $("#valueConfiabilidade").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados Layout/Tema

$("#divLayout").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divLayout").find(":input");
  total_selecionado = $("#divLayout").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalLayout = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalLayout != 0) {
    $("#valueLayout").text(porcenturalLayout + "%");
  } else {
    $("#valueLayout").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados Vendas

$("#divVendas").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divVendas").find(":input");
  total_selecionado = $("#divVendas").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalVendas = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalVendas != 0) {
    $("#valueVendas").text(porcenturalVendas + "%");
  } else {
    $("#valueVendas").text("0 %");
  }
});

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados Apps

$("#divApp").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divApp").find(":input");
  total_selecionado = $("#divApp").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;

  porcenturalApp = Math.trunc(
    (text_total_selecionado * 100) / text_total_geral
  );

  if (porcenturalApp != 0) {
    $("#valueApp").text(porcenturalApp + "%");
  } else {
    $("#valueApp").text("0 %");
  }
});

// Manter Checkbox marcados em localstorage
function setValue() {
  sList = [];
  sCheck = [];
  $("input[type=checkbox]").each(function () {
    sList = "";
    sCheck = "";
    sList = $(this).attr("id");
    sCheck = this.checked ? "1" : "0";
    localStorage.setItem(sList, sCheck);
  });
}

// Função para cada checkbox marcado, salvar em localstorage
$("input[type=checkbox]").click(function () {
  setValue();
});

// Animações
$("#headerCategoria").click(function () {
  $("#categoriaItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});

$("#headerProduto").click(function () {
  $("#produtoItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerBanner").click(function () {
  $("#bannerItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerFrete").click(function () {
  $("#freteItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerConfiabilidade").click(function () {
  $("#confiabilidadeItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerLayout").click(function () {
  $("#layoutItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerVendas").click(function () {
  $("#vendasItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});
$("#headerApp").click(function () {
  $("#appItem").slideToggle();
  $(this).find("i").toggleClass("close").toggleClass("");
});

//Listas iniciar fechadas
$("#categoriaItem").hide();
$("#produtoItem").hide();
$("#bannerItem").hide();
$("#freteItem").hide();
$("#confiabilidadeItem").hide();
$("#layoutItem").hide();
$("#vendasItem").hide();
$("#appItem").hide();
$("#resultado-container").hide();
$("#footer").hide();

// PAGINA DE RESULTADO

// Função para exibir a mensagem de acordo com o percentual
$(document).on("click", "#button", function (e) {
  e.preventDefault();

  // Fazendo a troca de pages
  $("main").slideUp();
  $("#resultado-container").slideDown();
  window.scrollTo(0, 0);

  // Ajustando as msg de acordo com a porcentual
  if (percentual == 0) {
  } else if (percentual <= 25) {
    $("#desempenho-msg").html(
      "Partiu reforma?! É isso mesmo, pare tudo que está fazendo e mãos a obra!\nConfigure direitinho a sua loja e deixe ela nos trinques para receber seus clientes.😁\nSua missão é chegar em 50% de performance na configuração!📝"
    );
  } else if (percentual <= 50) {
    $("#desempenho-msg").html(
      "Que linda! 😍 \nSim, sua loja está em processo de evolução e sabemos que quanto mais completa maior as chances de vender!\nEntão, corra para alcançar 75% de performance na configuração e aproveite as vendas que virão⏳"
    );
  } else if (percentual <= 75) {
    $("#desempenho-msg").html(
      "Uma loja quase perfeita!💙 \n Ainda existe oportunidades de melhoria, mas até aqui você foi muito bem!Bora evoluir ainda mais esse performance de configuração?Depois disso é só aproveitar as vendas🤑"
    );
  } else if (percentual >= 90) {
    $("#desempenho-msg").html(
      "UAU! Sua loja está impecável!🏆Momento de apostar na divulgação e criar campanhas para receber novos visitantes e aumentar suas vendas!🤑"
    );
  }

  // Ajustes porcentagens dos resultados

  // % Geral
  if (typeof percentual == "object") $("#desepenho-number").text("0%");
  else {
    $("#desepenho-number").text(percentual + "%");
  }
  // % Categoria
  if (typeof porcenturalCategoria == "object") $("#total-categoria").text("0%");
  else {
    $("#total-categoria").text(porcenturalCategoria + "%");
  }
  if (typeof porcenturalProduto == "object") $("#total-produto").text("0%");
  else {
    $("#total-produto").text(porcenturalProduto + "%");
  }
  if (typeof porcenturalBanner == "object") $("#total-banner").text("0%");
  else {
    $("#total-banner").text(porcenturalBanner + "%");
  }
  if (typeof porcenturalFrete == "object") $("#total-frete").text("0%");
  else {
    $("#total-frete").text(porcenturalFrete + "%");
  }
  if (typeof porcenturalConfiabilidade == "object")
    $("#total-confiabilidade").text("0%");
  else {
    $("#total-confiabilidade").text(porcenturalConfiabilidade + "%");
  }
  if (typeof porcenturalLayout == "object") $("#total-layout").text("0%");
  else {
    $("#total-layout").text(porcenturalLayout + "%");
  }
  if (typeof porcenturalVendas == "object") $("#total-vendas").text("0%");
  else {
    $("#total-vendas").text(porcenturalVendas + "%");
  }
  if (typeof porcenturalApp == "object") $("#total-app").text("0%");
  else {
    $("#total-app").text(porcenturalApp + "%");
  }

  // IDEIA PARA CRIAR AS CONTENT-ITEM AUTOMATICAMENTE, COLOCAR UM VALUE NA CATEGORIA E FAZER UM EACH NAS DIVS COM ESSE VALUE E PEGAR O TEXT DELAS E REZAR PARA QUE O JS COLOQUE NA ORDEM CORRETA.

  function popCategoria() {
    let labels = document.querySelectorAll("#categoriaItem>p>label");
    let input = document.querySelectorAll("#categoriaItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoCategoria>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popCategoria();

  function popProduto() {
    let labels = document.querySelectorAll("#produtoItem>p>label");
    let input = document.querySelectorAll("#produtoItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoProduto>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popProduto();

  function popBanner() {
    let labels = document.querySelectorAll("#bannerItem>p>label");
    let input = document.querySelectorAll("#bannerItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoBanner>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popBanner();

  function popFrete() {
    let labels = document.querySelectorAll("#freteItem>p>label");
    let input = document.querySelectorAll("#freteItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoFrete>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popFrete();

  function popConfiabilidade() {
    let labels = document.querySelectorAll("#confiabilidadeItem>p>label");
    let input = document.querySelectorAll("#confiabilidadeItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoConfiabilidade>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popConfiabilidade();

  function popLayout() {
    let labels = document.querySelectorAll("#layoutItem>p>label");
    let input = document.querySelectorAll("#layoutItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoLayout>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popLayout();

  function popVendas() {
    let labels = document.querySelectorAll("#vendasItem>p>label");
    let input = document.querySelectorAll("#vendasItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoVendas>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popVendas();

  function popApp() {
    let labels = document.querySelectorAll("#appItem>p>label");
    let input = document.querySelectorAll("#appItem>p>input");
    let arrLabels = [];
    let arrinput = [];
    labels.forEach((el) => arrLabels.push(el.innerHTML));
    input.forEach((el) => arrinput.push(el.checked));

    var resultItem = document.querySelectorAll(
      "#resultadoApp>.content>.content-item"
    );

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrLabels[i];
      check = $("<p class=>" + element + "</p>");
      $(resultItem[i]).prepend(check);
    }

    for (let i = 0; i < resultItem.length; i++) {
      let element = arrinput[i];
      let error = "fa fa-solid fa-circle-xmark";
      if (element == false) {
        check = $("<b class=error></b>");
      } else {
        check = $("<b class=sucess></b>");
      }
      $(resultItem[i]).prepend(check);
    }
  }
  popApp();
});
