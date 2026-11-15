window.CH = {
  id:'17',
  intro:'현재완료와 직설법 과거의 차이는 "시간이 현재와 연결되어 있는가"입니다. 오늘·이번 주·최근 → 현재완료 / 어제·지난주·작년 → 직설법 과거.',
  sections:[
    {type:'compare', title:'현재완료 vs 직설법 과거', cols:[
      {title:'현재완료 (Pretérito perfecto) 🔗 현재와 연결', html:`• <b>얼마 전</b>에 일어난 일: hace poco, hace un rato, hace una hora<br>[[He hablado con ella hace un rato.]]<br><br>• <b>현 시점을 포함하는 기간</b>: hoy, esta mañana, este mes, este verano, este año<br>[[Este año he viajado mucho.]]<br><br>• <b>구체적 시점 없는 경험</b>: alguna vez, nunca, ya, todavía no, muchas veces<br>[[¿Has estado alguna vez en Japón?]]<br><br>• ya / todavía no 와 함께: [[Ya he terminado.]] [[Todavía no he comido.]]`},
      {title:'직설법 과거 (Indefinido) ✂️ 현재와 단절', html:`• <b>꽤 지난</b> 일: hace una semana, hace un mes, hace años<br>[[Hablé con ella hace una semana.]]<br><br>• <b>이미 지나간 기간</b>: ayer, anoche, el mes pasado, el año pasado, aquel verano, en 2010<br>[[El año pasado viajé mucho.]]<br><br>• <b>언제인지 밝힌</b> 과거의 행위<br>[[Estuve en Japón en 2018.]]<br><br>• 과거의 완결된 이야기: [[Nací en Seúl y crecí en Busan.]]`},
    ]},
    {type:'examples', title:'🔊 같은 내용, 다른 시간 표현', items:[
      {es:'Esta mañana he visto a Pedro. / Ayer vi a Pedro.', ko:'오늘 아침에 페드로를 봤다 / 어제 페드로를 봤다'},
      {es:'Este mes hemos trabajado mucho. / El mes pasado trabajamos mucho.', ko:'이번 달 / 지난달'},
      {es:'Hace un rato ha llamado tu madre. / Hace dos días llamó tu madre.', ko:'조금 전 / 이틀 전'},
      {es:'¿Has leído el Quijote? — Sí, lo leí en la universidad.', ko:'경험을 묻고(현재완료) → 구체적 시점으로 답함(직설법 과거)'},
      {es:'Todavía no he visitado Granada. / Visité Granada en 2019.', ko:'아직 방문 안 함 / 2019년에 방문함'},
      {es:'Nunca he comido insectos. / Una vez comí insectos en Tailandia.', ko:'한 번도 안 먹어봄 / 태국에서 한 번 먹어봄'},
    ]},
    {type:'table', title:'시간 표현으로 시제 판단하기', head:['현재완료와 함께','직설법 과거와 함께'], es:[0,1],
      rows:[['hoy','ayer, anteayer, anoche'],['esta mañana / tarde / noche','la semana pasada'],['esta semana / este mes / este año','el mes pasado / el año pasado'],['hace un rato / hace poco / hace cinco minutos','hace una semana / hace dos años'],['últimamente, hasta ahora','en 1990, en marzo, el 5 de mayo'],['alguna vez, nunca, ya, todavía no','aquel día, aquel verano, entonces'],['siempre (지금까지 늘)','durante dos años (끝난 기간)']]},
    {type:'callout', kind:'tip', html:'대화 패턴: 경험을 물을 때는 현재완료 <b>¿Has estado en…?</b>, 구체적으로 언제·어땠는지 이어서 물을 때는 직설법 과거 <b>¿Cuándo fuiste? ¿Qué te pareció?</b>'},
  ],
  exercises:[
    {type:'mc', title:'알맞은 형태 고르기', items:[
      {q:'Hoy ___ mucho.', opts:['he trabajado','trabajé'], a:0},
      {q:'Ayer ___ mucho.', opts:['he trabajado','trabajé'], a:1},
      {q:'Este año ___ a tres países.', opts:['hemos viajado','viajamos'], a:0},
      {q:'En 2015 ___ a tres países.', opts:['hemos viajado','viajamos'], a:1},
      {q:'¿___ alguna vez en Perú?', opts:['Has estado','Estuviste'], a:0},
      {q:'Sí, ___ en Perú hace tres años.', opts:['he estado','estuve'], a:1},
      {q:'Hace un momento ___ Ana.', opts:['ha llamado','llamó'], a:0},
      {q:'La semana pasada ___ Ana.', opts:['ha llamado','llamó'], a:1},
      {q:'Todavía no ___ el libro.', opts:['he terminado','terminé'], a:0},
      {q:'Anoche ___ el libro.', opts:['he terminado','terminé'], a:1},
      {q:'Mi abuelo ___ en 1930.', opts:['ha nacido','nació'], a:1},
      {q:'Esta mañana ___ tarde.', opts:['me he levantado','me levanté'], a:0},
    ]},
    {type:'fill', title:'문장 완성 ①', instr:'괄호 안 동사를 현재완료 또는 직설법 과거로 쓰세요.', items:[
      {q:'Esta semana ___ (tener, yo) mucho trabajo.', a:'he tenido'},{q:'La semana pasada ___ (tener, yo) mucho trabajo.', a:'tuve'},{q:'¿___ (Ver, tú) a Carlos hoy? — Sí, lo ___ (ver) hace un rato.', a:['Has visto','he visto']},{q:'¿___ (Ver, tú) a Carlos ayer? — Sí, lo ___ (ver) en el gimnasio.', a:['Viste','vi']},{q:'Nunca ___ (comer, nosotros) comida peruana.', a:'hemos comido'},{q:'El verano pasado ___ (comer, nosotros) comida peruana en Lima.', a:'comimos'},{q:'Este mes ___ (llover) mucho.', a:'ha llovido'},{q:'El mes pasado ___ (llover) mucho.', a:'llovió'},
    ]},
    {type:'fill', title:'문장 완성 ②', items:[
      {q:'¿Alguna vez ___ (estar, tú) en Argentina? — Sí, ___ (ir) en 2019.', a:['has estado','fui']},
      {q:'Picasso ___ (nacer) en Málaga y ___ (morir) en Francia.', a:['nació','murió']},
      {q:'Hoy no ___ (desayunar, yo) nada; por eso tengo hambre.', a:'he desayunado'},
      {q:'Anoche ___ (acostarse, nosotros) muy tarde.', a:'nos acostamos'},
      {q:'¿Ya ___ (hacer, vosotros) los deberes? — Todavía no los ___ (hacer).', a:['habéis hecho','hemos hecho']},
      {q:'Hace dos años ___ (cambiar, ella) de trabajo.', a:'cambió'},
      {q:'Últimamente ___ (leer, yo) muchas novelas.', a:'he leído'},
      {q:'En aquel viaje ___ (conocer, nosotros) a gente muy interesante.', a:'conocimos'},
    ]},
    {type:'fill', title:'대화 완성', instr:'현재완료와 직설법 과거 중 알맞은 시제로 대화를 완성하세요.', items:[
      {q:'— ¿___ (Probar, tú) alguna vez el gazpacho? — Sí, lo ___ (probar) el verano pasado en Sevilla.', a:['Has probado','probé']},
      {q:'— ¿Qué ___ (hacer, tú) este fin de semana? — ___ (Ir) al campo con mi familia.', a:['has hecho','He ido']},
      {q:'— ¿Cuándo ___ (empezar, usted) a trabajar aquí? — ___ (Empezar) en 2018.', a:['empezó','Empecé']},
      {q:'— ¿___ (Llegar) ya el paquete? — Sí, ___ (llegar) hace diez minutos.', a:['Ha llegado','ha llegado']},
      {q:'— ¿___ (Ver, vosotros) la última película de Almodóvar? — Sí, la ___ (ver) el jueves pasado.', a:['Habéis visto','vimos']},
    ]},
  ]
};
