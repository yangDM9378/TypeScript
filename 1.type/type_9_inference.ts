{
  // type inference -> 타입 추론 함수에서 실행되는 부분은 타입 작성 습관 기르기
  let text = 'hello';
  function print(message: string) {
    console.log(message);
  }

  // retun 부분은 타입 추론이 됨
  function add(x: number, y: number) {
    return x + y;
  }
  // result는 타입 추론 적용 됨
  const result = add(1, 2);
}
