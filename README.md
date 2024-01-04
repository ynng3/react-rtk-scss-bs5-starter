# React RTK SCSS Bootstrap 5 Starter Package(react-rtk-scss-bs5-starter)

이 패키지는 통일성 있는 설계 구조의 리액트 프로젝트를 수행하기 위한 스타팅 패키지 입니다.

## 주요 패키지 구성

- React(Typescript)
- Bootstrap
- Redux Toolkit
- Sass


## `/src` 디렉토리 구성

- `src/assets` image, scss 파일 등의 리소스 파일을 보관
- `src/components` Component를 보관(자주쓰는 컴포넌트가 패키지에 포함 되어 있음)
- `src/pages` Router를 연결 시킬 라우트 정보를 보관
- `src/store` Redux Toolkit의 개별 Store 파일을 보관


## 주요 파일 정보

- `index.tsx` - 최상위 파일로 이곳에 모인 모든 컴포넌트와 렌더링 설정들을 종합해 렌더링 합니다.
- `App.tsx` - 최상단 컴포넌트 이며 index.tsx에서 처음으로 호출하는 컴포넌트 입니다. 이곳에서 렌더링 시킬 컴포넌트를 모은 후에 index.tsx로 넘겨줍니다.
- `routes.tsx` 라우팅 정보를 모아놓는 라우트 입니다. 이곳에 모인 정보는 RouteComponent로 보내지고 이 컴포넌트를 통해 렌더링 됩니다.
- `store.tsx` 개별 Store 파일에 선언된 Reducer를 ConfigureStore를 통해 전역으로 State를 관리할 수 있는 스토어를 생성합니다.


## SCSS 정보

이 프로젝트의 Sass는 SMACSS 형태의 CSS 방법론으로 제작 되었으며 Bootstrap을 참조합니다.

bootstrap의 변수를 bootstrap 보다 상위에서 할당 하여 핵심 변수를 커스터마이징 하는 방식을 채택합니다.
이를 통해서 이 패키지를 통해 제작하는 사이트에 높은 UI의 통일성을 제공하는 것을 목표로 합니다.

이후 프로젝트들의 유지보수 관리 및 코드 통일성을 위해 아래 구성에 따라 통일성 있게 코딩해주시기 바랍니다.

- `src/assets/scss/base` - 프로젝트 공통 CSS, 변수, 함수, 믹스인 등이 선언되는 디렉토리 입니다.
- `src/assets/scss/components` - 개별 컴포넌트의 scss를 선언하는 디렉토리 입니다.
- `src/assets/scss/layout` - 레이아웃 관련 scss를 선언하는 디렉토리 입니다.
- `src/assets/scss/pages` - 컴포넌트로 선언되지 않은 각 page의 고유한 스타일을 선언하는 디렉토리 입니다.
- `src/assets/scss/theme` - 테마 관련 SCSS를 선언하는 디렉토리 입니다 (다크 테마와 같은 개별 테마를 제공해야하는 프로젝트에서 사용합니다.)
- `src/assets/scss/style.scss` - 각 .scss 파일들을 모으는 최상위 SCSS 파일이며, 이 파일이 index.tsx에 include 되어 렌더링에 사용됩니다.


## 기타

- 예제 컴포넌트로 Hamburger 메뉴 버튼이 포함되어 있습니다. 클릭시 hamburger 스토어의 state가 true 또는 false로 토글 됩니다.
- 예제 컴포넌트로 Navigation이 포함되어 있습니다. (`/src/store/menuSlice.tsx` 에서 메뉴 구성을 관리할 수 있습니다.)
- 예제 컴포넌트로 RouteComponet가 포함되어 있습니다. routes.tsx에서 라우트 정보를 가져와 매핑하여 라우팅 기능을 수행합니다.
- 예제 컴포넌트로 SchrollToAnchor가 포함되어 있습니다. 라우트가 변경될 때 라우트에 앵커 링크가 포함되어 있을 경우 해당 id 위치로 스크롤 되고 그 외의 경우에는 최상단으로 스크롤 됩니다.


## git bash 명령어 정보

### `npm start`

개발 모드에서 앱을 실행합니다.\
[http://localhost:3000](http://localhost:3000)을 열어 브라우저에서 확인하세요.

편집하면 페이지가 다시 로드됩니다.\
콘솔에도 린트 오류가 표시됩니다.


### `npm test`

대화형 감시 모드에서 테스트 실행기를 시작합니다.\
자세한 내용은 [테스트 실행](https://facebook.github.io/create-react-app/docs/running-tests) 섹션을 참조하세요.


### `npm run build`

'build' 폴더에 프로덕션용 앱을 빌드합니다.\
프로덕션 모드에서 React를 올바르게 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

빌드가 축소되고 파일 이름에 해시가 포함됩니다.\
앱을 배포할 준비가 되었습니다!

자세한 내용은 [배포](https://facebook.github.io/create-react-app/docs/deployment) 섹션을 참조하세요.


### `npm run eject`

**참고: 이는 단방향 작업입니다. 한번 `eject`하면 되돌릴 수 없습니다!**

빌드 도구 및 구성 선택이 만족스럽지 않으면 언제든지 '꺼내기'를 수행할 수 있습니다. 이 명령은 프로젝트에서 단일 빌드 종속성을 제거합니다.

대신, 모든 구성 파일과 전이적 종속성(webpack, Babel, ESLint 등)을 프로젝트에 바로 복사하므로 이를 완전히 제어할 수 있습니다. 'eject'를 제외한 모든 명령은 계속 작동하지만 복사된 스크립트를 가리키므로 조정할 수 있습니다. 이 시점에서 당신은 스스로입니다.

`eject`를 사용할 필요는 없습니다. 엄선된 기능 세트는 소규모 및 중간 배포에 적합하므로 이 기능을 사용해야 한다는 의무감을 느껴서는 안 됩니다. 그러나 우리는 이 도구를 사용할 준비가 되었을 때 사용자 정의할 수 없다면 유용하지 않다는 것을 알고 있습니다.


#### 패키지 문의

[https://github.com/ynng3]
