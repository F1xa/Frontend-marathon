
let counterId = 3;

const list = [{
    id: 1,
    name: "create a post",
    status: "TODO",
    priority: "low",
  },
  {
    id: 2,
    name: "test",
    status: "Done",
    priority: "high",
  },
];


function changeStatus(task, status) {
  list.forEach((item) => {
    if (item.name === task) {
      item.status = status;
    }
  });
}

function changePriority(task, priority) {
  list.forEach((item) => {
    if (item.name === task) {
      item.priority = priority;
    }
  });
}

function addTask(task, status = "TODO", priority = "high") {
  list.push({
    id: counterId++,
    name: task,
    status,
    priority,
  });
}

function deleteTask(id) {
  list.forEach((item, index) => {
    if (item.id === id) {
      list.splice(index, 1);
    }
  });
}

function showBy(group) {
  if (group === 'status') {

    let sortedTODO = list.filter(item => item.status === "TODO").map(item => item.name).join(', ');
    let sortedInPogress = list.filter(item => item.status === "In progress").map(item => item.name).join(', ');
    let sortedDone = list.filter(item => item.status === "Done").map(item => item.name).join(', ');
  
    console.log(`TODO: ${sortedTODO}`);
    console.log(`In progress: ${sortedInPogress}`);
    console.log(`Done: ${sortedDone}\n`);
    
  } else if (group === 'priority') {

    let priorityHigh = list.filter(item => item.priority === 'high').map(item => item.name).join(', ');
    let priorityLow = list.filter(item => item.priority === 'low').map(item => item.name).join(', ');

    console.log(`high: ${priorityHigh}`);
    console.log(`low: ${priorityLow}\n`);

  }
}



addTask("go to the gym");
addTask("have lunch");
addTask("take a walk");
addTask("read a book");
addTask("clean the room")

changeStatus("create a post", "In progress");
changeStatus("take a walk", "Done");

changePriority("create a post", "low");

deleteTask(3);
deleteTask(4);

showBy('status');
showBy('priority');




