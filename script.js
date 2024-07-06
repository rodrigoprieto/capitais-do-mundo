// Capitais
const estadosCapitais = [
    { estado: "Acre", capital: "Rio Branco" },
    { estado: "Alagoas", capital: "Maceió" },
    { estado: "Amapá", capital: "Macapá" },
    { estado: "Amazonas", capital: "Manaus" },
    { estado: "Bahia", capital: "Salvador" },
    { estado: "Ceará", capital: "Fortaleza" },
    { estado: "Distrito Federal", capital: "Brasília" },
    { estado: "Espírito Santo", capital: "Vitória" },
    { estado: "Goiás", capital: "Goiânia" },
    { estado: "Maranhão", capital: "São Luís" },
    { estado: "Mato Grosso", capital: "Cuiabá" },
    { estado: "Mato Grosso do Sul", capital: "Campo Grande" },
    { estado: "Minas Gerais", capital: "Belo Horizonte" },
    { estado: "Pará", capital: "Belém" },
    { estado: "Paraíba", capital: "João Pessoa" },
    { estado: "Paraná", capital: "Curitiba" },
    { estado: "Pernambuco", capital: "Recife" },
    { estado: "Piauí", capital: "Teresina" },
    { estado: "Rio de Janeiro", capital: "Rio de Janeiro" },
    { estado: "Rio Grande do Norte", capital: "Natal" },
    { estado: "Rio Grande do Sul", capital: "Porto Alegre" },
    { estado: "Rondônia", capital: "Porto Velho" }, 
    { estado: "Roraima", capital: "Boa Vista" },
    { estado: "Santa Catarina", capital: "Florianópolis" },
    { estado: "São Paulo", capital: "São Paulo" },
    { estado: "Sergipe", capital: "Aracaju" },
    { estado: "Tocantins", capital: "Palmas" }
];
const europaCapitais = [
    { pais: 'Albânia', capital: 'Tirana' },
    { pais: 'Alemanha', capital: 'Berlim' },
    { pais: 'Andorra', capital: 'Andorra-a-Velha' },
    { pais: 'Áustria', capital: 'Viena' },
    { pais: 'Bielorrússia', capital: 'Minsk' },
    { pais: 'Bélgica', capital: 'Bruxelas' },
    { pais: 'Bósnia e Herzegovina', capital: 'Sarajevo' },
    { pais: 'Bulgária', capital: 'Sófia' },
    { pais: 'Chipre', capital: 'Nicósia' },
    { pais: 'Croácia', capital: 'Zagreb' },
    { pais: 'Dinamarca', capital: 'Copenhague' },
    { pais: 'Eslováquia', capital: 'Bratislava' },
    { pais: 'Eslovênia', capital: 'Liubliana' },
    { pais: 'Espanha', capital: 'Madri' },
    { pais: 'Estônia', capital: 'Tallinn' },
    { pais: 'Finlândia', capital: 'Helsinque' },
    { pais: 'França', capital: 'Paris' },
    { pais: 'Geórgia', capital: 'Tbilisi' },
    { pais: 'Grécia', capital: 'Atenas' },
    { pais: 'Hungria', capital: 'Budapeste' },
    { pais: 'Islândia', capital: 'Reykjavik' },
    { pais: 'Irlanda', capital: 'Dublin' },
    { pais: 'Itália', capital: 'Roma' },
    { pais: 'Kosovo', capital: 'Pristina' },
    { pais: 'Letônia', capital: 'Riga' },
    { pais: 'Liechtenstein', capital: 'Vaduz' },
    { pais: 'Lituânia', capital: 'Vilnius' },
    { pais: 'Luxemburgo', capital: 'Luxemburgo' },
    { pais: 'Malta', capital: 'Valeta' },
    { pais: 'Moldávia', capital: 'Chisinau' },
    { pais: 'Mônaco', capital: 'Mônaco' },
    { pais: 'Montenegro', capital: 'Podgorica' },
    { pais: 'Noruega', capital: 'Oslo' },
    { pais: 'Países Baixos', capital: 'Amsterdã' },
    { pais: 'Polônia', capital: 'Varsóvia' },
    { pais: 'Portugal', capital: 'Lisboa' },
    { pais: 'Reino Unido', capital: 'Londres' },
    { pais: 'República Tcheca', capital: 'Praga' },
    { pais: 'Romênia', capital: 'Bucareste' },
    { pais: 'Rússia', capital: 'Moscou' },
    { pais: 'San Marino', capital: 'San Marino' },
    { pais: 'Sérvia', capital: 'Belgrado' },
    { pais: 'Suécia', capital: 'Estocolmo' },
    { pais: 'Suíça', capital: 'Berna' },
    { pais: 'Ucrânia', capital: 'Kiev' },
    { pais: 'Vaticano', capital: 'Vaticano' }
];
const africaCapitais = [
    { pais: 'África do Sul', capital: 'Pretória' },
    { pais: 'Angola', capital: 'Luanda' },
    { pais: 'Argélia', capital: 'Argel' },
    { pais: 'Benim', capital: 'Porto-Novo' },
    { pais: 'Botswana', capital: 'Gaborone' },
    { pais: 'Burkina Faso', capital: 'Ouagadougou' },
    { pais: 'Burundi', capital: 'Gitega' },
    { pais: 'Cabo Verde', capital: 'Praia' },
    { pais: 'Camarões', capital: 'Yaoundé' },
    { pais: 'Chade', capital: "N'Djamena" },
    { pais: 'Comores', capital: 'Moroni' },
    { pais: 'Congo-Brazzaville', capital: 'Brazzaville' },
    { pais: 'Congo-Kinshasa', capital: 'Kinshasa' },
    { pais: 'Costa do Marfim', capital: 'Yamoussoukro' },
    { pais: 'Djibouti', capital: 'Djibouti' },
    { pais: 'Egito', capital: 'Cairo' },
    { pais: 'Eritreia', capital: 'Asmara' },
    { pais: 'Eswatini', capital: 'Mbabane' },
    { pais: 'Etiópia', capital: 'Addis Abeba' },
    { pais: 'Gabão', capital: 'Libreville' },
    { pais: 'Gâmbia', capital: 'Banjul' },
    { pais: 'Gana', capital: 'Acra' },
    { pais: 'Guiné', capital: 'Conacri' },
    { pais: 'Guiné-Bissau', capital: 'Bissau' },
    { pais: 'Guiné Equatorial', capital: 'Malabo' },
    { pais: 'Lesoto', capital: 'Maseru' },
    { pais: 'Libéria', capital: 'Monróvia' },
    { pais: 'Líbia', capital: 'Trípoli' },
    { pais: 'Madagáscar', capital: 'Antananarivo' },
    { pais: 'Malawi', capital: 'Lilongwe' },
    { pais: 'Mali', capital: 'Bamako' },
    { pais: 'Marrocos', capital: 'Rabat' },
    { pais: 'Maurícia', capital: 'Port Louis' },
    { pais: 'Mauritânia', capital: 'Nouakchott' },
    { pais: 'Moçambique', capital: 'Maputo' },
    { pais: 'Namíbia', capital: 'Windhoek' },
    { pais: 'Níger', capital: 'Niamey' },
    { pais: 'Nigéria', capital: 'Abuja' },
    { pais: 'Quénia', capital: 'Nairóbi' },
    { pais: 'República Centro-Africana', capital: 'Bangui' },
    { pais: 'Ruanda', capital: 'Kigali' },
    { pais: 'São Tomé e Príncipe', capital: 'São Tomé' },
    { pais: 'Senegal', capital: 'Dacar' },
    { pais: 'Serra Leoa', capital: 'Freetown' },
    { pais: 'Seychelles', capital: 'Victoria' },
    { pais: 'Somália', capital: 'Mogadíscio' },
    { pais: 'Sudão', capital: 'Cartum' },
    { pais: 'Sudão do Sul', capital: 'Juba' },
    { pais: 'Tanzânia', capital: 'Dodoma' },
    { pais: 'Togo', capital: 'Lomé' },
    { pais: 'Tunísia', capital: 'Túnis' },
    { pais: 'Uganda', capital: 'Kampala' },
    { pais: 'Zâmbia', capital: 'Lusaka' },
    { pais: 'Zimbábue', capital: 'Harare' }
];
const asiaCapitais = [
    { pais: 'Afeganistão', capital: 'Cabul' },
    { pais: 'Arábia Saudita', capital: 'Riad' },
    { pais: 'Armênia', capital: 'Erevan' },
    { pais: 'Azerbaijão', capital: 'Baku' },
    { pais: 'Bahrein', capital: 'Manama' },
    { pais: 'Bangladesh', capital: 'Daca' },
    { pais: 'Brunei', capital: 'Bandar Seri Begawan' },
    { pais: 'Butão', capital: 'Thimphu' },
    { pais: 'Camboja', capital: 'Phnom Penh' },
    { pais: 'Catar', capital: 'Doha' },
    { pais: 'Cazaquistão', capital: 'Astana' },
    { pais: 'China', capital: 'Pequim' },
    { pais: 'Chipre', capital: 'Nicósia' },
    { pais: 'Cingapura', capital: 'Cingapura' },
    { pais: 'Coreia do Norte', capital: 'Pyongyang' },
    { pais: 'Coreia do Sul', capital: 'Seul' },
    { pais: 'Emirados Árabes Unidos', capital: 'Abu Dhabi' },
    { pais: 'Filipinas', capital: 'Manila' },
    { pais: 'Geórgia', capital: 'Tbilisi' },
    { pais: 'Índia', capital: 'Nova Deli' },
    { pais: 'Indonésia', capital: 'Jacarta' },
    { pais: 'Irã', capital: 'Teerã' },
    { pais: 'Iraque', capital: 'Bagdá' },
    { pais: 'Israel', capital: 'Jerusalém' },
    { pais: 'Japão', capital: 'Tóquio' },
    { pais: 'Jordânia', capital: 'Amã' },
    { pais: 'Kuwait', capital: 'Cidade do Kuwait' },
    { pais: 'Laos', capital: 'Vientiane' },
    { pais: 'Líbano', capital: 'Beirute' },
    { pais: 'Malásia', capital: 'Kuala Lumpur' },
    { pais: 'Maldivas', capital: 'Malé' },
    { pais: 'Mianmar', capital: 'Naypyidaw' },
    { pais: 'Mongólia', capital: 'Ulaanbaatar' },
    { pais: 'Nepal', capital: 'Catmandu' },
    { pais: 'Omã', capital: 'Mascate' },
    { pais: 'Paquistão', capital: 'Islamabad' },
    { pais: 'Quirguistão', capital: 'Bisqueque' },
    { pais: 'Rússia', capital: 'Moscou' },
    { pais: 'Síria', capital: 'Damasco' },
    { pais: 'Sri Lanka', capital: 'Sri Jayawardenapura-Kotte' },
    { pais: 'Tailândia', capital: 'Bangkok' },
    { pais: 'Tajiquistão', capital: 'Duchambe' },
    { pais: 'Timor-Leste', capital: 'Díli' },
    { pais: 'Turcomenistão', capital: 'Ashgabat' },
    { pais: 'Turquia', capital: 'Ancara' },
    { pais: 'Uzbequistão', capital: 'Tashkent' },
    { pais: 'Vietnã', capital: 'Hanói' },
    { pais: 'Iêmen', capital: 'Sana' }
];
const americaCapitais = [
    { pais: 'Argentina', capital: 'Buenos Aires' },
    { pais: 'Bolívia', capital: 'Sucre' },
    { pais: 'Brasil', capital: 'Brasília' },
    { pais: 'Chile', capital: 'Santiago' },
    { pais: 'Colômbia', capital: 'Bogotá' },
    { pais: 'Equador', capital: 'Quito' },
    { pais: 'Guiana', capital: 'Georgetown' },
    { pais: 'Paraguai', capital: 'Assunção' },
    { pais: 'Peru', capital: 'Lima' },
    { pais: 'Suriname', capital: 'Paramaribo' },
    { pais: 'Uruguai', capital: 'Montevidéu' },
    { pais: 'Venezuela', capital: 'Caracas' },
    { pais: 'Canadá', capital: 'Ottawa' },
    { pais: 'Estados Unidos', capital: 'Washington, D.C.' },
    { pais: 'México', capital: 'Cidade do México' },
    { pais: 'Guatemala', capital: 'Cidade da Guatemala' },
    { pais: 'Belize', capital: 'Belmopan' },
    { pais: 'El Salvador', capital: 'San Salvador' },
    { pais: 'Honduras', capital: 'Tegucigalpa' },
    { pais: 'Nicarágua', capital: 'Manágua' },
    { pais: 'Costa Rica', capital: 'San José' },
    { pais: 'Panamá', capital: 'Cidade do Panamá' },
    { pais: 'Cuba', capital: 'Havana' },
    { pais: 'Haiti', capital: 'Porto Príncipe' },
    { pais: 'República Dominicana', capital: 'Santo Domingo' },
    { pais: 'Bahamas', capital: 'Nassau' },
    { pais: 'Barbados', capital: 'Bridgetown' },
    { pais: 'Trinidad e Tobago', capital: 'Porto Espanha' },
    { pais: 'Jamaica', capital: 'Kingston' },
    { pais: 'Granada', capital: 'Saint George\'s' },
    { pais: 'São Vicente e Granadinas', capital: 'Kingstown' },
    { pais: 'Santa Lúcia', capital: 'Castries' },
    { pais: 'Antígua e Barbuda', capital: 'Saint John\'s' },
    { pais: 'São Cristóvão e Nevis', capital: 'Basseterre' }
];
const oceaniaCapitais = [
    { pais: 'Austrália', capital: 'Canberra' },
    { pais: 'Fiji', capital: 'Suva' },
    { pais: 'Kiribati', capital: 'Tarawa' },
    { pais: 'Micronésia', capital: 'Palikir' },
    { pais: 'Nauru', capital: 'Yaren' },
    { pais: 'Nova Zelândia', capital: 'Wellington' },
    { pais: 'Palau', capital: 'Ngerulmud' },
    { pais: 'Papua Nova Guiné', capital: 'Port Moresby' },
    { pais: 'Samoa', capital: 'Apia' },
    { pais: 'Ilhas Salomão', capital: 'Honiara' },
    { pais: 'Tonga', capital: 'Nukualofa' },
    { pais: 'Tuvalu', capital: 'Funafuti' },
    { pais: 'Vanuatu', capital: 'Port Vila' },
    { pais: 'Ilhas Marshall', capital: 'Majuro' }
];

