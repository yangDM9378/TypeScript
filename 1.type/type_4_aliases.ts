{
  // type aliases -> 사용자가 새로운타입을 정의할 수 있음

  type Text = string;
  const name: string = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  // String Literal Types -> 타입을 문자열로 지정가능
  // 값자체를 타입으로 지정시 다른값 지정 불가
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
  type Boal = true;
  // const isCat: Boal = false; ->  값자체를 타입으로 지정시 다른값 지정 불가
}
