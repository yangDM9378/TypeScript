{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public
  // private
  // protected
  // 적지않으면 기본적으로 public으로 주어짐
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level/private 외부에서 데이터를 변경 불가하게하기
    protected coffeeBeans: number = 0; // instance level/상속 받은 다른 클래스에서는 사용 가능

    // class를 만들때 항상 호출되는 함수
    // 생성자를 private로 만들어 static method를 사용가능하게 권장
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMuchine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 유효한지 않한지 검사 beans를 마이너스값으로 설정 불가
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for bens should be grater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMuchine(3);
  maker.fillCoffeeBeans(3);
}
