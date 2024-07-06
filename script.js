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
const geographyQuestions = [
    {
        question: "Qual país da África tem o espanhol como idioma oficial?",
        answers: ["Marrocos", "Guiné Equatorial", "Burkina Faso", "Libéria"],
        correct: 1
    },
    {
        question: "A cidade de Abu Dhabi está localizada em:",
        answers: ["Catar", "Arábia Saudita", "Emirados Árabes Unidos", "Kuwait"],
        correct: 2
    },
    {
        question: "Qual país forma o chamado 'Chifre da África'?",
        answers: ["Eritreia", "Somália", "Etiópia", "Quênia"],
        correct: 1
    },
    {
        question: "Uganda é um dos maiores países da África. ",
        answers: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "Qual é o país menor da América do Sul?",
        answers: ["Uruguai", "Equador", "Guiana", "Suriname"],
        correct: 3
    },
    {
        question: "O Chile, após uma guerra, tirou a saída ao mar da Bolívia, incorporando essas terras valiosas pela mineração de cobre. Desde então, o Chile passou a ter uma área maior que a da Bolívia. ",
        answers: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "A chamada 'Mesopotâmia asiática' é a região que fica entre os rios Tigre e Eufrates, que desembocam no:",
        answers: ["Mar Negro", "Mar Cáspio", "Golfo de Omã", "Golfo Pérsico", "Golfo de Áden"],
        correct: 3
    },
    {
        question: "Liechtenstein é um pequeno país (microestado) da Europa localizado:",
        answers: ["Entre Luxemburgo e Alemanha", "Entre França e Suíça", "Entre Áustria e Alemanha", "Entre Suíça e Áustria"],
        correct: 3
    },
    {
        question: "Andorra é outro dos seis microestados da Europa. Onde está localizado?",
        answers: ["Dentro da França", "Entre França e Alemanha", "Entre Bélgica e Alemanha", "Entre França e Espanha"],
        correct: 3
    },
    {
        question: "Qual desses países NÃO está localizado no continente africano?",
        answers: ["Guiné", "Papua Nova Guiné", "Guiné-Bissau", "Guiné Equatorial"],
        correct: 1
    },
    {
        question: "Qual desses países NÃO pertence à União Europeia?",
        answers: ["Finlândia", "Suécia", "Noruega", "Dinamarca"],
        correct: 2
    },
    {
        question: "A denominação 'Grã-Bretanha' refere-se a:",
        answers: ["Inglaterra + Irlanda do Norte", "Inglaterra + Escócia", "Inglaterra + País de Gales", "Inglaterra + Escócia + País de Gales", "Inglaterra + Escócia + País de Gales + Irlanda", "Inglaterra + Escócia + País de Gales + Irlanda do Norte"],
        correct: 3
    },
    {
        question: "A denominação 'Reino Unido' refere-se a:",
        answers: ["Inglaterra + Irlanda do Norte", "Inglaterra + Escócia", "Inglaterra + País de Gales", "Inglaterra + Escócia + País de Gales", "Inglaterra + Escócia + País de Gales + Irlanda", "Inglaterra + Escócia + País de Gales + Irlanda do Norte"],
        correct: 5
    },
    {
        question: "Qual desses países ainda pertence à União Europeia em 2024 após o Brexit?",
        answers: ["Escócia", "Irlanda", "País de Gales", "Irlanda do Norte"],
        correct: 1
    },
    {
        question: "O 'espaço Schengen' na Europa é a área de livre circulação sem controles fronteiriços entre países. Quais países compreende?",
        answers: ["Todos os países da União Europeia", "Apenas alguns países da União Europeia", "Todos os países da União Europeia e alguns de fora", "Alguns países da União Europeia e alguns de fora"],
        correct: 2
    },
    {
        question: "A cidade de Istambul tem a particularidade de estar entre dois continentes, Europa e Ásia, separada pelo Estreito de Bósforo, que une:",
        answers: ["Mar Negro e Mar Cáspio", "Mar Egeu e Mar Negro", "Mar Jônico e Mar de Mármara", "Mar Negro e Mar de Mármara"],
        correct: 3
    },
    {
        question: "Qual desses países NÃO faz parte dos Balcãs?",
        answers: ["Croácia", "Romênia", "Armênia", "Sérvia", "Moldávia", "Macedônia"],
        correct: 1
    },
    {
        question: "O Estreito de Dardanelos conecta dois mares. Quais são?",
        answers: ["Mar Negro e Mar Cáspio", "Mar Egeu e Mar Negro", "Mar de Mármara e Mar Egeu", "Mar Tirreno e Mar Jônico"],
        correct: 2
    },
    {
        question: "Desde a Sicília (sul da Itália) até o continente africano há pouco mais de 100 km. Qual é o país que está logo em frente?",
        answers: ["Tunísia", "Argélia", "Líbia", "Marrocos"],
        correct: 0
    },
    {
        question: "Dentro da Europa está Kaliningrado, um território pertencente à Rússia. Antes da Segunda Guerra Mundial, era parte da Prússia Oriental (pertencente à Alemanha). Mas agora está desconectado da Rússia e cercado por países da União Europeia e alguns até pertencentes à OTAN. A Rússia tem interesse em manter Kaliningrado porque tem um porto operacional durante todo o ano, ao contrário dos portos russos que congelam no inverno. Onde está esse porto?",
        answers: ["No Mar Báltico", "No Mar do Norte", "No Mar Negro", "No Golfo da Finlândia"],
        correct: 0
    },
    {
        question: "Jacarta é a capital de:",
        answers: ["Filipinas", "Indonésia", "Malásia", "Singapura"],
        correct: 1
    },
    {
        question: "A ilha de Malta está no Mar Mediterrâneo, em frente à costa africana. A quem pertence?",
        answers: ["Líbia", "Tunísia", "É um estado independente membro da União Europeia", "É um estado independente membro da União Africana"],
        correct: 2
    },
    {
        question: "Qual é a montanha mais alta da Espanha?",
        answers: ["O Aneto nos Montes Pirineus", "O vulcão Teide na ilha de Tenerife", "O Mulhacén na Cordilheira Bética", "O Torre Cerredo no maciço Picos da Europa"],
        correct: 1
    },
    {
        question: "O Euro é a moeda mais utilizada no continente europeu. Quais países a utilizam?",
        answers: ["Todos os países da União Europeia", "Apenas alguns países da União Europeia", "Todos os países da União Europeia e alguns de fora", "Alguns países da União Europeia e alguns de fora"],
        correct: 3
    },
    {
        question: "A ilha de Chipre está no Mar Mediterrâneo, em frente à Turquia e geograficamente pertence ao Oriente Próximo. Qual destas afirmações é verdadeira?",
        answers: ["Chipre pertence à Turquia", "É um país soberano", "É uma colônia britânica", "Pertence à Grécia"],
        correct: 1
    },
    {
        question: "Qual é a capital da Austrália?",
        answers: ["Sydney", "Melbourne", "Adelaide", "Canberra"],
        correct: 3
    },
    {
        question: "Onde está localizada a ilha de Terra Nova?",
        answers: ["América do Norte", "América do Sul", "Em frente à África", "Perto do Japão"],
        correct: 0
    },
    {
        question: "Perto de qual país está localizada a ilha do Sri Lanka (ex-Ceilão)?",
        answers: ["Myanmar (ex-Birmânia)", "Malásia", "Índia", "Bangladesh"],
        correct: 2
    },
    {
        question: "A Geórgia é um país montanhoso. Quais são essas montanhas?",
        answers: ["Os Cárpatos", "Os Montes Urais", "Os Balcãs", "O Cáucaso"],
        correct: 3
    },
    {
        question: "No Mediterrâneo existem várias ilhas grandes. Qual é a maior dessas?",
        answers: ["Maiorca", "Creta", "Córsega", "Sardenha"],
        correct: 3
    },
    {
        question: "O Mediterrâneo é composto por pequenos mares, cada um com sua própria designação. Qual destes NÃO faz parte do Mediterrâneo?",
        answers: ["Mar da Ligúria", "Mar de Alborão", "Mar Egeu", "Mar da Líbia", "Mar de Célebes"],
        correct: 4
    },
    {
        question: "A quem pertence a Groenlândia?",
        answers: ["EUA", "Noruega", "Canadá", "Dinamarca"],
        correct: 3
    },
    {
        question: "Qual desses grandes lagos é o maior?",
        answers: ["Lago Baikal, na Rússia", "Lago Superior, entre EUA e Canadá", "Lago Vitória, entre Uganda, Quênia e Tanzânia", "Lago Titicaca, entre Bolívia e Peru"],
        correct: 1
    },
    {
        question: "Quais países têm costas sobre o Mar Amarelo?",
        answers: ["China e Japão", "China e Coreia", "China e Vietnã", "China e Taiwan"],
        correct: 1
    },
    {
        question: "É sabido que a forma da África e da América do Sul se encaixam uma na outra e é porque antigamente estavam unidas. O extremo sul da África, na latitude de qual cidade da América do Sul está?",
        answers: ["Rio de Janeiro", "Porto Alegre", "Buenos Aires", "Puerto Madryn"],
        correct: 1
    },
    {
        question: "Em qual oceano está o Mar de Flores?",
        answers: ["Atlântico", "Pacífico", "Índico", "Antártico"],
        correct: 2
    },
    {
        question: "Desconsiderando o 'Lago Maracaibo' na Venezuela, que tem uma conexão direta com o mar, qual é o maior lago natural (não reservatório) da América do Sul?",
        answers: ["Lago Titicaca (Bolívia-Peru)", "O chamado Mar Chiquita (embora seja um lago) na província de Córdoba, Argentina", "General Carrera-Buenos Aires (Chile-Argentina)", "Lago Argentino, província de Santa Cruz, Argentina"],
        correct: 0
    },
    {
        question: "Qual desses países NÃO é candidato a entrar na União Europeia?",
        answers: ["Macedônia", "Kosovo", "Moldávia", "Croácia"],
        correct: 3
    },
    {
        question: "Qual é a cidade mais populosa da América?",
        answers: ["Cidade do México", "São Paulo", "Buenos Aires", "Rio de Janeiro"],
        correct: 1
    },
    {
        question: "Onde está localizado o estado de Washington nos EUA?",
        answers: ["Na costa Oeste", "Na costa Leste", "No sul do país"],
        correct: 0
    },
    {
        question: "Em qual país está a cidade de Esmirna?",
        answers: ["Turquia", "Grécia", "Albânia", "Bulgária"],
        correct: 0
    },
    {
        question: "Esmirna é uma cidade costeira? Nesse caso, em qual mar?",
        answers: ["Mar Jônico", "Mar de Mármara", "Mar de Mirtos", "Mar Egeu", "Não é uma cidade costeira"],
        correct: 3
    },
    {
        question: "Em qual país está a cidade de Karachi?",
        answers: ["Paquistão", "Irã", "Turcomenistão", "Índia"],
        correct: 0
    },
    {
        question: "Taiwan e Hong Kong são duas ilhas próximas à China. ",
        answers: ["Verdadeiro", "Falso"],
        correct: 1
    },
    {
        question: "Sabe-se popularmente que o Japão é uma ilha, mas isso não é correto, pois é formado por várias ilhas. Quantas aproximadamente?",
        answers: ["Entre 10 e 50", "Entre 100 e 500", "Entre 1000 e 5000", "Mais de 5000"],
        correct: 3
    },
    {
        question: "Em qual país está a região da Transilvânia?",
        answers: ["Hungria", "Romênia", "Ucrânia", "Moldávia"],
        correct: 1
    }
];


