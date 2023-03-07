{
  // 현재 함수는 number 타입만 확인 가능하다
  // 모든 타입을 사용하기 위해서는 타입별로 함수를 만들거나
  // any를 사용하면된다
  // 하지만, any의 경우 타입을 확인 할수 없어서 쓰지 않는 것을 권장
  // function checkNotNull(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error('not valid number!');
  //   }
  //   return arg;
  // }
  // const result = checkNotNull(123);
  // console.log(result);
  // checkNotNull(null);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
