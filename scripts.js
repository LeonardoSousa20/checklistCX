// Cria a lista de opções de categorias

listaCategoria = [
  "Mapa de categorias está bem estruturado",
  "Usa palavras-chave nos nomes das categorias",
  "Leva em consideração regionalismos e particularidades",
  "Categorias organizadas de acordo com a relevância dos produtos",
  "SEO das categorias foi configurado",
];

// Popula a lista de categorias no formulário (remove caracteres especiais, espaços e transforma em minúsculo)

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
        '" > ' +
        '<label for="' +
        element.replace(" ", "_") +
        '">' +
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

// Função para calcular o percentual de acordo com a quantidade de checkbox marcados de Produtos

$("#divCategoria").on("change", "input[type=checkbox]", function () {
  total_geral = $("#divCategoria").find(":input");
  total_selecionado = $("#divCategoria").find(":input:checked");
  text_total_geral = total_geral.length;
  text_total_selecionado = total_selecionado.length;
  porcenturalCategoria = (text_total_selecionado * 100) / text_total_geral;

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

// Função para exibir a mensagem de acordo com o percentual
$(document).on("click", "#button", function (e) {
  e.preventDefault();
  if (percentual == 0) {
    alert("Selecione ao menos uma opção");
  } else if (percentual <= 25) {
    alert(
      "Partiu reforma?! É isso mesmo, pare tudo que está fazendo e mãos a obra!"
    );
  } else if (percentual <= 50) {
    alert(
      "Que linda! 😍 Sim, sua loja está em processo de evolução e sabemos que quanto mais completa maior as chances de vender!"
    );
  } else if (percentual <= 75) {
    alert("Uma loja quase perfeita!💙");
  } else if (percentual >= 90) {
    alert("UAU! Sua loja está impecável! 🏆");
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
    sCheck = this.checked ? "true" : "false";
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
