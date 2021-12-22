# 공모전 정보 공유 & 팀원 찾기 서비스

## 너와 나의 능력으로, Shall We

### 21학년 2학기 광운대 웹프로그래밍 프로젝트

---

> HTTP / HTTPS 통신이 가능한 웹서비스를 기획하고 개발하는 것

### 1. 개발 스택

- MERN Stack
  1. **M** ongoDB : NoSQL / Cloud DB Service Atlas
  2. **E** xpress : Backend API Design
  3. **R** eact : Frontend UI
  4. **N** odeJS : Javascript Runtime

### 2. 웹 배포

- Heroku

### 3. 웹서비스 내용

1. 참여를 원하는 공모전에 대한 정보를 공유
2. 팀 단위로 출품 가능한 공모전에 대한 팀원을 구하는 목적으로 함
3. 그 외에도, 같은 커리어 패스를 원하는 사람들을 구할 수 있게 프로필 등록 가능
4. 공모전, 팀원에 대한 후기를 통해서 서로의 경험을 공유 가능

---

### 그 외 라이브러리

- Backend

  - axios : API 통신 모듈
  - cors : 교차 출처 리소스 공유
  - dotenv : 환경 변수 관리 ( MongoDB )
  - mongoose : MongoDB Driver 모듈 / JS 로 명령어 조작
  - multer : Express 를 통한 파일 업로드 지원 모듈
  - nodemon : node 재실행 편의성

- Frontend
  - bootstrap : CSS 속성 inline 적용 / 반응형 웹
  - React bootstrap : Tag 형 React 기능 적용

---

### 프로젝트 구성

- models : 데이터 스키마
- routes : 데이터별 통신 API 작성
- images : 이미지 파일 endpoint
- client : 프론트엔드
  - build : 최종 빌드된 파일
  - src : 실제 개발 파일
    - components : 페이지별 공통 사용 컴포넌트
    - context : 웹앱 상태 관리용 코드
    - imgs : 디자인용 일러스트
    - pages : 웹 개별 페이지

\*일러스트 출처 : [unDraw](https://undraw.co/illustrations)

---

웹 주소 >>
[너와 나의 능력으로, Shall We](https://shall-we-web.herokuapp.com/) \*더미 데이터를 사용하였습니다.
