# FE Study Plan (2025.09 ~ 2025.12)

목표: HTML/CSS → JS → React → Next.js → 최종 프로젝트 완성  

---

### 🟢 Sprint 01 (9/15 ~ 9/28)
- 🎯 목표: HTML/CSS 기초, Git/GitHub 사용법
- 📝 과제:
  1. `index.html`에 자기소개 페이지 만들기
     - 본인 이름, 사진, 관심사 리스트
  2. CSS Flexbox로 레이아웃 구성 (왼쪽 사진, 오른쪽 텍스트)
  3. GitHub 저장소에 업로드
- 📂 산출물: `projects/html-css/index.html`, `styles.css`

---

### 🟢 Sprint 02 (9/29 ~ 10/12)
- 🎯 목표: JavaScript 기초 문법, DOM 조작
- 📝 과제:
  1. `todo.html` + `todo.js` 로 **To-Do List** 만들기
     - 입력창 + 추가 버튼 → 리스트에 항목 추가
     - 완료 버튼 → 항목 줄긋기 처리
     - 삭제 버튼 → 항목 삭제
  2. 기본적인 이벤트 핸들링 연습
- 📂 산출물: `projects/js-basics/todo.html`, `todo.js`

---

### 🟢 Sprint 03 (10/13 ~ 10/26)
- 🎯 목표: ES6+ 문법, JSON 다루기
- 📝 과제:
  1. `products.json` 파일(더미 상품 데이터) 불러와서 테이블로 출력
  2. 가격 기준 정렬 버튼, 이름 검색 기능 추가
- 📂 산출물: `projects/js-es6/products.html`, `products.js`, `products.json`

---

### 🟢 Sprint 04 (10/27 ~ 11/09)
- 🎯 목표: React 기초
- 📝 과제:
  1. CRA(Create React App) 환경 세팅
  2. **간단한 카운터 앱** 만들기
     - “+1” 버튼 → 숫자 증가
     - “-1” 버튼 → 숫자 감소
  3. 상태(state)와 props 이해
- 📂 산출물: `projects/react-basics/src/Counter.jsx`

---

### 🟢 Sprint 05 (11/10 ~ 11/23)
- 🎯 목표: React 심화
- 📝 과제:
  1. **간단 게시판 앱** 만들기
     - 글 작성 폼 (제목/내용)
     - 글 목록 표시 (JSON 데이터 기반)
     - 글 삭제 기능
  2. React Hooks (useState, useEffect) 활용
- 📂 산출물: `projects/react-advanced/src/Board.jsx`

---

### 🟢 Sprint 06 (11/24 ~ 12/07)
- 🎯 목표: Next.js 입문
- 📝 과제:
  1. Next.js 프로젝트 생성
  2. `/about` 페이지에 자기소개 작성
  3. `/products` 페이지에서 JSON 상품 데이터 목록 표시
     - 정적 라우팅, 동적 라우팅 실습
- 📂 산출물: `projects/nextjs-app/app/products/page.tsx`

---

### 🟢 Sprint 07 (12/08 ~ 12/21)
- 🎯 목표: 최종 프로젝트
- 📝 과제:
  1. **간단 쇼케이스 웹사이트** 만들기
     - 메인 배너 캐러셀
     - 상품 리스트(JSON 기반)
     - 상세 페이지
  2. 최소한의 CSS 스타일링 적용
- 📂 산출물: `projects/final-project/`

---

## 📂 디렉토리 구조

```bash
my-frontend-study/
├── README.md          # 스프린트 플랜 + 산출물 안내
│
├── projects/          # 실습 및 프로젝트 산출물
│   ├── html-css/
│   ├── js-basics/
│   ├── js-es6/
│   ├── react-basics/
│   ├── react-advanced/
│   ├── nextjs-app/
│   └── final-project/
