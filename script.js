document.addEventListener("DOMContentLoaded", () => {
  const btnTrabalhos = document.getElementById("btnTrabalhos");
  const subBotoes = document.getElementById("subBotoes");
  const sectionCapa = document.getElementById("capa");
  const sectionSite = document.getElementById("site");
  const btnVoltarCapa = document.getElementById("voltarCapa");
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // Mostrar sub-botões ao clicar em Trabalhos
  btnTrabalhos.addEventListener("click", () => {
    subBotoes.classList.toggle("hidden");
  });

  // Entrar no site e mostrar a aba correspondente
  document.querySelectorAll(".btn-sub").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      sectionCapa.classList.add("hidden");
      sectionSite.classList.remove("hidden");
      showTab(target);
    });
  });

  // Voltar para a capa
  btnVoltarCapa.addEventListener("click", () => {
    sectionSite.classList.add("hidden");
    sectionCapa.classList.remove("hidden");
    subBotoes.classList.add("hidden");
  });

  // Alternar entre abas
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");
      showTab(target);
    });
  });

  function showTab(tabId) {
    tabs.forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-tab") === tabId);
    });
    tabContents.forEach(content => {
      content.classList.toggle("active", content.id === tabId);
    });
  }

  // DADOS DOS QUADROS
  const quadrosData = [
    { 
      src: "quadro1.jpg", 
      images: ["quadro2.jpg"],
      titulo: "Lar Sobre Rodas", 
      ano: "2019", 
      autor: "Diogo Fernandes", 
      numero: "01", 
      comp: "17cm", larg: "13cm", esp: "2cm", 
      desc: "Placa em madeira com gravação manual, representando de forma esquemática uma habitação com cobertura inclinada e chaminé..."
    },
    { 
      src: "quadro 31.jpeg", 
      images: ["quadro 31.jpeg"], 
      titulo: "Memórias da Estação de Serpins", 
      ano: "2026", 
      autor: "Diogo Fernandes", 
      numero: "31", 
      comp: "25.5cm", larg: "37cm", esp: "3cm", 
      desc: "Placa em madeira com gravação manual da antiga Estação de Serpins..." 
    },
    { 
      src: "quadro32.jpeg", 
      images: ["quadro32.jpeg"], 
      titulo: "Sabor Tradicional", 
      ano: "2026", 
      autor: "Diogo Fernandes", 
      numero: "32", 
      comp: "8cm", larg: "12.5cm", esp: "1.5cm", 
      desc: "Placa em madeira com gravação manual de um croissant..." 
    }
  ];

  // DADOS DOS ÍMANES
  const imansData = [
    { 
      src: "imane 2.jpeg", 
      images: ["imane 2.jpeg"], 
      titulo: "KMT", 
      ano: "2025", 
      autor: "Diogo Fernandes", 
      numero: "---",
      comp: "---", larg: "---", esp: "---",
      desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca KMT." 
    },
    { 
      src: "iamn3.jpeg", 
      images: ["iamn3.jpeg"], 
      titulo: "Renault", 
      ano: "2025", 
      autor: "Diogo Fernandes", 
      numero: "---",
      comp: "---", larg: "---", esp: "---",
      desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca Renault." 
    }
  ];

  // DADOS DAS COLEÇÕES
  const colecoesData = [
    { 
      src: "imane1.jpeg", 
      images: ["imane1.jpeg", "imane 2.jpeg", "iamn3.jpeg"], 
      titulo: "Coleção N2", 
      ano: "2025", 
      autor: "Diogo Fernandes", 
      isColecao: true,
      tipoPeca: "Íman",
      itens: "Vila Nova do Ceira, Góis, Poiares, Lousã, Santa Comba Dão, ..." 
    },
    { 
      src: "colecao2.jpg", 
      images: ["colecao2.jpg", "quadro1.jpg"], 
      titulo: "Coleção de Bandas Portuguesas", 
      ano: "2026", 
      autor: "Diogo Fernandes", 
      isColecao: true,
      tipoPeca: "Quadro",
      itens: "Xutos & Pontapés, Taxi, UHF, GNR, Quinta do Bill, ..." 
    }
  ];

  function renderGaleria(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach(item => {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.titulo;
      img.addEventListener("click", () => openModal(item));
      container.appendChild(img);
    });
  }

  renderGaleria(quadrosData, "listaQuadros");
  renderGaleria(imansData, "listaImans");
  renderGaleria(colecoesData, "listaColecoes");

  // LÓGICA DO MODAL
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalAno = document.getElementById("modalAno");
  const modalAutor = document.getElementById("modalAutor");
  
  // Elementos de Trabalho Normal
  const infoTrabalho = document.getElementById("infoTrabalho");
  const modalNumero = document.getElementById("modalNumero");
  const modalComp = document.getElementById("modalComp");
  const modalLarg = document.getElementById("modalLarg");
  const modalEsp = document.getElementById("modalEsp");
  const modalDesc = document.getElementById("modalDesc");

  // Elementos de Coleção
  const infoColecao = document.getElementById("infoColecao");
  const colTipo = document.getElementById("colTipo");
  const colItens = document.getElementById("colItens");
  
  const prevBtn = document.getElementById("prevImg");
  const nextBtn = document.getElementById("nextImg");
  const thumbContainer = document.getElementById("thumbContainer");

  let currentImages = [];
  let currentIndex = 0;

  function openModal(item) {
    currentImages = (item.images && item.images.length > 0) ? item.images : [item.src];
    currentIndex = 0;
    updateModalImage();

    modalTitulo.textContent = item.titulo;
    modalAno.textContent = item.ano;
    modalAutor.textContent = item.autor;

    // Miniaturas
    thumbContainer.innerHTML = "";
    if (currentImages.length > 1) {
      currentImages.forEach((imgSrc, index) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.classList.add("thumb");
        if (index === 0) thumb.classList.add("active");
        thumb.onclick = () => {
          currentIndex = index;
          updateModalImage();
        };
        thumbContainer.appendChild(thumb);
      });
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      prevBtn.classList.add("hidden");
      nextBtn.classList.add("hidden");
    }

    // ALTERNAR ENTRE TRABALHO E COLEÇÃO
    if (item.isColecao) {
      infoTrabalho.classList.add("hidden");
      infoColecao.classList.remove("hidden");
      
      colTipo.textContent = item.tipoPeca;
      colItens.textContent = item.itens;
    } else {
      infoColecao.classList.add("hidden");
      infoTrabalho.classList.remove("hidden");
      
      modalNumero.textContent = item.numero || "---";
      modalComp.textContent = item.comp || "---";
      modalLarg.textContent = item.larg || "---";
      modalEsp.textContent = item.esp || "---";
      modalDesc.textContent = item.desc || "";
    }

    modal.classList.remove("hidden");
  }

  function updateModalImage() {
    modalImg.src = currentImages[currentIndex];
    const thumbs = document.querySelectorAll(".thumb");
    thumbs.forEach((t, i) => {
      t.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
  };

  nextBtn.onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModalImage();
  };

  document.querySelector(".close").addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
