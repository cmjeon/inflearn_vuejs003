# markdown 사용법
- https://gist.github.com/ihoneymon/652be052a0727ad59601

# learn-vue-js
- Vue.js 끝장내기 - 실무에 필요한 모든 것 강좌 학습자료
- https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90#

목차

[1. 강의 오리엔테이션](#강의-오리엔테이션)

# 강의 오리엔테이션
1
## 제작할 애플리케이션 소개
- 학습노트(TIL)페이지
## 현대 프런트엔드 개발 절차와 역할
- 절차
  - 요구사항 > 서비스 기획 > UI/UX 상세설계 > GUI 디자인 > 퍼블리싱 > 백엔드 API 개발 > 프론트엔드 개발 > QA
- 프론트엔드 개발자의 역할
  - 화면단 코드 작성
  - 기획, 디자인, 퍼블리싱, 백엔드 개발자와 소통
## 수업에서 사용할 API 문서 소개
- swagger.io : API문서 생성 사이트
- API 문서를 읽는 법을 배움

# 개발환경 구성
2
## 개발환경 소개
- 깃헙 리포지토리 https://github.com/joshua1988/vue-til
- 프로그램 설치 영상 https://www.inflearn.com/course/Age-of-Vuejs/lecture/21333?tab=curriculum
- 개발환경 목록 페이지 https://github.com/joshua1988/vue-til/tree/master#%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD
## VSCode 플러그인 및 테마 설정
- VSCode 플러그인 설치 및 설정 https://www.inflearn.com/course/Age-of-Vuejs/lecture/21397?tab=curriculum
## API서버 프로젝트 구성
- API서버 깃헙 리포지토리 https://github.com/joshua1988/vue-til-server
```
$ git clone https://github.com/joshua1988/vue-til-server.git
$ node -v # node 버전 확인
```
## Node.js 버전 관리가 필요한 이유와 버전 변경
- Node.js 이전 릴리즈 다운로드 페이지 https://nodejs.org/ko/download/releases/
## NVM(Node Version Manager) 소개 및 설치
- google 에서 nvm github 검색 > https://github.com/nvm-sh/nvm#installing-and-updating
- Windows 10에서 nvm 설치
  - Windows 10용 Installer https://github.com/coreybutler/nvm-windows/releases
  - nvm-setup.zip 다운 및 압축해제
  - nvm-setup.exe 실행
## NVM으로 node.js 버전 변경 및 설치
- Windows PowerShell에서 node 설치 및 버전 변경
  - node 설치
  ```
  > node -v # 현재 버전 확인
  > nvm install 10.16.3 # 10.16.3 버전 설치
  > nvm use 10.16.3 # 10.16.3 버전 사용
  > node -v # 버전 변경 확인
  ```
## API 서버 실행 및 확인
- API 서버 실행 방법
```
$ cd vue-til-serve 
$ node -v # node 버전 확인
$ npm i # npm library install
$ npm run dev
```
- 브라우저에서
  - http://localhost:3000/ # 접속확인
  - http://localhost:3000/api/docs/ # API문서페이지 접속 확인
## 데이터 베이스 연결 안내
- 해당 api서버는 mongodb에 연결하고 있음.
- app.js
```
// mongo db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connect(
  'mongodb+srv://test:1234@cluster0-ypgh5.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);
mongoose.Promise = global.Promise;
```
## MongoDB Cloud 사이트 소개 및 회원 가입 안내
- MongoDB https://www.mongodb.com/
- google 계정으로 회원가입
## MongoDB 인스턴스 생성 후 Node.js에 연결
- Organization, Cluster 생성
- Network Access 설정
  - Add IP Address
- Database Access 설정
  - Add New Database User
    - dbname : test, PW : 1234, privileges : read and write to any database
- Cluster 설정
  - Connect 선택 > Connect your application
  - connection string copy
- app.js 에 붙여넣기
  - password, dbname 은 상단참조
```
mongoose.connect(
  // 'mongodb+srv://test:1234@cluster0-ypgh5.mongodb.net/test?retryWrites=true&w=majority',
  'mongodb+srv://test:1234@cluster0.er4qd.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);
```
- 서버재기동
  - $ Ctrl + C
  - $ npm run dev
- 연결확인
  - 브라우저에서 http://localhost:3000/api/docs 연결
  - /signup에서 'try it out' 선택
  - username, password, nickname 입력 > 하단 결과 200확인
## API 문서 보는 법과 사용하는 방법
- ?

# 프로젝트 생성 및 환경 구성
3
## Vue CLI로 프로젝트 생성
- vue CLI 설치 https://cli.vuejs.org/guide/installation.html
- node.js가 실행되고 있는 터미널 말고 새 터미널 생성
```
$ npm install -g @vue/cli
```
- 설치 확인
```
$ vue --version # @vue/cli 4.4.6
```
- vue SPA(Single Page Application) 생성
```
$ vue create vue-til # vue-til 이라는 SPA 프로젝트 생성
```
- 프로젝트 설정
```
Manually select fretures 선택
Babel, Linter / Formatter, Unit Testing 선택
ESLint + Prettier 선택
Lint on save 선택
Jest 선택
In dedicated config files 선택
Save this as a preset for future projects? > N 선택
```
## Vue 프로젝트 구조 설명 및 ESLint 에러 확인
- 프로젝트 실행
```
$ cd vue-til
$ npm run serve
```
- App.vue에 ESLint 테스트
```
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    var a = 10;
  }
}
```
- a에 빨간줄이 안보인다면?
  - File - Preferences - Settings - ESLint 검색
  - Edit in setting.json 선택
  - 하단내용 추가
```
  "eslint.workingDirectories": [
    "./vue-til"
  ]  
```
## ESLint 에러가 화면에 표시되지 않게 하는 방법
- 에러가 발생하면 애플리케이션을 사용하지 못하게 에러메시지가 덮힘(Overlay)
- ESLint는 오류나지 않도록 돕는 도구이지만 실행과 상관없는 오류가 나는대도 애플리케이션을 사용 못하는 것은 문제임
- 실행과 상관없는 오류가 나더라도 애플리케이션을 사용가능하도록 변경
- vue-til 디렉토리에 vue.config.js 파일 생성
  - 하단내용 추가
```
module.exports = {
    devServer: {
        overlay: false
    }
}
```
- 화면의 Overlay가 사라짐
- Webpack Dev Server : https://joshua1988.github.io/webpack-guide/devtools/webpack-dev-server.html
## ESLint 설정 파일 안내
- eslint는 javascript 문법보조검사기임
> Find and fix problems in your JavaScript code
- .eslintrc.js는 설정파일
- rules에 따라 에러표시가 달라짐
- 하단 eslint 예시
```
rules: {
  "no-console":"error", // console이 없어야 하고 있으면 error
},
```
## Prettier 소개 및 ESLint와 같이 사용해야 하는 이유
- Prettier는 코드정리도구
> An opinionated code formatter
- 설정은 eslintrc.js안에서 해야함 왜냐하면 eslint의 rules와 충돌이 발생하기 때문
- 따라서 rules의 내부에 설정해준다.
```
rules: {
  "no-console":"off",
  "prettier/prettier": { //prettier 설정 예시
    printWidth: 80 
  }
},
```
- 
## ESLint에 Prettier 규칙 적용
- vue.js 개발 생산성을 높여주는 도구 3가지 : https://joshua1988.github.io/web-development/vuejs/boost-productivity/
- prettier설정하기 (eslintrc.js에 설정)
```
rules: {
  "no-console":"off",
  // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  "prettier/prettier":[
    'error', {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
    }
  ]
},
```
- 설정하면 prettier설정에 맞지 않는 구문들은 에러가 표시됨
## ESLint 플러그인 설치 및 설정 변경
- File - Preferences - Settings - ESLint 검색 - Eslint: Validate
- Edit in setting.json 선택
- 하단내용 붙여넣기
```
 "eslint.validate": [
      {
          "language": "vue",
          "autoFix": true
        },
        {
          "language": "javascript",
          "autoFix": true
        },
        {
          "language": "javascriptreact",
          "autoFix": true
        },
        {
          "language": "typescript",
          "autoFix": true
        },
        {
          "language": "typescriptreact",
          "autoFix": true
        }
  ],
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  // don't format on save
  "editor.formatOnSave": false
```
## Prettier 플러그인 확인 및 설정할 때 주의 사항
- prettier가 설치되어 있다면, 확장프로그램에서 prettier검색하여 우클릭 Disable(workspace)
- File - Preferences - Settings - format on save 검색
- 체크 해제
- App.vue에서 prettier의 설정에 따라 소스가 수정되는 것을 확인
## 프로젝트 레벨로 ESLint 규칙을 관리해야 하는 이유와 ESLint 규칙 설명
- IDE의 개발환경에 따라 설정이 달라질 수 있기 때문에 소스레벨에서 설정을 통일할 수 있기 때문
## 파일의 절대 경로를 설정해야 하는 이유
- src/App.vue에서 src/components/common/AppHeader.vue 에 접근하는 방법
```
import AppHeader from './components/common/AppHeader.vue';
```
- src/components/common/AppHeader.vue에서 src/demo/basic/Demo.vue 에 접근하는 방법
```
import Demo from '../../demo/basic/Demo';
```
- 파일을 상대 경로로 찾게 되면 너무 번거로움
- 하단과 같이 절대경로로 지정할 수 있음
```
import Demo from '@/demo/basic/Demo';
```
## 파일을 절대 경로로 찾기 설정
- jsconfig.json 파일 링크(Vue TIL 리포지토리) https://github.com/joshua1988/vue-til/blob/complete/jsconfig.json
- VSCode의 jsconfig.json 파일 설명 글 https://code.visualstudio.com/docs/languages/jsconfig
- vue-til/jsconfig.json
```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "~/*": [
            "./*"
        ],
        "@/*": [
            "./src/*"
        ],
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```
## 애플리케이션 코딩 컨벤션 및 뷰 스타일 가이드 소개
- Vue.js 스타일 가이드 문서 https://kr.vuejs.org/v2/style-guide/index.html
- 필수와 강력추천 내용을 참조하는 것이 좋음

# 라우터 & 컴포넌트 설계
4
## 깃험 리포지토리 안내 및 클론
- 수업 깃헙 리포지토리 안내 https://github.com/joshua1988/vue-til
- $ git clone https://github.com/joshua1988/vue-til.git
- $ git checkout 1_setup
- $ npm install
- src/routs/index.js 파일 생성

## 뷰 라우터 설치 및 연결
- 화면구성
	- 로그인
	- 회원 가입
	- 메인
	- 추가 / 수정
- vue-router 설치
- $ npm i vue-router

## 페이지 컴포넌트 생성 및 연결

## 라우팅 동작 확인

## 코드 스플리팅 소개 및 적용

## 초기 진입 페이지 설정

## 없는 페이지를 접근할 때의 라우터 처리

## history mode 설정 및 싱글 페이지 애플리케이션 배포할 때 주의 사항

# 회원 가입 페이지 개발
5
## 회원 가입 페이지 개발을 위한 준비

# 실무 환경을 위한 프로젝트 설정
6
# 로그인 페이지 개발
7
# 로그인 상태 관리와 스토어
8
# 토큰을 이용한 API 인증 처리
9
# 학습 노트 데이터 조회
10
# 브라우저 저장소를 이용한 인증 값 관리
11
# 학습 노트 데이터 생성
12
# 중간 정리
13
# API 함수 모듈화
14