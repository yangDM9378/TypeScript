{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scroes: Array<Number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> 사용 권장 x/보기불편함/interface, type alias, class 이용하여 대체 가능
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
}
