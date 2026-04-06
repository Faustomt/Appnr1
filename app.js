const questions = [
  { icon: "layers", text: "Na sua função, com que frequência você percebe que tem um acúmulo excessivo de atividades ou funções para realizar?" },
  { icon: "shield-alert", text: "No seu trabalho, com que frequência você se depara com situações de ameaça ou violência por parte de pessoas de fora da empresa (clientes, usuários, público em geral, etc.)?" },
  { icon: "scale", text: "Na empresa, com que frequência você percebe que as regras e normas são aplicadas de forma diferente para pessoas em situações semelhantes?" },
  { icon: "message-square-warning", text: "Com que frequência você percebe comportamentos abusivos, como palavras, gestos e atitudes de colegas de trabalho, que geram desconforto no ambiente de trabalho?" },
  { icon: "coffee", text: "Durante sua jornada de trabalho, com que frequência você percebe que não tem pausas adequadas e/ou locais apropriados para descansar?" },
  { icon: "cog", text: "No seu trabalho, com que frequência você percebe que o ritmo de trabalho é determinado pela velocidade de um equipamento, sem que você tenha controle sobre ele?" },
  { icon: "clock", text: "Com que frequência você percebe que a quantidade de trabalho que precisa realizar é excessiva para o tempo disponível?" },
  { icon: "message-circle-off", text: "No seu dia a dia no trabalho, com que frequência você percebe que a comunicação é falha e deficiente?" },
  { icon: "bed", text: "Considerando suas responsabilidades e horários de trabalho, com que frequência você percebe que falta tempo para descansar e se recuperar fora do trabalho?" },
  { icon: "users", text: "No ambiente de trabalho, com que frequência você percebe tratamento desigual por motivos como raça, gênero, orientação sexual, religião, idade, deficiência, etc.?" },
  { icon: "swords", text: "No seu ambiente de trabalho, com que frequência você percebe conflitos ou tensões entre pessoas de diferentes níveis hierárquicos (chefes, supervisores, subordinados)?" },
  { icon: "brain", text: "Considerando as tarefas que você realiza, com que frequência você percebe que seu trabalho exige um grande controle emocional?" },
  { icon: "flame", text: "No seu dia a dia de trabalho, com que frequência você sofre exposição a situações que causam estresse excessivo?" },
  { icon: "target", text: "Com que frequência você percebe que seu trabalho exige um nível muito alto de concentração, atenção ou memória?" },
  { icon: "shuffle", text: "Com que frequência você percebe que recebe ordens ou metas conflitantes ou que dificultam a realização do seu trabalho?" },
  { icon: "lock", text: "Com que frequência você percebe que falta autonomia para organizar seu trabalho da maneira que você considera mais eficiente?" },
  { icon: "help-circle", text: "Com que frequência você percebe que não há clareza sobre quais são suas responsabilidades e o que esperam de você no trabalho?" },
  { icon: "mic-off", text: "Com que frequência a falta de feedback construtivo sobre o seu desempenho no trabalho, te atrapalha a melhorar e a se desenvolver profissionalmente?" },
  { icon: "wrench", text: "Com que frequência faltam as ferramentas e equipamentos adequados para realizar seu trabalho com segurança e eficiência?" },
  { icon: "frown", text: "Com que frequência você percebe que recebe tratamento de forma injusta ou inconsistente em comparação com outros colegas na empresa?" },
  { icon: "trending-up", text: "Com que frequência você percebe faltam oportunidades de crescimento na empresa?" },
  { icon: "calendar-x", text: "Considerando a sua função, com que frequência você percebe que não tem flexibilidade para ajustar seus horários de trabalho de acordo com suas necessidades pessoais?" },
  { icon: "moon", text: "Com que frequência você percebe que precisa trabalhar muitas horas extras ou cumprir uma jornada de trabalho excessivamente longa para dar conta das suas tarefas e responsabilidades?" },
  { icon: "dollar-sign", text: "Com que frequência você sente insatisfação com a remuneração, comparada às suas responsabilidades e a média que o mercado paga?" },
  { icon: "thumbs-down", text: "Com que frequência você sente insatisfação com o seu trabalho atual por causa da empresa?" },
  { icon: "graduation-cap", text: "Com que frequência você percebe que não possui a capacitação ou o treinamento adequado para realizar suas tarefas?" },
  { icon: "mountain", text: "Com que frequência você percebe que as metas que lhe são atribuídas são praticamente impossíveis de alcançar, mesmo com muito esforço?" },
  { icon: "repeat", text: "Com que frequência você percebe que seu trabalho é repetitivo, pouco desafiador e insuficiente para manter seu interesse?" },
  { icon: "alert-triangle", text: "Com que frequência você percebe a possibilidade de perder seu emprego ou ter seu salário reduzido na empresa?" },
  { icon: "hourglass", text: "Com que frequência você percebe uma sobrecarga com muitas tarefas e prazos muito apertados no seu trabalho?" },
  { icon: "battery-low", text: "Com que frequência você percebe que tem poucas tarefas para fazer e que você é pouco útil na empresa?" },
  { icon: "watch", text: "Com que frequência você percebe que há uma necessidade de variar seus horários de trabalho (turnos) e isso afeta negativamente sua saúde, vida pessoal ou bem-estar?" },
  { icon: "volume-x", text: "Com que frequência você percebe que fatores como ruído excessivo, isolamento, falta de equipamentos ou barreiras linguísticas dificultam a comunicação no seu trabalho?" },
  { icon: "thermometer", text: "Com que frequência você percebe que as condições do seu local de trabalho (ex: espaço, iluminação, temperatura etc) prejudicam seu desempenho e bem-estar?" },
  { icon: "moon-star", text: "Com que frequência você percebe que o trabalho noturno afeta negativamente sua saúde ou sua vida social?" },
  { icon: "gauge", text: "Com que frequência você percebe que o sistema de remuneração por produção te causa pressão excessiva para produzir mais, afetando o seu bem-estar?" },
  { icon: "flask-conical", text: "Se existem, com que frequência as condições insalubres do seu trabalho (ex: ruído, temperatura, produtos químicos e/ou biológicos) afetam negativamente sua saúde mental?" },
  { icon: "hard-hat", text: "Se existem, com que frequência as condições perigosas do seu trabalho (ex: risco de acidentes graves, explosões, cortes, quedas etc) afetam a sua saúde mental?" },
  { icon: "activity", text: "Com que frequência você percebe que seu trabalho te coloca sob forte pressão, causando estresse, ansiedade ou dificuldades para lidar com as tarefas?" }
];

