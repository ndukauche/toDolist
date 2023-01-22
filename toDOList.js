console.log("          MY TO-DO LIST                     ")

const todoList = ['LIST ONE ','LIST TWO', 'LIST THREE'];

const addItem = () => {
  let item = prompt("Enter to-do list/item: ... ");
  todoList.push(item);
  viewItem();
}

const editItem = () => {
   viewItem();
  let itemNum = prompt("Enter item serial number to EDIT: ... ");
  let actualItem = itemNum - 1;
  let item = prompt("Enter new item here:..");
  todoList[actualItem] = item;
  viewItem();
  console.log(`item Edited successfuly`);
}

const deleteItem = () => {
  viewItem();
  let itemNum = prompt("Enter item serial number to delete: ... ");
  let actualItem = itemNum - 1;
  if(actualItem == 0){
    todoList.shift();
    viewItem();
    console.log(`item deleted successfuly`);
  }
  else{
    todoList.splice(actualItem);
    viewItem();
    console.log(`item deleted successfuly`);
  }

}

const viewItem = () => {
    for (let i = 0; i < todoList.length; i++) {
    console.log(`   ${i + 1}. ${todoList[i]}`)
  }
  // console.log(todoList);
}

const command = prompt("Enter command to run: add, edit, delete: ... ");


switch(command) {
  case "add":
    addItem();
    break;
    
  case "edit":
    editItem();
    break;
    
 case "delete":
  deleteItem();
  break;
    
 case "view":
  viewItem();
  break;
    
  default:
    console.log("Invalid Input")
}