// Sounds
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const timeoutSound = document.getElementById('timeout-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

const questions = {
    'estados-brasil': [],
    'europa': [],
    'america': [],
    'africa': [],
    'oceania': [],
    'asia': [],
    'geografia': []
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuestions(capitalsArray, categoryKey) {
    capitalsArray.forEach(({ pais, estado, capital }) => {
        const incorrectCapitals = capitalsArray
            .filter(item => item.capital !== capital)
            .map(item => item.capital);
        shuffle(incorrectCapitals);

        const answers = [capital, ...incorrectCapitals.slice(0, 4)];
        shuffle(answers);

        const question = {
            country: pais || estado,
            answers: answers,
            correct: answers.indexOf(capital)
        };

        questions[categoryKey].push(question);
    });
}

generateQuestions(estadosCapitais.map(item => ({ pais: item.estado, capital: item.capital })), 'estados-brasil');
generateQuestions(europaCapitais, 'europa');
generateQuestions(africaCapitais, 'africa');
generateQuestions(asiaCapitais, 'asia');
generateQuestions(americaCapitais, 'america');
generateQuestions(oceaniaCapitais, 'oceania');
geographyQuestions.forEach(question => questions['geografia'].push(question));

console.log(questions);
let currentCategory;
let currentQuestionIndex;
let score;
let correctAnswers;
let wrongAnswers;
let totalQuestions = 10;

/* Atualize o bloco do script.js */
document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', () => {
        document.getElementById('check-answer').disabled = false;
    });
});

function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    
    // Verifica se a categoria é "geografia" para exibir a pergunta diretamente
    if (currentCategory === 'geografia') {
        document.getElementById('question').textContent = questionData.question;
    } else {
        document.getElementById('question').textContent = `Qual é a capital de ${questionData.country}?`;
    }

    for (let i = 0; i < questionData.answers.length & i < 5; i++) {
        const label = document.getElementById(`label${i + 1}`);
        const input = document.getElementById(`answer${i + 1}`);
        input.value = i;
        input.checked = false;
        input.disabled = false; // Enable radio buttons
        label.style.display = 'flex'; // Ensure the label is visible
        label.childNodes[1].textContent = questionData.answers[i];
    }

    // Oculta as opções de resposta que não são usadas
    for (let i = questionData.answers.length; i < 5; i++) {
        document.getElementById(`label${i + 1}`).style.display = 'none';
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

    // Disable all radio buttons
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });

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

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('restart-game').addEventListener('click', restartGame);