lucide.createIcons();

// STATE E STORAGE
let isManagerLoggedIn = false;
let hierarquias = [];
let simulacoesBd = [];

const supabaseUrl = 'https://iuxzpehrmpslhkolwzmt.supabase.co';
const supabaseKey = 'sb_publishable_nOXpr16pZwm4nBlvZ2LLuA_lxBp0rXw';
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loadData() {
    // 1. Carrega Organogramas do Supabase
    const { data: hData, error: hErr } = await db.from('hierarquias').select('*');
    if(hData && hData.length > 0) {
        hierarquias = hData;
    } else {
        hierarquias = [
            { empresa: 'Acme Corp', unidade_negocio: 'Fábrica SP', divisao: 'Operações', departamento: 'Montagem', setor: 'Linha A' },
            { empresa: 'Acme Corp', unidade_negocio: 'Escritório RJ', divisao: 'Comercial', departamento: 'Vendas Diretivas', setor: 'Vendas B2B' }
        ];
    }

    // 2. Carrega as Respostas Anônimas do Supabase
    const { data: sData, error: sErr } = await db.from('responses').select('*');
    if(sData) {
        simulacoesBd = sData.map(d => ({
            demographics: { empresa: d.empresa, unidade_negocio: d.unidade_negocio, setor: d.setor },
            percentualRisco: parseFloat(d.percentual_risco),
            respostas_raw: d.respostas_raw
        }));
    }

    // 3. Atualiza interface atual
    initCascadingForm();
}

loadData();

// BOTOES NAV
const btnSwitchForm = document.getElementById('btn-switch-form');
const btnSwitchAdmin = document.getElementById('btn-switch-admin');
const btnSwitchDash = document.getElementById('btn-switch-dash');
const btnLogout = document.getElementById('btn-logout');

