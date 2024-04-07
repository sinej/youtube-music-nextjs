# 유튜브 뮤직 프로젝트

1. 프로젝트 시작하기
- npx create-next-app@14.1.0
- npm install tailwind-merge
- npm install zustand


### 왜 NextJS로 프로젝트 세팅을 했는지.

1. FSD 아키텍처로 설계하고 싶었다.
2. 





React
- SPA (Single Page Application - Angular, Vue, React, Svelite)
- 페이스북에서 만든 Javascript 라이브러리
- SEO 상관없는 인터렉션이 많은 모든 웹 (어드민 페이지, B2B 페이지, Gmail, 지도 앱)
- 결과물: JS 정적 파일 (HTML, CSS)
- 장점: 웹에서 앱처럼 UI 상호작용이 가능한 웹사이트 개발 가능. (SEO 불리 및 초기 JS로딩이 느리다 - 빈 화면이 보임)

Next.js
- MPA (Mutiple Page Application)
- React 기반의 서버 사이드 렌더링 (SSR) 및 정적 사이트 생성 (Static Site Generation, SSG) 지원하는 프로젝트
- SEO 최적화, 초기 로딩 속도 향상 > B2C 사용한다.
- FullStack 가능하며, 서버 API, DB 조회 등 가능




### 유튜브 뮤직 프로젝트에서 중심적으로 진행해야되는 부분
- 
- 최적화 성능 - 이미지, preview 등 성능 체크
- 테스트 코드


#### ci/cd
ci: 지속적 통합 - github, test code, smell(sonarqube)
cd: 지속적 배포 - nextjs app 최신버전으로 업데이트 되는 것

vercel: nextjs 배포하는 가장 쉬운 방법
AWS Ec2, nextjs github pull > build(EC2 nodejs 설치) > start
nextjs > docker image > docker hub push > EC2 > docker image pull > docker run
github push > docker image(CI) > portainer(CD) > dockerContainer run
