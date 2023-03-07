interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay;
  return employee;
}
const dong = new FullTimeEmployee();
const min = new PartTimeEmployee();
dong.workFullTime();
min.workPartTime();

// 세부 정보를 잃어버림
// as를 통해 해결 가능 하지만 권장 x
const dongAfterPay = pay(dong) as FullTimeEmployee;
const minAfterPay = pay(min);
