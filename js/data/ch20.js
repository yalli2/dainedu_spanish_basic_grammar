window.CH = {
  id:'20',
  intro:'명령형(imperativo)은 지시·충고·요청·허가를 표현합니다. 상대가 tú인지 usted인지, 긍정인지 부정인지에 따라 형태가 달라집니다.',
  sections:[
    {type:'table', title:'20.1 규칙동사의 긍정 명령형', head:['대상','hablar','comer','vivir','만드는 법'], es:[1,2,3],
      rows:[['tú','habla','come','vive','현재 3인칭 단수와 같음 (él habla → ¡habla!)'],['usted','hable','coma','viva','어미 교환: -ar → -e / -er, -ir → -a'],['nosotros/as','hablemos','comamos','vivamos','"~하자" (-emos / -amos)'],['vosotros/as','hablad','comed','vivid','동사원형의 -r → -d'],['ustedes','hablen','coman','vivan','usted 형 + n']],
      after:'<div class="callout tip"><div class="em">💡</div><div><b>tú 긍정 명령 = 현재시제 3인칭 단수</b>: estudia, bebe, abre, piensa (어간모음 변화도 그대로: cierra, vuelve, pide). <b>usted/ustedes</b>는 "모음을 서로 바꾼다": -ar 동사는 e, -er/-ir 동사는 a.</div></div>'},
    {type:'examples', title:'명령형의 용법 (긍정)', items:[
      {es:'Abre la ventana, por favor.', ko:'① 명령과 지시: 창문 열어 줘'},
      {es:'Gire a la derecha y siga todo recto.', ko:'① 지시 (usted): 오른쪽으로 돌아서 직진하세요'},
      {es:'Pasa, pasa. Siéntate.', ko:'② 요구와 초대: 들어와, 앉아'},
      {es:'Tomen asiento, por favor.', ko:'② 초대 (ustedes): 앉으세요'},
      {es:'Estudia más si quieres aprobar.', ko:'③ 조언·제안·주의: 합격하고 싶으면 더 공부해'},
      {es:'Beba mucha agua y descanse.', ko:'③ 조언 (usted): 물을 많이 드시고 쉬세요'},
      {es:'¿Puedo entrar? — Sí, entra.', ko:'④ 허가: 들어가도 돼? — 응, 들어와'},
      {es:'¿Puedo usar su teléfono? — Claro, úselo.', ko:'④ 허가 (usted): 그럼요, 쓰세요'},
    ]},
    {type:'table', title:'20.2 규칙동사의 부정 명령형 — no + 접속법 현재', head:['대상','hablar','comer','vivir'], es:[1,2,3],
      rows:[['tú','no hables','no comas','no vivas'],['usted','no hable','no coma','no viva'],['nosotros/as','no hablemos','no comamos','no vivamos'],['vosotros/as','no habléis','no comáis','no viváis'],['ustedes','no hablen','no coman','no vivan']],
      after:'<div class="callout warn"><div class="em">⚠️</div><div>부정 명령은 <b>모든 인칭</b>이 "모음 교환" 형태(접속법 현재)입니다. tú와 vosotros는 긍정과 부정의 형태가 다릅니다: <b>habla → no hables</b>, <b>hablad → no habléis</b>. usted/ustedes/nosotros는 긍정형에 no만 붙이면 됩니다.</div></div>'},
    {type:'examples', title:'부정 명령형의 용법', items:[
      {es:'No hables tan alto.', ko:'① 명령·지시: 그렇게 크게 말하지 마'},
      {es:'No aparque aquí, por favor.', ko:'① usted: 여기에 주차하지 마세요'},
      {es:'No se preocupen, todo está bien.', ko:'② ustedes: 걱정하지 마세요'},
      {es:'No comas tanto dulce.', ko:'③ 조언: 단것 너무 많이 먹지 마'},
      {es:'No fumes en casa.', ko:'③ 주의: 집에서 담배 피우지 마'},
      {es:'¿Puedo abrir la ventana? — No, no la abras, hace frío.', ko:'④ 허가 거부'},
    ]},
    {type:'text', title:'명령형의 어순 — 대명사의 위치', html:`<ul>
      <li><b>긍정 명령</b>: 대명사(재귀·목적격)를 동사 <b>뒤에 붙여</b> 씁니다. 강세 유지를 위해 악센트가 필요할 수 있음.<br>[[Lávate las manos.]] [[Cómelo todo.]] [[Dígame.]] [[Escríbeme pronto.]] [[Levántate.]]</li>
      <li><b>부정 명령</b>: 대명사를 no와 동사 <b>사이</b>에 둡니다.<br>[[No te laves ahí.]] [[No lo comas.]] [[No me lo digas.]] [[No te levantes.]]</li>
      <li>vosotros 재귀 긍정형은 -d가 탈락: lavad + os → ==lavaos==, sentad + os → ==sentaos==.</li>
      <li>철자 변화 (usted/부정형): buscar → bus<b>qu</b>e, llegar → lle<b>gu</b>e, empezar → empie<b>c</b>e, coger → co<b>j</b>a.</li></ul>`},
    {type:'widget', name:'verbtrainer', title:'🏋️ 명령형 드릴', tenses:['imperativo','imperativo_neg'], verb:'hablar'},
  ],
  exercises:[
    {type:'conj', title:'긍정 명령형 변화표', items:[{verb:'estudiar', pron:['tú','usted','vosotros/as','ustedes'], forms:['estudia','estudie','estudiad','estudien']},{verb:'beber', pron:['tú','usted','vosotros/as','ustedes'], forms:['bebe','beba','bebed','beban']},{verb:'abrir', pron:['tú','usted','vosotros/as','ustedes'], forms:['abre','abra','abrid','abran']}]},
    {type:'conj', title:'부정 명령형 변화표', items:[{verb:'estudiar', pron:['tú','usted','vosotros/as','ustedes'], forms:['no estudies','no estudie','no estudiéis','no estudien']},{verb:'beber', pron:['tú','usted','vosotros/as','ustedes'], forms:['no bebas','no beba','no bebáis','no beban']},{verb:'escribir', pron:['tú','usted','vosotros/as','ustedes'], forms:['no escribas','no escriba','no escribáis','no escriban']}]},
    {type:'fill', title:'친구에게 (tú) 명령하기', instr:'주어진 동사를 tú 긍정 명령형으로 쓰세요.', items:[
      {q:'___ (hablar) más despacio, por favor.', a:'Habla'},{q:'___ (comer) la verdura.', a:'Come'},{q:'___ (abrir) la puerta.', a:'Abre'},{q:'___ (escuchar) esta canción.', a:'Escucha'},{q:'___ (leer) este libro, es muy bueno.', a:'Lee'},{q:'___ (escribir) tu nombre aquí.', a:'Escribe'},{q:'___ (tomar) un taxi, es tarde.', a:'Toma'},{q:'___ (estudiar) para el examen.', a:'Estudia'},{q:'___ (beber) agua, no refrescos.', a:'Bebe'},{q:'___ (llamar) a tu madre.', a:'Llama'},
    ]},
    {type:'fill', title:'공지문 완성 (usted / ustedes)', instr:'주어진 동사를 알맞은 명령형(긍정 또는 부정)으로 쓰세요.', items:[
      {q:'(usted) ___ (esperar) su turno, por favor.', a:'Espere'},{q:'(ustedes) No ___ (fumar) en esta zona.', a:'fumen'},{q:'(usted) ___ (rellenar) el formulario con letra clara.', a:'Rellene'},{q:'(ustedes) No ___ (tocar) las obras de arte.', a:'toquen'},{q:'(usted) ___ (apagar) el móvil durante la función.', a:'Apague'},{q:'(ustedes) ___ (abrochar) los cinturones.', a:'Abrochen'},{q:'(usted) No ___ (aparcar) delante de la puerta.', a:'aparque'},{q:'(ustedes) ___ (firmar) aquí, por favor.', a:'Firmen'},
    ]},
    {type:'fill', title:'긍정 ↔ 부정 바꾸기', instr:'긍정 명령은 부정으로, 부정 명령은 긍정으로 바꾸세요. (대명사 위치 주의)', items:[
      {q:'Habla con él. → ___ con él.', a:'No hables'},{q:'No comas eso. → ___ eso.', a:'Come'},{q:'Abrid las ventanas. → ___ las ventanas.', a:'No abráis'},{q:'No escriban aquí. → ___ aquí.', a:'Escriban'},{q:'Lávate las manos. → ___ las manos.', a:'No te laves'},{q:'No lo compres. → ___.', a:'Cómpralo'},{q:'Levántate temprano. → ___ temprano.', a:'No te levantes'},{q:'No me esperes. → ___.', a:'Espérame'},
    ]},
    {type:'mc', title:'알맞은 명령형 고르기', items:[
      {q:'(tú) ___ la tele, por favor. (apagar)', opts:['Apaga','Apague','Apagad'], a:0},
      {q:'(usted) ___ a la izquierda. (girar)', opts:['Gira','Gire','Giren'], a:1},
      {q:'(vosotros) ___ en silencio. (trabajar)', opts:['Trabajad','Trabajen','Trabajáis'], a:0},
      {q:'(tú) No ___ tan rápido. (correr)', opts:['corres','corras','corre'], a:1},
      {q:'(ustedes) No ___ la puerta. (cerrar)', opts:['cierren','cierran','cerrad'], a:0},
      {q:'(nosotros) ___ a la playa. (ir, "가자")', opts:['Vamos','Vayamos','둘 다 가능 (Vamos가 더 일반적)'], a:2},
      {q:'"앉으세요" (ustedes)', opts:['Siéntense.','Sientense.','Se sienten.'], a:0},
      {q:'"그것을 나에게 주지 마" (tú)', opts:['No me lo des.','No dámelo.','No me des lo.'], a:0},
    ]},
  ]
};
