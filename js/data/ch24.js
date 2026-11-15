window.CH = {
  id:'24',
  intro:'접속사(conjunción)는 단어와 단어, 문장과 문장을 이어 줍니다. y, o, pero, ni 네 개와 발음을 위한 변신 규칙(y→e, o→u)만 알면 문장이 길어집니다.',
  sections:[
    {type:'text', title:'접속사란?', html:`<p>[[Luis es alto ==y== delgado.]] / [[Quiero ir, ==pero== no puedo.]] — 여기서 <b>y</b>와 <b>pero</b>는 접속사로, 문장 또는 문장의 일부를 결합하고 관계를 맺어 줍니다.</p>`},
    {type:'table', title:'Y, E / NI — 긍정과 부정의 연결', head:['접속사','용법','예문'], es:[2],
      rows:[['y','긍정적인 요소·생각을 결합','Pan y agua. / Estudio y trabajo.'],['e (y 대신)','뒤 단어가 i- 또는 hi-로 시작할 때','padre e hijo / español e inglés / Francia e Italia (단, hie-: agua y hielo)'],['y/e 의 위치','셋 이상 나열하면 마지막 요소 앞에만','Compré pan, leche y huevos.'],['ni','부정적인 요소를 결합 (no … ni)','No tengo hermanos ni hermanas. / No fuma ni bebe.'],['ni … ni','요소들이 동사 앞에 오면 ni…ni + 긍정 동사','Ni Juan ni Pedro vienen. / Ni fuma ni bebe.'],['ni (셋 이상)','각 요소 앞에 ni','No como ni carne, ni pescado, ni huevos.']]},
    {type:'table', title:'O, U — 선택과 근사치', head:['접속사','용법','예문'], es:[2],
      rows:[['o','대체하는 요소를 연결 (또는)','¿Té o café? / ¿Vienes o te quedas?'],['o','근사치 (~쯤)','Tiene veinte o treinta años. / Dos o tres días.'],['u (o 대신)','뒤 단어가 o- 또는 ho-로 시작할 때','siete u ocho / mujeres u hombres / ayer u hoy'],['o … o','둘 중 하나','O vienes ahora o te quedas en casa.']]},
    {type:'table', title:'PERO, SINO — 대조', head:['접속사','용법','예문'], es:[2],
      rows:[['pero','상반되는 요소·생각을 결합, 앞에 쉼표(,)','Es caro, pero es bueno. / Quiero ir, pero no tengo tiempo.'],['sino','앞의 부정을 바로잡아 "~가 아니라 …" (no A sino B)','No es español, sino argentino. / No quiero té, sino café.'],['sino que','뒤에 활용된 동사가 올 때','No estudia, sino que trabaja.'],['aunque','비록 ~이지만','Aunque llueve, salimos.']],
      after:'<div class="callout warn"><div class="em">⚠️</div><div><b>pero vs sino</b>: 둘 다 "그러나"로 번역되지만, <b>sino</b>는 반드시 앞 절이 <b>부정문</b>이고 그것을 <b>대체·정정</b>할 때만 씁니다. No es rojo, <b>sino</b> azul. (빨강이 아니라 파랑) / No es rojo, <b>pero</b> me gusta. (빨강은 아니지만 마음에 든다)</div></div>'},
    {type:'table', title:'그 밖에 자주 쓰는 접속사', head:['접속사','뜻','예문'], es:[0,2],
      rows:[['porque','왜냐하면','No salgo porque llueve.'],['como','~이기 때문에 (문장 앞)','Como llueve, no salgo.'],['así que / por eso','그래서','Llueve, así que no salgo.'],['si','만약 ~라면','Si llueve, no salgo.'],['cuando','~할 때','Cuando llueve, me quedo en casa.'],['mientras','~하는 동안','Leo mientras espero.'],['que','~라는 것','Creo que tienes razón.'],['para que + 접속법','~하기 위해서','Te llamo para que lo sepas.']]},
    {type:'examples', title:'🔊 종합 예문', items:[
      {es:'Mi hermano estudia Historia e Inglés.', ko:'형은 역사와 영어를 공부한다. (e)'},
      {es:'¿Quieres siete u ocho manzanas?', ko:'사과 7개 아니면 8개 줄까? (u)'},
      {es:'No tengo tiempo ni dinero para viajar.', ko:'여행할 시간도 돈도 없다. (ni)'},
      {es:'Ni Ana ni Luis saben la respuesta.', ko:'아나도 루이스도 답을 모른다.'},
      {es:'El hotel es pequeño, pero muy cómodo.', ko:'호텔은 작지만 아주 편하다.'},
      {es:'No soy médico, sino enfermero.', ko:'나는 의사가 아니라 간호사다.'},
      {es:'Compré pan, queso, jamón y vino.', ko:'빵, 치즈, 하몽 그리고 와인을 샀다.'},
    ]},
  ],
  exercises:[
    {type:'fill', title:'y / e / ni / ni…ni 로 두 문장 연결하기', instr:'알맞은 접속사를 쓰세요.', items:[
      {q:'Luis es simpático. Luis es inteligente. → Luis es simpático ___ inteligente.', a:'e'},
      {q:'Hablo francés. Hablo italiano. → Hablo francés ___ italiano.', a:'e'},
      {q:'Compré manzanas. Compré peras. → Compré manzanas ___ peras.', a:'y'},
      {q:'No tengo coche. No tengo moto. → No tengo coche ___ moto.', a:'ni'},
      {q:'Juan no viene. Pedro no viene. → ___ Juan ___ Pedro vienen.', a:['Ni','ni']},
      {q:'No bebe. No fuma. → No bebe ___ fuma.', a:'ni'},
      {q:'Madre. Hija. → madre ___ hija', a:'e'},
      {q:'Agua. Hielo. → agua ___ hielo', a:'y', hint:'(hie-)'},
    ]},
    {type:'fill', title:'o / u / y / e 로 문장 완성', items:[
      {q:'¿Prefieres té ___ café?', a:'o'},{q:'¿Tienes siete ___ ocho años?', a:'u'},{q:'¿Vienen mujeres ___ hombres?', a:'u'},{q:'Estudio español ___ inglés.', a:'e'},{q:'¿Vamos hoy ___ mañana?', a:'o'},{q:'¿Es de plata ___ de oro?', a:'u'},{q:'Fernando ___ Isabel fueron reyes de España.', a:'e'},{q:'Tiene diez ___ once años, no estoy seguro.', a:'u'},
    ]},
    {type:'fill', title:'pero / sino 로 문장 완성', items:[
      {q:'El restaurante es caro, ___ la comida es excelente.', a:'pero'},{q:'No es francés, ___ belga.', a:'sino'},{q:'Quiero comprar la casa, ___ no tengo dinero.', a:'pero'},{q:'No quiero agua, ___ zumo.', a:'sino'},{q:'Estudió mucho, ___ no aprobó.', a:'pero'},{q:'No estudia Medicina, ___ Derecho.', a:'sino'},{q:'Hace frío, ___ hay sol.', a:'pero'},{q:'No fue ayer, ___ anteayer.', a:'sino'},
    ]},
    {type:'fill', title:'친구들 그룹 묘사하기 — y/e, ni, ni…ni, pero', instr:'문맥에 맞는 접속사를 쓰세요.', items:[
      {q:'Marta ___ Inés son hermanas.', a:'e'},{q:'Pablo es alto, ___ no juega al baloncesto.', a:'pero'},{q:'Carlos no habla inglés ___ francés.', a:'ni'},{q:'___ Rosa ___ Luis tienen coche; van en metro.', a:['Ni','ni']},{q:'Elena estudia ___ trabaja al mismo tiempo.', a:'y'},{q:'A Jorge le gusta el cine, ___ odia el teatro.', a:'pero'},{q:'Sofía es española ___ italiana: tiene doble nacionalidad.', a:'e'},{q:'No sé si David tiene veinte ___ veintiún años.', a:'o'},
    ]},
    {type:'mc', title:'알맞은 접속사 고르기', items:[
      {q:'No salgo ___ estoy cansado.', opts:['porque','así que','sino'], a:0},
      {q:'Estoy cansado, ___ no salgo.', opts:['porque','así que','sino'], a:1},
      {q:'___ llueve mañana, nos quedamos en casa.', opts:['Si','Que','Ni'], a:0},
      {q:'Leo el periódico ___ desayuno.', opts:['mientras','sino','u'], a:0},
      {q:'Creo ___ tienes razón.', opts:['que','qué','porque'], a:0},
      {q:'"y"를 "e"로 바꾸는 경우는?', opts:['뒤 단어가 i-/hi-로 시작','뒤 단어가 e-로 시작','뒤 단어가 모음으로 시작'], a:0},
      {q:'"o"를 "u"로 바꾸는 경우는?', opts:['뒤 단어가 u-로 시작','뒤 단어가 o-/ho-로 시작','항상 가능'], a:1},
      {q:'No es rojo, ___ me gusta.', opts:['sino','pero','ni'], a:1, exp:'대체·정정이 아니라 대조이므로 pero'},
    ]},
  ]
};
