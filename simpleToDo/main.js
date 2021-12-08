import {btn, INPUTS, sections} from './view.js'


btn.forEach((item, index) => item.addEventListener('click', () => addTask(sections[index], INPUTS[index])))

function addTask(targetSection, inputField) {
  
    const newBlock = document.createElement('div');
    const label = document.createElement('label');
    const output = document.createElement('span');
    const btnDelete = document.createElement('button');
    
    newBlock.className = 'wrap-check-box section';
    output.className = 'content';
    btnDelete.className = 'button-del';
  
    output.textContent = inputField.value;
    inputField.value = '';
    targetSection.after(newBlock);

    newBlock.append(label);
  
    label.insertAdjacentHTML("afterbegin", '<input type="checkbox" class="check-box" name="checkbox">');
    label.insertAdjacentHTML("beforeend", '<span class="check-box-style"></span>');
    label.append(output);
    
    newBlock.append(btnDelete);

   let checkbox = label.querySelector('.check-box');
   console.log(checkbox);
   checkbox.addEventListener('click', () => {
      newBlock.classList.toggle('checked');
   })

   btnDelete.addEventListener('click', ()=> {
      newBlock.remove();
   })
  
}

function changeStatus() {

}















// let counterId = 3;

// const list = [{
//     id: 1,
//     name: "create a post",
//     status: "TODO",
//     priority: "low",
//   },
//   {
//     id: 2,
//     name: "test",
//     status: "Done",
//     priority: "high",
//   },
// ];


// function changeStatus(task, status) {

//   return list.find(item => item.name === task ? item.status = status : false);

// }



// function changePriority(task, priority) {

//   return list.find(item => item.name === task ? item.priority = priority : false);
// }



// function addTask(task, status = "TODO", priority = "high") {
//   list.push({
//     id: counterId++,
//     name: task,
//     status,
//     priority,
//   });
// }



// function deleteTask(id) {

//   return list.find((item, index) => item.id === id ? list.splice(index, 1) : false);
// }



// function showBy(group) {

//   function sortedStatus(status) {
//     return list.filter(item => item.status === status).map(item => item.name).join(', ');
//   }

//   function sortedPriority(priority) {
//     return list.filter(item => item.priority === priority).map(item => item.name).join(', ');
//   }


//   if (group === 'status') {

//     console.log(`TODO: ${sortedStatus("TODO")}`);
//     console.log(`In progress: ${sortedStatus("In progress")}`);
//     console.log(`Done: ${sortedStatus("Done")}\n`);

//   } else if (group === 'priority') {

//     console.log(`high: ${sortedPriority('high')}`);
//     console.log(`low: ${sortedPriority('low')}\n`);

//   }
// }



// addTask("go to the gym");
// addTask("have lunch");
// addTask("take a walk");
// addTask("read a book");
// addTask("clean the room")

// changeStatus("create a post", "In progress");
// changeStatus("take a walk", "Done");

// changePriority("create a post", "low");

// deleteTask(3);
// deleteTask(4);

// showBy('status');
// showBy('priority');

// console.log(list)
