{
  /*
  class User {
    firstName: string;
    lastName: string;
    fulName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fulName = `${firstName} ${lastName}`;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fulName);
  // 함수내부의 내용을 수정해두 fulName은 변하지 않음
  user.firstName = 'dongmin';
  console.log(user.fulName);
  */

  /*
  // getter를 사용하여 내용 변경시 내용이 즉각적으로 변화함
  // 어떤 계산을 해야할때 사용함
  class User {
    firstName: string;
    lastName: string;
    get fulName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fulName);
  user.firstName = 'dong';
  console.log(user.fulName)
  */

  /*
  // // 생성자의 함수는 외부서 변경 불가하게 private 설정 가능
  // class User {
  //   // private firstName: string;
  //   // private lastName: string;
  //   get fulName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  //   constructor(private firstName: string, private lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  // }
  // const user = new User('Steve', 'Jobs');
  // console.log(user.fulName);
  */

  class User {
    get fulName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      // 여러가지 유효성 검사가 가능
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fulName);
}
