console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();

console.clear();
class Counter {
  count = 0;
  increase = () => {
    console.log(this); //Counter를 가르킴
  };
}

const counter = new Counter();
counter.increase();
// const caller = counter.increase;

// object와 연결하기 위해 바인딩 하거나 arrow function을 이용한다.
const caller = counter.increase.bind(counter);
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
