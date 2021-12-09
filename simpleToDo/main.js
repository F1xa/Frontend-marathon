import {BTN, INPUTS, SECTION} from './view.js';


function addTask() {

   BTN.forEach((item, index) => item.addEventListener('click', (event) => {
   event.preventDefault();

   createTask(SECTION[index], INPUTS[index])
   }
 ));
}


function deleteTask() {
   this.parentNode.remove()
};

function createTask(targetSection, inputField) {
  
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
  
   checkbox.addEventListener('click', () => {
      newBlock.classList.toggle('checked');
   })

    btnDelete.addEventListener('click', deleteTask);
}
   

addTask();
