# 다인에듀 기초 스페인어 문법 — 인터랙티브 학습 사이트

황부연(후안샘) 강사의 교재 「기초 스페인어 문법」(서론 + 30장 + 부록)을 바탕으로 수강생이 혼자서 학습하고 연습할 수 있도록 만든 정적 웹사이트입니다.

- **GitHub Pages**: `https://yalli2.github.io/dainedu_spanish_basic_grammar/`
- 각 장: 📖 학습 → ✍️ 연습문제 → 🏆 종합 퀴즈
- 모든 스페인어 예문 🔊 음성 (Web Speech API, es-ES)
- 인터랙티브 위젯: 알파벳 탐험(1장), 숫자 실험실·살아있는 달력(2장), **시계 연습장**(3장, 바늘 드래그), 동사변화 드릴(9·10·13·14·16·18·20·21·30장)
- 연습문제 유형: 빈칸 채우기, 객관식, 드래그 분류, 짝짓기, 단어 배열, 동사변화표
- 학습 진도는 브라우저(localStorage)에 자동 저장, 다크 모드 지원

## 구조
```
index.html          허브(목차·진도)
chNN.html           각 장 페이지 (build.py로 생성)
css/style.css
js/app.js           학습 엔진 (렌더러·위젯·채점·퀴즈·진도)
js/data/chNN.js     장별 학습 내용과 연습문제 데이터
build.py            js/data/*.js → chNN.html 생성
```

## 내용 수정
`js/data/chNN.js`의 데이터만 수정하면 됩니다. 새 장을 추가하면 `python3 build.py`를 실행하세요.
