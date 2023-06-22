type Video = {
  title: string;
  author: string;
};
// 하나가 추가되면 다양한 type에 내용을 다적어줘야함
// type VideoOptional = {
//   title?: string;
//   author?: string;
//   descrition?:string;
// }
// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
// }

// 아래와 같이 정의하면 for ..in 같이 타입을 가져와 사용가능
type Optional<T> = {
  [P in keyof T]?: T[P]; // for... in
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hi',
  // 기존의 타입말고 다른 타입 넣을땐 에러발생
};

type Animal = {
  name: string;
  age: number;
};
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const animal: Optional<Animal> = {
  name: 'dog',
};
animal.name = 'dong';

const video: ReadOnly<Video> = {
  title: '11',
  author: 'dongmin',
};

// null지정 가능
type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj3: Nullable<Video> = {
  title: 'hi',
  author: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
