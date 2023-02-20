{
  // Union Type: OR -> 발생할수 있는 많은 타입 중에 하나만 담을 때 사용

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail -> 유니온을 활용
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }
  // pringLoginState(state: LoginState)
  // success -> '성공' body
  // fail -> '실패' reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
