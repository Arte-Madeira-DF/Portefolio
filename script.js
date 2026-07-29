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

  // Exemplo de dados para a galeria (Pode ser expandido)
  const quadrosData = [
    { src: "quadro1.jpg", titulo: "Lar Sobre Rodas", ano: "2019", autor: "Diogo Fernandes", numero: "01", comp: "17cm", larg: "13cm", esp: "2cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática uma habitação com cobertura inclinada e chaminé, acompanhada por um veículo ligeiro de transporte de mercadorias. O conjunto é enquadrado por elementos decorativos laterais de traço simples. Trata-se do primeiro exemplar produzido, evidenciando um estilo inicial, com linhas rudimentares e caráter artesanal."},
    { src: "quadro2.jpg", titulo: "A Flor que Ganha Vida", ano: "2019", autor: "Diogo Fernandes", numero: "02", comp: "15.5cm", larg: "13cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática uma flor com características de um ser humano. Trata-se do segundo exemplar produzido, evidenciando um estilo inicial, com linhas rudimentares e caráter artesanal." },
    { src: "quadro3.jpg", titulo: "Sonhos ao Vento", ano: "2019", autor: "Diogo Fernandes", numero: "03", comp: "15.5cm", larg: "13cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática um menino a agarrar num balão que representa o seu sonho. Trata-se do terceiro exemplar produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro4.jpg", titulo: "Missão em Altura", ano: "2020", autor: "Diogo Fernandes", numero: "04", comp: "13cm", larg: "19.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual de um camião de trabalhos em altura, com representação técnica dos principais elementos do equipamento. Trata-se do quarto projeto produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro5.jpg", titulo: "Vila Nova do Ceira Terra Fixe", ano: "2020", autor: "Diogo Fernandes", numero: "05", comp: "13cm", larg: "19.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual alusiva a Vila Nova do Ceira, com composição textual e simbólica associada à localidade. Estilo simples e direto. Trata-se do quinto projeto produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro6.jpg", titulo: "Força da Construção", ano: "2020", autor: "Diogo Fernandes", numero: "06", comp: "13cm", larg: "18.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática uma escavadora, com representação simplificada dos principais componentes mecânicos. Trata-se do sexto exemplar produzido, evidenciando um estilo inicial, com linhas um pouco mais preciosas e caráter artesanal." },
    { src: "quadro7.jpg", titulo: "Vida no Campo", ano: "2020", autor: "Diogo Fernandes", numero: "07", comp: "13cm", larg: "20cm", esp: "1cm", desc: "Placa em madeira com gravação manual, representando de forma esquemática um trator agrícola com reboque, representado em estilo técnico com detalhe estrutural básico. " },
    { src: "quadro8.jpg", titulo: "Igreja Matriz de Vila Nova do Ceira", ano: "2020", autor: "Diogo Fernandes", numero: "08", comp: "33.5cm", larg: "17.5cm", esp: "1.5cm", desc: "Placa em madeira com gravação manual, representando a Igreja Matriz de Vila Nova do Ceira, com representação arquitetónica simplificada e foco nos elementos estruturais principais. " },
    { src: "quadro9.jpg", titulo: "Segredos do Fundo do Mar", ano: "2020", autor: "Diogo Fernandes", numero: "09", comp: "15.5cm", larg: "25cm", esp: "2cm", desc: "Placa em madeira com gravação manual, representando do fundo oceânico, com elementos marinhos estilizados e composição fluida. Traço contínuo e simplificado." },
    { src: "quadro10.jpg", titulo: "Força e União", ano: "2021", autor: "Diogo Fernandes", numero: "10", comp: "8.5cm", larg: "24cm", esp: "2cm", desc: "Placa em madeira com gravação manual, representando um grupo de pessoas diabéticas, com representação simbólica e composição equilibrada. Execução artesanal." },
    { src: "quadr11.jpg", titulo: "Rua da Aldeia", ano: "2021", autor: "Diogo Fernandes", numero: "11", comp: "13,5cm", larg: "21,5cm", esp: "2cm", desc: "Placa em madeira com gravação manual, representando uma rua com várias habitações, representadas de forma alinhada e simplificada. Composição urbana com perspetiva linear." },
    { src: "quadro12.jpg", titulo: "Horizonte de Verão", ano: "2022", autor: "Diogo Fernandes", numero: "12", comp: "37.5cm", larg: "44cm", esp: "2cm", desc: "Placa em madeira com gravação manual representando uma praia, com elementos naturais simplificados como linha de costa e enquadramento paisagístico. Estilo técnico e direto.." },
    { src: "quadro13.jpg", titulo: "Cerro da nossa senhora da Candosa", ano: "2022", autor: "Diogo Fernandes", numero: "13", comp: "44.5cm", larg: "45.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual do Cerro de Nossa Senhora da Candosa, com representação paisagística simplificada do local. Traço contínuo e execução artesanal." },
    { src: "quadro14.jpg", titulo: "União pela Diabetes", ano: "2022", autor: "Diogo Fernandes", numero: "14", comp: "9cm", larg: "24cm", esp: "2cm", desc: "Placa em madeira com gravação manual de grupo de pessoas diabéticas, com representação simbólica associada à condição. Composição simplificada de caráter informativo." },
    { src: "quadro15.jpg", titulo: "Laços de Mãe", ano: "2022", autor: "Diogo Fernandes", numero: "15", comp: "25cm", larg: "15.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual representando o amor maternal, simbolizando a ligação entre mãe e filhos através de elementos figurativos estilizados. Composição emotiva com traço simples." },
    { src: "quadro16.jpg", titulo: "Portugal em Madeira", ano: "2022", autor: "Diogo Fernandes", numero: "16", comp: "45cm", larg: "24.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual do mapa de Portugal, acompanhado pela bandeira nacional. Composição simbólica com traço simplificado e execução artesanal." },
    { src: "quadro17.jpg", titulo: "Paixão Benfiquista", ano: "2022", autor: "Diogo Fernandes", numero: "17", comp: "29cm", larg: "27cm", esp: "2cm", desc: "Placa em madeira com gravação manual alusiva ao Sport Lisboa e Benfica, com elementos simbólicos associados ao clube. Representação simplificada e execução artesanal." },
    { src: "quadro18.jpg", titulo: "Traços natalicios", ano: "2022", autor: "Diogo Fernandes", numero: "18", comp: "19cm", larg: "13.5cm", esp: "1.5cm", desc: "Placa em madeira com gravação manual de elemento figurativo com enquadramento decorativo lateral. Traço contínuo e estilo artesanal." },
    { src: "quadro19.jpg", titulo: "Traços do natal", ano: "2022", autor: "Diogo Fernandes", numero: "19", comp: "19cm", larg: "13.5cm", esp: "1.5cm", desc: "Placa em madeira com gravação manual de composição simbólica, com elemento central destacado e enquadramento decorativo simples. Linhas contínuas e execução manual." },
    { src: "quadro20.jpg", titulo: "Capitão de Abril", ano: "2023", autor: "Diogo Fernandes", numero: "20", comp: "33.5cm", larg: "17.5cm", esp: "1.5cm", desc: "Placa em madeira com gravação manual alusiva a Salgueiro Maia, com representação simbólica associada à figura histórica. Composição de traço simples e execução artesanal." },
    { src: "quadro21.jpg", titulo: "Linha Desportiva", ano: "2023", autor: "Diogo Fernandes", numero: "21", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de automóvel desportivo, evidenciando linhas dinâmicas e perfil aerodinâmico. Traço uniforme e caráter artesanal." },
    { src: "quadro22.jpg", titulo: "Clássico Intemporal", ano: "2023", autor: "Diogo Fernandes", numero: "22", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de automóvel clássico, com destaque para a silhueta vintage e elementos estruturais simplificados. Composição limpa e direta." },
    { src: "quadro23.jpg", titulo: "Essência Urbana", ano: "2023", autor: "Diogo Fernandes", numero: "23", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de automóvel utilitário, com estrutura mais robusta e proporções equilibradas. Estilo esquemático e execução artesanal." },
    { src: "quadro24.jpg", titulo: "Potência Desportiva", ano: "2023", autor: "Diogo Fernandes", numero: "24", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de automóvel desportivo, com perfil baixo e linhas aerodinâmicas evidenciadas. Representação técnica simplificada com traço contínuo." },
    { src: "quadro25.jpg", titulo: "Vintage Sobre Rodas", ano: "2023", autor: "Diogo Fernandes", numero: "25", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de automóvel clássico, representado em vista lateral com linhas arredondadas características de modelos antigos. Detalhes simplificados e execução de caráter artesanal." },
    { src: "quadro26.jpg", titulo: "Todo-o-Terreno Clássico", ano: "2023", autor: "Diogo Fernandes", numero: "26", comp: "15cm", larg: "19.5cm", esp: "2cm", desc: "Placa em madeira com gravação manual de veículo todo-o-terreno (tipo jipe), representado em vista lateral com detalhe estrutural básico. Inclui identificação textual do modelo. Traço de caráter artesanal." },
    { src: "quadro27.jpg", titulo: "Caminhos de Ferro", ano: "2024", autor: "Diogo Fernandes", numero: "27", comp: "48cm", larg: "4052cm", esp: "2cm", desc: "Placa em madeira com gravação manual de via férrea em perspetiva linear, incluindo postes de catenária e vedação lateral. Composição com profundidade visual e elementos paisagísticos simplificados." },
    { src: "quadro28.jpg", titulo: "O Primeiro Vapor em Portugal", ano: "2024", autor: "Diogo Fernandes", numero: "28", comp: "46cm", larg: "21cm", esp: "1cm", desc: "Placa em madeira com gravação manual representando locomotiva a vapor em vista frontal, acompanhada de elemento textual alusivo à data de chegada a Portugal. Detalhes técnicos simplificados, com foco na estrutura e componentes principais." },
    { src: "quadro29.jpg", titulo: "Figura Animada em Madeira", ano: "2025", autor: "Diogo Fernandes", numero: "29", comp: "12cm", larg: "5.5cm", esp: "1cm", desc: "Placa em madeira com gravação manual de personagem animada, representada de forma simplificada com óculos circulares e vestuário técnico. Traço contínuo e uniforme, de caráter artesanal." },
    { src: "quadro30.jpg", titulo: "Natal em madeira", ano: "2025", autor: "Diogo Fernandes", numero: "30", comp: "14.5cm", larg: "7cm", esp: "1.5cm", desc: "Placa em madeira com gravação manual de vela decorativa com chama estilizada, assente sobre elementos vegetais. Composição de traço simples e simétrico, evidenciando execução artesanal." },
    { src: "quadro 31.jpeg", titulo: "Memórias da Estação de Serpins", ano: "2026", autor: "Diogo Fernandes", numero: "31", comp: "cm", larg: "cm", esp: "cm", desc: "Placa em madeira com gravação manual da antiga Estação de Serpins, representando duas composições ferroviárias junto ao edifício da estação. A composição destaca os elementos arquitetónicos e ferroviários característicos do local, com traço técnico simplificado e execução artesanal." },
    { src: "quadro32.jpeg", titulo: "Sabor Tradicional", ano: "2026", autor: "Diogo Fernandes", numero: "32", comp: "cm", larg: "cm", esp: "cm", desc: "Placa em madeira com gravação manual de um croissant, representado com linhas suaves e detalhe simplificado das camadas características da pastelaria. Composição minimalista de caráter artesanal." },
    // Adicione mais quadros aqui
  ];

  const imansData = [
    { src: "imane1.jpeg", titulo: "Marcos N2", ano: "2024", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans representativos sobre a N2 ao longo de Portugal.  Marcos disponíveis: Vila nova do ceira; Gois; Poiares;" },
    { src: "imane 2.jpeg", titulo: "KMT", ano: "2025", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca KMT." },
    { src: "iamn3.jpeg", titulo: "Renault", ano: "2025", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca Renault." },
    { src: "imane4.jpeg", titulo: "Dacia", ano: "2025", autor: "Diogo Fernandes",desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca Dacia." },
    // Adicione mais ímanes aqui
  ];

const colecoesData = [
    { src: "imane1.jpeg", titulo: "Marcos N2", ano: "2024", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans representativos sobre a N2 ao longo de Portugal.  Marcos disponíveis: Vila nova do ceira; Gois; Poiares;" },
    { src: "imane 2.jpeg", titulo: "KMT", ano: "2025", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca KMT." },
    { src: "iamn3.jpeg", titulo: "Renault", ano: "2025", autor: "Diogo Fernandes", desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca Renault." },
    { src: "imane4.jpeg", titulo: "Dacia", ano: "2025", autor: "Diogo Fernandes",desc: "Na imagem ao lado está fotografado uns exemplares de Ímans com o logo da marca Dacia." },
    // Adicione mais ímanes aqui
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

  // Modal
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
    modalNumero.textContent = item.numero;
    modalComp.textContent = item.comp;
    modalLarg.textContent = item.larg;
    modalEsp.textContent = item.esp;
    modalDesc.textContent = item.desc;
    modal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
