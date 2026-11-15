window.CH = {
  id:'01',
  intro:'스페인어는 "쓰인 대로 읽는" 언어입니다. 알파벳 27자의 이름과 소리, 그리고 강세 규칙 세 가지만 익히면 처음 보는 단어도 정확하게 읽을 수 있습니다.',
  sections:[
    {type:'widget', name:'alphabet', items:[
      {l:'A a',name:'a',ko:'아',words:['ave','abuelo']},{l:'B b',name:'be',ko:'베',words:['barco','bebé']},{l:'C c',name:'ce',ko:'쎄',words:['casa','cama','cine']},{l:'D d',name:'de',ko:'데',words:['dos','documento']},{l:'E e',name:'e',ko:'에',words:['estudiante','elefante']},{l:'F f',name:'efe',ko:'에페',words:['flor','foto']},{l:'G g',name:'ge',ko:'헤',words:['gato','gasto','gente']},{l:'H h',name:'hache',ko:'아체',words:['hacha','hombre']},{l:'I i',name:'i',ko:'이',words:['iglesia','idioma']},{l:'J j',name:'jota',ko:'호타',words:['caja','joven']},{l:'K k',name:'ka',ko:'까',words:['kilómetro','kiwi']},{l:'L l',name:'ele',ko:'엘레',words:['libro','lámpara']},{l:'LL ll',name:'elle',ko:'에예',words:['caballo','llorar']},{l:'M m',name:'eme',ko:'에메',words:['mesa','mano']},{l:'N n',name:'ene',ko:'에네',words:['noche','antes']},{l:'Ñ ñ',name:'eñe',ko:'에녜',words:['niño','mañana']},{l:'O o',name:'o',ko:'오',words:['ojo','oso']},{l:'P p',name:'pe',ko:'뻬',words:['pan','papel']},{l:'Q q',name:'cu',ko:'꾸',words:['queso','quince']},{l:'R r',name:'erre',ko:'에레',words:['reloj','rosa','pero']},{l:'S s',name:'ese',ko:'에쎄',words:['sol','casi']},{l:'T t',name:'te',ko:'떼',words:['taxi','techo']},{l:'U u',name:'u',ko:'우',words:['uva','uno']},{l:'V v',name:'uve',ko:'우베',words:['vaca','viento']},{l:'W w',name:'uve doble',ko:'우베 도블레',words:['web','wifi']},{l:'X x',name:'equis',ko:'에끼스',words:['examen','extranjero','México']},{l:'Y y',name:'ye',ko:'예 (i griega)',words:['yo','ayuda','y']},{l:'Z z',name:'zeta',ko:'쎄따',words:['zapato','luz']},
    ]},
    {type:'callout', kind:'note', html:'<b>LL</b>과 <b>CH</b>는 2010년 RAE 정서법 개정으로 독립 글자에서 제외되어 현재 알파벳은 <b>27자</b>입니다. 하지만 소리는 그대로 중요하므로 함께 익힙니다. <b>Y</b>의 공식 이름은 <i>ye</i>이지만 <i>i griega</i>도 여전히 널리 쓰입니다.'},
    {type:'table', title:'모음 5개 — 입 모양이 바뀌지 않는 또렷한 소리', head:['모음','소리','예'], es:[2],
      rows:[['a','아 (입을 크게)','casa, mamá, agua'],['e','에 (영어 e보다 입을 덜 벌림)','mesa, leche, elefante'],['i','이','sí, vino, mil'],['o','오 (입술을 둥글게)','ojo, solo, loco'],['u','우','uno, luna, uva']],
      after:'<p>영어처럼 약화되지 않고 <b>항상 같은 소리</b>로 발음합니다. 강세가 없어도 모음은 분명히 소리 냅니다.</p>'},
    {type:'table', title:'주의해야 할 자음 — 뒤에 오는 모음에 따라 달라지는 소리', head:['철자','소리','예시'], es:[2],
      rows:[['c + a, o, u','[k] 까/꼬/꾸','casa, cosa, Cuba'],['c + e, i','[θ] 스페인 / [s] 중남미','cena, cine, gracias'],['z','[θ] 스페인 / [s] 중남미','zapato, luz, azul'],['qu + e, i','[k] (u는 묵음)','queso, quince, aquí'],['g + a, o, u','[g] 가/고/구','gato, gordo, gusto'],['g + e, i','[x] 강한 ㅎ (목에서)','gente, gigante, girasol'],['gu + e, i','[g] (u 묵음)','guerra, guitarra'],['gü + e, i','[gw] u 발음함','pingüino, vergüenza'],['j','[x] 강한 ㅎ','jamón, José, trabajo'],['h','항상 묵음','hola, hotel, ahora'],['ll / y','[ʝ] 야/예 (아르헨티나: 쟈/샤)','llamar, calle, yo, playa'],['ñ','[ɲ] 냐/녜/뇨','niño, España, mañana'],['r (어중)','혀를 한 번 튕김','pero, caro, aire'],['rr / 어두 r','혀를 떨어 진동 (강한 r)','perro, carro, rosa, Rápido'],['v','b와 같은 소리','vaca = baca (소리), vino'],['x','[ks] / 어두 [s] / 일부 [x]','examen, xilófono, México']]},
    {type:'reveal', title:'🎧 비슷한 소리 구별 — 클릭해 뜻을 확인하고 들어보세요', items:[
      {q:'[[pero]] vs [[perro]]', a:'pero = 그러나 (r 한 번) / perro = 개 (rr 떨림)'},
      {q:'[[caro]] vs [[carro]]', a:'caro = 비싼 / carro = 수레, 자동차(중남미)'},
      {q:'[[casa]] vs [[caza]]', a:'casa = 집 / caza = 사냥 (스페인에서는 z를 θ로 발음해 구별, 중남미에서는 동음)'},
      {q:'[[gato]] vs [[gente]]', a:'gato [가또] – 고양이 / gente [헨떼] – 사람들: g 뒤 모음에 따라 소리가 다름'},
      {q:'[[hola]] vs [[ola]]', a:'둘 다 [올라]로 발음. hola = 안녕 / ola = 파도. h는 항상 묵음!'},
    ]},
    {type:'text', title:'강세(acento) 규칙 — 딱 3가지', html:`
      <p>스페인어의 모든 단어는 한 음절에 <b>강세</b>가 있습니다. 어디에 강세가 오는지는 규칙으로 정해져 있고, 규칙에서 벗어나면 <b>악센트 부호(´)</b>로 표시합니다.</p>
      <div class="cmp">
        <div class="col a"><h4>규칙 ① 모음, -n, -s로 끝나는 단어</h4>➡ <b>끝에서 두 번째 음절</b>에 강세 (palabras llanas)<br>[[ca-SA]] [[jo-VEN]] [[LU-nes]] [[es-tu-DIAN-te]]</div>
        <div class="col b"><h4>규칙 ② 그 밖의 자음으로 끝나는 단어</h4>➡ <b>마지막 음절</b>에 강세 (palabras agudas)<br>[[ho-TEL]] [[ciu-DAD]] [[pro-fe-SOR]] [[es-pa-ÑOL]]</div>
      </div>
      <div class="callout warn"><div class="em">⚠️</div><div><b>규칙 ③</b> 위 두 규칙에서 벗어나면 반드시 악센트 부호를 씁니다.<br>[[ca-FÉ]] (모음으로 끝났지만 마지막 음절) · [[LÁ-piz]] (z로 끝났지만 둘째 음절) · [[MÚ-si-ca]], [[TE-lé-fo-no]] (끝에서 셋째 음절 = esdrújulas는 항상 악센트)</div></div>
      <p>악센트 부호는 뜻을 구별하기도 합니다: [[si]](만약) / [[sí]](네), [[el]](정관사) / [[él]](그), [[tu]](너의) / [[tú]](너), [[que]](~하는) / [[qué]](무엇).</p>`},
    {type:'table', title:'이중모음과 음절 나누기', head:['종류','설명','예'], es:[2],
      rows:[['이중모음 (diptongo)','강모음(a,e,o) + 약모음(i,u) 또는 약모음 둘 → 한 음절','ai-re, bue-no, ciu-dad, seis, cau-sa'],['강모음 연속','a, e, o 끼리 연속되면 각각 다른 음절','le-er, po-e-ta, ca-os'],['분리 (hiato)','약모음에 악센트가 있으면 음절이 갈라짐','dí-a, pa-ís, Ma-rí-a, ba-úl']]},
    {type:'examples', title:'🔊 문장 억양 연습 — 따라 읽어 보세요', items:[
      {es:'¿Cómo te llamas?', ko:'이름이 뭐니? (의문문은 끝을 올려 읽음)'},
      {es:'Me llamo Juan y soy de Corea.', ko:'나는 후안이고 한국에서 왔어.'},
      {es:'¡Qué bonita es la ciudad!', ko:'도시가 정말 아름답구나!'},
      {es:'El perro de Rodrigo corre rápido por la carretera.', ko:'로드리고의 개가 도로를 빠르게 달린다. (rr 연습)'},
      {es:'Gerardo y Gloria juegan con el gato en el jardín.', ko:'헤라르도와 글로리아가 정원에서 고양이와 논다. (g/j 연습)'},
      {es:'Cecilia cocina cinco zanahorias en la cazuela.', ko:'세실리아가 냄비에 당근 다섯 개를 요리한다. (c/z 연습)'},
    ]},
  ],
  exercises:[
    {type:'classify', title:'강세 위치 분류하기', instr:'각 단어의 강세가 어디에 있는지 분류하세요. (aguda = 마지막 음절, llana = 끝에서 둘째, esdrújula = 끝에서 셋째)', buckets:['aguda (마지막)','llana (끝에서 둘째)','esdrújula (끝에서 셋째)'], items:[
      {t:'hotel',b:0},{t:'casa',b:1},{t:'música',b:2},{t:'ciudad',b:0},{t:'joven',b:1},{t:'teléfono',b:2},{t:'café',b:0},{t:'lápiz',b:1},{t:'sábado',b:2},{t:'español',b:0},{t:'lunes',b:1},{t:'médico',b:2},{t:'comer',b:0},{t:'examen',b:1},{t:'rápido',b:2}]},
    {type:'mc', title:'소리 고르기', instr:'밑줄 친 철자의 소리로 알맞은 것을 고르세요.', items:[
      {q:'<b>g</b>ente 의 g 소리는?', opts:['[g] 게','[x] 헤 (강한 ㅎ)','묵음','[k] 께'], a:1},
      {q:'<b>qu</b>eso 의 qu 소리는?', opts:['[kw] 꾸에','[k] 께 (u 묵음)','[g]','[x]'], a:1},
      {q:'<b>h</b>otel 의 h 소리는?', opts:['[h] 호','[x] 강한 ㅎ','묵음 (오텔)','[f]'], a:2},
      {q:'<b>ll</b>amar 의 ll 소리는?', opts:['[l] 라','[ʝ] 야','[r]','[ɲ] 냐'], a:1},
      {q:'<b>z</b>apato 를 스페인(마드리드)에서 발음하면?', opts:['[s] 사빠또','[θ] 싸빠또(혀를 치아 사이에)','[z] 자빠또','[ts] 짜빠또'], a:1},
      {q:'<b>j</b>amón 의 j 소리는?', opts:['[dʒ] 자','[ʝ] 야','[x] 하 (강한 ㅎ)','[h]'], a:2},
      {q:'pe<b>rr</b>o 의 rr 소리는?', opts:['혀를 한 번 튕김','혀를 떨어 진동','영어 r처럼','[l]'], a:1},
      {q:'<b>v</b>ino 의 v 소리는?', opts:['영어 v처럼 윗니를 아랫입술에','b와 같은 소리','[f]','묵음'], a:1},
      {q:'gu<b>i</b>tarra 의 u는?', opts:['[u] 발음함','묵음','[w]','[o]'], a:1, exp:'gue, gui에서 u는 묵음. 발음하려면 güe, güi로 씀.'},
      {q:'<b>c</b>ine 의 c 소리는?', opts:['[k] 끼','[θ]/[s] 씨','[tʃ] 치','묵음'], a:1},
    ]},
    {type:'fill', title:'악센트 부호 붙이기', instr:'강세 규칙에 따라 악센트 부호가 필요한 단어를 올바르게 쓰세요. (힌트: 강세 음절이 대문자로 표시됨)', items:[
      {q:'ca-FE → ___', a:'café', hint:'café'},
      {q:'LA-piz → ___', a:'lápiz'},
      {q:'MU-si-ca → ___', a:'música'},
      {q:'ca-SA → ___', a:'casa', hint:'(부호 필요 없음)'},
      {q:'es-TA-cion → ___', a:'estación'},
      {q:'JO-ven → ___', a:'joven'},
      {q:'ar-BOL → ___', a:'árbol'},
      {q:'pro-fe-SOR → ___', a:'profesor'},
      {q:'te-LE-fo-no → ___', a:'teléfono'},
      {q:'in-GLES → ___', a:'inglés'},
    ]},
    {type:'match', title:'글자와 이름 짝짓기', pairs:[['H h','hache'],['J j','jota'],['Ñ ñ','eñe'],['Q q','cu'],['X x','equis'],['Z z','zeta'],['W w','uve doble'],['Y y','ye / i griega']]},
  ]
};
