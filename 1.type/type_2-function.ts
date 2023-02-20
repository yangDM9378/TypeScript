{
  // X JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  // X JavaScript
  function jsfetchNum(id) {
    // code
    // code
    // code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function tsfetchNum(id: string): Promise<number> {
    // code
    // code
    // code
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional parameter -> 전달하고 싶지 않은 파라미터에 ?작성시
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  // 파라미터를 둘다 적지 않을때 오류 발생 -> ? 없을때ㄴ
  printName('ellie');
  printName('anna', undefined);

  // Default parameter -> 파라메타를 기본인자로 설정
  function printMessage(message: string = 'defalut message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter -> 파라메타로 들어오는 모든 값을 더하는
  function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
