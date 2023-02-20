{
  // type assertions -> 별로 좋은 거는 아님
  // 정의되지 않았지만 문자열이라는 것을 알긴함
  function jsStrFunc(): any {
    return 'hello';
  }
  // 문자열에서 사용가능한 문자열 함수를 사용 불가
  const result = jsStrFunc();
  // 하지만 assertions를 사용하면 가능
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 이렇게 쓰면 안됨

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 이렇게 쓰면 안됨 optional과 반대 ! undefined가 될 수 없음!!!
}
