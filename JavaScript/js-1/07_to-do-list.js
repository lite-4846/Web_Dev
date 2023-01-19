let toDoList = [];
let command = prompt('What would you like to Do?');

while (!(command.toLowerCase() === 'quit')) {

    if (command.toLowerCase() === 'new') {
        let todo = prompt('Add ToDo!');
        toDoList.push(todo);
        console.log(`${todo} added to the list`);
        command = prompt('What would you like to Do?');
    }
    else if (command.toLowerCase() === 'list') {
        console.log('************');
        let i = 1;
        for (let showTodo of toDoList) {
            console.log(`${i} : ${showTodo}`);
            i++;
        }
        //  little easier way....
        //  for(let i = 0; i<toDoList.length; i++){
        //      console.log(`${i+1} : ${toDoList[i]}`);
        //  }   
        console.log('************');
        command = prompt('What would you like to Do?');
    }
    else if (command.toLowerCase() === 'delete') {
        let delToDo = parseInt(prompt('Which one to delete, write the no. of ToDo!!'));
        while ((!delToDo && delToDo > toDoList.length) && delToDo < 1) {
            delToDo = parseInt(prompt('Invalid no, try writing the indices of Todo!'));
        }
        toDoList.splice(delToDo - 1, 1);
        console.log(`Deleted No. ${delToDo} from the list.`)
        command = prompt('What would you like to Do?');
    }
    else {
        command = prompt('Invalid Command, Try Again...');
    }
}


console.log('Hai, Closing the ToDo List');