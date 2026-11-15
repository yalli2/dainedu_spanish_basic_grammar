window.CH = {
  id:'05',
  intro:'스페인어의 모든 명사는 남성 아니면 여성이고, 단수 아니면 복수입니다. 명사의 성과 수는 관사·형용사와 모두 연결되므로 가장 먼저 탄탄히 다져야 할 기초입니다.',
  sections:[
    {type:'text', title:'5.1 명사의 성(género) — 사람을 나타내는 명사', html:`
      <p>사람을 가리키는 명사는 실제 성별에 따라 <b>남성형(masculino)</b>과 <b>여성형(femenino)</b>이 있습니다.</p>
      <div class="cmp">
        <div class="col a"><h4>♂ masculino</h4>[[el hombre]] 남자 · [[el padre]] 아버지 · [[el camarero]] 웨이터 · [[el doctor]] 의사 · [[el estudiante]] 학생</div>
        <div class="col b"><h4>♀ femenino</h4>[[la mujer]] 여자 · [[la madre]] 어머니 · [[la camarera]] 웨이트리스 · [[la doctora]] 의사 · [[la estudiante]] 학생</div>
      </div>`},
    {type:'table', title:'남성형 → 여성형 만드는 법', head:['남성형 어미','여성형','예'], es:[2],
      rows:[['-o','-a','el niño → la niña, el cocinero → la cocinera, el dependiente → la dependienta'],['-자음','+a','el profesor → la profesora, el bailarín → la bailarina, el león → la leona'],['-ante, -ista, -e (불변)','관사만 바뀜','el/la estudiante, el/la taxista, el/la cantante, el/la paciente'],['-or (일부 불변)','관사만 바뀜','el/la modelo, el/la piloto, el/la joven'],['기타 어미','특별 형태','el actor → la actriz, el rey → la reina, el príncipe → la princesa, el poeta → la poetisa'],['완전히 다른 단어','—','el hombre / la mujer, el marido / la mujer, el padre / la madre, el yerno / la nuera']],
      after:'<div class="callout warn"><div class="em">⚠️</div><div>-o로 끝나지만 불변인 단어: <b>el/la modelo, el/la piloto, el/la testigo</b>. -e로 끝나지만 변하는 단어: <b>el jefe → la jefa, el presidente → la presidenta</b>.</div></div>'},
    {type:'text', title:'사물을 나타내는 명사의 성', html:`
      <p>사물·개념 명사도 문법적으로 남성 또는 여성입니다. 어미로 대부분 판단할 수 있습니다.</p>
      <div class="cmp">
        <div class="col a"><h4>-o로 끝나면 대부분 남성</h4>[[el libro]] [[el cuaderno]] [[el teléfono]] [[el vaso]] [[el museo]]<br><b>예외(여성):</b> ==la mano== 손, ==la foto== (fotografía), ==la moto== (motocicleta), ==la radio==</div>
        <div class="col b"><h4>-a로 끝나면 대부분 여성</h4>[[la casa]] [[la silla]] [[la mesa]] [[la guitarra]] [[la rosa]]<br><b>예외(남성):</b> ==el día== 날, ==el mapa== 지도, ==el problema==, ==el programa==, ==el idioma==, ==el sistema==, ==el clima==, ==el planeta== (그리스어 기원 -ma)</div>
      </div>
      <p><b>자음이나 -e로 끝나는 명사</b>는 어미를 보고 판단합니다.</p>
      <table class="tbl"><thead><tr><th>남성</th><th>여성</th></tr></thead><tbody>
        <tr><td>[[el restaurante]] [[el coche]] [[el cine]] [[el hotel]] [[el lápiz]] [[el pan]] [[el color]]</td><td>[[la clase]] [[la noche]] [[la sal]] [[la flor]] [[la luz]] [[la leche]] [[la calle]]</td></tr>
        <tr><td>요일: el lunes, el martes … / 복합어: el paraguas, el cumpleaños</td><td><b>-ción, -sión, -dad, -tad, -tud, -umbre</b>로 끝나는 단어: la canción, la habitación, la televisión, la ciudad, la universidad, la libertad, la actitud, la costumbre</td></tr>
      </tbody></table>`},
    {type:'text', title:'동물의 성', html:`<ul><li>남·여 형태가 모두 있는 경우: [[el gato / la gata]], [[el perro / la perra]], [[el caballo / la yegua]] (말), [[el toro / la vaca]] (소), [[el gallo / la gallina]] (닭), [[el león / la leona]]</li>
      <li>항상 남성만: [[el canguro]], [[el cocodrilo]], [[el pingüino]], [[el pájaro]], [[el ratón]], [[el pez]], [[el gorila]]</li>
      <li>항상 여성만: [[la jirafa]], [[la tortuga]], [[la mariposa]], [[la mosca]], [[la araña]], [[la ballena]], [[la serpiente]]</li></ul><p>성별을 구분해야 할 때는 <b>macho</b>(수컷) / <b>hembra</b>(암컷)를 붙입니다: la jirafa macho, el pingüino hembra. 확실하지 않으면 사전을 확인하세요!</p>`},
    {type:'table', title:'5.2 명사의 수(número) — 복수형 만드는 규칙', head:['단수 어미','복수','예'], es:[2],
      rows:[['모음 (-a, -e, -i, -o, -u)','+ s','casa → casas, coche → coches, niño → niños, taxi → taxis'],['자음','+ es','profesor → profesores, ciudad → ciudades, hotel → hoteles, árbol → árboles'],['-z','z → c + es','actriz → actrices, lápiz → lápices, luz → luces, pez → peces'],['-s (단음절 또는 끝음절에 강세)','+ es','mes → meses, país → países, autobús → autobuses, inglés → ingleses'],['-s, -x (두 음절 이상, 끝에 강세 없음)','변화 없음','el lunes → los lunes, el paraguas → los paraguas, la crisis → las crisis, el cumpleaños → los cumpleaños'],['-í, -ú (강세)','+ es (또는 s)','rubí → rubíes, tabú → tabúes, menú → menús']],
      after:'<div class="callout note"><div class="em">📌</div><div>복수형이 되면 강세 표기가 바뀔 수 있습니다: <b>examen → exámenes</b>, <b>joven → jóvenes</b> (강세 위치 유지를 위해 부호 추가), <b>canción → canciones</b>, <b>inglés → ingleses</b> (부호 삭제).</div></div>'},
    {type:'text', title:'항상 복수로만 쓰는 명사 & 혼성 복수', html:`<p>짝을 이루는 물건은 복수로만 씁니다: [[las gafas]] 안경, [[las tijeras]] 가위, [[los pantalones]] 바지, [[los vaqueros]] 청바지. 세고 싶을 때는 <b>unas gafas</b>, <b>dos pares de tijeras</b>.</p>
      <p>남성과 여성이 섞여 있으면 <b>남성 복수형</b>을 씁니다:</p>
      <ul><li>padre + madre = [[los padres]] 부모님</li><li>hijo + hija = [[los hijos]] 자녀</li><li>hermano + hermana = [[los hermanos]] 형제자매</li><li>rey + reina = [[los reyes]] 왕과 왕비</li></ul>
      <p>[[Los padres de Miguel se llaman Antonio y Pilar.]] / [[Julia tiene tres hijos: dos hijas y un hijo.]]</p>`},
  ],
  exercises:[
    {type:'fill', title:'여성형 쓰기', instr:'다음 단어의 여성형을 쓰세요. (관사 없이)', items:[
      {q:'señor → ___', a:'señora'},{q:'director → ___', a:'directora'},{q:'fotógrafo → ___', a:'fotógrafa'},{q:'artista → ___', a:'artista'},{q:'actor → ___', a:'actriz'},{q:'pintor → ___', a:'pintora'},{q:'abogado → ___', a:'abogada'},{q:'turista → ___', a:'turista'},{q:'rey → ___', a:'reina'},{q:'alumno → ___', a:'alumna'},{q:'hombre → ___', a:'mujer'},{q:'dependiente → ___', a:'dependienta'},{q:'doctor → ___', a:'doctora'},{q:'príncipe → ___', a:'princesa'},{q:'marido → ___', a:'mujer|esposa'},{q:'bailarín → ___', a:'bailarina'},
    ]},
    {type:'classify', title:'남성 / 여성 분류', instr:'다음 명사를 남성(el)과 여성(la)으로 분류하세요.', buckets:['EL (남성)','LA (여성)'], items:[
      {t:'árbol',b:0},{t:'canción',b:1},{t:'autobús',b:0},{t:'avión',b:0},{t:'camión',b:0},{t:'cine',b:0},{t:'ciudad',b:1},{t:'cumpleaños',b:0},{t:'día',b:0},{t:'estación',b:1},{t:'habitación',b:1},{t:'hotel',b:0},{t:'idioma',b:0},{t:'lápiz',b:0},{t:'leche',b:1},{t:'llave',b:1},{t:'mano',b:1},{t:'moto',b:1},{t:'noche',b:1},{t:'nariz',b:1},{t:'problema',b:0},{t:'programa',b:0},{t:'radio',b:1},{t:'sofá',b:0},{t:'televisión',b:1},{t:'tren',b:0},{t:'universidad',b:1},{t:'viernes',b:0}]},
    {type:'fill', title:'복수형 쓰기', instr:'다음 단어의 복수형을 쓰세요.', items:[
      {q:'mujer → ___', a:'mujeres'},{q:'pez → ___', a:'peces'},{q:'ventana → ___', a:'ventanas'},{q:'actriz → ___', a:'actrices'},{q:'habitación → ___', a:'habitaciones'},{q:'madre → ___', a:'madres'},{q:'pantalón → ___', a:'pantalones'},{q:'hotel → ___', a:'hoteles'},{q:'universidad → ___', a:'universidades'},{q:'televisión → ___', a:'televisiones'},{q:'niño → ___', a:'niños'},{q:'hermana → ___', a:'hermanas'},{q:'león → ___', a:'leones'},{q:'día → ___', a:'días'},{q:'clase → ___', a:'clases'},{q:'reloj → ___', a:'relojes'},{q:'foto → ___', a:'fotos'},{q:'jueves → ___', a:'jueves'},{q:'estudiante → ___', a:'estudiantes'},{q:'examen → ___', a:'exámenes'},{q:'país → ___', a:'países'},{q:'lápiz → ___', a:'lápices'},{q:'mes → ___', a:'meses'},{q:'paraguas → ___', a:'paraguas'},
    ]},
    {type:'fill', title:'남성 복수로 묶어 말하기', instr:'밑줄 부분을 하나의 복수 명사로 바꾸어 문장을 완성하세요.', items:[
      {q:'Amalia tiene un hijo y dos hijas. → Amalia tiene tres ___.', a:'hijos'},
      {q:'El abuelo y la abuela de Marta viven en Caracas. → Los ___ de Marta viven en Caracas.', a:'abuelos'},
      {q:'Un amigo y una amiga míos están en Chile. → Dos ___ míos están en Chile.', a:'amigos'},
      {q:'Mi hermano y mi hermana son médicos. → Mis ___ son médicos.', a:'hermanos'},
      {q:'Mi padre y mi madre son muy altos. → Mis ___ son muy altos.', a:'padres'},
      {q:'Voy a una fiesta con mis compañeros y compañeras. → Voy a una fiesta con mis ___.', a:'compañeros'},
      {q:'En mi escuela hay un profesor y dos profesoras. → En mi escuela hay tres ___.', a:'profesores'},
      {q:'En mi clase hay tres alumnos y cinco alumnas. → En mi clase hay ocho ___.', a:'alumnos'},
      {q:'El rey y la reina viven en el palacio. → Los ___ viven en el palacio.', a:'reyes'},
    ]},
    {type:'mc', title:'예외 명사 집중 점검', items:[
      {q:'___ mano', opts:['el','la'], a:1, exp:'-o로 끝나지만 여성'},
      {q:'___ problema', opts:['el','la'], a:0, exp:'-ma로 끝나는 그리스어 기원 명사는 남성'},
      {q:'___ foto', opts:['el','la'], a:1, exp:'la fotografía의 줄임말'},
      {q:'___ día', opts:['el','la'], a:0},
      {q:'___ ciudad', opts:['el','la'], a:1, exp:'-dad는 여성'},
      {q:'___ canción', opts:['el','la'], a:1, exp:'-ción은 여성'},
      {q:'___ mapa', opts:['el','la'], a:0},
      {q:'___ estudiante (María)', opts:['el','la'], a:1, exp:'-ante는 관사로 성을 구별'},
      {q:'___ radio', opts:['el','la'], a:1, exp:'스페인에서는 la radio (중남미 일부는 el radio)'},
      {q:'___ clima', opts:['el','la'], a:0},
    ]},
  ]
};
