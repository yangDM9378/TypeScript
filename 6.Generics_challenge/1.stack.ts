interface Stack<T> {
  readonly size: number; // 사이즈는 내부에서 읽기 전용으로 선언
  push(value: T): void;
  pop(): T;
}

// 노드 설정
type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  // 외부에서 사이즈 정보를 읽을 수 있게하고 내부에서는 수정가능하게 하기 위해 get 사용
  // 내부와 외부에서 사용할 변수 이름이 같을때 _사용하여 입력하여 내부사용 변수 생성
  private _size: number = 0;
  // head는 스택노드를 가르킬수도 있고 아닐 수 도 있다.
  private head?: StackNode<T>;

  get size() {
    return this._size;
  }
  push(value: T) {
    // 스택노드의 head를 새로 들어온 노드로 변경
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    // 스택이 비어있는지 확인
    if (this.head == null) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>();
stack.push('ehd 1');
stack.push('als 2');
stack.push('hi 3');
while (stack.size != 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>();
stack2.push(123);
stack2.push(234);
stack2.push(345);
while (stack2.size != 0) {
  console.log(stack2.pop());
}
