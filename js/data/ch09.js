window.CH = {
  id:'09',
  intro:'스페인어 동사는 원형 어미에 따라 -AR, -ER, -IR 세 그룹으로 나뉩니다. 어간은 그대로 두고 어미만 인칭에 맞게 바꾸면 끝! 규칙동사를 익히면 수천 개의 동사를 한 번에 정복합니다.',
  sections:[
    {type:'table', title:'규칙동사의 현재시제 변화', head:['인칭','-AR: trabajar (일하다)','-ER: comer (먹다)','-IR: vivir (살다)'], es:[1,2,3],
      rows:[['yo','trabaj-o','com-o','viv-o'],['tú','trabaj-as','com-es','viv-es'],['él / ella / usted','trabaj-a','com-e','viv-e'],['nosotros/as','trabaj-amos','com-emos','viv-imos'],['vosotros/as','trabaj-áis','com-éis','viv-ís'],['ellos / ellas / ustedes','trabaj-an','com-en','viv-en']],
      after:'<div class="callout tip"><div class="em">💡</div><div>-ER과 -IR은 <b>nosotros, vosotros</b> 형태만 다릅니다 (com<b>emos</b>/viv<b>imos</b>, com<b>éis</b>/viv<b>ís</b>). yo는 세 그룹 모두 <b>-o</b>!</div></div>'},
    {type:'widget', name:'verbtrainer', title:'🏋️ 현재시제 동사 드릴', tenses:['presente'], verb:'trabajar'},
    {type:'chips', title:'자주 쓰는 규칙동사', items:[['hablar','말하다'],['estudiar','공부하다'],['trabajar','일하다'],['comprar','사다'],['escuchar','듣다'],['cantar','노래하다'],['bailar','춤추다'],['viajar','여행하다'],['tomar','마시다, 타다'],['llegar','도착하다'],['necesitar','필요하다'],['desear','원하다'],['comer','먹다'],['beber','마시다'],['aprender','배우다'],['leer','읽다'],['correr','달리다'],['vender','팔다'],['comprender','이해하다'],['creer','믿다'],['vivir','살다'],['escribir','쓰다'],['abrir','열다'],['recibir','받다'],['subir','오르다'],['compartir','공유하다'],['decidir','결정하다'],['asistir','참석하다']]},
    {type:'examples', title:'현재시제의 용법', items:[
      {es:'¿Dónde trabajas? — Trabajo en un banco.', ko:'① 현재의 정보를 묻고 답할 때'},
      {es:'¿Hablas español? — Sí, hablo español e inglés.', ko:'① 현재의 사실·능력'},
      {es:'Todos los días desayuno a las siete.', ko:'② 습관적인 행동: 매일 7시에 아침을 먹는다'},
      {es:'Los domingos comemos con mis abuelos.', ko:'② 습관: 일요일마다 조부모님과 식사한다'},
      {es:'El agua hierve a cien grados.', ko:'③ 일반적·보편적 사실'},
      {es:'Los españoles cenan muy tarde.', ko:'③ 일반적 사실'},
      {es:'¡Mira! Ahora llega el tren.', ko:'④ 말하는 순간 벌어지는 일'},
      {es:'¿Qué lees? — Leo una novela de García Márquez.', ko:'④ 지금 하고 있는 행위'},
      {es:'Mañana viajo a Barcelona.', ko:'⑤ 가까운 미래의 확정된 계획 (추가 용법)'},
    ]},
    {type:'table', title:'빈도 표현과 함께', head:['표현','뜻','예'], es:[0,2],
      rows:[['siempre','항상','Siempre desayuno café.'],['todos los días','매일','Estudio todos los días.'],['normalmente / generalmente','보통','Normalmente como en casa.'],['a menudo / muchas veces','자주','Viajo a menudo.'],['a veces','가끔','A veces bebo vino.'],['casi nunca','거의 ~않다','Casi nunca veo la tele.'],['nunca','결코 ~않다','Nunca fumo.'],['los lunes / los fines de semana','월요일마다 / 주말마다','Los sábados bailamos.']]},
    {type:'text', title:'주어 대명사와 존칭', html:`<table class="tbl"><thead><tr><th>단수</th><th>복수</th></tr></thead><tbody>
      <tr><td>[[yo]] 나</td><td>[[nosotros / nosotras]] 우리</td></tr>
      <tr><td>[[tú]] 너 (친근한 2인칭)</td><td>[[vosotros / vosotras]] 너희 (스페인에서만 사용)</td></tr>
      <tr><td>[[él / ella]] 그 / 그녀 · [[usted (Ud.)]] 당신 (존칭, 3인칭 변화)</td><td>[[ellos / ellas]] 그들 / 그녀들 · [[ustedes (Uds.)]] 당신들 (중남미에서는 너희도 ustedes)</td></tr></tbody></table>
      <p><b>usted</b>는 상대방을 높이는 말이지만 동사는 <b>3인칭 단수</b>로 변화합니다: ¿Usted habla coreano? / ¿Dónde vive usted?</p>`},
  ],
  exercises:[
    {type:'conj', title:'동사 변화표 완성', items:[{verb:'hablar', forms:['hablo','hablas','habla','hablamos','habláis','hablan']},{verb:'aprender', forms:['aprendo','aprendes','aprende','aprendemos','aprendéis','aprenden']},{verb:'escribir', forms:['escribo','escribes','escribe','escribimos','escribís','escriben']}]},
    {type:'fill', title:'-AR 동사 문장 완성', instr:'괄호 안 동사를 알맞은 현재형으로 쓰세요.', items:[
      {q:'Yo ___ (estudiar) español en la academia.', a:'estudio'},{q:'¿Tú ___ (hablar) inglés?', a:'hablas'},{q:'Mi madre ___ (trabajar) en un hospital.', a:'trabaja'},{q:'Nosotros ___ (escuchar) música clásica.', a:'escuchamos'},{q:'¿Vosotros ___ (bailar) salsa?', a:'bailáis'},{q:'Los niños ___ (cantar) en el coro.', a:'cantan'},{q:'Usted ___ (necesitar) un pasaporte.', a:'necesita'},{q:'Ana y yo ___ (viajar) a México en julio.', a:'viajamos'},{q:'El tren ___ (llegar) a las nueve.', a:'llega'},{q:'Ellas ___ (comprar) pan todos los días.', a:'compran'},
    ]},
    {type:'fill', title:'-ER 동사 문장 완성', items:[
      {q:'Yo ___ (comer) mucha fruta.', a:'como'},{q:'¿Qué ___ (beber) tú?', a:'bebes'},{q:'Mi hermano ___ (leer) el periódico.', a:'lee'},{q:'Nosotros ___ (aprender) alemán.', a:'aprendemos'},{q:'¿Vosotros ___ (comprender) la lección?', a:'comprendéis'},{q:'Los atletas ___ (correr) cada mañana.', a:'corren'},{q:'Usted ___ (vender) coches, ¿verdad?', a:'vende'},{q:'Los niños ___ (creer) en los Reyes Magos.', a:'creen'},
    ]},
    {type:'fill', title:'-IR 동사 문장 완성', items:[
      {q:'Yo ___ (vivir) en Seúl.', a:'vivo'},{q:'¿Dónde ___ (vivir) tú?', a:'vives'},{q:'Marta ___ (escribir) correos electrónicos.', a:'escribe'},{q:'Nosotros ___ (abrir) la tienda a las diez.', a:'abrimos'},{q:'¿Vosotros ___ (recibir) muchas cartas?', a:'recibís'},{q:'Ellos ___ (subir) las escaleras.', a:'suben'},{q:'Usted ___ (decidir) el menú.', a:'decide'},{q:'Mis amigos y yo ___ (compartir) un piso.', a:'compartimos'},
    ]},
    {type:'mc', title:'용법 구별하기', instr:'각 문장의 현재시제가 어떤 용법인지 고르세요.', items:[
      {q:'Los domingos desayunamos churros.', opts:['현재의 정보','습관적 행동','보편적 사실','말하는 순간의 행위'], a:1},
      {q:'La Tierra gira alrededor del Sol.', opts:['현재의 정보','습관적 행동','보편적 사실','말하는 순간의 행위'], a:2},
      {q:'¡Mira, ahora sale el sol!', opts:['현재의 정보','습관적 행동','보편적 사실','말하는 순간의 행위'], a:3},
      {q:'¿En qué trabajas? — Trabajo en una escuela.', opts:['현재의 정보','습관적 행동','보편적 사실','말하는 순간의 행위'], a:0},
      {q:'"usted"와 함께 쓰는 동사 형태는?', opts:['2인칭 단수 (hablas)','3인칭 단수 (habla)','2인칭 복수 (habláis)'], a:1},
      {q:'"vosotros"를 일상적으로 쓰는 지역은?', opts:['멕시코','아르헨티나','스페인','콜롬비아'], a:2},
    ]},
  ]
};
