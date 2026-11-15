window.CH = {
  id:'02',
  intro:'숫자, 요일, 달, 날짜는 여행·쇼핑·약속 등 모든 상황에서 바로 쓰입니다. 숫자 실험실과 살아있는 달력으로 손에 익을 때까지 연습하세요.',
  sections:[
    {type:'widget', name:'numbers'},
    {type:'table', title:'2.1 기수 (números cardinales) 0 ~ 30', head:['숫자','스페인어','숫자','스페인어','숫자','스페인어'], es:[1,3,5], firstBold:false,
      rows:[['0','cero','11','once','21','veintiuno'],['1','uno','12','doce','22','veintidós'],['2','dos','13','trece','23','veintitrés'],['3','tres','14','catorce','24','veinticuatro'],['4','cuatro','15','quince','25','veinticinco'],['5','cinco','16','dieciséis','26','veintiséis'],['6','seis','17','diecisiete','27','veintisiete'],['7','siete','18','dieciocho','28','veintiocho'],['8','ocho','19','diecinueve','29','veintinueve'],['9','nueve','20','veinte','30','treinta'],['10','diez','','','31','treinta y uno']],
      after:'<div class="callout tip"><div class="em">💡</div><div>16~29는 <b>한 단어</b>로 씁니다 (dieciséis, veintidós). 31부터는 <b>십 단위 + y + 일 단위</b>로 띄어 씁니다: treinta y uno, cuarenta y dos. 숫자 표기는 1.000(천), 1,5(소수) 처럼 마침표와 쉼표가 한국과 반대입니다.</div></div>'},
    {type:'table', title:'십 단위와 백 단위', head:['숫자','스페인어','숫자','스페인어'], es:[1,3], firstBold:false,
      rows:[['10','diez','100','cien / ciento'],['20','veinte','200','doscientos/as'],['30','treinta','300','trescientos/as'],['40','cuarenta','400','cuatrocientos/as'],['50','cincuenta','500','quinientos/as'],['60','sesenta','600','seiscientos/as'],['70','setenta','700','setecientos/as'],['80','ochenta','800','ochocientos/as'],['90','noventa','900','novecientos/as'],['','','1.000','mil']],
      after:`<ul>
        <li><b>cien</b>은 정확히 100일 때, 뒤에 수가 이어지면 <b>ciento</b>: cien euros / ciento diez.</li>
        <li><b>y</b>는 십 단위와 일 단위 사이에만! ciento ==y== uno (✗) → ciento uno (○), ciento treinta ==y== dos (○).</li>
        <li><b>uno</b>는 남성 명사 앞에서 <b>un</b>, 여성 명사 앞에서 <b>una</b>: veinti==ún== libros, treinta y ==una== chicas.</li>
        <li>200~900은 명사의 성에 일치: doscient==as== personas.</li>
        <li><b>mil</b>은 복수형을 쓰지 않음: dos mil, tres mil. 하지만 <b>un millón de</b> habitantes, dos millon==es== de euros.</li>
      </ul>`},
    {type:'examples', title:'🔊 큰 숫자 읽기', items:[
      {es:'101 — ciento uno', ko:''},{es:'115 — ciento quince', ko:''},{es:'999 — novecientos noventa y nueve', ko:''},{es:'1.000 — mil', ko:''},{es:'2.026 — dos mil veintiséis', ko:'연도도 이렇게 읽습니다 (영어처럼 20-26으로 나누지 않음)'},{es:'15.500 — quince mil quinientos', ko:''},{es:'1.000.000 — un millón', ko:''},{es:'3.500.000 — tres millones quinientos mil', ko:''}]},
    {type:'table', title:'2.2 서수 (números ordinales)', head:['','스페인어','','스페인어'], es:[1,3], firstBold:false,
      rows:[['1º','primero (primer)','11º','undécimo / decimoprimero'],['2º','segundo','12º','duodécimo / decimosegundo'],['3º','tercero (tercer)','13º','decimotercero'],['4º','cuarto','14º','decimocuarto'],['5º','quinto','15º','decimoquinto'],['6º','sexto','20º','vigésimo'],['7º','séptimo','21º','vigésimo primero'],['8º','octavo','30º','trigésimo'],['9º','noveno','50º','quincuagésimo'],['10º','décimo','100º','centésimo']],
      after:'<p>서수는 형용사처럼 성·수가 변합니다: la segund==a== puerta, los primer==os== días. <b>primero, tercero</b>는 남성 단수 명사 앞에서 -o가 탈락: el ==primer== piso, el ==tercer== hijo. 일상에서는 10 이상은 보통 기수로 대신합니다: el siglo veinte, Alfonso trece.</p>'},
    {type:'widget', name:'calendar'},
    {type:'table', title:'2.3 요일 (los días de la semana)', head:['스페인어','뜻','메모'], es:[0],
      rows:[['lunes','월요일','달(luna)의 날'],['martes','화요일','화성(Marte)의 날'],['miércoles','수요일','수성(Mercurio)의 날'],['jueves','목요일','목성(Júpiter)의 날'],['viernes','금요일','금성(Venus)의 날'],['sábado','토요일','안식일(sabbat)'],['domingo','일요일','주님의 날(dominicus)']],
      after:'<ul><li>요일은 <b>소문자</b>로 쓰고, 모두 <b>남성</b> 명사입니다.</li><li>"~요일에"는 전치사 없이 정관사만: ==el== lunes (이번 월요일에), ==los== lunes (매주 월요일에).</li><li>-s로 끝나는 요일은 단·복수 형태가 같음: el martes / los martes. 단, sábado→sábados, domingo→domingos.</li><li>한 주는 <b>월요일</b>부터 시작합니다.</li></ul>'},
    {type:'table', title:'달 (los meses del año)', head:['스페인어','뜻','스페인어','뜻'], es:[0,2],
      rows:[['enero','1월','julio','7월'],['febrero','2월','agosto','8월'],['marzo','3월','septiembre (setiembre)','9월'],['abril','4월','octubre','10월'],['mayo','5월','noviembre','11월'],['junio','6월','diciembre','12월']],
      after:'<p>달 이름도 소문자이며 남성입니다. "~월에"는 <b>en</b>: en enero, en agosto.</p>'},
    {type:'examples', title:'🔊 날짜 묻고 답하기', items:[
      {es:'¿Qué día es hoy? — Hoy es martes.', ko:'오늘 무슨 요일이야? — 오늘은 화요일이야.'},
      {es:'¿Qué fecha es hoy? / ¿A cuántos estamos?', ko:'오늘 며칠이야?'},
      {es:'Es el siete de febrero de dos mil dos.', ko:'2002년 2월 7일이야. (일 + de + 월 + de + 년)'},
      {es:'Hoy es el primero de mayo. / Estamos a uno de mayo.', ko:'오늘은 5월 1일이야. (1일만 primero 가능)'},
      {es:'Mi cumpleaños es el 15 de agosto.', ko:'내 생일은 8월 15일이야.'},
      {es:'Nací en 1995 (mil novecientos noventa y cinco).', ko:'나는 1995년에 태어났어.'},
    ]},
    {type:'chips', title:'시간 단위 어휘 (vocabulario)', items:[['el día','날, 하루'],['la semana','주'],['el fin de semana','주말'],['el mes','달'],['el año','해, 년'],['la década','10년'],['el siglo','세기'],['el milenio','천년'],['ayer','어제'],['hoy','오늘'],['mañana','내일'],['anteayer','그저께'],['pasado mañana','모레'],['la semana pasada','지난주'],['la semana que viene','다음 주'],['quince días','2주(보름)'],['el día hábil / laborable','평일, 근무일'],['la fecha','날짜'],['mensual','월간의'],['semanal','주간의'],['anual','연간의']]},
  ],
  exercises:[
    {type:'fill', title:'숫자를 스페인어로', instr:'숫자를 스페인어로 쓰세요.', items:[
      {q:'7 → ___', a:'siete'},{q:'15 → ___', a:'quince'},{q:'16 → ___', a:'dieciséis'},{q:'21 → ___', a:'veintiuno'},{q:'38 → ___', a:'treinta y ocho'},{q:'54 → ___', a:'cincuenta y cuatro'},{q:'100 → ___', a:'cien'},{q:'101 → ___', a:'ciento uno'},{q:'500 → ___', a:'quinientos'},{q:'750 → ___', a:'setecientos cincuenta'},{q:'1.000 → ___', a:'mil'},{q:'2.026 → ___', a:'dos mil veintiséis'},
    ]},
    {type:'mc', title:'알맞은 형태 고르기', items:[
      {q:'Tengo ___ libros. (21)', opts:['veintiuno','veintiún','veintiuna','veinte y un'], a:1, exp:'남성 명사 앞에서 uno → un'},
      {q:'Hay ___ personas. (200)', opts:['doscientos','doscientas','dos cientos','doscienta'], a:1, exp:'persona는 여성 → doscientas'},
      {q:'Cuesta ___ euros. (100)', opts:['ciento','cien','cientos','un ciento'], a:1},
      {q:'Cuesta ___ euros. (130)', opts:['cien treinta','ciento y treinta','ciento treinta','cien y treinta'], a:2},
      {q:'La ciudad tiene ___ habitantes. (2.000.000)', opts:['dos millón','dos millones','dos millones de','dos mil miles de'], a:2},
      {q:'Vivo en el ___ piso. (3º)', opts:['tercero','tercer','tres','terceiro'], a:1},
      {q:'Es la ___ vez que vengo. (1ª)', opts:['primer','primero','primera','uno'], a:2},
      {q:'"매주 토요일에"를 스페인어로?', opts:['en sábados','los sábados','el sábado','a sábado'], a:1},
      {q:'"3월에"를 스페인어로?', opts:['en marzo','a marzo','el marzo','de marzo'], a:0},
      {q:'오늘은 5월 1일입니다. → Hoy es ___ de mayo.', opts:['el uno','el primero','el primer','primera'], a:1, exp:'el uno de mayo도 가능하지만 전통적으로 el primero를 씀'},
    ]},
    {type:'match', title:'서수 짝짓기', pairs:[['1º','primero'],['2º','segundo'],['3º','tercero'],['5º','quinto'],['7º','séptimo'],['9º','noveno'],['10º','décimo'],['20º','vigésimo']]},
    {type:'order', title:'날짜 문장 만들기', instr:'단어를 순서대로 배열하여 문장을 완성하세요.', items:[
      {ko:'오늘은 2024년 3월 15일이다.', words:['Hoy','es','el','quince','de','marzo','de','dos','mil','veinticuatro'], a:'Hoy es el quince de marzo de dos mil veinticuatro'},
      {ko:'내 생일은 8월 2일이다.', words:['Mi','cumpleaños','es','el','dos','de','agosto'], a:'Mi cumpleaños es el dos de agosto'},
      {ko:'오늘은 무슨 요일이니?', words:['¿Qué','día','es','hoy?'], a:'¿Qué día es hoy?'},
      {ko:'수업은 월요일과 수요일에 있다.', words:['La','clase','es','los','lunes','y','los','miércoles'], a:'La clase es los lunes y los miércoles'},
    ]},
    {type:'classify', title:'요일 vs 달', instr:'요일과 달을 구분하세요.', buckets:['요일 (día de la semana)','달 (mes)'], items:[{t:'jueves',b:0},{t:'agosto',b:1},{t:'miércoles',b:0},{t:'enero',b:1},{t:'domingo',b:0},{t:'octubre',b:1},{t:'martes',b:0},{t:'abril',b:1},{t:'sábado',b:0},{t:'diciembre',b:1}]},
  ]
};
