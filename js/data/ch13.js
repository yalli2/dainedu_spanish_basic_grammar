window.CH = {
  id:'13',
  intro:'직설법 과거(pretérito indefinido)는 "어제, 지난주, 1998년에" 처럼 과거의 특정 시점에 끝난 행위를 말합니다. 어미에 강세가 있는 것이 특징이에요 — hablé, comió.',
  sections:[
    {type:'table', title:'13.1 규칙동사의 직설법 과거', head:['인칭','-AR: hablar','-ER: comer','-IR: vivir'], es:[1,2,3],
      rows:[['yo','habl-é','com-í','viv-í'],['tú','habl-aste','com-iste','viv-iste'],['él / ella / usted','habl-ó','com-ió','viv-ió'],['nosotros/as','habl-amos','com-imos','viv-imos'],['vosotros/as','habl-asteis','com-isteis','viv-isteis'],['ellos / ellas / ustedes','habl-aron','com-ieron','viv-ieron']],
      after:'<div class="callout tip"><div class="em">💡</div><div>-ER과 -IR의 과거 어미는 <b>완전히 같습니다</b>. -AR/-IR의 nosotros 형태는 현재와 동일(hablamos, vivimos) → 문맥으로 구별. <b>yo와 él 형태의 악센트</b>(hablé / habló)를 빠뜨리면 다른 뜻이 됩니다: hablo(나는 말한다) vs habló(그가 말했다).</div></div>'},
    {type:'chips', title:'직설법 과거와 함께 쓰는 시간 표현', items:[['ayer','어제'],['anoche','어젯밤'],['anteayer','그저께'],['el jueves (pasado)','(지난) 목요일에'],['la semana pasada','지난주'],['el mes pasado','지난달'],['el año pasado','작년'],['hace dos meses','두 달 전'],['hace tres años','3년 전'],['en 1998','1998년에'],['el verano pasado','지난여름'],['aquel día','그날'],['una vez','한 번'],['de repente','갑자기']]},
    {type:'examples', title:'용법과 예문', items:[
      {es:'Ayer comí con mis padres.', ko:'어제 부모님과 식사했다. (과거의 완결된 행위)'},
      {es:'El año pasado viajamos a Perú.', ko:'작년에 우리는 페루를 여행했다.'},
      {es:'¿Qué hiciste anoche? — Estudié y luego vi una película.', ko:'어젯밤 뭐 했어? — 공부하고 영화 봤어. (과거 한 순간에 대한 질문)'},
      {es:'Mis abuelos se casaron en 1965.', ko:'조부모님은 1965년에 결혼하셨다. (재귀동사 casarse)'},
      {es:'Me levanté a las seis y me lavé la cara.', ko:'6시에 일어나 세수했다. (lavarse)'},
      {es:'No salí el fin de semana.', ko:'주말에 나가지 않았다. (no는 동사 앞)'},
      {es:'No vino Juan a la fiesta.', ko:'후안은 파티에 오지 않았다. (부정문에서 주어는 보통 동사 뒤)'},
      {es:'Cervantes nació en 1547 y murió en 1616.', ko:'세르반테스는 1547년에 태어나 1616년에 죽었다.'},
    ]},
    {type:'table', title:'13.2 불규칙동사의 직설법 과거 ① 어간이 바뀌고 강세 없는 어미', html:'<p>이 그룹은 어간이 통째로 바뀌고, 어미는 <b>-e, -iste, -o, -imos, -isteis, -ieron</b>으로 <b>악센트 없이</b> 붙습니다.</p>', head:['동사','어간','변화'], es:[1,2],
      rows:[['tener','tuv-','tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron'],['estar','estuv-','estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron'],['poder','pud-','pude, pudiste, pudo, pudimos, pudisteis, pudieron'],['poner','pus-','puse, pusiste, puso, pusimos, pusisteis, pusieron'],['saber','sup-','supe, supiste, supo, supimos, supisteis, supieron'],['hacer','hic- (hizo)','hice, hiciste, hizo, hicimos, hicisteis, hicieron'],['querer','quis-','quise, quisiste, quiso, quisimos, quisisteis, quisieron'],['venir','vin-','vine, viniste, vino, vinimos, vinisteis, vinieron'],['decir','dij- (dijeron)','dije, dijiste, dijo, dijimos, dijisteis, dijeron'],['traer','traj- (trajeron)','traje, trajiste, trajo, trajimos, trajisteis, trajeron']]},
    {type:'table', title:'불규칙동사 ② ser / ir / dar / ver 와 3인칭 모음 변화', head:['동사','변화','메모'], es:[1],
      rows:[['ser / ir','fui, fuiste, fue, fuimos, fuisteis, fueron','ser와 ir의 과거는 동일! 문맥으로 구별 (Fui médico / Fui a Madrid)'],['dar','di, diste, dio, dimos, disteis, dieron','악센트 없음'],['ver','vi, viste, vio, vimos, visteis, vieron','악센트 없음'],['dormir (o→u 3인칭)','dormí, dormiste, durmió, dormimos, dormisteis, durmieron','morir → murió, murieron'],['pedir (e→i 3인칭)','pedí, pediste, pidió, pedimos, pedisteis, pidieron','servir, repetir, seguir, preferir, sentir도 동일'],['leer (i→y 3인칭)','leí, leíste, leyó, leímos, leísteis, leyeron','oír → oyó, creer → creyó, construir → construyó'],['철자 변화 (yo)','buscar → busqué / llegar → llegué / empezar → empecé','소리를 유지하기 위한 철자 변화']]},
    {type:'widget', name:'verbtrainer', title:'🏋️ 직설법 과거 드릴', tenses:['indefinido'], verb:'hablar'},
  ],
  exercises:[
    {type:'conj', title:'규칙동사 과거 변화표', items:[{verb:'trabajar', forms:['trabajé','trabajaste','trabajó','trabajamos','trabajasteis','trabajaron']},{verb:'comer', forms:['comí','comiste','comió','comimos','comisteis','comieron']},{verb:'escribir', forms:['escribí','escribiste','escribió','escribimos','escribisteis','escribieron']}]},
    {type:'fill', title:'규칙동사 과거형으로 문장 완성', items:[
      {q:'Ayer yo ___ (hablar) con mi jefe.', a:'hablé'},{q:'¿Tú ___ (comer) paella en Valencia?', a:'comiste'},{q:'Mi hermana ___ (vivir) en Londres dos años.', a:'vivió'},{q:'Nosotros ___ (llegar) tarde a clase.', a:'llegamos'},{q:'¿Vosotros ___ (salir) anoche?', a:'salisteis'},{q:'Los estudiantes ___ (estudiar) mucho para el examen.', a:'estudiaron'},{q:'El año pasado mis padres ___ (viajar) a Cuba.', a:'viajaron'},{q:'Anoche yo ___ (escribir) tres correos.', a:'escribí'},{q:'Juan ___ (comprar) un coche nuevo la semana pasada.', a:'compró'},{q:'Ustedes ___ (beber) mucho café ayer.', a:'bebieron'},{q:'Yo ___ (buscar) las llaves toda la mañana.', a:'busqué'},{q:'Yo ___ (empezar) a trabajar en 2020.', a:'empecé'},
    ]},
    {type:'conj', title:'불규칙동사 과거 변화표', items:[{verb:'tener', forms:['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron']},{verb:'hacer', forms:['hice','hiciste','hizo','hicimos','hicisteis','hicieron']},{verb:'ir / ser', forms:['fui','fuiste','fue','fuimos','fuisteis','fueron']},{verb:'decir', forms:['dije','dijiste','dijo','dijimos','dijisteis','dijeron']}]},
    {type:'fill', title:'불규칙동사 과거형으로 문장 완성', items:[
      {q:'Ayer no ___ (poder, yo) ir a la reunión.', a:'pude'},{q:'¿Qué ___ (hacer, tú) el fin de semana?', a:'hiciste'},{q:'Mi abuelo ___ (ser) profesor de historia.', a:'fue'},{q:'El sábado ___ (ir, nosotros) a la playa.', a:'fuimos'},{q:'Ellos ___ (venir) a verme el domingo.', a:'vinieron'},{q:'¿Dónde ___ (poner, tú) mis gafas?', a:'pusiste'},{q:'Ana ___ (estar) enferma la semana pasada.', a:'estuvo'},{q:'Los niños ___ (dormir) diez horas anoche.', a:'durmieron'},{q:'El camarero nos ___ (servir) la cena.', a:'sirvió'},{q:'Yo ___ (leer) el libro y ella lo ___ (leer) también.', a:['leí','leyó']},{q:'Ayer ___ (ver, yo) a Marta en el centro.', a:'vi'},{q:'Mis padres me ___ (dar) un regalo precioso.', a:'dieron'},{q:'Él no ___ (decir) nada.', a:'dijo'},{q:'¿___ (tener, vosotros) problemas con el coche?', a:'Tuvisteis'},
    ]},
    {type:'mc', title:'시간 표현과 어울리는 시제 / 형태', items:[
      {q:'___ pasada fui al teatro.', opts:['La semana','Todos los días','Normalmente'], a:0},
      {q:'"Fui a Madrid."에서 fui의 원형은?', opts:['ser','ir','둘 다 가능하지만 여기서는 ir'], a:2, exp:'a Madrid(목적지)가 있으므로 ir'},
      {q:'"Fui estudiante."에서 fui의 원형은?', opts:['ser','ir','dar'], a:0},
      {q:'hablo / habló 의 차이는?', opts:['같은 뜻','hablo = 나는 말한다 (현재), habló = 그가 말했다 (과거)','hablo = 과거, habló = 현재'], a:1},
      {q:'다음 중 과거형이 규칙인 동사는?', opts:['tener','vivir','hacer','venir'], a:1},
      {q:'yo 형에서 철자가 바뀌는 동사는?', opts:['comer','llegar (llegué)','vivir','hablar'], a:1},
    ]},
  ]
};
