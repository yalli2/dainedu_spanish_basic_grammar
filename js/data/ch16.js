window.CH = {
  id:'16',
  intro:'현재완료(pretérito perfecto)는 haber의 현재형 + 과거분사. "오늘, 이번 주, 최근에, 지금까지" — 현재와 연결된 과거를 말합니다.',
  sections:[
    {type:'table', title:'현재완료의 형성: haber(현재) + 과거분사', head:['인칭','haber','+ 과거분사'], es:[1,2],
      rows:[['yo','he','hablado / comido / vivido'],['tú','has','hablado / comido / vivido'],['él / ella / usted','ha','hablado / comido / vivido'],['nosotros/as','hemos','hablado / comido / vivido'],['vosotros/as','habéis','hablado / comido / vivido'],['ellos / ellas / ustedes','han','hablado / comido / vivido']],
      after:`<p><b>규칙 과거분사</b>: -AR → <b>-ado</b> (hablar → hablado), -ER/-IR → <b>-ido</b> (comer → comido, vivir → vivido). 과거분사는 <b>변하지 않으며</b>, haber와 과거분사 사이에 아무것도 넣지 않습니다: ==He== siempre ==comido== (✗) → Siempre he comido (○). 대명사는 haber 앞: <b>Me he levantado. Lo he visto.</b></p>`},
    {type:'cards', title:'불규칙 과거분사 — 꼭 외우기', items:[
      {front:'hacer',back:'hecho',note:'한, 만든'},{front:'decir',back:'dicho',note:'말한'},{front:'ver',back:'visto',note:'본'},{front:'escribir',back:'escrito',note:'쓴'},{front:'poner',back:'puesto',note:'놓은'},{front:'volver',back:'vuelto',note:'돌아온'},{front:'abrir',back:'abierto',note:'연'},{front:'romper',back:'roto',note:'부순'},{front:'morir',back:'muerto',note:'죽은'},{front:'cubrir',back:'cubierto',note:'덮은'},{front:'resolver',back:'resuelto',note:'해결한'},{front:'freír',back:'frito',note:'튀긴'},{front:'descubrir',back:'descubierto',note:'발견한'},{front:'devolver',back:'devuelto',note:'돌려준'},{front:'leer',back:'leído',note:'읽은 (악센트!)'},{front:'oír',back:'oído',note:'들은 (악센트!)'},
    ]},
    {type:'examples', title:'현재완료의 용법', items:[
      {es:'Hoy he desayunado muy temprano.', ko:'① 현재를 포함하는 기간(hoy, esta semana, este año)에 일어난 일'},
      {es:'Esta semana hemos tenido mucho trabajo.', ko:'① 이번 주에 일이 많았다'},
      {es:'He hablado con Luis hace un momento.', ko:'② 방금 전(hace poco, hace un rato, hace cinco minutos)에 일어난 일'},
      {es:'¿Has oído? ¡Ha nacido el hijo de Marta!', ko:'③ 최근의 소식'},
      {es:'He estado en México tres veces.', ko:'④ 시점 언급 없는 과거의 경험'},
      {es:'¿Has probado alguna vez la paella? — No, nunca la he probado.', ko:'④ 경험 여부: alguna vez(한 번이라도) / nunca(한 번도)'},
      {es:'Siempre he vivido en esta ciudad.', ko:'⑤ 과거에 시작해 지금까지 계속'},
      {es:'No puedo entrar: he perdido las llaves.', ko:'⑥ 현재에 영향을 주는 과거의 행동'},
      {es:'¿Ya has terminado? — No, todavía no he terminado.', ko:'⑦ ya(이미) / todavía no(아직 ~않다)'},
    ]},
    {type:'chips', title:'현재완료와 어울리는 시간 표현', items:[['hoy','오늘'],['esta mañana','오늘 아침'],['esta tarde','오늘 오후'],['esta semana','이번 주'],['este mes','이번 달'],['este año','올해'],['este verano','이번 여름'],['hace poco','조금 전'],['hace un rato','잠시 전'],['hace un momento','방금'],['últimamente','최근에'],['alguna vez','한 번이라도'],['nunca','한 번도 ~않다'],['ya','이미, 벌써'],['todavía no','아직 ~않다'],['siempre','항상, 늘'],['muchas veces','여러 번'],['hasta ahora','지금까지']]},
    {type:'callout', kind:'info', html:'중남미 여러 지역과 스페인 북서부에서는 현재완료 대신 직설법 과거를 선호합니다: Hoy <b>comí</b> tarde. 둘 다 올바른 스페인어이며, 이 교재는 스페인 표준 용법을 따릅니다.'},
    {type:'widget', name:'verbtrainer', title:'🏋️ 현재완료 드릴', tenses:['perfecto'], verb:'hacer'},
  ],
  exercises:[
    {type:'fill', title:'과거분사 쓰기', instr:'동사의 과거분사를 쓰세요.', items:[
      {q:'hablar → ___', a:'hablado'},{q:'comer → ___', a:'comido'},{q:'vivir → ___', a:'vivido'},{q:'hacer → ___', a:'hecho'},{q:'ver → ___', a:'visto'},{q:'escribir → ___', a:'escrito'},{q:'decir → ___', a:'dicho'},{q:'poner → ___', a:'puesto'},{q:'abrir → ___', a:'abierto'},{q:'volver → ___', a:'vuelto'},{q:'romper → ___', a:'roto'},{q:'leer → ___', a:'leído'},{q:'morir → ___', a:'muerto'},{q:'tener → ___', a:'tenido'},{q:'ser → ___', a:'sido'},{q:'ir → ___', a:'ido'},
    ]},
    {type:'fill', title:'Betty는 오늘 무엇을 했나요?', instr:'주어진 동사를 현재완료로 바꾸어 문장을 완성하세요. (주어: Betty)', items:[
      {q:'Hoy Betty ___ (levantarse) a las siete.', a:'se ha levantado'},{q:'___ (Desayunar) café con tostadas.', a:'Ha desayunado'},{q:'___ (Ir) al trabajo en metro.', a:'Ha ido'},{q:'___ (Escribir) muchos correos.', a:'Ha escrito'},{q:'___ (Comer) con una compañera.', a:'Ha comido'},{q:'Por la tarde ___ (hacer) deporte.', a:'ha hecho'},{q:'___ (Ver) una serie en casa.', a:'Ha visto'},{q:'Todavía no ___ (acostarse).', a:'se ha acostado'},
    ]},
    {type:'fill', title:'뉴스 멘트 완성', instr:'현재완료로 뉴스 문장을 완성하세요.', items:[
      {q:'Buenas noches. Hoy el presidente ___ (visitar) Barcelona.', a:'ha visitado'},{q:'Esta mañana ___ (abrir) el nuevo hospital de la ciudad.', a:'ha abierto'},{q:'Los científicos ___ (descubrir) un nuevo planeta.', a:'han descubierto'},{q:'El Real Madrid ___ (ganar) tres a uno.', a:'ha ganado'},{q:'Este año los precios ___ (subir) un cinco por ciento.', a:'han subido'},{q:'La famosa actriz ___ (morir) a los noventa años.', a:'ha muerto'},
    ]},
    {type:'match', title:'원인과 결과 연결하기', instr:'현재에 영향을 주는 과거의 행동(원인)과 그 결과를 연결하세요.', pairs:[['He perdido las llaves,','por eso no puedo entrar en casa.'],['No he dormido bien,','por eso estoy muy cansado.'],['Hemos comido demasiado,','por eso nos duele el estómago.'],['Ha estudiado mucho,','por eso ha aprobado el examen.'],['Se ha roto una pierna,','por eso no puede jugar.'],['Han llegado tarde,','por eso no han visto el principio.']]},
    {type:'fill', title:'ya / todavía no 로 묻고 답하기', instr:'보기처럼 완성하세요. 예: ¿Ya has comido? — No, todavía no he comido.', items:[
      {q:'¿___ has terminado los deberes? — No, ___ no los he terminado.', a:['Ya','todavía']},
      {q:'¿Ya ha llegado Juan? — Sí, ___ ha llegado.', a:'ya'},
      {q:'¿Habéis visto la película? — No, ___ no la hemos ___.', a:['todavía','visto']},
      {q:'¿Ya ___ (escribir, tú) el informe? — Sí, ya lo he ___.', a:['has escrito','escrito']},
      {q:'¿Ya han vuelto tus padres? — No, todavía no han ___.', a:'vuelto'},
    ]},
    {type:'mc', title:'alguna vez / nunca / 기타', items:[
      {q:'¿Has estado ___ en Argentina? — No, ___.', opts:['alguna vez / nunca','nunca / alguna vez','ya / todavía'], a:0},
      {q:'Nunca ___ sushi.', opts:['he comido','comí','he comí'], a:0},
      {q:'"방금 도착했다"', opts:['He llegado hace un momento.','Llegaba hace un momento.','He llegado el año pasado.'], a:0},
      {q:'다음 중 틀린 문장은?', opts:['He siempre vivido aquí.','Siempre he vivido aquí.','He vivido aquí siempre.'], a:0, exp:'haber와 과거분사는 떨어뜨리지 않음'},
      {q:'Me ___ levantado tarde.', opts:['ha','he','has'], a:1},
      {q:'Ellas han ___ muy amables.', opts:['sido','sida','sidas'], a:0, exp:'과거분사는 불변'},
    ]},
  ]
};
