{
  // partial은 기존 타입에서 부분적인 것만 수정하고 싶을때 활용
  type ToDo = {
    title: string;
    description: string;
    label: string;
    prioirty: 'high' | 'low';
  };

  // Todo 타입 중에 부분적인 값만 받을 수 있고 다른 값을 받을 수 없음
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: 'Typescript',
    description: 'study',
    label: 'study',
    prioirty: 'high',
  };

  const updated = updateTodo(todo, { prioirty: 'low' });
  console.log(updated);
}
