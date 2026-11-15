window.CH = {
  id:'00',
  intro:'스페인어를 배우기 전에, 이 언어가 어디서 왔고 누가 쓰는지, 어떤 시험이 있는지 큰 그림을 먼저 그려 봅시다.',
  sections:[
    {type:'text', title:'1. 스페인어의 명칭과 기원', html:`
      <p>스페인어는 [[español]] 또는 [[castellano]](카스티야어)라고 부릅니다. 이베리아로망스어군에 속하는 로망스어의 하나로, 스페인 북부 카스티야 지방에서 기원해 이베리아 반도 전체의 <b>통치와 상업의 제1언어</b>로 발전했습니다.</p>
      <p>15~19세기 스페인 제국의 팽창과 함께 아메리카 대륙 전역으로 퍼졌고, 아프리카(적도기니)와 아시아·태평양(필리핀)에도 영향을 남겼습니다.</p>
      <ul>
        <li>모국어 사용자 약 <b>4억 5천만 명 이상</b> — 중국어(만다린) 다음으로 많으며, 로망스어 중 1위</li>
        <li>사용 인구가 가장 많은 나라는 ==멕시코==</li>
        <li>유엔(UN)의 6개 공식 언어 중 하나</li>
        <li>문자는 라틴 문자를 사용 (ñ 포함 27자)</li>
      </ul>`},
    {type:'chips', title:'2. 스페인어를 공용어로 쓰는 나라들', html:'<p>스페인과 대부분의 라틴아메리카 국가, 그리고 적도기니 등 <b>20여 개국</b>이 스페인어를 제1언어로 사용합니다. 칩을 클릭하면 나라 이름의 발음을 들을 수 있어요.</p>',
      items:[['España','스페인'],['México','멕시코'],['Colombia','콜롬비아'],['Argentina','아르헨티나'],['Perú','페루'],['Venezuela','베네수엘라'],['Chile','칠레'],['Ecuador','에콰도르'],['Guatemala','과테말라'],['Cuba','쿠바'],['Bolivia','볼리비아'],['República Dominicana','도미니카공화국'],['Honduras','온두라스'],['Paraguay','파라과이'],['El Salvador','엘살바도르'],['Nicaragua','니카라과'],['Costa Rica','코스타리카'],['Panamá','파나마'],['Uruguay','우루과이'],['Puerto Rico','푸에르토리코'],['Guinea Ecuatorial','적도기니']]},
    {type:'callout', kind:'info', html:'미국에서는 스페인어가 <b>두 번째로 널리 쓰이는 언어</b>이며, 학교와 대학에서 가장 많이 가르치는 외국어입니다. 웹에서도 영어·중국어에 이어 세 번째로 많이 쓰이는 언어로 조사된 바 있습니다.'},
    {type:'table', title:'3. 스페인어의 역사 — 라틴어에서 스페인어로', html:'<p>스페인어는 <b>민중 라틴어(Latín vulgar)</b>에서 나왔습니다. 안달루시아를 지배한 아랍인의 영향으로 어휘에 아랍어가 많이 섞였고(예: [[almohada]] 베개, [[aceite]] 기름), 서고트족을 통한 게르만어, 바스크어와 켈티베리아어의 흔적도 남아 있습니다. 라틴어 → 스페인어로 변하는 대표적인 음운 변화는 다음과 같습니다.</p>',
      head:['변화','라틴어','스페인어','설명'], es:[2],
      rows:[['연음화(유성음화)','vita','vida','무성 자음 t → 유성 자음 d'],['구개음화','annum','año','nn → ñ'],['구개음화','anellum','anillo','ll 소리로 변화'],['이중모음화','terra','tierra','짧은 e → ie'],['이중모음화','novus','nuevo','짧은 o → ue']],
      after:'<p>1492년 살라망카에서 <b>안토니오 데 네브리하</b>가 최초의 카스티야어 문법서 <i>Gramática de la lengua castellana</i>를 펴냈습니다. 이사벨 여왕이 "내가 이미 아는 언어인데 이 책이 무슨 쓸모가 있는가?"라고 묻자, 그는 "전하, 언어는 제국의 도구입니다"라고 답했다고 전해집니다.</p>'},
    {type:'text', title:'4. 스페인어 한림원 (Real Academia Española, RAE)', html:'<p>1713년 설립된 [[Real Academia Española]]는 21개국의 스페인어권 학회(ASALE)와 함께 사전 편찬, 문법·문체 지침을 통해 스페인어의 <b>표준화</b>를 이끕니다. 공식 사전 DLE는 <b>dle.rae.es</b>에서 무료로 찾아볼 수 있습니다.</p>'},
    {type:'text', title:'5. 스페인어 이름의 구조 — 이름 + 성 두 개', html:`
      <p>스페인어권 사람의 성명은 <b>이름(nombre) + 첫째 성(아버지의 첫째 성) + 둘째 성(어머니의 첫째 성)</b>으로 이루어집니다. 평소에는 이름과 첫째 성만 씁니다(예: Lionel Messi ← Lionel Andrés Messi Cuccittini).</p>
      <div class="cmp">
        <div class="col a"><h4>👨 아버지</h4>Eduardo <b>Fernández</b> Garrido</div>
        <div class="col b"><h4>👩 어머니</h4>María Dolores <b>Martínez</b> Ruiz</div>
      </div>
      <p style="text-align:center;font-size:18px;margin-top:10px">⬇️ 아들 José의 이름은?</p>
      <p style="text-align:center"><span class="es" style="font-size:22px">José Fernández Martínez</span></p>
      <p>오늘날에는 남녀평등 법률에 따라 어머니의 성을 먼저 쓰는 것도 가능합니다. 결혼해도 여성은 자기 성을 그대로 유지합니다.</p>`},
    {type:'reveal', title:'🧠 이름 만들기 연습 (클릭하여 정답 확인)', items:[
      {q:'아버지 <b>Carlos García López</b>, 어머니 <b>Ana Torres Vega</b>의 딸 Lucía의 전체 이름은?', a:'Lucía García Torres'},
      {q:'아버지 <b>Pedro Sánchez Ruiz</b>, 어머니 <b>Marta Gómez Díaz</b>의 아들 Diego의 전체 이름은?', a:'Diego Sánchez Gómez'},
      {q:'<b>Gabriel García Márquez</b> — 아버지의 성과 어머니의 성은 각각?', a:'아버지의 성: García / 어머니의 성: Márquez'},
    ]},
    {type:'text', title:'6. 유엔(UN) 공식 언어', html:`<p>유엔의 공식 언어는 <b>영어, 프랑스어, 러시아어, 중국어, 스페인어, 아랍어</b> 6개입니다. 1946년 제1차 총회에서 5개 언어(영·불·러·중·서)가 공식 언어로, 영어·프랑스어가 작업 언어로 지정되었고, <b>1948년</b> 스페인어가 작업 언어로 추가되었습니다. 아랍어는 1973년에 공식·작업 언어가 되었습니다.</p>`},
    {type:'table', title:'7. 스페인어 능력 시험 한눈에 보기', head:['시험','주관','특징','수준 체계'], firstBold:true,
      rows:[['DELE','Instituto Cervantes (스페인 교육부 명의)','세계적으로 가장 널리 인정되는 공인 자격증. 유효기간 없음','CEFR A1 ~ C2 (6등급)'],
            ['SIELE','Instituto Cervantes 외','컴퓨터 기반, 점수제(1000점), 빠른 결과','A1 ~ C1 점수 환산'],
            ['OPIc','ACTFL','iBT 기반 말하기 평가. 실제 의사소통 능력 측정','Novice ~ Advanced'],
            ['FLEX','한국외대 개발 · 대한상공회의소 시행','국가공인 민간자격. 듣기 400 + 읽기 600 = 1,000점 (어휘문법 200 + 독해 400)','B1≈650, B2≈750, C1≈850, C2≈950'],
            ['SNULT','서울대 언어교육원 · TEPS관리위원회','1967년부터 기관 대상 시행, 2008년부터 일반인 정기시험','등급제']],
      after:'<div class="callout tip"><div class="em">💡</div><div>FLEX는 듣기 50문항(8점), 어휘/문법 40문항(5점), 독해 50문항(8점)으로 구성되어 있어 <b>읽기 영역의 시간 관리</b>가 고득점의 핵심입니다.</div></div>'},
  ],
  exercises:[
    {type:'mc', title:'스페인어 상식 퀴즈', instr:'서론 내용을 바탕으로 알맞은 답을 고르세요.', items:[
      {q:'스페인어의 다른 이름은?', opts:['catalán','castellano','gallego','portugués'], a:1, exp:'카스티야 지방에서 기원했기 때문에 castellano라고도 부릅니다.'},
      {q:'스페인어 모국어 사용자가 가장 많은 나라는?', opts:['España','Argentina','México','Colombia'], a:2},
      {q:'스페인어는 어떤 언어에서 발전했나요?', opts:['고전 그리스어','민중 라틴어','아랍어','고대 켈트어'], a:1},
      {q:'다음 중 유엔 공식 언어가 <b>아닌</b> 것은?', opts:['스페인어','아랍어','독일어','러시아어'], a:2},
      {q:'최초의 카스티야어 문법서(1492)를 쓴 사람은?', opts:['Miguel de Cervantes','Antonio de Nebrija','Isabel la Católica','Lope de Vega'], a:1},
      {q:'라틴어 <i>terra</i>가 스페인어 <i>tierra</i>가 된 변화는?', opts:['연음화','구개음화','이중모음화','탈락'], a:2},
      {q:'스페인어 표준화를 이끄는 기관은?', opts:['Instituto Cervantes','Real Academia Española','UNESCO','Alianza Francesa'], a:1},
      {q:'Instituto Cervantes가 수여하는 공인 자격증은?', opts:['FLEX','SNULT','DELE','OPIc'], a:2},
      {q:'FLEX 듣기/읽기 총점은?', opts:['500점','1,000점','1,500점','990점'], a:1, exp:'듣기 400 + 읽기 600 = 1,000점. 쓰기·말하기를 합하면 1,500점.'},
      {q:'아버지 Juan <b>Pérez</b> Soto, 어머니 Rosa <b>Mora</b> Gil의 아들 Luis의 이름은?', opts:['Luis Soto Gil','Luis Pérez Mora','Luis Mora Pérez','Luis Pérez Soto'], a:1},
    ]},
    {type:'classify', title:'스페인어 공용어 국가 찾기', instr:'스페인어가 공용어인 나라와 아닌 나라를 구분하세요.', buckets:['스페인어 공용어 ✅','스페인어 공용어 아님 ❌'], items:[
      {t:'Brasil',b:1},{t:'Perú',b:0},{t:'Guinea Ecuatorial',b:0},{t:'Portugal',b:1},{t:'Filipinas',b:1},{t:'Cuba',b:0},{t:'Haití',b:1},{t:'Paraguay',b:0},{t:'Belice',b:1},{t:'Uruguay',b:0},{t:'Italia',b:1},{t:'Honduras',b:0}]},
    {type:'match', title:'라틴어 → 스페인어 짝짓기', instr:'라틴어 단어와 거기서 나온 스페인어 단어를 연결하세요.', pairs:[['vita','vida'],['annum','año'],['terra','tierra'],['novus','nuevo'],['anellum','anillo'],['lupus','lobo'],['porta','puerta'],['filius','hijo']]},
    {type:'fill', title:'빈칸 채우기', instr:'서론의 내용에 맞게 빈칸을 채우세요 (스페인어 또는 숫자).', items:[
      {q:'스페인어는 스페인어로 español 또는 ___ 라고 한다.', a:'castellano'},
      {q:'스페인어 한림원의 정식 명칭: Real Academia ___', a:'Española'},
      {q:'유엔 공식 언어는 모두 ___ 개이다.', a:'6|여섯'},
      {q:'스페인어가 유엔 작업 언어로 지정된 해: ___ 년', a:'1948'},
      {q:'네브리하의 문법서가 출판된 해: ___ 년', a:'1492'},
      {q:'DELE를 수여하는 기관: Instituto ___', a:'Cervantes'},
    ]},
  ]
};
