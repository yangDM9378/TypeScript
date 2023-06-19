{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  // 에러가 발생할때 에러를 정확히 처리하지 못할 경우 catch하는 것이 더 나을 수 있음
  // 처리가 가능한 부분에서 오류 핸들러를 하기
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  // const client = new NetworkClient();
  // const service = new UserService(client);
  // service.login();

  // App 실행하는 예제
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // catch시 error가 any 타입으로 들어오게 되어 타입 추론 불가능(instanceof 사용 불가능 하다)
        if (error instanceof OfflineError) {
        }
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
