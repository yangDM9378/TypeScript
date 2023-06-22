{
  const obj = {
    name: 'dongmin',
  };
  obj.name; //dongmin
  obj['name']; //dongmin

  // 타입도 인덱스 기반으로 접근 가능하다
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; //string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male'|'female'

  type Keys = keyof Animal; // 'name'|'age|'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'dongmin',
    gender: 'male',
  };
}
