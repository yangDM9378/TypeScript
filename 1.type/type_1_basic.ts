{
  // JavaScript
  // Primitive: number, string, boolean, bigint, symbol, null, undefind
  // Object : function, array ......

  // number
  // const num: number = 'd'; // 불가
  const num: number = -4;

  // boolean
  const boal: boolean = false;

  // undefined-> 사용하지않음
  let name1: undefined;
  let age1: number | undefined;
  age1 = undefined;
  age1 = 1;

  // X null
  // let person: null; -> 사용하지않음
  let person: string | null;

  // X unknown -> 알수 없음/아무 거나 쓸수 있음 / 사용 자제
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // X any -> 어떤 것이든 다 담을수 잇음 / 사용 자제
  let anything: any = 0;
  anything = 'hello';

  // void -> 함수에서 어떤 것도 return 하지 않으면 void
  function print(): void {
    console.log('hello');
    return;
  }

  // never -> return 불가 끊임없이 반복
  function throwError(message: string): never {
    // message -> server(log)
    // throw new Error(message);
    // while(true){
    // }
    // return 불가
  }

  // objet -> 원시 타입 제외 모든 오브젝트/사용하지 않는 것이 권장
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
