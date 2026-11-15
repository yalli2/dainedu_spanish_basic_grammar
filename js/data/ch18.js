window.CH = {
  id:'18',
  intro:'미래를 말하는 두 가지 방법: 단순미래(hablaré)와 ir a + 동사원형(voy a hablar). 단순미래는 동사원형에 어미만 붙이면 끝이라 세 그룹이 똑같습니다!',
  sections:[
    {type:'table', title:'18.1 규칙동사의 단순미래 — 동사원형 + 어미', head:['인칭','hablar','comer','vivir'], es:[1,2,3],
      rows:[['yo','hablar-é','comer-é','vivir-é'],['tú','hablar-ás','comer-ás','vivir-ás'],['él / ella / usted','hablar-á','comer-á','vivir-á'],['nosotros/as','hablar-emos','comer-emos','vivir-emos'],['vosotros/as','hablar-éis','comer-éis','vivir-éis'],['ellos / ellas / ustedes','hablar-án','comer-án','vivir-án']],
      after:'<div class="callout tip"><div class="em">💡</div><div>어미 <b>-é, -ás, -á, -emos, -éis, -án</b>은 haber의 현재형(he, has, ha, hemos, habéis, han)에서 왔습니다. nosotros만 빼고 모두 악센트!</div></div>'},
    {type:'table', title:'18.2 불규칙동사의 단순미래 — 어간만 바뀌고 어미는 같음', head:['유형','동사','미래 어간','예'], es:[1,3],
      rows:[['e 탈락','haber / poder / querer / saber / caber','habr- / podr- / querr- / sabr- / cabr-','podré, querrás, sabrá, habrá (있을 것이다)'],['모음 → d','tener / poner / salir / venir / valer','tendr- / pondr- / saldr- / vendr- / valdr-','tendré, pondrás, saldrá, vendremos'],['축약','hacer / decir','har- / dir-','haré, harás, dirá, diremos']],
      after:'<p>파생 동사도 같은 변화: mantener → mantendré, proponer → propondré, deshacer → desharé.</p>'},
    {type:'examples', title:'단순미래의 용법', items:[
      {es:'Mañana iré al médico.', ko:'① 미래의 행위·상황: mañana, la próxima semana, el año que viene, dentro de tres meses'},
      {es:'El año que viene terminaré la carrera.', ko:'① 내년에 학업을 마칠 것이다'},
      {es:'Mañana lloverá en el norte.', ko:'② 예보·예언: 내일 북부에 비가 올 것이다'},
      {es:'Dentro de 50 años viviremos en Marte.', ko:'② 예측: 50년 안에 화성에 살 것이다'},
      {es:'¿Dónde está Luis? — Estará en la oficina.', ko:'③ 현재에 대한 추측·가설: 사무실에 있을 거야 (아마)'},
      {es:'¿Qué hora será? — Serán las diez.', ko:'③ 추측: 몇 시쯤 됐을까? — 10시쯤일 거야'},
      {es:'Te prometo que no lo haré más.', ko:'④ 약속·결심'},
      {es:'¿Me ayudarás con la mudanza?', ko:'⑤ 정중한 요청'},
    ]},
    {type:'chips', title:'미래 시간 표현', items:[['mañana','내일'],['pasado mañana','모레'],['esta noche','오늘 밤'],['la próxima semana','다음 주'],['la semana que viene','다음 주'],['el mes que viene','다음 달'],['el año que viene / el próximo año','내년'],['dentro de dos días','이틀 후에'],['dentro de tres meses','3개월 후에'],['en el futuro','미래에'],['algún día','언젠가'],['pronto','곧']]},
    {type:'table', title:'18.3 ir a + 동사원형 — 가까운 미래·의도·계획', head:['인칭','ir (현재)','+ a + 동사원형'], es:[1,2],
      rows:[['yo','voy','a estudiar'],['tú','vas','a comer'],['él / ella / usted','va','a salir'],['nosotros/as','vamos','a viajar'],['vosotros/as','vais','a ver'],['ellos / ellas / ustedes','van','a trabajar']]},
    {type:'examples', title:'ir a + 동사원형의 용법', items:[
      {es:'Esta tarde voy a estudiar.', ko:'① 즉각적인 의도·가까운 미래: esta tarde, esta noche, mañana, este verano'},
      {es:'Este verano vamos a viajar a Italia.', ko:'① 미래의 계획'},
      {es:'¡Cuidado! Vas a caerte.', ko:'② 현재 상황으로 볼 때 확실히 일어날 일'},
      {es:'Mira esas nubes. Va a llover.', ko:'② 저 구름 봐. 비 오겠다.'},
      {es:'¿Qué vas a hacer el domingo? — Voy a descansar.', ko:'계획 묻고 답하기'},
    ]},
    {type:'compare', title:'단순미래 vs ir a + 동사원형', cols:[
      {title:'단순미래', html:'• 먼 미래, 예측·예보, 약속<br>• 현재에 대한 추측 (Estará enfermo.)<br>• 조금 더 격식 있고 문어적<br>[[Algún día seré famoso.]]'},
      {title:'ir a + 동사원형', html:'• 가까운 미래, 이미 정한 계획·의도<br>• 눈앞의 증거로 보아 확실한 일<br>• 구어에서 훨씬 많이 사용<br>[[Esta noche voy a cenar con Ana.]]'},
    ]},
    {type:'widget', name:'verbtrainer', title:'🏋️ 단순미래 드릴', tenses:['futuro'], verb:'tener'},
  ],
  exercises:[
    {type:'conj', title:'단순미래 변화표', items:[{verb:'viajar', forms:['viajaré','viajarás','viajará','viajaremos','viajaréis','viajarán']},{verb:'tener', forms:['tendré','tendrás','tendrá','tendremos','tendréis','tendrán']},{verb:'hacer', forms:['haré','harás','hará','haremos','haréis','harán']},{verb:'poder', forms:['podré','podrás','podrá','podremos','podréis','podrán']}]},
    {type:'fill', title:'단순미래로 문장 완성', items:[
      {q:'Mañana ___ (ir, yo) al dentista.', a:'iré'},{q:'El próximo año ___ (viajar, nosotros) a Chile.', a:'viajaremos'},{q:'¿Cuándo ___ (volver, tú)? — ___ (Volver) el lunes.', a:['volverás','Volveré']},{q:'Mis padres ___ (venir) a visitarme en Navidad.', a:'vendrán'},{q:'No te preocupes, todo ___ (salir) bien.', a:'saldrá'},{q:'¿Qué ___ (hacer, vosotros) este fin de semana?', a:'haréis'},{q:'Te ___ (decir, yo) la verdad.', a:'diré'},{q:'Dentro de diez años ___ (tener, ella) su propia empresa.', a:'tendrá'},{q:'Mañana ___ (haber) una reunión importante.', a:'habrá'},{q:'¿___ (Poder, usted) ayudarme?', a:'Podrá'},{q:'Los niños ___ (querer) jugar en el parque.', a:'querrán'},{q:'El año que viene ___ (saber, nosotros) los resultados.', a:'sabremos'},
    ]},
    {type:'fill', title:'50년 후의 삶은 어떨까요?', instr:'주어진 표현을 단순미래로 바꾸어 예측 문장을 완성하세요.', items:[
      {q:'Las personas ___ (vivir) más de cien años.', a:'vivirán'},{q:'Los coches ___ (volar).', a:'volarán'},{q:'No ___ (haber) dinero en efectivo.', a:'habrá'},{q:'Los robots ___ (hacer) el trabajo doméstico.', a:'harán'},{q:'Nosotros ___ (poder) viajar a la Luna.', a:'podremos'},{q:'Todo el mundo ___ (hablar) varios idiomas.', a:'hablará'},{q:'Los estudiantes ___ (estudiar) desde casa.', a:'estudiarán'},{q:'La gente ___ (trabajar) menos horas.', a:'trabajará'},
    ]},
    {type:'fill', title:'ir a + 동사원형 — 오늘 오후에 무엇을 할 예정인가요?', instr:'ir 동사를 알맞게 변화시켜 ir a + 동사원형 문장을 완성하세요. 예: (yo, estudiar) → voy a estudiar', items:[
      {q:'Esta tarde yo ___ (ir a + estudiar) español.', a:'voy a estudiar'},{q:'Mi hermana ___ (ir a + ver) una película.', a:'va a ver'},{q:'Nosotros ___ (ir a + jugar) al tenis.', a:'vamos a jugar'},{q:'¿Tú ___ (ir a + salir) con tus amigos?', a:'vas a salir'},{q:'Mis padres ___ (ir a + cenar) fuera.', a:'van a cenar'},{q:'¿Vosotros ___ (ir a + hacer) la compra?', a:'vais a hacer'},{q:'Mira esas nubes: ___ (ir a + llover).', a:'va a llover'},{q:'¡Cuidado! ___ (ir a + caerse, tú).', a:'Vas a caerte|Te vas a caer'},
    ]},
    {type:'mc', title:'용법 구별', items:[
      {q:'¿Dónde está Juan? — ___ en casa, supongo.', opts:['Estará','Va a estar','Está'], a:0, exp:'현재에 대한 추측 = 단순미래'},
      {q:'Mira el cielo. ___ a nevar.', opts:['Nevará','Va','Irá'], a:1, exp:'눈앞의 증거 → ir a'},
      {q:'Dentro de cien años los humanos ___ en otros planetas.', opts:['viven','vivirán','van a vivir'], a:1, exp:'먼 미래의 예측'},
      {q:'¿Qué hora ___? — No sé, ___ las once.', opts:['será / serán','es / van a ser','será / van a ser'], a:0},
      {q:'Esta noche ___ con mis amigos. (이미 정해진 계획)', opts:['voy a cenar','cenaré','둘 다 자연스럽지만 구어에서는 voy a cenar를 선호'], a:2},
      {q:'단순미래에서 악센트가 없는 유일한 인칭은?', opts:['yo','tú','nosotros','ellos'], a:2},
      {q:'hacer의 단순미래 yo 형은?', opts:['haceré','haré','hacré'], a:1},
      {q:'salir의 단순미래 tú 형은?', opts:['salirás','saldrás','salrás'], a:1},
    ]},
  ]
};