// Sounds
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const timeoutSound = document.getElementById('timeout-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');


let currentCategory;
let currentQuestionIndex;
let score;
let correctAnswers;
let wrongAnswers;
let totalQuestions = 5;

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('restart-game').addEventListener('click', restartGame);

function startGame() {
    currentCategory = document.getElementById('category').value;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    // Shuffle the questions for the current category
    questions[currentCategory] = shuffle(questions[currentCategory]);

    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadQuestion();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = {
    'estados-brasil': [],
    'europa': [],
    'america': [],
    'africa': [],
    'oceania': [],
    'asia': [],
    'todos': []
};

estadosCapitais.forEach(({ estado, capital }) => {
    // Selecione aleatoriamente 4 outras capitais que não sejam a correta
    const incorrectCapitals = estadosCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: estado,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['estados-brasil'].push(question);
});

europaCapitais.forEach(({ pais, capital }) => {
    // Selecione aleatoriamente 4 outras capitais que não sejam a correta
    const incorrectCapitals = europaCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: pais,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['europa'].push(question);
});

africaCapitais.forEach(({ pais, capital }) => {
    // Selecione aleatoriamente 4 outras capitais que não sejam a correta
    const incorrectCapitals = africaCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: pais,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['africa'].push(question);
});

americaCapitais.forEach(({ pais, capital }) => {
    const incorrectCapitals = americaCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: pais,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['america'].push(question);
});

oceaniaCapitais.forEach(({ pais, capital }) => {
    const incorrectCapitals = oceaniaCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: pais,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['oceania'].push(question);
});

asiaCapitais.forEach(({ pais, capital }) => {
    // Selecione aleatoriamente 4 outras capitais que não sejam a correta
    const incorrectCapitals = asiaCapitais
        .filter(ec => ec.capital !== capital)
        .map(ec => ec.capital);
    shuffle(incorrectCapitals);

    const options = [capital, ...incorrectCapitals.slice(0, 4)];
    shuffle(options);

    const question = {
        country: pais,
        answers: options,
        correct: options.indexOf(capital)
    };

    questions['asia'].push(question);
});


/* Atualize o bloco do script.js */
document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', () => {
        document.getElementById('check-answer').disabled = false;
    });
});

