window.CH = {
  id:'15',
  intro:'두 과거시제를 함께 쓰면 이야기가 됩니다. 불완료 과거는 "무대 배경"(날씨, 상황, 묘사), 직설법 과거는 그 무대 위에서 "일어난 사건"입니다.',
  sections:[
    {type:'compare', title:'직설법 과거 vs 불완료 과거', cols:[
      {title:'직설법 과거 (Indefinido) — 사건 📸', html:`• 과거의 <b>구체적인 순간</b>에 일어난 행동·상황<br>[[Ayer fui al cine.]] [[El domingo comimos paella.]]<br><br>• 시간 표현: <b>ayer, el domingo (pasado), la semana pasada, hace un mes, en 2010</b><br><br>• 과거의 행동·상황을 <b>평가</b>: [[La fiesta fue muy divertida.]] [[El viaje fue un desastre.]]<br><br>• 시작·끝이 분명한 행위, 연속된 사건: [[Me levanté, desayuné y salí.]]`},
      {title:'불완료 과거 (Imperfecto) — 배경 🎞️', html:`• 과거의 <b>습관적</b>·반복적 행동<br>[[Antes iba al cine todos los sábados.]]<br><br>• 시간 표현: <b>normalmente, siempre, todos los días, los domingos, antes, de niño</b><br><br>• 과거의 <b>묘사</b>: [[La fiesta era en una casa enorme.]] [[Mi abuelo era alto y amable.]]<br><br>• 진행 중이던 배경 상황: [[Llovía y hacía frío.]] [[Yo dormía cuando…]]`},
    ]},
    {type:'examples', title:'🔊 두 시제가 한 문장에서 만날 때', html:'<p><b>불완료 과거(배경, 진행 중) + 직설법 과거(갑자기 끼어든 사건)</b> 구조가 가장 흔합니다.</p>', items:[
      {es:'Yo dormía cuando sonó el teléfono.', ko:'자고 있는데(배경) 전화가 울렸다(사건).'},
      {es:'Mientras cenábamos, llegó mi hermano.', ko:'저녁 먹는 동안 형이 도착했다.'},
      {es:'Hacía mucho frío, así que no salimos.', ko:'너무 추워서(배경) 나가지 않았다(결정).'},
      {es:'Era de noche y no había nadie en la calle. De repente, oí un ruido.', ko:'밤이었고 거리에 아무도 없었다(배경). 갑자기 소리를 들었다(사건).'},
      {es:'Cuando era pequeño, me rompí una pierna.', ko:'어렸을 때(시기) 다리가 부러졌다(사건).'},
      {es:'Ayer fui al médico porque me dolía la cabeza.', ko:'어제 병원에 갔다(사건) — 머리가 아팠기 때문에(상태).'},
      {es:'Antes vivía en Madrid, pero en 2015 me mudé a Sevilla.', ko:'예전에는 마드리드에 살았지만(습관·상황) 2015년에 세비야로 이사했다(사건).'},
      {es:'La película fue aburrida. / La película era en blanco y negro.', ko:'영화는 지루했다(평가) / 영화는 흑백이었다(묘사)'},
    ]},
    {type:'table', title:'같은 동사, 다른 뉘앙스', head:['Indefinido','Imperfecto'], es:[0,1],
      rows:[['Conocí a Ana en 2010. (만났다, 알게 되었다)','Conocía a Ana desde niño. (알고 있었다)'],['Supe la noticia ayer. (알게 되었다)','Sabía la verdad. (알고 있었다)'],['Quise llamarte. (전화하려고 했다 – 시도)','Quería llamarte. (전화하고 싶었다 – 마음)'],['No pude abrir la puerta. (열지 못했다 – 결과)','No podía abrir la puerta. (열 수 없는 상태였다)'],['Tuve que salir. (나가야 했고, 나갔다)','Tenía que salir. (나가야 하는 상황이었다)']]},
    {type:'text', title:'📖 읽기: 이야기 속 두 시제', html:`<p>[[El sábado pasado ==fui== a la montaña con mis amigos. ==Hacía== sol y no ==había== nubes. ==Salimos== a las siete de la mañana. ==Caminamos== tres horas y, cuando ==llegamos== a la cima, ==estábamos== muy cansados pero felices. Desde allí se ==veía== todo el valle. ==Comimos== bocadillos y ==sacamos== muchas fotos. ==Volvimos== a casa a las seis.]]</p>
      <p class="ko">지난 토요일 친구들과 산에 <b>갔다</b>(사건). 해가 <b>나 있었고</b> 구름이 <b>없었다</b>(배경). 아침 7시에 <b>출발했다</b>. 세 시간을 <b>걸었고</b> 정상에 <b>도착했을</b> 때 우리는 매우 <b>피곤했지만</b> 행복<b>했다</b>(상태). 거기서는 계곡 전체가 <b>보였다</b>(묘사). 샌드위치를 <b>먹고</b> 사진을 많이 <b>찍었다</b>. 6시에 집에 <b>돌아왔다</b>.</p>`},
  ],
  exercises:[
    {type:'mc', title:'알맞은 형태 고르기 ①', items:[
      {q:'Ayer ___ a mi abuela.', opts:['visité','visitaba'], a:0, exp:'ayer = 특정 시점의 사건'},
      {q:'De niño ___ a mi abuela todos los domingos.', opts:['visité','visitaba'], a:1, exp:'습관'},
      {q:'Cuando era joven, mi padre ___ mucho deporte.', opts:['hizo','hacía'], a:1},
      {q:'El año pasado ___ un coche nuevo.', opts:['compramos','comprábamos'], a:0},
      {q:'___ las once cuando llegó el tren.', opts:['Fueron','Eran'], a:1, exp:'과거의 시간 = imperfecto'},
      {q:'La casa de mis abuelos ___ muy grande.', opts:['fue','era'], a:1, exp:'묘사'},
      {q:'La fiesta de anoche ___ fantástica.', opts:['fue','era'], a:0, exp:'평가'},
      {q:'Antes no ___ internet en los pueblos.', opts:['hubo','había'], a:1},
    ]},
    {type:'mc', title:'알맞은 형태 고르기 ②', items:[
      {q:'Mientras yo ___, mi hermano ___ la tele.', opts:['estudié / vio','estudiaba / veía','estudiaba / vio'], a:1, exp:'두 행위가 동시에 진행 = 둘 다 imperfecto'},
      {q:'Yo ___ la cena cuando ___ mis padres.', opts:['preparaba / llegaron','preparé / llegaban','preparé / llegaron'], a:0, exp:'진행 중 배경 + 끼어든 사건'},
      {q:'Como ___ mucho frío, no ___ a la calle.', opts:['hizo / salí','hacía / salí','hacía / salía'], a:1},
      {q:'___ a Marta en una fiesta en 2019.', opts:['Conocí','Conocía'], a:0, exp:'알게 되었다(만났다)'},
      {q:'Ayer no ___ al examen porque ___ enfermo.', opts:['fui / estuve','fui / estaba','iba / estaba'], a:1},
      {q:'Cuando ___ pequeña, ___ el brazo dos veces.', opts:['era / me rompí','fui / me rompía','era / me rompía'], a:0},
      {q:'Antes ___ en Lima, pero en 2020 ___ a Bogotá.', opts:['viví / me mudaba','vivía / me mudé','vivía / me mudaba'], a:1},
    ]},
    {type:'fill', title:'문장 완성 (indefinido 또는 imperfecto)', instr:'괄호 안 동사를 문맥에 맞는 과거시제로 쓰세요.', items:[
      {q:'Anoche ___ (ver, yo) una película que ___ (ser) muy larga.', a:['vi','era']},
      {q:'Cuando ___ (tener, yo) diez años, mi familia ___ (mudarse) a Seúl.', a:['tenía','se mudó']},
      {q:'___ (Hacer) buen tiempo, así que ___ (ir, nosotros) a la playa.', a:['Hacía','fuimos']},
      {q:'Mientras ___ (dormir, ella), alguien ___ (entrar) en la casa.', a:['dormía','entró']},
      {q:'De joven, mi abuelo ___ (trabajar) en el campo y ___ (levantarse) a las cinco.', a:['trabajaba','se levantaba']},
      {q:'El lunes ___ (perder, yo) el autobús y ___ (llegar) tarde.', a:['perdí','llegué']},
      {q:'En la fiesta ___ (haber) mucha gente y todos ___ (bailar).', a:['había','bailaban']},
      {q:'Ayer ___ (conocer, yo) a tu primo. ¡___ (Ser) muy simpático!', a:['conocí','Fue|Era']},
    ]},
    {type:'fill', title:'대화 완성', instr:'괄호 안의 동사를 알맞은 과거시제로 바꾸세요.', items:[
      {q:'— ¿Qué ___ (hacer, tú) ayer? — ___ (Ir) de compras con Elena.', a:['hiciste','Fui']},
      {q:'— ¿Y qué ___ (comprar, vosotras)? — Yo ___ (comprar) un vestido; Elena no ___ (comprar) nada.', a:['comprasteis','compré','compró']},
      {q:'— ¿Por qué no ___ (venir, tú) a la fiesta? — Porque ___ (estar) muy cansado.', a:['viniste','estaba']},
      {q:'— ¿Cómo ___ (ser) tu primer profesor de español? — ___ (Ser) muy paciente y siempre ___ (sonreír).', a:['era','Era','sonreía']},
      {q:'— ¿Cuándo ___ (empezar, tú) a estudiar español? — ___ (Empezar) hace dos años.', a:['empezaste','Empecé']},
    ]},
  ]
};
