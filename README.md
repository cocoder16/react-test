This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 컴포넌트 구조
* Todo, Grid, Modals, Counter, Async 각 메뉴는 Containers 디렉토리에 각각 메뉴 별로 1개의 컨테이너 컴포넌트로 만들었습니다.
* components 디렉토리에는 컨테이너 컴포넌트의 하위 컴포넌트들을 모았습니다. 또한 Navigator 컴포넌트와 Footer 컴포넌트도 들어있습니다.
* 컴포넌트끼리의 조립구조는 다음과 같습니다.
## Todo
* TodoContainer.js
  * Todo.js
    * TodoItem.js
## Grid
* GridContainer.js
  * Grid.js
    * GridTableRow.js
## Modals
* ModalsContainer.js
  * Modals.js
    * Modal.js    
## Counter
* CounterContainer.js
  * Counter.js
## Async
* AsyncContainer.js
  * Async.js
  
# 그 외 디렉토리
## hooks
input 태그와 비동기 로직을 재사용성을 높이기 위해 커스텀 훅으로 만들어 따로 분리하였습니다.
## routers
메뉴 구현을 위해 사용한 라우터를 가지고 있습니다.
## store
counter 메뉴를 구현하기 위해 필요한 redux의 액션, 액션생성함수, 초기상태값, 리듀서, 스토어를 가지고 있습니다.
## styles
App.css와 index.css를 제외한 CSS 파일들을 이 곳에 따로 모아놨습니다. App.css와 index.css는 src폴더에 놔두었습니다.

# 이 프로젝트의 개인적인 성과
React hooks를 처음 공부하여 도입해보았고, 재사용성과 가독성을 높일 수 있다는 hooks를 사용할 때 어떤 식으로 코드 구조를 만들면 좋을지 고민을 할 수 있는 시간이었습니다.

