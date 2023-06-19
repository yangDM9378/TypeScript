// Java: Excepiton
// JavaScript: Error

// 전혀 예상치 못한것을 Error
// const array = new Array(100000000000000000000);
// 해당 코드에서 컴파일 단계에서 에러 발생을 수정 가능하게 만들기 위해 수정
const position = { x: 0, y: 0 };

type Move = 'up' | 'down' | 'left' | 'right';
function move(command: Move) {
  switch (command) {
    case 'up':
      position.y = position.y + 1;
      break;
    case 'down':
      position.y = position.y - 1;
      break;
    case 'left':
      position.x = position.x - 1;
      break;
    case 'right':
      position.x = position.x + 1;
      break;
    default:
      // 이부분에서 type에 지정된 case가 없다면 never에 할당이 불가능하여 컴파일 에러 발생
      const invalid: never = command;
      throw new Error(`unknown command: ${invalid}`);
  }
}

// Error(Exception) Handling: try -> catch -> finally
// 파일의 이름이 존재하지 않으면 에러처리
function readFile(fileName: string): string {
  if (fileName == 'not exist!!') {
    throw new Error(`file not exist ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!!';
  try {
    // 정확히 에러가 발생할 부분에서 try
    console.log(readFile(fileName));
  } catch (error) {
    // 에러 발생 이후 처리할 내용 catch
    console.log('Error');
    return;
  } finally {
    // 작업 완료후 finally
    // 마무리 해야할 일이 있을때는 finally 안에서 작동하게 하는게 좋음
    // 함수 밖으로 꺼내서 하는 경우 catch부분에서 return 을 할 경우 아래 밖코드 작동안할 수 있음
    closeFile(fileName);
    console.log('finally!!');
  }
}
