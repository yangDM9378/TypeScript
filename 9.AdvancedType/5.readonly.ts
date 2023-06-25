{
  type Todo = {
    title: string;
    description: string;
  };

  // // 불변성 보장이 필요함
  // function display(todo: Todo) {
  //   todo.title = 'jaja'
  // }

  // 불변성 보장으로 위해 Readonly 사용
  function display(todo: Readonly<Todo>) {}
}
