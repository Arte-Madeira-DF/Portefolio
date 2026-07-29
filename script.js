document.addEventListener("DOMContentLoaded", () => {

  const btnTrabalhos = document.getElementById("btnTrabalhos");
  const subBotoes = document.getElementById("subBotoes");
  const sectionCapa = document.getElementById("capa");
  const sectionSite = document.getElementById("site");
  const btnVoltarCapa = document.getElementById("voltarCapa");

  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");


  // ==============================
  // MENU TRABALHOS
  // ==============================

  if (btnTrabalhos) {
    btnTrabalhos.addEventListener("click", () => {
      subBotoes.classList.toggle("hidden");
    });
  }


  // ==============================
  // ENTRAR NAS CATEGORIAS
  // ==============================

  document.querySelectorAll(".btn-sub").forEach(btn => {

    btn.addEventListener("click", () => {

      const target = btn.getAttribute("data-target");

      sectionCapa.classList.add("hidden");
      sectionSite.classList.remove("hidden");

      showTab(target);

    });

  });


  // ==============================
  // VOLTAR PARA A CAPA
  // ==============================

  if (btnVoltarCapa) {

    btnVoltarCapa.addEventListener("click", () => {

      sectionSite.classList.add("hidden");
      sectionCapa.classList.remove("hidden");
      subBotoes.classList.add("hidden");

    });

  }


  // ==============================
  // TABS
  // ==============================

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      const target = tab.getAttribute("data-tab");

      showTab(target);

    });

  });


  function showTab(tabId) {

    tabs.forEach(tab => {

      tab.classList.toggle(
        "active",
        tab.getAttribute("data-tab") === tabId
      );

    });


    tabContents.forEach(content => {

      content.classList.toggle(
        "active",
        content.id === tabId
      );

    });

  }


  // =====================================================
  // QUADROS
  // =====================================================

  const quadrosData = [

    { 
      src: "quadro1.jpg",
      titulo: "Lar Sobre Rodas",
      ano: "2019",
      autor: "Diogo Fernandes",
      numero: "01",
      comp: "17cm",
      larg: "13cm",
      esp: "2cm",
      desc: "Placa em madeira com gravação manual, representando de forma esquemática uma habitação com cobertura inclinada e chaminé, acompanhada por um veículo ligeiro de transporte de mercadorias."
    },

    { 
      src: "quadro2.jpg",
      titulo: "A Flor que Ganha Vida",
      ano: "2019",
      autor: "Diogo Fernandes",
      numero: "02",
      comp: "15.5cm",
      larg: "13cm",
      esp: "1cm",
      desc: "Placa em madeira com gravação manual, representando de forma esquemática uma flor com características de um ser humano."
    }

    // Mantém aqui os restantes quadros
  ];


  // =====================================================
  // ÍMANES
  // =====================================================

  const imansData = [

    {
      src: "imane1.jpeg",
      titulo: "Marcos N2",
      ano: "2024",
      autor: "Diogo Fernandes",
      desc: "Exemplares de ímanes representativos da N2 ao longo de Portugal. Marcos disponíveis: Vila Nova do Ceira, Góis e Poiares."
    },

    {
      src: "imane 2.jpeg",
      titulo: "KMT",
      ano: "2025",
      autor: "Diogo Fernandes",
      desc: "Ímanes com o logo da marca KMT."
    },

    {
      src: "iamn3.jpeg",
      titulo: "Renault",
      ano: "2025",
      autor: "Diogo Fernandes",
      desc: "Ímanes com o logo da marca Renault."
    },

    {
      src: "imane4.jpeg",
      titulo: "Dacia",
      ano: "2025",
      autor: "Diogo Fernandes",
      desc: "Ímanes com o logo da marca Dacia."
    }

  ];


  // =====================================================
  // COLEÇÕES
  // =====================================================
  // Aqui vais colocar as peças que pertencem às coleções.
  // Podes adicionar quantas quiseres.
  // =====================================================

  const colecoesData = [

    {
      src: "colecao1.jpeg",
      titulo: "Coleção N2",
      ano: "2024",
      autor: "Diogo Fernandes",
      desc: "Coleção de peças em madeira inspiradas na Estrada Nacional 2 e nas localidades atravessadas pelo seu percurso."
    },

    {
      src: "colecao2.jpeg",
      titulo: "Coleção Automóveis",
      ano: "2025",
      autor: "Diogo Fernandes",
      desc: "Coleção dedicada ao mundo automóvel, com representações artesanais realizadas em madeira."
    },

    {
      src: "colecao3.jpeg",
      titulo: "Coleção Natal",
      ano: "2025",
      autor: "Diogo Fernandes",
      desc: "Coleção de trabalhos artesanais em madeira inspirados na época natalícia."
    },

    {
      src: "colecao4.jpeg",
      titulo: "Coleção Portugal",
      ano: "2026",
      autor: "Diogo Fernandes",
      desc: "Coleção inspirada em Portugal, na sua cultura, localidades, património e símbolos."
    }

  ];


  // =====================================================
  // FUNÇÃO PARA CRIAR AS GALERIAS
  // =====================================================

  function renderGaleria(data, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";


    data.forEach(item => {

      const img = document.createElement("img");

      img.src = item.src;
      img.alt = item.titulo;

      img.addEventListener("click", () => {

        openModal(item);

      });

      container.appendChild(img);

    });

  }


  // =====================================================
  // CARREGAR AS 3 CATEGORIAS
  // =====================================================

  renderGaleria(quadrosData, "listaQuadros");

  renderGaleria(imansData, "listaImans");

  // NOVA CATEGORIA
  renderGaleria(colecoesData, "listaColecoes");


  // =====================================================
  // MODAL
  // =====================================================

  const modal = document.getElementById("modal");

  const modalImg = document.getElementById("modalImg");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalAno = document.getElementById("modalAno");
  const modalAutor = document.getElementById("modalAutor");
  const modalNumero = document.getElementById("modalNumero");
  const modalComp = document.getElementById("modalComp");
  const modalLarg = document.getElementById("modalLarg");
  const modalEsp = document.getElementById("modalEsp");
  const modalDesc = document.getElementById("modalDesc");

  const closeModal = document.querySelector(".close");


  function openModal(item) {

    modalImg.src = item.src;

    modalTitulo.textContent = item.titulo;
    modalAno.textContent = item.ano;
    modalAutor.textContent = item.autor;

    modalNumero.textContent = item.numero || "—";
    modalComp.textContent = item.comp || "—";
    modalLarg.textContent = item.larg || "—";
    modalEsp.textContent = item.esp || "—";

    modalDesc.textContent = item.desc;

    modal.classList.remove("hidden");

  }


  // FECHAR MODAL

  if (closeModal) {

    closeModal.addEventListener("click", () => {

      modal.classList.add("hidden");

    });

  }


  // FECHAR AO CLICAR FORA

  window.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.classList.add("hidden");

    }

  });

});
