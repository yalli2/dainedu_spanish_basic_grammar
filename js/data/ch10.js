window.CH = {
  id:'10',
  intro:'불규칙동사는 "어디가 변하는가"로 세 가지 패턴만 기억하면 됩니다 — ① yo만 변하는 동사, ② nosotros·vosotros만 빼고 변하는 어간모음 변화 동사(부츠 모양!), ③ 전체가 변하는 동사.',
  sections:[
    {type:'table', title:'10.1 ① 1인칭 단수(yo)만 불규칙한 동사', head:['동사','yo','나머지는 규칙'], es:[1,2],
      rows:[['hacer (하다, 만들다)','hago','haces, hace, hacemos, hacéis, hacen'],['poner (놓다)','pongo','pones, pone, ponemos, ponéis, ponen'],['salir (나가다)','salgo','sales, sale, salimos, salís, salen'],['traer (가져오다)','traigo','traes, trae, traemos, traéis, traen'],['saber (알다)','sé','sabes, sabe, sabemos, sabéis, saben'],['dar (주다)','doy','das, da, damos, dais, dan'],['ver (보다)','veo','ves, ve, vemos, veis, ven'],['conocer (알다, 사귀다)','conozco','conoces, conoce, conocemos, conocéis, conocen'],['conducir (운전하다)','conduzco','conduces, conduce, conducimos, conducís, conducen']],
      after:'<p>-cer / -cir로 끝나는 동사는 대부분 yo가 <b>-zco</b>: parecer → parezco, traducir → traduzco, ofrecer → ofrezco.</p>'},
    {type:'text', title:'10.2 ② 어간모음 변화 동사 — "부츠 동사"', html:`<p>어간의 강세 모음이 변합니다. 변하지 않는 <b>nosotros, vosotros</b>를 빼고 나머지 4개를 표에서 이어 보면 부츠(🥾) 모양이 됩니다.</p>
      <div class="cmp">
        <div class="col a"><h4>e → ie</h4>querer: <b>quiero, quieres, quiere</b>, queremos, queréis, <b>quieren</b><br>기타: pensar, empezar, cerrar, entender, preferir, sentir, perder, comenzar, despertar(se), nevar</div>
        <div class="col b"><h4>o → ue</h4>poder: <b>puedo, puedes, puede</b>, podemos, podéis, <b>pueden</b><br>기타: dormir, volver, contar, encontrar, costar, recordar, almorzar, morir, llover, soñar, mover</div>
        <div class="col a"><h4>e → i (-ir 동사만)</h4>pedir: <b>pido, pides, pide</b>, pedimos, pedís, <b>piden</b><br>기타: servir, repetir, seguir (sigo), vestir(se), reír, sonreír, elegir (elijo), medir</div>
        <div class="col b"><h4>u → ue (jugar 하나뿐)</h4>jugar: <b>juego, juegas, juega</b>, jugamos, jugáis, <b>juegan</b></div>
      </div>`},
    {type:'table', title:'10.3 ③ 완전 불규칙 & yo불규칙 + 어간변화 혼합', head:['동사','변화'], es:[1],
      rows:[['ser (이다)','soy, eres, es, somos, sois, son'],['ir (가다)','voy, vas, va, vamos, vais, van'],['estar (있다)','estoy, estás, está, estamos, estáis, están'],['haber (있다 – 무인칭 hay)','hay (존재: Hay un libro. / Hay dos libros.)'],['tener (가지다)','tengo, tienes, tiene, tenemos, tenéis, tienen'],['venir (오다)','vengo, vienes, viene, venimos, venís, vienen'],['decir (말하다)','digo, dices, dice, decimos, decís, dicen'],['oír (듣다)','oigo, oyes, oye, oímos, oís, oyen']]},
    {type:'widget', name:'verbtrainer', title:'🏋️ 불규칙동사 드릴 (현재)', tenses:['presente'], verb:'querer'},
    {type:'examples', title:'🔊 예문', items:[
      {es:'¿Qué quieres comer? — Quiero una paella.', ko:'뭐 먹고 싶어? — 파에야 먹고 싶어.'},
      {es:'No puedo ir hoy, tengo que trabajar.', ko:'오늘은 못 가, 일해야 해.'},
      {es:'¿A qué hora empieza la película? — Empieza a las ocho.', ko:'영화 몇 시에 시작해? — 8시에.'},
      {es:'Los niños duermen diez horas.', ko:'아이들은 열 시간 잔다.'},
      {es:'Siempre pido café con leche.', ko:'나는 항상 카페라테를 주문한다.'},
      {es:'¿Juegas al fútbol? — No, juego al tenis.', ko:'축구 해? — 아니, 테니스 해.'},
      {es:'Hago la tarea y luego salgo con mis amigos.', ko:'숙제를 하고 나서 친구들과 나간다.'},
      {es:'No conozco Madrid pero sé que es bonito.', ko:'마드리드는 (가봐서) 모르지만 예쁘다는 건 안다. (conocer 경험 / saber 지식)'},
      {es:'Vengo de la universidad y voy a casa.', ko:'대학에서 오는 길이고 집에 간다.'},
    ]},
    {type:'callout', kind:'tip', html:'<b>saber vs conocer</b>: saber = 정보·사실·방법을 알다 (Sé nadar. Sé su teléfono.) / conocer = 사람·장소를 경험으로 알다 (Conozco a Juan. Conozco Lima.) — 사람 목적어 앞에는 <b>a</b>를 붙입니다.'},
  ],
  exercises:[
    {type:'conj', title:'어간모음 변화 동사 변화표', items:[{verb:'querer', note:'e→ie', forms:['quiero','quieres','quiere','queremos','queréis','quieren']},{verb:'poder', note:'o→ue', forms:['puedo','puedes','puede','podemos','podéis','pueden']},{verb:'pedir', note:'e→i', forms:['pido','pides','pide','pedimos','pedís','piden']},{verb:'jugar', note:'u→ue', forms:['juego','juegas','juega','jugamos','jugáis','juegan']}]},
    {type:'conj', title:'완전 불규칙 동사 변화표', items:[{verb:'tener', forms:['tengo','tienes','tiene','tenemos','tenéis','tienen']},{verb:'ir', forms:['voy','vas','va','vamos','vais','van']},{verb:'decir', forms:['digo','dices','dice','decimos','decís','dicen']}]},
    {type:'fill', title:'문장 완성 (어간모음 변화)', instr:'괄호 안 동사를 알맞은 현재형으로 쓰세요.', items:[
      {q:'Yo ___ (querer) un café, por favor.', a:'quiero'},{q:'¿Tú ___ (poder) ayudarme?', a:'puedes'},{q:'La tienda ___ (cerrar) a las nueve.', a:'cierra'},{q:'Nosotros ___ (preferir) el té.', a:'preferimos'},{q:'Los niños ___ (dormir) la siesta.', a:'duermen'},{q:'¿Cuánto ___ (costar) este libro?', a:'cuesta'},{q:'Mi abuela siempre ___ (contar) historias.', a:'cuenta'},{q:'¿Vosotros ___ (entender) la pregunta?', a:'entendéis'},{q:'El camarero ___ (servir) la comida.', a:'sirve'},{q:'Yo ___ (jugar) al baloncesto los sábados.', a:'juego'},{q:'¿A qué hora ___ (volver) tú a casa?', a:'vuelves'},{q:'Ellos ___ (pensar) que es fácil.', a:'piensan'},{q:'Yo ___ (seguir) estudiando.', a:'sigo'},{q:'Las clases ___ (empezar) en septiembre.', a:'empiezan'},
    ]},
    {type:'fill', title:'문장 완성 (yo 불규칙 · 완전 불규칙)', items:[
      {q:'Yo ___ (hacer) ejercicio por la mañana.', a:'hago'},{q:'Yo ___ (salir) de casa a las ocho.', a:'salgo'},{q:'Yo no ___ (saber) la respuesta.', a:'sé'},{q:'Yo ___ (conocer) a tu hermana.', a:'conozco'},{q:'Yo ___ (poner) la mesa.', a:'pongo'},{q:'Yo ___ (ver) la televisión por la noche.', a:'veo'},{q:'¿Tú ___ (tener) hermanos? — ___ (tener) dos.', a:['tienes','Tengo']},{q:'¿Adónde ___ (ir) vosotros? — ___ (ir) al cine.', a:['vais','Vamos']},{q:'Mis amigos ___ (venir) a cenar esta noche.', a:'vienen'},{q:'Ella siempre ___ (decir) la verdad.', a:'dice'},{q:'¿___ (oír) tú ese ruido? — Sí, lo ___ (oír).', a:['Oyes','oigo']},{q:'En mi barrio ___ (haber) un parque muy grande.', a:'hay'},
    ]},
    {type:'mc', title:'saber / conocer / 기타 선택', items:[
      {q:'Yo ___ nadar muy bien.', opts:['sé','conozco'], a:0, exp:'능력·방법 = saber'},
      {q:'¿___ a mi amigo Carlos?', opts:['Sabes','Conoces'], a:1, exp:'사람을 알다 = conocer + a'},
      {q:'No ___ dónde está la estación.', opts:['sé','conozco'], a:0, exp:'정보 = saber'},
      {q:'¿___ Barcelona? — Sí, es preciosa.', opts:['Sabes','Conoces'], a:1, exp:'장소 경험 = conocer'},
      {q:'En la mesa ___ tres platos.', opts:['hay','están','es'], a:0, exp:'존재(불특정) = hay'},
      {q:'Los platos ___ en la mesa.', opts:['hay','están','son'], a:1, exp:'특정 사물의 위치 = estar'},
      {q:'어간이 변하지 않는 인칭은?', opts:['yo, tú','él, ellos','nosotros, vosotros','usted, ustedes'], a:2},
      {q:'다음 중 e→i 변화 동사는?', opts:['pensar','pedir','poder','poner'], a:1},
    ]},
  ]
};
