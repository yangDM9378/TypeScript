type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object에서 interface와 type 둘다 구현 가능
const obj1: PositionType = {
  x: 1,
  y: 1,
};

// interface 합성시 합성된 데이터 전부 필요
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class에서 interface와 type 둘다 구현 가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// interface는 상속을 통해 확장가능
interface ZPositionInterface extends PositionInterface {
  z: number;
}
// 타입은 intersection을 통해 확장가능
type ZPositionType = PositionType & { z: number };

// interface만 합성 가능
interface PositionInterface {
  z: number;
}

// type PositionType {
// }

// Type만 computed properties 사용가능
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';
