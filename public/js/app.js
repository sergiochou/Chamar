
// ============================================================
// CONFIGURAÇÃO DO FIREBASE
// Substitua com suas credenciais do Firebase Realtime Database
// ============================================================
const FIREBASE_URL = "https://agapechamar-default-rtdb.firebaseio.com";
// ============================================================

const ROOM_DATA = [
  {
    nome: "Sala 15 (Amarelo)",
    cor: "#eab308",
    nomes: [
      "Joao Gabriel de Castro Leal",
      "Romero Alencar De Mendonça Canuto Filho",
      "Marcio de Oliveira Soares Filho",
      "Italo Barboza de lima",
      "Felipe macedo de almeida",
      "Renato Henrique Feitoza de Carvalho",
      "Paulo Victor Cavalcanti Vieira de Melo",
      "Bruno Freitas Pragana Filho",
      "Matheus Nunes Lessa Bronzeado",
      "Rodrigo Lyra Avila Guedes",
      "Luciano De Barros correia ferraz",
      "Luis Henrique Loyo Machado",
      "Carlos Alberto Gomes de Brito Filho",
      "Alberto Luis Belem Dias",
      "Arthur de Araujo Aguiar",
      "Leonardo Aragão Ribeiro",
      "henrique chaves Inojosa coutinho",
      "Pedro de Melo Souza Leão",
      "Pedro Henrique Neves de Lima",
      "João Pedro de Almeida Gomes Menezes"
    ]
  },
  {
    nome: "Sala 16 (Azul)",
    cor: "#3b82f6",
    nomes: [
      "Lucas Murta de Oliveira",
      "João Vitor Cavalcanti de Barros",
      "Pablo Osório de Holanda",
      "Pedro Henrique Rodrigues de Amorim",
      "José Fagundes de Araújo Neto",
      "Antonio José Gonçalves Maia",
      "Mauro Marcelo Queiroz de Arruda Junior",
      "Christian da Silva Soares",
      "Lucas gouveia de miranda",
      "Marcelo Friedheim Cordeiro",
      "Gustavo Constantino Barros de Lucena",
      "Eduardo Gouveia de Andrade",
      "Rafael de Holanda Rocha amorim",
      "André Carvalho Baltar Sales",
      "Fernando Francisco de Arruda Neto",
      "Davi Lubambo de Lima Rocha",
      "João Guilherme Costa Azevedo",
      "Paulo Gustavo Romão Dias de Oliveira",
      "Luca Longman de Aquino",
      "Davi Paes Barreto Glasner"
    ]
  },
  {
    nome: "Sala 17 (Cinza)",
    cor: "#6b7280",
    nomes: [
      "CAIO NEVES VIEIRA BATISTA",
      "Henrique Pessoa Gama",
      "Arthur Dantas da Silva Coutinho",
      "Eduardo Pinto Gusmão Paes",
      "Luiz Eduardo Dourado Da Costa Albuquerque",
      "Eduardo Henning de Hollanda Cavalcanti",
      "Paulo Henrique de Valhery Jolkesky Filho",
      "Antônio de Souza Leão Soares Batista",
      "Heitor Camelo Leite",
      "Eduardo Porto carreiro Dornellas Camara",
      "Luís Oscar Machado Gomes",
      "João Pedro de Farias Guerra",
      "João Gabriel Barros Ribeiro",
      "Lucas Siqueira de Farias",
      "Otávio Augusto pedrosa Meneses",
      "Rafael de Vasconcelos Santos Torres de Medeiros",
      "Bruno Messias Moreira Cavalcante",
      "Túlio Prysthon de Mello Amorim",
      "José Eduardo Oliveira",
      "João Guilherme Duarte Medeiros"
    ]
  },
  {
    nome: "Sala 39 (Rosa)",
    cor: "#ec4899",
    nomes: [
      "Gabriella dos Santos",
      "Giovanna Marturelli Toscano Rebouças",
      "Hilda Hollanda Rego Barros Normandia Monteiro",
      "Isabela Moreira Figueirôa",
      "Júlia Luna Calado Borba",
      "Juliana Rego Monteiro Ferraz",
      "Larissa Falcone Lócio",
      "Laura Pessoa Albuquerque",
      "Letícia Maria Cavalcanti Van",
      "Lorena Lopes Monteiro Pereira",
      "Luisa Arruda Veras Coelho Pereira",
      "Luisa Martins Pereira de Araujo",
      "Manuela moreira Veloso",
      "Beatriz Santos de Aguiar Aragão",
      "Kamila Vitória Santana Marques",
      "Maria Clara Galvão Domingos",
      "Marcela da fonte Porto Carreiro de Paula",
      "Luana Ferreira Carneiro Leão",
      "Julia galvao Cavalcante Vasconcelos"
    ]
  },
  {
    nome: "Sala 40 (Laranja)",
    cor: "#f97316",
    nomes: [
      "Maria Antônia B. Da Soledade",
      "Maria Cecilia Delgado Correia de Amorim e Souza",
      "Maria clara londres lopes durães",
      "Maria Fernanda de Almeida Benevides",
      "Maria Fernanda Nunes Coutinho Da Silva",
      "Maria Júlia Dantas Moreira Pontes",
      "Maria Luiza Friedheim Teixeira",
      "Marília Fernandes Albuquerque",
      "Marina Cabral Moreno",
      "Marina Mesquita Pedrosa Ferreira",
      "Milena Gurgel Lopes de Farias",
      "Nicole Castro de Lucena e Melo",
      "Cecilia Neves de Andrade",
      "Sofia Costa Lima Campelo",
      "Sofia Cordeiro Harten",
      "Maria Luísa Vidal Pires Peixoto",
      "Mariana da Silva Rodrigues Araújo",
      "Bianca Sousa Ribeiro de Oliveira",
      "Natália Vila Nova de Oliveira Santiago",
      "Maria Eduarda Gallindo Carrazzoni Firmo"
    ]
  },
  {
    nome: "Sala 41 (Roxo)",
    cor: "#a855f7",
    nomes: [
      "Ana Beatriz Marques Veras Ferraz",
      "Analis César de Albuquerque Ângelo",
      "Beatriz Cabral de Sá Eiras",
      "Beatriz Dourado Cruz",
      "Camila Pedrosa Monteiro Galindo",
      "Catarina Sales Neves Galvão",
      "Clara Almeida Maia Pimentel",
      "Clara Nogueira Valle Vasconcelos",
      "Dora Monteiro",
      "Elis Batista Jansen de Sá Cruz",
      "Gabriela Bispo Lócio",
      "Gabriela Morais de Araujo",
      "Gabriela Trigueiro da Cunha",
      "Ana Gabriella de Carvalho Araújo Pereira",
      "Joana de Carvalho Nunes",
      "cecilia cordeiro harten",
      "Maria Fernanda Menezes de Andrade Lima",
      "Beatriz Oliveira Fróes",
      "Isabele Maria Ribeiro Cardoso Tavares",
      "Julia Ramos Rolim de Araujo Bastos"
    ]
  }
];