const viewForm = document.getElementById('view-form');
const viewLogin = document.getElementById('view-login');
const viewAdmin = document.getElementById('view-admin');
const viewDash = document.getElementById('view-dashboard');

btnSwitchForm.addEventListener('click', () => switchView('form'));
btnSwitchAdmin.addEventListener('click', () => switchView('admin'));
btnSwitchDash.addEventListener('click', () => { isManagerLoggedIn ? switchView('dash') : switchView('login'); });

btnLogout.addEventListener('click', () => {
  isManagerLoggedIn = false;
  btnSwitchAdmin.style.display = 'none';
  btnLogout.style.display = 'none';
  switchView('form');
});

function switchView(view) {
  viewForm.classList.remove('active');
  viewLogin.classList.remove('active');
  viewAdmin.classList.remove('active');
  viewDash.classList.remove('active');
  
  btnSwitchForm.classList.remove('active');
  btnSwitchAdmin.classList.remove('active');
  btnSwitchDash.classList.remove('active');
  
  if (view === 'form') {
    btnSwitchForm.classList.add('active');
    viewForm.classList.add('active');
    initCascadingForm();
  } else if (view === 'login') {
    btnSwitchDash.classList.add('active');
    viewLogin.classList.add('active');
  } else if (view === 'admin') {
    btnSwitchAdmin.classList.add('active');
    viewAdmin.classList.add('active');
    renderAdminTable();
  } else if (view === 'dash') {
    btnSwitchDash.classList.add('active');
    viewDash.classList.add('active');
    btnSwitchAdmin.style.display = 'inline-block';
    btnLogout.style.display = 'inline-block';
    populateDashFilters();
    renderDashboard();
  }
}

// LOGIN
document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  if(document.getElementById('emailAdmin').value === 'gestor@empresa.com') {
     document.getElementById('login-error-msg').style.display = 'none';
     isManagerLoggedIn = true;
     switchView('dash');
  } else { document.getElementById('login-error-msg').style.display = 'block'; }
});


// MÓDULO ADMIN: GESTÃO DO ORGANOGRAMA
document.getElementById('form-add-route').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btnSubmit = e.submitter || e.target.querySelector('button');
    const oldText = btnSubmit.innerText;
    btnSubmit.innerText = 'Salvando na Nuvem...'; btnSubmit.disabled = true;

    const novaTrilha = {
        empresa: document.getElementById('rt-emp').value.trim(),
        unidade_negocio: document.getElementById('rt-uni').value.trim(),
        divisao: document.getElementById('rt-div').value.trim(),
        departamento: document.getElementById('rt-dep').value.trim(),
        setor: document.getElementById('rt-set').value.trim()
    };
    
    // Inserção Nuvem
    const { data, error } = await db.from('hierarquias').insert([novaTrilha]).select();
    if(!error && data) {
        hierarquias.push(data[0]); // Puxa com o UUID oficial gerado
        e.target.reset();
        renderAdminTable();
    } else {
        alert("Erro ao salvar no banco. Verifique as tabelas do Supabase.");
    }
    
    btnSubmit.innerText = oldText; btnSubmit.disabled = false;
});

