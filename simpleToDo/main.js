// Сегодня напишем самый простой TODO лист без графического интерфейса.

// Хранилищем будет объект, а имена задач - ключами. 

// const list = {
//  "create a task": "In Progress",
//  "make a bed": "Done",
//  "write a post": "To Do",
// }

// Функция changeStatus - будет менять статус задачи 

// changeStatus("write a post", "Done")

// Функция addTask - добавляет новую задачу

// addTask('have a walk')

// Функция deleteTask - удаляет задачу

// deleteTask('have a walk')

// Функция showList будет выводить весь список дел в виде 

// Todo: 
//  "create a task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -

const list = [ 
  { 
      id: 1,
      name: 'create a post', 
      status: 'TODO',
      priority: 'low',
  }, 
  { 
      id: 2,
      name: 'test', 
      status: 'Done', 
      priority: 'high', 
  } 
  ];

  list.forEach(item => console.log(item.id))

  function changeStatus(task, status) {
    list.forEach(item => {
      if (item.name === task) {
        item.status = status;
      }
    });
  };


  function changePriority(task, priority) {
    list.forEach(item => {
      if (item.name === task) {
        item.priority = priority;
      }
    });
  }
    

  function addTask(task, status = 'TODO', priority = 'high') {
    list.forEach(item => {
      item.id++
    })
    list.push({name: task, status, priority});
  }  
    
    
  function deleteTask(task) {
    list.forEach((item, index) => {
      if (item.name === task) {
        list.splice(index, 1);
      }
    })
  } 
    
    
    

  function showList() {

  }

  
  addTask('go to the gym');
  addTask('have lunch');
  addTask('take a walk');

  changeStatus('create a post', 'In progress');
  changeStatus('take a walk', 'Done');

  changePriority('create a post', 'medium');

  deleteTask('go to the gym');
  deleteTask('have lunch');
  
  
  console.log(list);
    