function formatName(name) {
  const exceptions = ["de", "da", "do", "dos", "das", "e"];
  return name.trim().toLowerCase().split(/\s+/).map((word, i) => {
    if (exceptions.includes(word) && i !== 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

let rawParticipantes = [];
ROOM_DATA.forEach(room => {
  room.nomes.forEach(nome => {
    rawParticipantes.push({ nome: formatName(nome), sala: room.nome, cor: room.cor });
  });
});

rawParticipantes.sort((a, b) => a.nome.localeCompare(b.nome));

const NOMES = rawParticipantes.map(p => p.nome);

const TEAM_MAP = {
  "Joao Gabriel de Castro Leal": "Boa mãe",
  "Romero Alencar de Mendonça Canuto Filho": "Estrela",
  "Marcio de Oliveira Soares Filho": "Cruz",
  "Italo Barboza de Lima": "Discipulos",
  "Felipe Macedo de Almeida": "Três violetas",
  "Renato Henrique Feitoza de Carvalho": "Testemunhas",
  "Paulo Victor Cavalcanti Vieira de Melo": "Boa mãe",
  "Bruno Freitas Pragana Filho": "Cruz",
  "Matheus Nunes Lessa Bronzeado": "Estrela",
  "Rodrigo Lyra Avila Guedes": "Discipulos",
  "Luciano de Barros Correia Ferraz": "Boa mãe",
  "Luis Henrique Loyo Machado": "Discipulos",
  "Carlos Alberto Gomes de Brito Filho": "Boa mãe",
  "Alberto Luis Belem Dias": "Coração acolhedor",
  "Arthur de Araujo Aguiar": "Discipulos",
  "Leonardo Aragão Ribeiro": "Coração acolhedor",
  "Henrique Chaves Inojosa Coutinho": "Testemunhas",
  "Pedro de Melo Souza Leão": "Discipulos",
  "Pedro Henrique Neves de Lima": "Boa mãe",
  "João Pedro de Almeida Gomes Menezes": "Cruz",
  "Lucas Murta de Oliveira": "Testemunhas",
  "João Vitor Cavalcanti de Barros": "Boa mãe",
  "Heitor Camelo Leite": "Três violetas",
  "Pedro Henrique Rodrigues de Amorim": "Boa mãe",
  "José Fagundes de Araújo Neto": "Três violetas",
  "Antonio José Gonçalves Maia": "Coração acolhedor",
  "Mauro Marcelo Queiroz de Arruda Junior": "Discipulos",
  "Christian da Silva Soares": "Testemunhas",
  "Lucas Gouveia de Miranda": "Estrela",
  "Marcelo Friedheim Cordeiro": "Três violetas",
  "Gustavo Constantino Barros de Lucena": "Estrela",
  "Eduardo Gouveia de Andrade": "Cruz",
  "Rafael de Holanda Rocha Amorim": "Testemunhas",
  "André Carvalho Baltar Sales": "Estrela",
  "Fernando Francisco de Arruda Neto": "Testemunhas",
  "Davi Lubambo de Lima Rocha": "Coração acolhedor",
  "João Guilherme Costa Azevedo": "Três violetas",
  "Paulo Gustavo Romão Dias de Oliveira": "Estrela",
  "Luca Longman de Aquino": "Cruz",
  "Davi Paes Barreto Glasner": "Testemunhas",
  "Caio Neves Vieira Batista": "Coração acolhedor",
  "Henrique Pessoa Gama": "Três violetas",
  "Arthur Dantas da Silva Coutinho": "Boa mãe",
  "Eduardo Pinto Gusmão Paes": "Coração acolhedor",
  "Luiz Eduardo Dourado da Costa Albuquerque": "Três violetas",
  "Eduardo Henning de Hollanda Cavalcanti": "Estrela",
  "Paulo Henrique de Valhery Jolkesky Filho": "Coração acolhedor",
  "Antônio de Souza Leão Soares Batista": "Coração acolhedor",
  "Pablo Osório de Holanda": "Estrela",
  "Eduardo Porto Carreiro Dornellas Camara": "Três violetas",
  "Luís Oscar Machado Gomes": "Cruz",
  "João Pedro de Farias Guerra": "Coração acolhedor",
  "João Gabriel Barros Ribeiro": "Boa mãe",
  "Lucas Siqueira de Farias": "Discipulos",
  "Otávio Augusto Pedrosa Meneses": "Testemunhas",
  "Rafael de Vasconcelos Santos Torres de Medeiros": "Discipulos",
  "Bruno Messias Moreira Cavalcante": "Boa mãe",
  "Túlio Prysthon de Mello Amorim": "Cruz",
  "José Eduardo Oliveira": "Cruz",
  "João Guilherme Duarte Medeiros": "Discipulos",
  "Gabriella dos Santos": "Três violetas",
  "Giovanna Marturelli Toscano Rebouças": "Testemunhas",
  "Hilda Hollanda Rego Barros Normandia Monteiro": "Cruz",
  "Isabela Moreira Figueirôa": "Coração acolhedor",
  "Júlia Luna Calado Borba": "Coração acolhedor",
  "Juliana Rego Monteiro Ferraz": "Testemunhas",
  "Larissa Falcone Lócio": "Testemunhas",
  "Laura Pessoa Albuquerque": "Boa mãe",
  "Letícia Maria Cavalcanti Van": "Estrela",
  "Lorena Lopes Monteiro Pereira": "Estrela",
  "Luisa Arruda Veras Coelho Pereira": "Boa mãe",
  "Luisa Martins Pereira de Araujo": "Discipulos",
  "Manuela Moreira Veloso": "Estrela",
  "Beatriz Santos de Aguiar Aragão": "Discipulos",
  "Kamila Vitória Santana Marques": "Coração acolhedor",
  "Maria Clara Galvão Domingos": "Coração acolhedor",
  "Marcela da Fonte Porto Carreiro de Paula": "Boa mãe",
  "Luana Ferreira Carneiro Leão": "Cruz",
  "Julia Galvao Cavalcante Vasconcelos": "Boa mãe",
  "Maria Antônia B. da Soledade": "Cruz",
  "Maria Cecilia Delgado Correia de Amorim e Souza": "Testemunhas",
  "Maria Clara Londres Lopes Durães": "Três violetas",
  "Maria Fernanda de Almeida Benevides": "Cruz",
  "Maria Fernanda Nunes Coutinho da Silva": "Estrela",
  "Maria Júlia Dantas Moreira Pontes": "Boa mãe",
  "Maria Luiza Friedheim Teixeira": "Cruz",
  "Marília Fernandes Albuquerque": "Estrela",
  "Marina Cabral Moreno": "Coração acolhedor",
  "Marina Mesquita Pedrosa Ferreira": "Três violetas",
  "Milena Gurgel Lopes de Farias": "Três violetas",
  "Nicole Castro de Lucena e Melo": "Testemunhas",
  "Cecilia Neves de Andrade": "Três violetas",
  "Sofia Costa Lima Campelo": "Estrela",
  "Sofia Cordeiro Harten": "Discipulos",
  "Maria Luísa Vidal Pires Peixoto": "Boa mãe",
  "Mariana da Silva Rodrigues Araújo": "Três violetas",
  "Bianca Sousa Ribeiro de Oliveira": "Três violetas",
  "Natália Vila Nova de Oliveira Santiago": "Discipulos",
  "Maria Eduarda Gallindo Carrazzoni Firmo": "Testemunhas",
  "Ana Beatriz Marques Veras Ferraz": "Coração acolhedor",
  "Analis César de Albuquerque Ângelo": "Estrela",
  "Beatriz Cabral de Sá Eiras": "Boa mãe",
  "Beatriz Dourado Cruz": "Cruz",
  "Camila Pedrosa Monteiro Galindo": "Estrela",
  "Catarina Sales Neves Galvão": "Coração acolhedor",
  "Clara Almeida Maia Pimentel": "Testemunhas",
  "Clara Nogueira Valle Vasconcelos": "Coração acolhedor",
  "Dora Monteiro": "Cruz",
  "Elis Batista Jansen de Sá Cruz": "Discipulos",
  "Gabriela Bispo Lócio": "Discipulos",
  "Gabriela Morais de Araujo": "Discipulos",
  "Gabriela Trigueiro da Cunha": "Três violetas",
  "Ana Gabriella de Carvalho Araújo Pereira": "Cruz",
  "Joana de Carvalho Nunes": "Estrela",
  "Cecilia Cordeiro Harten": "Três violetas",
  "Maria Fernanda Menezes de Andrade Lima": "Testemunhas",
  "Beatriz Oliveira Fróes": "Discipulos",
  "Isabele Maria Ribeiro Cardoso Tavares": "Cruz",
  "Julia Ramos Rolim de Araujo Bastos": "Testemunhas"
};

const EQUIPES = ["Coração acolhedor", "Estrela", "Boa mãe", "Três violetas", "Testemunhas", "Cruz", "Discipulos"];
const SALAS = ROOM_DATA.map(r => ({ nome: r.nome, cor: r.cor }));

const PARTICIPANTES = rawParticipantes.map((p) => {
  return {
    nome: p.nome,
    equipe: TEAM_MAP[p.nome] || "Sem Equipe",
    sala: p.sala,
    salaCor: p.cor
  };
});

let state = {}; // { id: { arrived, arrivedAt, med, medName, accom, accomName } }
let currentId = null;
let filter = "all";
let searchQ = "";
let unsubscribe = null;
let useFirebase = false;

// Inicializa state local
NOMES.forEach((_, i) => {
  state[i] = { arrived: false, arrivedAt: null, med: null, medName: "", accom: null, accomName: "", colchaoObs: "", malaObs: "", valuable: null, valuableName: "", pillow: null, pillowCount: "", totalVolumes: "" };
});

// ---- Firebase ----
async function initFirebase() {
  if (!FIREBASE_URL) return;
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const { getDatabase, ref, onValue, update, set, get } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js");
    const app = initializeApp({ databaseURL: FIREBASE_URL }, "checkin");
    const db = getDatabase(app);
    const rootRef = ref(db, "checkin");

    // Inicializa nomes no Firebase se não existir
    const snap = await get(rootRef);
    if (!snap.exists()) {
      const initial = {};
      NOMES.forEach((nome, i) => {
        initial[i] = { nome, arrived: false, arrivedAt: null, med: null, medName: "", accom: null, accomName: "", colchaoObs: "", malaObs: "", valuable: null, valuableName: "", pillow: null, pillowCount: "", totalVolumes: "" };
      });
      await set(rootRef, initial);
    }

    // Escuta mudanças em tempo real
    onValue(rootRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      state = {};
      Object.entries(data).forEach(([k, v]) => { state[k] = v; });
      render();
    });

    useFirebase = true;
    window._fbDB = db;
    window._fbRef = (path) => ref(db, path);
    window._fbUpdate = update;
    console.log("Firebase conectado!");
  } catch(e) {
    console.warn("Firebase não configurado, rodando em modo local:", e.message);
  }
}

window.saveState = async function(id, data) {
  state[id] = { ...state[id], ...data };
  if (useFirebase && window._fbDB) {
    await window._fbUpdate(window._fbRef(`checkin/${id}`), data);
  } else {
    render();
  }
};

// ---- UI ----
function fmt(ts) {
  if (!ts) return "";
  const d = new Date(ts);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function render() {
  const tbody = document.getElementById("table-body");
  const empty = document.getElementById("empty-state");
  const selectedEquipe = document.getElementById("filter-equipe")?.value || "all";
  const selectedSala = document.getElementById("filter-sala")?.value || "all";
  let arrived = 0, rows = [];

  Object.entries(state).forEach(([id, p]) => {
    if (p.arrived) arrived++;
    const pInfo = PARTICIPANTES[id] || { nome: p.nome || "", equipe: "-", sala: "-", salaCor: "var(--muted)" };
    const nome = pInfo.nome;
    if (searchQ && !nome.toLowerCase().includes(searchQ)) return;
    if (filter === "pending" && p.arrived) return;
    if (filter === "arrived" && !p.arrived) return;
    if (selectedEquipe !== "all" && pInfo.equipe !== selectedEquipe) return;
    if (selectedSala !== "all" && pInfo.sala !== selectedSala) return;
    rows.push({ id, ...pInfo, ...p });
  });

  document.getElementById("cnt-arrived").textContent = arrived;
  document.getElementById("cnt-pending").textContent = NOMES.length - arrived;
  document.getElementById("cnt-total").textContent = NOMES.length;

  if (rows.length === 0) {
    tbody.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  tbody.innerHTML = rows.map(({ id, nome, equipe, sala, salaCor, arrived, arrivedAt, med, medName, accom, accomName, colchaoObs, malaObs, valuable, valuableName, pillow, pillowCount, totalVolumes }) => {
    const idx = Object.keys(state).indexOf(id);
    const medBadge = med === "sim"
      ? `<span class="med-info"><span class="med-name">Sim</span>${medName ? ` — ${medName}` : ""}</span>`
      : med === "nao" ? `<span class="med-info">Não</span>` : "—";
    const accomBadge = accom === "colchao" ? `<span title="${colchaoObs || ''}">🛏 Colchão${colchaoObs ? ` (${colchaoObs})` : ""}</span>` : accom === "dividir" ? `<span title="${accomName || ''}">🤝 Dividir${accomName ? ` c/ ${accomName}` : ""}</span>` : "—";

    let bagParts = [];
    if (malaObs) bagParts.push(`🎒 Mala: ${malaObs}`);
    if (totalVolumes) bagParts.push(`📦 Vols: ${totalVolumes}`);
    if (pillow === "sim" && pillowCount) bagParts.push(`🛏️ Trav: ${pillowCount}`);
    if (valuable === "sim") bagParts.push(`💎 Valor: ${valuableName || "Sim"}`);
    const bagBadge = bagParts.length > 0 
      ? `<span class="accom-info" style="display:inline-block; max-width:250px; white-space:normal; line-height:1.4;">${bagParts.join(' | ')}</span>`
      : "—";

    return `<tr class="${arrived ? "arrived" : ""}" id="row-${id}">
      <td class="num">${parseInt(id)+1}</td>
      <td class="name">
        <div>${nome}</div>
        <div style="font-size: 0.75rem; color: var(--muted); margin-top: 3px;">
          <span style="color: var(--accent); font-weight: 600;">${equipe}</span> • <span style="color: ${salaCor || 'var(--muted)'}; font-weight: 600;">${sala}</span>
        </div>
        <div class="mobile-extra-info">
          <div><strong>Remédio:</strong> ${medBadge}</div>
          <div><strong>Acomodação:</strong> <span class="accom-info">${accomBadge}</span></div>
          <div><strong>Bagagem:</strong> ${bagBadge}</div>
        </div>
      </td>
      <td>${arrived
        ? `<span class="badge ok">✓ Chegou</span>`
        : `<span class="badge pending">⏳ Aguardando</span>`}</td>
      <td class="col-med">${medBadge}</td>
      <td class="col-accom"><span class="accom-info">${accomBadge}</span></td>
      <td class="col-baggage">${bagBadge}</td>
      <td><span class="time-chip">${fmt(arrivedAt)}</span></td>
      <td>${arrived
        ? `<button class="btn-undo" onclick="undoCheckin('${id}')">Desfazer</button>`
        : `<button class="btn-check" onclick="openModal('${id}')">✓ Confirmar</button>`}</td>
    </tr>`;
  }).join("");
}

// ---- Modal ----
window.openModal = function(id) {
  currentId = id;
  const pInfo = PARTICIPANTES[id] || { nome: state[id]?.nome, equipe: "-", sala: "-", salaCor: "var(--muted)" };
  document.getElementById("modal-name").innerHTML = `
    <div>${pInfo.nome}</div>
    <div style="font-size: 0.85rem; color: var(--muted); margin-top: 4px; font-weight: 500;">
      <span style="color: var(--accent);">${pInfo.equipe}</span> • <span style="color: ${pInfo.salaCor}; font-weight: 600;">${pInfo.sala}</span>
    </div>
  `;
  // Reset
  document.querySelectorAll("[data-field='med']").forEach(el => el.classList.remove("selected","selected-danger"));
  document.querySelectorAll("[data-field='accom']").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("[data-field='valuable']").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("[data-field='pillow']").forEach(el => el.classList.remove("selected"));
  
  // Remove defaults for valuable and pillow (to force user to pick)

  document.getElementById("med-name").style.display = "none";
  document.getElementById("med-name").value = "";
  document.getElementById("accom-name").style.display = "none";
  document.getElementById("accom-name").value = "";
  document.getElementById("colchao-obs").style.display = "none";
  document.getElementById("colchao-obs").value = "";
  
  document.getElementById("mala-obs").value = "";
  document.getElementById("valuable-name").style.display = "none";
  document.getElementById("valuable-name").value = "";
  document.getElementById("pillow-count").style.display = "none";
  document.getElementById("pillow-count").value = "";
  document.getElementById("total-volumes").value = "";

  document.getElementById("modal").classList.add("open");
};

window.closeModal = function() {
  document.getElementById("modal").classList.remove("open");
  currentId = null;
};

window.selectOpt = function(el) {
  const field = el.dataset.field;
  document.querySelectorAll(`[data-field='${field}']`).forEach(e => e.classList.remove("selected","selected-danger"));
  if (field === "med" && el.dataset.val === "sim") {
    el.classList.add("selected-danger");
    document.getElementById("med-name").style.display = "block";
  } else if (field === "accom" && el.dataset.val === "dividir") {
    el.classList.add("selected");
    document.getElementById("accom-name").style.display = "block";
    document.getElementById("colchao-obs").style.display = "none";
  } else if (field === "accom" && el.dataset.val === "colchao") {
    el.classList.add("selected");
    document.getElementById("colchao-obs").style.display = "block";
    document.getElementById("accom-name").style.display = "none";
  } else if (field === "valuable" && el.dataset.val === "sim") {
    el.classList.add("selected");
    document.getElementById("valuable-name").style.display = "block";
  } else if (field === "pillow" && el.dataset.val === "sim") {
    el.classList.add("selected");
    document.getElementById("pillow-count").style.display = "block";
  } else {
    el.classList.add("selected");
    if (field === "med") document.getElementById("med-name").style.display = "none";
    if (field === "accom") {
      document.getElementById("accom-name").style.display = "none";
      document.getElementById("colchao-obs").style.display = "none";
    }
    if (field === "valuable") document.getElementById("valuable-name").style.display = "none";
    if (field === "pillow") document.getElementById("pillow-count").style.display = "none";
  }
};

window.confirmCheckin = async function() {
  const medEl = document.querySelector("[data-field='med'].selected, [data-field='med'].selected-danger");
  const accomEl = document.querySelector("[data-field='accom'].selected");
  const valuableEl = document.querySelector("[data-field='valuable'].selected");
  const pillowEl = document.querySelector("[data-field='pillow'].selected");

  if (!medEl) return alert("Por favor, informe se toma remédio.");
  const medVal = medEl.dataset.val;
  const medNameVal = document.getElementById("med-name").value.trim();
  if (medVal === "sim" && !medNameVal) return alert("Por favor, informe qual o remédio.");

  if (!accomEl) return alert("Por favor, informe a acomodação.");
  const accomVal = accomEl.dataset.val;
  const accomNameVal = document.getElementById("accom-name").value.trim();
  const colchaoObsVal = document.getElementById("colchao-obs").value.trim();
  if (accomVal === "dividir" && !accomNameVal) return alert("Por favor, informe com quem vai dividir.");
  if (accomVal === "colchao" && !colchaoObsVal) return alert("Por favor, informe as características do colchão.");

  const malaObsVal = document.getElementById("mala-obs").value.trim();
  if (!malaObsVal) return alert("Por favor, preencha o campo Mala (Qtd e Cor).");

  if (!valuableEl) return alert("Por favor, informe se tem objeto de valor.");
  const valuableVal = valuableEl.dataset.val;
  const valuableNameVal = document.getElementById("valuable-name").value.trim();
  if (valuableVal === "sim" && !valuableNameVal) return alert("Por favor, informe qual o objeto de valor.");

  if (!pillowEl) return alert("Por favor, informe se trouxe travesseiro.");
  const pillowVal = pillowEl.dataset.val;
  const pillowCountVal = document.getElementById("pillow-count").value.trim();
  if (pillowVal === "sim" && !pillowCountVal) return alert("Por favor, informe a quantidade de travesseiros.");

  const totalVolumesVal = document.getElementById("total-volumes").value.trim();
  if (!totalVolumesVal) return alert("Por favor, informe a quantidade total de volumes.");

  await window.saveState(currentId, {
    arrived: true,
    arrivedAt: Date.now(),
    med: medVal,
    medName: medNameVal,
    accom: accomVal,
    accomName: accomNameVal,
    colchaoObs: colchaoObsVal,
    malaObs: malaObsVal,
    valuable: valuableVal,
    valuableName: valuableNameVal,
    pillow: pillowVal,
    pillowCount: pillowCountVal,
    totalVolumes: totalVolumesVal
  });
  closeModal();
};

window.undoCheckin = async function(id) {
  const pInfo = PARTICIPANTES[id] || { nome: state[id]?.nome };
  if (!confirm("Desfazer o check-in de " + pInfo.nome + "?")) return;
  await window.saveState(id, { arrived: false, arrivedAt: null, med: null, medName: "", accom: null, accomName: "", colchaoObs: "", malaObs: "", valuable: null, valuableName: "", pillow: null, pillowCount: "", totalVolumes: "" });
};

// ---- Exportar PDF ----
window.exportarPDF = function() {
  const tableWrap = document.querySelector(".table-wrap");
  if (!tableWrap) return;

  // Esconde a coluna de Ação (último th e td de cada linha)
  const acaoCols = tableWrap.querySelectorAll("th:last-child, td:last-child");
  acaoCols.forEach(el => el.style.display = "none");

  // Esconde os botões mobile-extra-info (info redundante no mobile, suja o PDF)
  const mobileExtras = tableWrap.querySelectorAll(".mobile-extra-info");
  mobileExtras.forEach(el => el.style.display = "none");

  // Título com data para o cabeçalho do PDF
  const hoje = new Date();
  const dataStr = hoje.toLocaleDateString("pt-BR");
  const nomeArq = `Checkin_Agape_${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,"0")}-${String(hoje.getDate()).padStart(2,"0")}`;

  // Wrapper temporário para injetar título no PDF
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "font-family:'Segoe UI',system-ui,sans-serif;padding:0;";
  const titulo = document.createElement("div");
  titulo.style.cssText = "margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;";
  titulo.innerHTML = `
    <span style="font-size:16px;font-weight:700;color:#1e293b;">Check-in <span style="color:#2563eb;">Agápe</span></span>
    <span style="font-size:11px;color:#64748b;">Gerado em ${dataStr}</span>
  `;

  // Clona a tabela para não mexer no DOM original
  const clone = tableWrap.cloneNode(true);
  // No clone, garante que coluna de ação já está sem display
  clone.querySelectorAll("th:last-child, td:last-child").forEach(el => el.style.display = "none");
  clone.querySelectorAll(".mobile-extra-info").forEach(el => el.style.display = "none");

  wrapper.appendChild(titulo);
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  // Estilos inline para o clone (o html2pdf não herda CSS externo de forma ideal)
  clone.style.cssText = "overflow:visible;border-radius:0;border:1px solid #e2e8f0;";
  const cloneTable = clone.querySelector("table");
  if (cloneTable) {
    cloneTable.style.cssText = "width:100%;border-collapse:collapse;font-size:10px;font-family:'Segoe UI',system-ui,sans-serif;";
  }
  clone.querySelectorAll("th").forEach(th => {
    th.style.cssText = "padding:6px 8px;text-align:left;font-size:9px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:#64748b;border-bottom:1px solid #e2e8f0;background:#f1f5f9;white-space:nowrap;";
  });
  clone.querySelectorAll("td").forEach(td => {
    td.style.cssText = "padding:5px 8px;vertical-align:middle;border-bottom:1px solid #e2e8f0;color:#1e293b;";
  });
  clone.querySelectorAll("tbody tr").forEach(tr => {
    if (tr.classList.contains("arrived")) {
      tr.style.background = "#f0fdf4";
    } else {
      tr.style.background = "#ffffff";
    }
    // Impede que a linha seja cortada entre páginas
    tr.style.pageBreakInside = "avoid";
    tr.style.breakInside = "avoid";
  });
  clone.querySelectorAll(".badge.pending").forEach(b => {
    b.style.cssText = "display:inline-flex;align-items:center;gap:3px;border-radius:20px;padding:2px 8px;font-size:9px;font-weight:600;background:#fef3c7;color:#b45309;border:1px solid #fde68a;";
  });
  clone.querySelectorAll(".badge.ok").forEach(b => {
    b.style.cssText = "display:inline-flex;align-items:center;gap:3px;border-radius:20px;padding:2px 8px;font-size:9px;font-weight:600;background:#dcfce7;color:#166534;border:1px solid #bbf7d0;";
  });
  clone.querySelectorAll(".time-chip").forEach(t => {
    t.style.cssText = "font-size:9px;color:#64748b;white-space:nowrap;";
  });
  clone.querySelectorAll(".accom-info, .med-info").forEach(el => {
    el.style.cssText = "font-size:9px;color:#64748b;max-width:200px;white-space:normal;line-height:1.3;";
  });
  clone.querySelectorAll("td.num").forEach(el => {
    el.style.cssText += "color:#64748b;font-size:9px;width:30px;";
  });
  clone.querySelectorAll("td.name > div:first-child").forEach(el => {
    el.style.cssText = "font-weight:600;font-size:10px;color:#1e293b;";
  });

  const opt = {
    margin: [8, 6, 8, 6],
    filename: nomeArq + ".pdf",
    image: { type: "jpeg", quality: 0.97 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] }
  };

  const btn = document.getElementById("btn-export-pdf");
  btn.textContent = "⏳ Gerando...";
  btn.disabled = true;

  html2pdf().set(opt).from(wrapper).save().then(() => {
    // Restaura coluna de Ação
    acaoCols.forEach(el => el.style.display = "");
    mobileExtras.forEach(el => el.style.display = "");
    document.body.removeChild(wrapper);
    btn.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg> Exportar PDF`;
    btn.disabled = false;
    btn.style.background = "#10b981";
  }).catch(() => {
    acaoCols.forEach(el => el.style.display = "");
    mobileExtras.forEach(el => el.style.display = "");
    document.body.removeChild(wrapper);
    btn.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg> Exportar PDF`;
    btn.disabled = false;
    alert("Erro ao gerar o PDF. Tente novamente.");
  });
};

// ---- Eventos ----
document.getElementById("search").addEventListener("input", e => {
  searchQ = e.target.value.toLowerCase().trim();
  render();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

document.getElementById("modal").addEventListener("click", e => {
  if (e.target === document.getElementById("modal")) closeModal();
});

// ---- Init ----
const selectEquipe = document.getElementById("filter-equipe");
EQUIPES.forEach(eq => {
  const opt = document.createElement("option");
  opt.value = eq;
  opt.textContent = eq;
  selectEquipe.appendChild(opt);
});
selectEquipe.addEventListener("change", () => render());

const selectSala = document.getElementById("filter-sala");
SALAS.forEach(s => {
  const opt = document.createElement("option");
  opt.value = s.nome;
  opt.textContent = s.nome;
  selectSala.appendChild(opt);
});
selectSala.addEventListener("change", () => render());

render();
initFirebase();

// ---- Theme Toggle ----
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