function renderAdminTable() {
    const tbody = document.getElementById('routes-tbody');
    tbody.innerHTML = '';
    hierarquias.forEach((trilha, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${trilha.empresa}</td>
            <td>${trilha.unidade_negocio || '-'}</td>
            <td>${trilha.divisao || '-'}</td>
            <td>${trilha.departamento || '-'}</td>
            <td>${trilha.setor}</td>
            <td><button class="btn-delete" onclick="deleteRoute(${index})">X</button></td>
        `;
        tbody.appendChild(tr);
    });
}
window.deleteRoute = async function(index) {
    const tr = hierarquias[index];
    if(tr.id) {
        await db.from('hierarquias').delete().eq('id', tr.id);
    }
    hierarquias.splice(index, 1);
    renderAdminTable();
}


// FORMULÁRIO COLABORADOR: CASCATA
const selEmp = document.getElementById('empresa');
const selUni = document.getElementById('unidade_negocio');
const selDiv = document.getElementById('divisao');
const selDep = document.getElementById('departamento');
const selSet = document.getElementById('setor');

function getUniqueCol(data, col) { return Array.from(new Set(data.map(i => i[col]))).filter(Boolean).sort(); }

function fillSelect(elem, list, placeholder) {
    elem.innerHTML = `<option value="">${placeholder}</option>`;
    list.forEach(val => { elem.innerHTML += `<option value="${val}">${val}</option>`; });
    elem.disabled = list.length === 0;
}

function initCascadingForm() {
    fillSelect(selEmp, getUniqueCol(hierarquias, 'empresa'), 'Selecione a Empresa');
    fillSelect(selUni, [], 'Selec.-');
    fillSelect(selDiv, [], 'Selec.-');
    fillSelect(selDep, [], 'Selec.-');
    fillSelect(selSet, [], 'Selec.-');
}

selEmp.addEventListener('change', () => {
    let filtered = hierarquias.filter(h => h.empresa === selEmp.value);
    fillSelect(selUni, getUniqueCol(filtered, 'unidade_negocio'), 'Selecione a Unidade');
    fillSelect(selDiv, [], '-'); fillSelect(selDep, [], '-'); fillSelect(selSet, [], '-');
    if(getUniqueCol(filtered, 'unidade_negocio').length === 0) selSet.disabled = false;
});
selUni.addEventListener('change', () => {
    let filtered = hierarquias.filter(h => h.empresa === selEmp.value && h.unidade_negocio === selUni.value);
    fillSelect(selDiv, getUniqueCol(filtered, 'divisao'), 'Selecione a Divisão');
    fillSelect(selDep, [], '-'); fillSelect(selSet, [], '-');
});
selDiv.addEventListener('change', () => {
    let filtered = hierarquias.filter(h => h.empresa === selEmp.value && h.unidade_negocio === selUni.value && h.divisao === selDiv.value);
    fillSelect(selDep, getUniqueCol(filtered, 'departamento'), 'Selecione o Depto');
    fillSelect(selSet, [], '-');
});
selDep.addEventListener('change', () => {
    let filtered = hierarquias.filter(h => h.empresa === selEmp.value && h.unidade_negocio === selUni.value && h.divisao === selDiv.value && h.departamento === selDep.value);
    fillSelect(selSet, getUniqueCol(filtered, 'setor'), 'Selecione o Setor');
});


// Navegação Inicial Forms
document.getElementById('btn-start').addEventListener('click', () => {
    document.getElementById('intro-step').classList.remove('active');
    document.getElementById('demo-step').classList.add('active');
});

// Formulários
document.getElementById('form-demographics').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('demo-step').classList.remove('active');
    document.getElementById('questions-step').classList.add('active');
    renderQuestions();
});

document.getElementById('is_pcd').addEventListener('change', (e) => {
    document.getElementById('fg-pcd-desc').style.display = e.target.value === 'SIM' ? 'block' : 'none';
});

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    questions.forEach((qObj, index) => {
        let qNum = index + 1;
        container.innerHTML += `
        <div class="question-item">
            <div class="q-header">
                <div class="q-icon"><i data-lucide="${qObj.icon}"></i></div>
                <div class="question-text"><strong>${qNum}.</strong> ${qObj.text}</div>
            </div>
            <div class="likert-scale">
                <div class="likert-option"><input type="radio" id="q${qNum}_1" name="q${qNum}" value="1" required><label for="q${qNum}_1">Nunca</label></div>
                <div class="likert-option"><input type="radio" id="q${qNum}_2" name="q${qNum}" value="2"><label for="q${qNum}_2">Raramente</label></div>
                <div class="likert-option"><input type="radio" id="q${qNum}_3" name="q${qNum}" value="3"><label for="q${qNum}_3">Às vezes</label></div>
                <div class="likert-option"><input type="radio" id="q${qNum}_4" name="q${qNum}" value="4"><label for="q${qNum}_4">Freq.</label></div>
                <div class="likert-option"><input type="radio" id="q${qNum}_5" name="q${qNum}" value="5"><label for="q${qNum}_5">Sempre</label></div>
            </div>
        </div>`;
    });
    
    // Injeta os ícones criados acima
    lucide.createIcons();
}

document.getElementById('form-questions').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btnSubmit = e.submitter || e.target.querySelector('button');
    const oldText = btnSubmit.innerText;
    btnSubmit.innerText = 'Transmitindo Seguro...'; btnSubmit.disabled = true;

    let totalScore = 0;
    const respostas_raw = [];
    let hasError = false;

    for (let index = 0; index < questions.length; index++) {
        const checked = document.querySelector(`input[name="q${index+1}"]:checked`);
        if (!checked) {
            alert(`Por favor, responda a pergunta número ${index+1} antes de enviar.`);
            hasError = true;
            break;
        }
        const val = parseInt(checked.value);
        totalScore += val * 20; 
        respostas_raw.push(val);
    }

    if (hasError) {
        btnSubmit.innerText = oldText; btnSubmit.disabled = false;
        return;
    }
    
    const calcPerc = totalScore / questions.length;
    
    const payload = {
        empresa: selEmp.value,
        unidade_negocio: selUni.value,
        divisao: selDiv.value,
        departamento: selDep.value,
        setor: selSet.value,
        funcao: document.getElementById('funcao').value,
        idade: document.getElementById('idade').value,
        is_pcd: document.getElementById('is_pcd').value,
        pcd_desc: document.getElementById('pcd_desc').value,
        sexo: document.getElementById('sexo').value,
        estado_civil: document.getElementById('estado_civil').value,
        filhos: document.getElementById('filhos').value,
        escolaridade: document.getElementById('escolaridade').value,
        tempo_empresa: document.getElementById('tempo_empresa').value,
        habito_beber: document.getElementById('habito_beber').value,
        habito_fumar: document.getElementById('habito_fumar').value,
        enps: parseInt(document.getElementById('enps').value) || null,
        percentual_risco: calcPerc,
        respostas_raw: respostas_raw
    };

    // Salvar na Nuvem
    const { error } = await db.from('responses').insert([payload]);

    if(!error) {
        simulacoesBd.push({
            demographics: { empresa: payload.empresa, unidade_negocio: payload.unidade_negocio, setor: payload.setor },
            percentualRisco: calcPerc,
            respostas_raw: respostas_raw
        });
        document.getElementById('questions-step').classList.remove('active');
        document.getElementById('thanks-step').classList.add('active');
    } else {
        alert("Erro de conexão. Tente novamente.");
    }

    btnSubmit.innerText = oldText; btnSubmit.disabled = false;
});

initCascadingForm();


// ----------------------------------------------------
// DASHBOARD
// ----------------------------------------------------
let chartInstance = null;
const [fEmp, fUni, fDiv, fDep, fSet] = ['filter-empresa', 'filter-unidade', 'filter-divisao', 'filter-departamento', 'filter-setor'].map(id => document.getElementById(id));

[fEmp, fUni, fDiv, fDep, fSet].forEach(sel => sel.addEventListener('change', () => { populateDashFilters(); renderDashboard(); }));

function updateSel(elem, list, valPlaceholder) {
    const pl = elem.options[0].text; elem.innerHTML = `<option value="">${pl}</option>`;
    list.forEach(v => { const o = document.createElement('option'); o.value = v; o.text = v; if(v === valPlaceholder) o.selected=true; elem.appendChild(o); });
}

function getFilteredData() {
    return simulacoesBd.filter(item => {
        const d = item.demographics;
        if(fEmp.value && d.empresa !== fEmp.value) return false;
        if(fUni.value && d.unidade_negocio !== fUni.value) return false;
        if(fSet.value && d.setor !== fSet.value) return false;
        return true;
    });
}

function populateDashFilters() {
    let td = simulacoesBd;
    updateSel(fEmp, getUniqueCol(td.map(i=>i.demographics), 'empresa'), fEmp.value);
    if(fEmp.value) td = td.filter(i=>i.demographics.empresa === fEmp.value);
    updateSel(fUni, getUniqueCol(td.map(i=>i.demographics), 'unidade_negocio'), fUni.value);
}

function renderDashboard() {
  const filteredData = getFilteredData();
  document.getElementById('dash-count').innerText = filteredData.length;
  const badge = document.getElementById('dash-risk-badge');
  const percentText = document.getElementById('dash-risk-percent');
  const ctx = document.getElementById('riskChart').getContext('2d');
  
  if(filteredData.length === 0) {
      percentText.innerText = '0%'; badge.style.backgroundColor = '#ccc'; badge.innerText = 'Sem Dados';
      if(chartInstance) chartInstance.destroy();
      return;
  }

  const mediaRisco = filteredData.reduce((acc, curr) => acc + curr.percentualRisco, 0) / filteredData.length;
  percentText.innerText = mediaRisco.toFixed(1) + '%';
  
  const bColor = mediaRisco <= 20 ? '#10B981' : mediaRisco <= 40 ? '#3B82F6' : mediaRisco <= 60 ? '#F59E0B' : mediaRisco <= 80 ? '#F97316' : '#EF4444';
  const bTxt = mediaRisco <= 20 ? 'Irrelevante' : mediaRisco <= 40 ? 'Baixo' : mediaRisco <= 60 ? 'Moderado' : mediaRisco <= 80 ? 'Alto' : 'Grave';
  
  let dTxt = '';
  if(mediaRisco <= 20) dTxt = 'Indica uma situação controlada, onde os fatores de risco têm uma influência mínima. Reflete um ambiente de trabalho seguro e saudável com relação àquele fator específico.';
  else if(mediaRisco <= 40) dTxt = 'Refere-se a riscos que são normalmente geridos adequadamente, mas que ainda necessitam de atenção para não evoluir para níveis mais altos.';
  else if(mediaRisco <= 60) dTxt = 'Sinaliza riscos que podem impactar negativamente o ambiente de trabalho se não forem abordados adequadamente. Fazer análise preliminar.';
  else if(mediaRisco <= 80) dTxt = 'Indica fatores de risco que estão contribuindo significativamente para o estresse psicossocial ou outros problemas no ambiente de trabalho.';
  else dTxt = 'Representa uma situação crítica que requer atenção urgente. Os riscos são severos e podem estar afetando de maneira substancial a saúde e o bem-estar dos trabalhadores.';
  
  badge.style.backgroundColor = bColor; badge.innerText = bTxt;
  document.getElementById('dash-risk-desc').innerText = dTxt;

  let groupKey = fEmp.value ? 'unidade_negocio' : 'empresa';
  let title = fEmp.value ? 'Risco por Unidade' : 'Risco por Empresa';

  const agp = filteredData.reduce((acc, obj) => {
    let k = obj.demographics[groupKey] || "Não Definido";
    if(!acc[k]) acc[k] = { total:0, count:0 };
    acc[k].total += obj.percentualRisco; acc[k].count++; return acc;
  }, {});

  const labels = Object.keys(agp);
  const data = labels.map(l => (agp[l].total / agp[l].count));
  const bgColors = data.map(v => v <= 20 ? '#10B981' : v <= 40 ? '#3B82F6' : v<=60 ? '#F59E0B' : v<=80 ?'#F97316' : '#EF4444');

  if(chartInstance) chartInstance.destroy();
  
  const goalLinePlugin = {
    id: 'goalLine',
    afterDraw: (chart) => {
      const ctx = chart.ctx; const yAxis = chart.scales.y; const xAxis = chart.scales.x;
      const yPos = yAxis.getPixelForValue(40);
      ctx.save(); ctx.beginPath(); ctx.moveTo(xAxis.left, yPos); ctx.lineTo(xAxis.right, yPos);
      ctx.lineWidth = 2; ctx.strokeStyle = '#10B981'; ctx.setLineDash([5, 5]); ctx.stroke();
      ctx.fillStyle = '#10B981'; ctx.font = 'bold 12px Inter'; ctx.fillText('Meta Máx (40%)', xAxis.right - 100, yPos - 10); ctx.restore();
    }
  };

  chartInstance = new Chart(ctx, { 
    type: 'bar', 
    data: { labels, datasets: [{ label: title, data, backgroundColor: bgColors, borderRadius: 4 }] }, 
    options: { 
      scales: { y: { beginAtZero: true, max: 100 } },
      onClick: (e, activeElements) => {
        if(activeElements.length > 0) {
          const idx = activeElements[0].index;
          openDrillDown(labels[idx], groupKey);
        }
      }
    },
    plugins: [goalLinePlugin]
  });
}

// ----------------------------------------------------
// DRILL DOWN MODAL
// ----------------------------------------------------
let drillDownChartInstance = null;

function openDrillDown(labelValue, groupKey) {
   const filteredData = getFilteredData().filter(item => item.demographics[groupKey] === labelValue || (!item.demographics[groupKey] && labelValue === 'Não Definido'));
   const validData = filteredData.filter(i => i.respostas_raw && i.respostas_raw.length === questions.length);
   
   if(validData.length === 0) {
       alert("Não há questionários mais recentes com respostas individuais gravadas para " + labelValue + ". Preencha um teste novo para analisar.");
       return;
   }
   
   const avgPerQuestion = Array.from({length: questions.length}, () => ({ sum: 0, count: 0 }));
   validData.forEach(item => {
       item.respostas_raw.forEach((answer, qIdx) => {
           avgPerQuestion[qIdx].sum += answer * 20;
           avgPerQuestion[qIdx].count++;
       });
   });

   const averages = avgPerQuestion.map(q => q.count > 0 ? (q.sum / q.count) : 0);
   let counts = [0, 0, 0, 0, 0];
   const chartData = [];
   const bgColors = [];

   averages.forEach(avg => {
       if(avg <= 20) { counts[0]++; bgColors.push('#10B981'); }
       else if(avg <= 40) { counts[1]++; bgColors.push('#4ADE80'); }
       else if(avg <= 60) { counts[2]++; bgColors.push('#FACC15'); }
       else if(avg <= 80) { counts[3]++; bgColors.push('#F97316'); }
       else { counts[4]++; bgColors.push('#EF4444'); }
       chartData.push(avg);
   });

   const labelWrap = text => { const arr = text.match(/.{1,70}(\s|$)/g) || [text]; return arr.map(s => s.trim()); };
   const labels = questions.map((q, i) => [`Q${i+1}:`] .concat(labelWrap(q.text)));

   const totalQ = questions.length;
   document.getElementById('drill-down-summary').innerHTML = `
      <div class="drill-summary-box ds-1"><span class="ds-title">Irrelevante (0-20%)</span>${counts[0]} perg. (${((counts[0]/totalQ)*100).toFixed(0)}%)</div>
      <div class="drill-summary-box ds-2"><span class="ds-title">Baixo (20-40%)</span>${counts[1]} perg. (${((counts[1]/totalQ)*100).toFixed(0)}%)</div>
      <div class="drill-summary-box ds-3"><span class="ds-title">Moderado (40-60%)</span>${counts[2]} perg. (${((counts[2]/totalQ)*100).toFixed(0)}%)</div>
      <div class="drill-summary-box ds-4"><span class="ds-title">Alto (60-80%)</span>${counts[3]} perg. (${((counts[3]/totalQ)*100).toFixed(0)}%)</div>
      <div class="drill-summary-box ds-5"><span class="ds-title">Grave (80-100%)</span>${counts[4]} perg. (${((counts[4]/totalQ)*100).toFixed(0)}%)</div>
   `;

   document.getElementById('drill-down-title').innerText = `Gestão de Risco: ${labelValue} (${validData.length} avaliações processadas no detalhe)`;
   document.getElementById('drill-down-modal').classList.add('active');
   const ctx = document.getElementById('drillDownChart').getContext('2d');
   if(drillDownChartInstance) drillDownChartInstance.destroy();
   
   drillDownChartInstance = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: labels,
           datasets: [
               { label: 'Risco Médio da Pergunta', data: chartData, backgroundColor: bgColors }
           ]
       },
       options: {
           indexAxis: 'y',
           scales: { x: { max: 100 }, y: { ticks: { font: { size: 10 } } } },
           maintainAspectRatio: false,
           plugins: {
               tooltip: { callbacks: { label: function() { return ''; }, afterLabel: function(ctx) { return "Média: " + averages[ctx.dataIndex].toFixed(1) + "%"; } } }
           }
       }
   });
}

document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('drill-down-modal').classList.remove('active');
});
