type NetworkErrorState = {
  result: 'fail';
  reason?: 'offline' | 'down' | 'timeout';
};

type SuccessState = {
  result: 'success';
};

type ResultState = SuccessState | NetworkErrorState;

class NetworkClient {
  tryConnect(): ResultState {
    return {
      result: 'fail',
      reason: 'offline',
    };
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    return this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    const isLogin = this.userService.login();
    if (isLogin.result === 'success') {
      console.log('로그인 성공');
    } else {
      if (isLogin.result === 'fail' && isLogin.reason) {
        console.log(`로그인 실패 이유는 ${isLogin.reason}`);
      } else {
        console.log('다른 오류 발생');
      }
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
