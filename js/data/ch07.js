window.CH = {
  id:'07',
  intro:'형용사(adjetivo)는 사람·동물·사물의 특성이나 상태를 나타냅니다. 핵심은 하나 — 수식하는 명사의 성(남/여)과 수(단/복)에 "옷을 맞춰 입는다"는 것!',
  sections:[
    {type:'table', title:'형용사의 여성형과 복수형', head:['남성 단수','여성 단수','남성 복수','여성 복수','규칙'], es:[0,1,2,3],
      rows:[['alto','alta','altos','altas','-o → -a / +s'],['pequeño','pequeña','pequeños','pequeñas','-o → -a / +s'],['grande','grande','grandes','grandes','-e: 성 불변 / +s'],['inteligente','inteligente','inteligentes','inteligentes','-e: 성 불변'],['fácil','fácil','fáciles','fáciles','자음: 성 불변 / +es'],['azul','azul','azules','azules','자음: 성 불변 / +es'],['feliz','feliz','felices','felices','-z → -ces'],['trabajador','trabajadora','trabajadores','trabajadoras','-or: 여성 +a'],['hablador','habladora','habladores','habladoras','-or: 여성 +a'],['español','española','españoles','españolas','국적 자음: 여성 +a'],['alemán','alemana','alemanes','alemanas','국적: 여성형은 악센트 삭제'],['joven','joven','jóvenes','jóvenes','복수에서 악센트 추가']],
      after:'<div class="callout note"><div class="em">📌</div><div>비교급 <b>mayor, menor, mejor, peor</b>와 <b>-ista</b>(optimista, realista)는 -or/-a로 끝나도 여성형이 따로 없습니다: una hermana mayor, una chica optimista.</div></div>'},
    {type:'examples', title:'성·수 일치 (concordancia)', html:'<p>형용사는 수식하는 명사의 성과 수와 같은 형태를 갖습니다. <b>남성+여성 혼성</b> 명사를 수식하면 <b>남성 복수형</b>을 씁니다.</p>', items:[
      {es:'el chico alto / la chica alta', ko:'키 큰 소년 / 키 큰 소녀'},
      {es:'los chicos altos / las chicas altas', ko:'키 큰 소년들 / 키 큰 소녀들'},
      {es:'un coche rojo y una moto roja', ko:'빨간 차와 빨간 오토바이'},
      {es:'Juan y María son simpáticos.', ko:'후안과 마리아는 친절하다. (혼성 → 남성 복수)'},
      {es:'La casa y el jardín son bonitos.', ko:'집과 정원은 예쁘다. (혼성 → 남성 복수)'},
      {es:'Las ventanas son grandes.', ko:'창문들은 크다.'},
      {es:'Mis padres son muy trabajadores.', ko:'우리 부모님은 매우 부지런하시다.'},
    ]},
    {type:'text', title:'형용사의 위치', html:`
      <p>스페인어의 형용사는 보통 <b>명사 뒤</b>에 옵니다. 명사 앞에 오면 뜻이 달라지거나 강조·문학적 느낌을 줍니다.</p>
      <table class="tbl"><thead><tr><th>위치</th><th>예</th><th>설명</th></tr></thead><tbody>
      <tr><td class="s">명사 + 형용사 (기본)</td><td>[[una casa blanca]] [[un libro interesante]] [[el coche nuevo]]</td><td>구별·분류하는 성질</td></tr>
      <tr><td class="s">형용사 + 명사</td><td>[[la blanca nieve]] [[un buen amigo]] [[una gran mujer]]</td><td>본질적 성질, 강조, 일부 짧은 형용사</td></tr>
      <tr><td class="s">위치에 따라 뜻이 다른 경우</td><td>[[un hombre grande]] 큰 남자 / [[un gran hombre]] 위대한 남자<br>[[un amigo viejo]] 늙은 친구 / [[un viejo amigo]] 오랜 친구<br>[[un coche nuevo]] 새 차(신품) / [[un nuevo coche]] 새로 산 차<br>[[una mujer pobre]] 가난한 여자 / [[una pobre mujer]] 불쌍한 여자</td><td></td></tr>
      </tbody></table>
      <div class="callout warn"><div class="em">⚠️</div><div><b>어미 탈락(apócope)</b>: 남성 단수 명사 앞에서 <b>bueno → buen</b>, <b>malo → mal</b>, <b>primero → primer</b>, <b>tercero → tercer</b>, <b>grande → gran</b>(남녀 공통): un ==buen== día, un ==mal== momento, el ==primer== piso, una ==gran== ciudad. 명사 뒤에서는 원형: un día bueno.</div></div>`},
    {type:'table', title:'국적 형용사 (gentilicios)', head:['나라','남성','여성','복수'], es:[1,2,3],
      rows:[['Corea','coreano','coreana','coreanos/as'],['España','español','española','españoles/as'],['México','mexicano','mexicana','mexicanos/as'],['Argentina','argentino','argentina','argentinos/as'],['Francia','francés','francesa','franceses/as'],['Inglaterra','inglés','inglesa','ingleses/as'],['Alemania','alemán','alemana','alemanes/as'],['Japón','japonés','japonesa','japoneses/as'],['China','chino','china','chinos/as'],['Estados Unidos','estadounidense','estadounidense','estadounidenses'],['Canadá','canadiense','canadiense','canadienses'],['Brasil','brasileño','brasileña','brasileños/as'],['Portugal','portugués','portuguesa','portugueses/as'],['Italia','italiano','italiana','italianos/as'],['Marruecos','marroquí','marroquí','marroquíes'],['Perú','peruano','peruana','peruanos/as'],['Chile','chileno','chilena','chilenos/as'],['Colombia','colombiano','colombiana','colombianos/as']],
      after:'<p>국적 형용사는 <b>소문자</b>로 씁니다. 언어 이름도 같은 단어: el español, el coreano, el francés.</p>'},
    {type:'cards', title:'자주 쓰는 형용사 – 반대말 카드', items:[
      {front:'alto ↔ bajo',back:'키 큰 ↔ 키 작은'},{front:'grande ↔ pequeño',back:'큰 ↔ 작은'},{front:'gordo ↔ delgado',back:'뚱뚱한 ↔ 마른'},{front:'bueno ↔ malo',back:'좋은 ↔ 나쁜'},{front:'nuevo ↔ viejo',back:'새로운 ↔ 오래된'},{front:'joven ↔ mayor / viejo',back:'젊은 ↔ 나이 든'},{front:'guapo ↔ feo',back:'잘생긴 ↔ 못생긴'},{front:'fácil ↔ difícil',back:'쉬운 ↔ 어려운'},{front:'caro ↔ barato',back:'비싼 ↔ 싼'},{front:'rápido ↔ lento',back:'빠른 ↔ 느린'},{front:'limpio ↔ sucio',back:'깨끗한 ↔ 더러운'},{front:'largo ↔ corto',back:'긴 ↔ 짧은'},{front:'simpático ↔ antipático',back:'상냥한 ↔ 불친절한'},{front:'rico ↔ pobre',back:'부유한 ↔ 가난한'},{front:'caliente ↔ frío',back:'뜨거운 ↔ 차가운'},{front:'inteligente ↔ tonto',back:'똑똑한 ↔ 어리석은'},{front:'alegre ↔ triste',back:'명랑한 ↔ 슬픈'},{front:'ancho ↔ estrecho',back:'넓은 ↔ 좁은'},
    ]},
  ],
  exercises:[
    {type:'fill', title:'형용사 형태 맞추기', instr:'괄호 안 형용사를 알맞은 형태로 바꾸어 쓰세요.', items:[
      {q:'una casa ___ (blanco)', a:'blanca'},{q:'los coches ___ (rojo)', a:'rojos'},{q:'las chicas ___ (alto)', a:'altas'},{q:'un examen ___ (fácil)', a:'fácil'},{q:'unas preguntas ___ (difícil)', a:'difíciles'},{q:'una mujer ___ (trabajador)', a:'trabajadora'},{q:'los niños ___ (feliz)', a:'felices'},{q:'una ciudad ___ (grande)', a:'grande'},{q:'las ventanas ___ (grande)', a:'grandes'},{q:'una profesora ___ (español)', a:'española'},{q:'dos estudiantes ___ (alemán)', a:'alemanes'},{q:'una chica ___ (francés)', a:'francesa'},{q:'Juan y Ana son ___ (simpático)', a:'simpáticos'},{q:'La mesa y la silla son ___ (nuevo)', a:'nuevas'},{q:'El libro y la revista son ___ (interesante)', a:'interesantes'},{q:'una historia ___ (japonés)', a:'japonesa'},
    ]},
    {type:'fill', title:'표 완성하기', instr:'형용사의 네 가지 형태를 모두 쓰세요. (여성 단수 / 남성 복수 / 여성 복수 순)', items:[
      {q:'bonito → ___ / ___ / ___', a:['bonita','bonitos','bonitas']},
      {q:'inglés → ___ / ___ / ___', a:['inglesa','ingleses','inglesas']},
      {q:'azul → ___ / ___ / ___', a:['azul','azules','azules']},
      {q:'hablador → ___ / ___ / ___', a:['habladora','habladores','habladoras']},
      {q:'feliz → ___ / ___ / ___', a:['feliz','felices','felices']},
      {q:'joven → ___ / ___ / ___', a:['joven','jóvenes','jóvenes']},
      {q:'marroquí → ___ / ___ / ___', a:['marroquí','marroquíes','marroquíes']},
      {q:'optimista → ___ / ___ / ___', a:['optimista','optimistas','optimistas']},
    ]},
    {type:'mc', title:'형용사의 위치와 어미 탈락', items:[
      {q:'오늘은 좋은 날이다.', opts:['Hoy es un bueno día.','Hoy es un buen día.','Hoy es un día buen.'], a:1},
      {q:'그는 위대한 작가다.', opts:['Es un escritor grande.','Es un gran escritor.','Es un grande escritor.'], a:1},
      {q:'첫 번째 층(1층)', opts:['el primero piso','el primer piso','el piso primer'], a:1},
      {q:'나의 오랜 친구 (오래 사귄)', opts:['mi amigo viejo','mi viejo amigo','mi amigo mayor'], a:1},
      {q:'그 여자는 나쁜 성격이다. → Tiene ___ carácter.', opts:['mal','malo','mala'], a:0, exp:'남성 단수 명사 carácter 앞에서 malo → mal'},
      {q:'하얀 눈 (문학적 표현)', opts:['la nieve blanca','la blanca nieve','둘 다 가능'], a:2},
      {q:'세 번째 문', opts:['la tercer puerta','la tercera puerta','la puerta tercer'], a:1, exp:'여성 명사 앞에서는 탈락 없음'},
      {q:'큰 도시 (규모)', opts:['una gran ciudad','una ciudad grande','둘 다 가능 (gran은 "위대한" 뉘앙스)'], a:2},
    ]},
    {type:'match', title:'나라 → 국적 형용사', pairs:[['Corea','coreano'],['Francia','francés'],['Alemania','alemán'],['Japón','japonés'],['Estados Unidos','estadounidense'],['Brasil','brasileño'],['Inglaterra','inglés'],['Marruecos','marroquí'],['Portugal','portugués'],['Canadá','canadiense']]},
    {type:'classify', title:'성이 변하는 형용사 vs 변하지 않는 형용사', instr:'여성형이 따로 있는 형용사와 남녀 같은 형태인 형용사를 분류하세요.', buckets:['여성형 있음 (-a)','남녀 동형'], items:[{t:'alto',b:0},{t:'grande',b:1},{t:'español',b:0},{t:'fácil',b:1},{t:'trabajador',b:0},{t:'inteligente',b:1},{t:'francés',b:0},{t:'azul',b:1},{t:'bonito',b:0},{t:'optimista',b:1},{t:'alemán',b:0},{t:'feliz',b:1}]},
  ]
};