function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').textContent = `Qual é a capital de ${questionData.country}?`;
    for (let i = 0; i < 5; i++) {
        const label = document.getElementById(`label${i + 1}`);
        const input = document.getElementById(`answer${i + 1}`);
        input.value = i;
        input.checked = false;
        label.childNodes[1].textContent = questionData.answers[i];
    }
    document.getElementById('check-answer').disabled = true;  // Disable the button initially

    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

// No início do arquivo script.js, adicione a linha abaixo para garantir que o botão esteja desativado por padrão
document.getElementById('check-answer').disabled = true;


/* Atualize o bloco do script.js */
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Por favor, selecione uma resposta.');
        return;
    }

    const answerIndex = parseInt(selectedAnswer.value);
    const questionData = questions[currentCategory][currentQuestionIndex];

    const feedbackElement = document.getElementById('feedback');
    document.getElementById('check-answer').disabled = true;
    if (answerIndex === questionData.correct) {
        score += 5;
        correctAnswers++;
        correctSound.play();
        feedbackElement.textContent = 'Correto!';
    } else {
        score -= 2;
        wrongAnswers++;
        incorrectSound.play();
        feedbackElement.textContent = `Errado! A resposta correta é: ${questionData.answers[questionData.correct]}`;
    }

    document.getElementById(`answer${answerIndex + 1}`).checked = false;
    currentQuestionIndex++;
    setTimeout(() => {
        feedbackElement.textContent = '';
        if (currentQuestionIndex < totalQuestions) {
            loadQuestion();
        } else {
            endGame();
            winSound.play();
        }
    }, 2000);
}


function endGame() {
    updateProgressBar();
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('correct-answers').textContent = `Acertos: ${correctAnswers}`;
    document.getElementById('wrong-answers').textContent = `Erros: ${wrongAnswers}`;
    document.getElementById('total-score').textContent = `Pontuação total: ${score}`;
}

function restartGame() {
    currentQuestionIndex = 0;
    updateProgressBar();
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
