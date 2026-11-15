#!/usr/bin/env python3
"""chNN.html 페이지를 js/data/chNN.js 로부터 생성합니다. (python3 build.py)"""
import os, re
ROOT = os.path.dirname(os.path.abspath(__file__))
TPL = """<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — 다인에듀 기초 스페인어 문법</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇪🇸</text></svg>">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<header class="topbar"><div class="wrap">
  <a class="brand" href="index.html"><span class="logo">D</span><span>기초 스페인어 문법<small>다인에듀 · 후안샘</small></span></a>
  <span class="spacer"></span>
  <span class="iconbtn" title="이 장 진도">📈 <span id="hdrProg">0%</span></span>
  <button class="iconbtn" id="themeBtn" title="다크 모드">🌓</button>
  <a class="iconbtn" href="index.html">목차</a>
</div></header>
<main class="wrap" id="app"></main>
<footer><div class="wrap"><b>다인에듀</b> 기초 스페인어 문법 · 강사 황부연 · <a href="https://www.dainedu.net" target="_blank" rel="noopener">www.dainedu.net</a></div></footer>
<script src="js/kb.js"></script>
<script src="js/data/ch{id}.js"></script>
<script src="js/app.js"></script>
</body>
</html>
"""
titles = {}
with open(os.path.join(ROOT,'js/app.js'),encoding='utf-8') as f:
    for m in re.finditer(r"\{id:'(\d\d)', title:'([^']+)'", f.read()):
        titles[m.group(1)] = m.group(2)
n=0
for fn in sorted(os.listdir(os.path.join(ROOT,'js/data'))):
    m = re.match(r'ch(\d\d)\.js$', fn)
    if not m: continue
    cid = m.group(1)
    with open(os.path.join(ROOT,f'ch{cid}.html'),'w',encoding='utf-8') as f:
        f.write(TPL.format(id=cid, title=(f'{int(cid)}장. ' if cid!='00' else '서론. ')+titles.get(cid,'')))
    n+=1
print('generated', n, 'pages')
