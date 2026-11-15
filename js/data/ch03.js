window.CH = {
  id:'03',
  intro:'"¿Qué hora es?" 시계 바늘을 직접 돌려가며 시간 표현을 몸으로 익히세요. 규칙은 단순합니다 — 1시만 단수(es la una), 나머지는 복수(son las…), 30분까지는 y, 그 뒤는 다음 시 menos.',
  sections:[
    {type:'widget', name:'clock'},
    {type:'text', title:'3.1 시간 읽기의 기본 공식', html:`
      <div class="cmp">
        <div class="col a"><h4>① 시(hora)</h4>[[Es la una.]] 1시 (단수!)<br>[[Son las dos.]] 2시<br>[[Son las doce.]] 12시<br><small>la(s)는 la hora / las horas 를 가리키는 여성 관사</small></div>
        <div class="col b"><h4>② 분(minuto) — 30분까지는 y</h4>[[Son las tres y cinco.]] 3:05<br>[[Son las tres y cuarto.]] 3:15<br>[[Son las tres y veinte.]] 3:20<br>[[Son las tres y media.]] 3:30</div>
        <div class="col a"><h4>③ 31분부터는 다음 시 menos</h4>[[Son las cuatro menos veinticinco.]] 3:35<br>[[Son las cuatro menos veinte.]] 3:40<br>[[Son las cuatro menos cuarto.]] 3:45<br>[[Son las cuatro menos cinco.]] 3:55</div>
        <div class="col b"><h4>④ 정각과 하루의 때</h4>[[Son las cuatro en punto.]] 4시 정각<br>[[de la mañana]] 오전 (6~12시) · [[de la tarde]] 오후 (12~20시) · [[de la noche]] 밤 (20~)<br>[[de la madrugada]] 새벽 · [[Es mediodía.]] 정오 · [[Es medianoche.]] 자정</div>
      </div>
      <div class="callout note"><div class="em">📌</div><div>중남미에서는 "menos" 대신 <b>para</b>도 많이 씁니다: [[Son las cinco menos cuarto]] = [[Es un cuarto para las cinco]] = [[Faltan quince para las cinco]]. 디지털 식으로 [[Son las cuatro cuarenta y cinco]]라고 말해도 됩니다.</div></div>`},
    {type:'table', title:'시간 관련 어휘', head:['스페인어','뜻','스페인어','뜻'], es:[0,2],
      rows:[['el segundo','초','ahora','지금'],['el minuto','분','más tarde','나중에'],['la hora','시간','media hora','30분'],['un cuarto de hora','15분','veinte minutos','20분'],['el reloj','시계','el minutero','분침'],['la manecilla (la aguja) de la hora','시침','el segundero','초침'],['en punto','정각','y media','30분'],['y cuarto','15분','menos cuarto','15분 전']]},
    {type:'examples', title:'🔊 "몇 시에?" — a + la(s) + 시간', html:'<p>어떤 일이 일어나는 시각을 말할 때는 전치사 <b>a</b>를 씁니다. 묻는 말은 [[¿A qué hora…?]]</p>', items:[
      {es:'¿A qué hora empieza la clase? — A las nueve de la mañana.', ko:'수업은 몇 시에 시작해? — 아침 9시에.'},
      {es:'¿A qué hora termina? — A la una y media.', ko:'몇 시에 끝나? — 1시 반에.'},
      {es:'El tren sale a las ocho menos cuarto.', ko:'기차는 7시 45분에 떠난다.'},
      {es:'Comemos a las dos de la tarde.', ko:'우리는 오후 2시에 점심을 먹는다.'},
      {es:'La tienda abre de nueve a seis.', ko:'가게는 9시부터 6시까지 연다. (de…a 는 관사 없이)'},
      {es:'Nos vemos a mediodía.', ko:'정오에 보자.'},
    ]},
    {type:'examples', title:'3.2 시간에 관한 표현들', items:[
      {es:'Llegas temprano.', ko:'너 일찍 왔구나. (temprano 일찍)'},
      {es:'Llegas tarde.', ko:'너 늦었어. (tarde 늦게)'},
      {es:'Por favor, sé puntual.', ko:'제발 시간을 지켜 줘. (puntual 시간을 지키는)'},
      {es:'Hasta luego. Llegaré dentro de poco.', ko:'이따 봐. 곧 도착할 거야.'},
      {es:'¿A qué hora comienza? ¿A qué hora termina?', ko:'몇 시에 시작해요? 몇 시에 끝나요?'},
      {es:'¿Cuánto dura?', ko:'얼마나 걸려요(지속돼요)?'},
      {es:'Se está haciendo tarde.', ko:'늦어지고 있어.'},
      {es:'Es temprano todavía.', ko:'아직 이른 시간이야.'},
    ]},
    {type:'cards', title:'하루의 때와 계절 (카드 뒤집기)', items:[
      {front:'la madrugada',back:'새벽',note:'0시~6시'},{front:'el amanecer',back:'해돋이, 동틀 녘'},{front:'el alba',back:'새벽녘, 여명'},{front:'la mañana',back:'아침, 오전'},{front:'el mediodía',back:'정오'},{front:'la tarde',back:'오후'},{front:'el atardecer',back:'해 질 녘',note:'= la puesta de sol'},{front:'el anochecer',back:'땅거미, 저녁 무렵'},{front:'la noche',back:'밤'},{front:'la medianoche',back:'자정'},{front:'la primavera',back:'봄'},{front:'el verano',back:'여름'},{front:'el otoño',back:'가을'},{front:'el invierno',back:'겨울'},
    ]},
  ],
  exercises:[
    {type:'fill', title:'시간을 스페인어로 쓰기', instr:'주어진 시각을 "Es/Son las …" 형태로 쓰세요. (menos 또는 y 표현 사용)', items:[
      {q:'1:00 → ___', a:'es la una|es la una en punto'},
      {q:'3:15 → ___', a:'son las tres y cuarto|son las tres y quince'},
      {q:'5:30 → ___', a:'son las cinco y media|son las cinco y treinta'},
      {q:'7:45 → ___', a:'son las ocho menos cuarto|es un cuarto para las ocho|son las siete y cuarenta y cinco'},
      {q:'10:10 → ___', a:'son las diez y diez'},
      {q:'12:00 (정오) → ___', a:'son las doce|es mediodía|son las doce en punto|son las doce del mediodía'},
      {q:'1:40 → ___', a:'son las dos menos veinte|son veinte para las dos|es la una y cuarenta'},
      {q:'9:55 → ___', a:'son las diez menos cinco|son cinco para las diez|son las nueve y cincuenta y cinco'},
      {q:'2:25 → ___', a:'son las dos y veinticinco'},
      {q:'11:50 → ___', a:'son las doce menos diez|son diez para las doce|son las once y cincuenta'},
    ]},
    {type:'mc', title:'알맞은 표현 고르기', items:[
      {q:'1시 15분', opts:['Son la una y cuarto.','Es la una y cuarto.','Es la una menos cuarto.','Son las una y quince.'], a:1},
      {q:'6:40', opts:['Son las seis y cuarenta y cinco.','Son las siete menos veinte.','Son las seis menos veinte.','Son las siete y veinte.'], a:1},
      {q:'오후 4시에 (출발한다)', opts:['en las cuatro de la tarde','a las cuatro de la tarde','las cuatro de la mañana','por las cuatro'], a:1},
      {q:'"몇 시에 수업이 시작해?"', opts:['¿Qué hora es la clase?','¿A qué hora empieza la clase?','¿Cuánto es la clase?','¿Dónde empieza la clase?'], a:1},
      {q:'자정', opts:['mediodía','media hora','medianoche','media noche y media'], a:2},
      {q:'오전 8시 (아침)', opts:['las ocho de la tarde','las ocho de la noche','las ocho de la mañana','las ocho de la madrugada'], a:2},
      {q:'가게는 9시부터 2시까지 연다.', opts:['abre de nueve a dos','abre de las nueve a las dos','abre a nueve hasta dos','abre en nueve y dos'], a:0, exp:'de … a 구문에서는 관사를 생략합니다.'},
      {q:'"Se está haciendo tarde."의 뜻은?', opts:['일찍 왔다','늦어지고 있다','시간이 남는다','정각이다'], a:1},
    ]},
    {type:'match', title:'시간 표현 짝짓기', pairs:[['en punto','정각'],['y media','30분'],['y cuarto','15분'],['menos cuarto','15분 전'],['de la madrugada','새벽의'],['el minutero','분침'],['puntual','시간을 지키는'],['temprano','일찍'],['tarde','늦게'],['dentro de poco','곧, 잠시 후에']]},
    {type:'order', title:'문장 배열', items:[
      {ko:'지금 몇 시야? — 3시 반이야.', words:['¿Qué','hora','es?','Son','las','tres','y','media.'], a:'¿Qué hora es? Son las tres y media.'},
      {ko:'기차는 아침 7시 15분에 떠난다.', words:['El','tren','sale','a','las','siete','y','cuarto','de','la','mañana.'], a:'El tren sale a las siete y cuarto de la mañana.'},
      {ko:'1시 10분 전이다.', words:['Es','la','una','menos','diez.'], a:'Es la una menos diez.'},
      {ko:'우리는 밤 9시에 저녁을 먹는다.', words:['Cenamos','a','las','nueve','de','la','noche.'], a:'Cenamos a las nueve de la noche.'},
    ]},
  ]
};
