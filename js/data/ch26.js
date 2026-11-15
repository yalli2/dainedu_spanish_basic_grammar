window.CH = {
  id:'26',
  intro:'어디로, 어느 방향으로, 어디까지, 어디서부터 — 움직임과 방향을 나타내는 전치사 a, hacia, hasta, de, desde 와 위치 관계 en, sobre, entre를 배웁니다.',
  sections:[
    {type:'table', title:'움직임·방향의 전치사', head:['전치사','뜻','예문'], es:[0,2],
      rows:[['a','목적지 (~로), 거리 (~에)','Voy a Madrid. / Vamos a la playa. / Está a 10 km de aquí. / Vive a cinco minutos.'],['hacia','방향 (~쪽으로 = en dirección a)','Camina hacia el río. / Miró hacia la ventana. / Hacia el norte.'],['hasta','구간의 종료점 (~까지)','Este tren va hasta Sevilla. / Caminamos hasta la plaza.'],['de','출발점·출신 (~에서)','Vengo de la oficina. / Salgo de casa a las ocho. / Soy de Corea.'],['desde','구간·움직임의 시작점 (~에서부터)','Desde aquí se ve el mar. / Vine andando desde el centro.'],['de/desde … a/hasta','시작점과 종료점','Fuimos de Madrid a Toledo. / Hay 100 km desde aquí hasta la costa.'],['por','경유·통과 (~을 지나서, ~을 통해)','Pasamos por Zaragoza. / Entró por la ventana. / Paseo por el parque.']],
      after:'<div class="callout note"><div class="em">📌</div><div><b>de vs desde</b>: 중요한 것이 <b>출발점</b>이고 구간이 아닐 때는 desde를 쓰지 않고 de를 씁니다: Vengo ==de== casa. (○) / Vengo desde casa. (어색) — desde는 "거기서부터 여기까지"라는 <b>거리감·구간</b>이 느껴질 때: Vine ==desde== Busan en coche.</div></div>'},
    {type:'table', title:'일반적 상황·위치 관계: en / sobre / entre', head:['전치사','뜻','예문'], es:[0,2],
      rows:[['en','~에, ~안에, ~위에 (일반적인 위치)','Estoy en casa. / El libro está en la mesa. / Vivo en Lima. / Está en el cajón.'],['en + 교통수단','~을 타고','Voy en coche / en tren / en avión / en bici (단, a pie 걸어서, a caballo)'],['sobre','~위에 (표면 위, 접촉)','El vaso está sobre la mesa. / El avión vuela sobre la ciudad.'],['entre','~사이에 (둘 이상)','La farmacia está entre el banco y la panadería. / Entre tú y yo.']],
      after:'<p><b>en</b>은 가장 일반적인 위치 전치사입니다. "위에"는 en과 sobre 둘 다 가능하지만, sobre가 "표면 위"를 더 분명히 합니다: El gato está ==en/sobre== la silla. "안에"를 분명히 하려면 <b>dentro de</b> (27장).</p>'},
    {type:'examples', title:'🔊 예문', items:[
      {es:'Todos los días voy a la universidad en autobús.', ko:'매일 버스로 대학에 간다. (a 목적지, en 교통수단)'},
      {es:'El barco navega hacia el sur.', ko:'배가 남쪽으로 항해한다. (방향)'},
      {es:'Este autobús llega hasta el aeropuerto.', ko:'이 버스는 공항까지 간다. (종료점)'},
      {es:'Salimos de Sevilla a las seis y llegamos a Granada a las nueve.', ko:'6시에 세비야에서 출발해 9시에 그라나다에 도착했다.'},
      {es:'Desde mi ventana se ve el mar.', ko:'내 창문에서 바다가 보인다. (시작점)'},
      {es:'Vamos a pasar por Toledo de camino a Madrid.', ko:'마드리드 가는 길에 톨레도를 지날 것이다. (경유)'},
      {es:'Las llaves están sobre la mesa, entre los libros.', ko:'열쇠는 탁자 위, 책들 사이에 있다.'},
      {es:'Mi casa está a dos kilómetros de la estación.', ko:'우리 집은 역에서 2km 떨어져 있다. (a 거리 + de 기준점)'},
    ]},
    {type:'reveal', title:'🧠 그림을 떠올리며 — 어떤 전치사?', items:[
      {q:'🚶→🏠 Ana camina ___ su casa. (집 쪽으로, 방향)', a:'hacia'},
      {q:'✈️ 🌆 El avión vuela ___ la ciudad. (도시 위로)', a:'sobre'},
      {q:'🏦 💊 🍞 La farmacia está ___ el banco y la panadería.', a:'entre'},
      {q:'🚗 Madrid ━━━━━ Barcelona: Viajamos ___ Madrid ___ Barcelona.', a:'de … a / desde … hasta'},
      {q:'🏠→ Salgo ___ casa a las ocho.', a:'de'},
      {q:'📦 El regalo está ___ la caja.', a:'en (= dentro de)'},
    ]},
  ],
  exercises:[
    {type:'mc', title:'알맞은 전치사 고르기', items:[
      {q:'Voy ___ la oficina en metro.', opts:['a','hacia','hasta'], a:0},
      {q:'El río corre ___ el mar. (바다 쪽으로)', opts:['a','hacia','de'], a:1},
      {q:'Esta carretera llega ___ la frontera. (국경까지)', opts:['a','hacia','hasta'], a:2},
      {q:'Vengo ___ la biblioteca.', opts:['de','a','hacia'], a:0},
      {q:'___ la torre se ve toda la ciudad.', opts:['De','Desde','Hasta'], a:1},
      {q:'Pasamos ___ el centro para ir al museo.', opts:['por','a','hacia'], a:0},
      {q:'Mi pueblo está ___ 50 km ___ Madrid.', opts:['a / de','en / a','de / a'], a:0},
      {q:'Voy al trabajo ___ bicicleta.', opts:['a','en','con'], a:1},
      {q:'Voy al trabajo ___ pie.', opts:['a','en','con'], a:0},
      {q:'Las llaves están ___ la mesa.', opts:['en','entre','hacia'], a:0},
    ]},
    {type:'fill', title:'a / hacia / hasta / de / desde 로 문장 완성', instr:'복수 정답이 가능한 경우도 있습니다.', items:[
      {q:'¿Vas ___ la fiesta de Marta?', a:'a'},{q:'Camina ___ la salida y gira a la derecha. (출구 쪽으로)', a:'hacia'},{q:'Fuimos en bici ___ el final de la playa. (끝까지)', a:'hasta'},{q:'¿___ dónde vienes? — ___ la piscina.', a:['De','De']},{q:'___ aquí ___ tu casa hay dos kilómetros.', a:['Desde|De','hasta|a']},{q:'El autobús número 5 va ___ el aeropuerto. (공항까지)', a:'hasta|a'},{q:'Miró ___ arriba y vio las estrellas.', a:'hacia'},{q:'Llegamos ___ Lima a medianoche.', a:'a'},{q:'Vinieron andando ___ la estación. (역에서부터)', a:'desde'},{q:'Salimos ___ la oficina a las seis.', a:'de'},
    ]},
    {type:'fill', title:'de / a / sobre / en / entre 로 상황 묘사', instr:'그림을 상상하며 알맞은 전치사를 쓰세요.', items:[
      {q:'Los libros están ___ la estantería.', a:'en'},{q:'El gato duerme ___ el sofá. (소파 위에서)', a:'sobre|en'},{q:'El supermercado está ___ la farmacia y el banco.', a:'entre'},{q:'Vamos ___ Madrid ___ Valencia en tren.', a:['de','a']},{q:'Vivimos ___ un piso pequeño ___ el centro.', a:['en','en']},{q:'El cuadro está ___ la pared.', a:'en'},{q:'Hay un puente ___ el río.', a:'sobre'},{q:'La pelota está ___ los dos coches.', a:'entre'},
    ]},
    {type:'classify', title:'교통수단: en 인가 a 인가?', instr:'각 이동 방법에 맞는 전치사로 분류하세요.', buckets:['en (탈것 안에)','a (몸으로)'], items:[{t:'coche',b:0},{t:'pie',b:1},{t:'tren',b:0},{t:'caballo',b:1},{t:'avión',b:0},{t:'bicicleta',b:0},{t:'metro',b:0},{t:'barco',b:0},{t:'autobús',b:0},{t:'moto',b:0}]},
  ]
};
