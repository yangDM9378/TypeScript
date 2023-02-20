{
  // 기존의 type_5_union을 수정
  // union에서 공통적인 property를 가지고 있으므로 구분하기 쉽게 만드는 것
  // function: login -> success, fail -> 유니온을 활용
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }
  // pringLoginState(state: LoginState)
  // success -> '성공' body
  // fail -> '실패' reason
  function printLoginState(state: LoginState) {
    // state.result; // success or fail
    if (state.result === 'success') {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
