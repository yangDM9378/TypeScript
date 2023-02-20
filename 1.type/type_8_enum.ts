{
  // Enum -> 상수 값을 한 곳에 모아서 관리

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript -> 사용하지 않는 것을 권장/enum으로 지정된 곳에 새로운 것을 할당 가능하다는 문제가있음
  // 안드로이나 ios에 사용되는 Kotlin은  union을 사용 불가 하므로 enum 사용
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }
  console.log(Days.Monday);
  const day = Days.Wednesday;
  console.log(day);

  // union을 사용하여 변환가능
  type DayOfWeek = 'Monday' | 'Thesday' | 'Wednesday';
  let dayOfWeek: DayOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';
}
