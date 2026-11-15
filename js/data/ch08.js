window.CH = {
  id:'08',
  intro:'영어의 be동사가 스페인어에서는 둘로 나뉩니다. SER는 "본질·정체(무엇인가)", ESTAR는 "위치·상태(어떤 상태인가)". 이 구별이 스페인어 문법의 첫 번째 큰 산입니다.',
  sections:[
    {type:'table', title:'현재시제 변화', head:['인칭','SER (~이다)','ESTAR (~에 있다, ~한 상태다)'], es:[1,2],
      rows:[['yo','soy','estoy'],['tú','eres','estás'],['él / ella / usted','es','está'],['nosotros/as','somos','estamos'],['vosotros/as','sois','estáis'],['ellos / ellas / ustedes','son','están']],
      after:'<div class="callout tip"><div class="em">💡</div><div>스페인어는 동사 어미로 주어를 알 수 있어 <b>주어 대명사(yo, tú…)를 보통 생략</b>합니다. 강조하거나 대조할 때만 씁니다: <i>Yo soy coreano, pero ella es japonesa.</i></div></div>'},
    {type:'examples', title:'8.1 SER 동사의 용법 — 정체성·본질', items:[
      {es:'Esto es un libro. Yo soy Juan.', ko:'① 사람·사물을 확인·정의할 때'},
      {es:'Soy profesor. Ella es coreana. Son budistas.', ko:'② 직업·국적·종교·사상'},
      {es:'Luis es mi hermano. Marta es la madre de Pablo.', ko:'③ 인간관계·친척관계'},
      {es:'Mi casa es grande. Ana es alta y simpática.', ko:'④ 사람·사물의 특성(변하지 않는 성질)'},
      {es:'Son las tres. Somos cinco. Son diez euros.', ko:'⑤ 시간·수량·가격'},
      {es:'La fiesta es en mi casa. El concierto es a las ocho.', ko:'⑥ 행사(이벤트)의 장소와 시간 — 행사는 ser!'},
      {es:'Soy de Seúl. La mesa es de madera. El coche es de Pedro.', ko:'⑦ 출신(de), 재료(de), 소유(de)'},
    ]},
    {type:'examples', title:'8.2 ESTAR 동사의 용법 — 위치·상태', items:[
      {es:'Madrid está en España. El libro está sobre la mesa.', ko:'① 사람·사물의 물리적 위치 (도시·건물도!)'},
      {es:'¿Está Juan? — No, no está. Está en la oficina.', ko:'② 사람이 그 자리에 있는지 확인'},
      {es:'Estoy cansado. Estamos muy contentos. Está enfermo.', ko:'③ 일시적인 감정·몸 상태'},
      {es:'La ventana está abierta. La sopa está fría. Está casado.', ko:'④ 일시적인 상황·결과 상태'},
      {es:'Estoy estudiando español.', ko:'⑤ estar + 현재분사 = 진행 (19장)'},
      {es:'Hoy estamos a 15 de mayo. Estamos en primavera.', ko:'⑥ 날짜·계절 (estar a / en)'},
    ]},
    {type:'compare', title:'같은 형용사, 다른 뜻 — SER vs ESTAR', cols:[
      {title:'SER + 형용사 → 본래 성질', html:'[[Es aburrido.]] 지루한 사람이다<br>[[Es listo.]] 똑똑하다<br>[[Es rico.]] 부자다<br>[[Es malo.]] 나쁜 사람이다<br>[[Es verde.]] 초록색이다<br>[[Es guapa.]] 미인이다<br>[[Es nervioso.]] 신경질적인 성격이다<br>[[Es seguro.]] 안전하다'},
      {title:'ESTAR + 형용사 → 지금의 상태', html:'[[Está aburrido.]] 지루해하고 있다<br>[[Está listo.]] 준비됐다<br>[[Está rico.]] (음식이) 맛있다<br>[[Está malo.]] 아프다 / 상했다<br>[[Está verde.]] 덜 익었다<br>[[Está guapa.]] (오늘) 예뻐 보인다<br>[[Está nervioso.]] (지금) 긴장했다<br>[[Está seguro.]] 확신한다'},
    ]},
    {type:'text', title:'부정문과 의문문', html:`<ul>
      <li><b>부정</b>: 동사 앞에 no → [[No soy profesor.]] [[No estamos en casa.]]</li>
      <li><b>의문</b>: 주어를 동사 뒤로 보내거나 억양만 올림 → [[¿Es usted el señor López?]] [[¿Está María?]] [[¿Eres coreano?]]</li>
      <li>대답: [[Sí, soy coreano.]] / [[No, no soy coreano. Soy japonés.]]</li></ul>`},
    {type:'table', title:'SER / ESTAR 관용표현', head:['표현','뜻','예'], es:[0,2],
      rows:[['ser de + 장소/재료/사람','~출신이다 / ~로 만들어졌다 / ~의 것이다','Soy de Busan. Es de oro.'],['estar de + 명사','(일시적으로) ~중이다','estar de vacaciones, estar de viaje, estar de pie'],['estar de acuerdo','동의하다','Estoy de acuerdo contigo.'],['estar bien / mal','잘 지내다 / 안 좋다','¿Cómo estás? — Estoy bien.'],['estar a punto de + inf.','막 ~하려 하다','Estoy a punto de salir.'],['ser la hora de','~할 시간이다','Es la hora de comer.'],['estar en forma','몸 상태가 좋다','Mi abuelo está en forma.'],['estar seguro de','~을 확신하다','Estoy segura de eso.'],['ser verdad / mentira','사실이다 / 거짓이다','Es verdad.'],['estar claro','분명하다','Está claro.']]},
  ],
  exercises:[
    {type:'conj', title:'동사 변화 쓰기', items:[{verb:'ser', forms:['soy','eres','es','somos','sois','son']},{verb:'estar', forms:['estoy','estás','está','estamos','estáis','están']}]},
    {type:'fill', title:'SER로 대화 완성하기', instr:'ser 동사의 알맞은 형태를 쓰세요.', items:[
      {q:'— Hola, ¿quién ___ tú? — ___ Carla, la nueva estudiante.', a:['eres','Soy']},
      {q:'— ¿De dónde ___ ustedes? — ___ de Argentina.', a:['son','Somos']},
      {q:'— ¿Qué hora ___? — ___ las cinco y media.', a:['es','Son']},
      {q:'— ¿Vosotros ___ hermanos? — No, ___ primos.', a:['sois','somos']},
      {q:'— ¿___ usted el señor Torres? — Sí, ___ yo.', a:['Es','soy']},
      {q:'— ¿Cuánto ___ los zapatos? — ___ cuarenta euros.', a:['son','Son']},
    ]},
    {type:'fill', title:'SER + (de) 문장 완성', instr:'ser 동사를 알맞게 바꾸고, 필요하면 de를 붙이세요. (예: es de)', items:[
      {q:'La mesa ___ madera.', a:'es de'},{q:'Nosotros ___ Corea.', a:'somos de'},{q:'Este bolígrafo ___ Ana.', a:'es de'},{q:'Mis padres ___ médicos.', a:'son'},{q:'Tú ___ muy simpático.', a:'eres'},{q:'La camisa ___ algodón.', a:'es de'},{q:'Yo ___ profesora de inglés.', a:'soy'},{q:'¿___ dónde ___ Pedro?', a:['De','es']},
    ]},
    {type:'fill', title:'ESTAR — 어디에 있나요?', instr:'estar 동사의 알맞은 형태를 쓰세요.', items:[
      {q:'— ¿Dónde ___ Juan? — ___ en la oficina.', a:['está','Está']},
      {q:'— ¿Dónde ___ mis llaves? — ___ sobre la mesa.', a:['están','Están']},
      {q:'— ¿Dónde ___ vosotros? — ___ en el parque.', a:['estáis','Estamos']},
      {q:'— ¿___ María en casa? — No, no ___.', a:['Está','está']},
      {q:'— ¿Dónde ___ (tú)? — ___ en el supermercado.', a:['estás','Estoy']},
      {q:'Lima ___ en Perú y Bogotá ___ en Colombia.', a:['está','está']},
    ]},
    {type:'mc', title:'SER인가 ESTAR인가?', items:[
      {q:'Mi hermana ___ enfermera.', opts:['es','está'], a:0, exp:'직업'},
      {q:'Mi hermana ___ enferma.', opts:['es','está'], a:1, exp:'일시적 상태(아픈)'},
      {q:'El concierto ___ en el teatro Real.', opts:['es','está'], a:0, exp:'행사의 장소는 ser'},
      {q:'El teatro Real ___ en Madrid.', opts:['es','está'], a:1, exp:'건물의 위치는 estar'},
      {q:'La sopa ___ muy caliente, espera un poco.', opts:['es','está'], a:1},
      {q:'Hoy ___ lunes y ___ las diez.', opts:['es / son','está / están','es / están'], a:0},
      {q:'Nosotros ___ muy cansados hoy.', opts:['somos','estamos'], a:1},
      {q:'¿De quién ___ este coche? — ___ de mi padre.', opts:['es / Es','está / Está'], a:0, exp:'소유'},
      {q:'La ventana ___ abierta.', opts:['es','está'], a:1, exp:'결과 상태'},
      {q:'Esta fruta no ___ madura todavía, ___ verde.', opts:['es / es','está / está','es / está'], a:1},
      {q:'Carlos ___ muy listo: siempre saca buenas notas.', opts:['es','está'], a:0, exp:'ser listo = 똑똑하다'},
      {q:'¿Ya ___ listos? El taxi espera.', opts:['sois','estáis'], a:1, exp:'estar listo = 준비되다'},
      {q:'Yo ___ de acuerdo contigo.', opts:['soy','estoy'], a:1},
      {q:'Mis abuelos ___ de Galicia pero ahora ___ en Valencia.', opts:['son / están','están / son','son / son'], a:0},
    ]},
  ]
};
