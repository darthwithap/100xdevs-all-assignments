
// What are u looking for?
// You'll get it on Friday you lazy porson



function createDomElements(data) {
  var parentEle = document.getElementById('todos_div');
  var currentChildren = Array.from(parentEle.children);
  console.log(currentChildren);

  
  for (var i=0; i<data.length; i++) {
    var childEle = document.createElement("div");
    var titleChild = document.createElement("span");
    var descriptionChild = document.createElement("span");
    var deleteButton = document.createElement("button");

    titleChild.innerHTML = data[i].title;
    descriptionChild.innerHTML = data[i].description;
    
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onClick", `deleteTodo(${data[i].id})`);

    childEle.appendChild(titleChild);
    childEle.appendChild(descriptionChild);
    childEle.appendChild(deleteButton);

    parentEle.appendChild(childEle);
  }
}

// Steps to optimising this
// Store the existingTodos in array
// Get the new todos in another array
// Compare if a particular todo already exists in existingTodos
// Update the todo with new information just in case
// Then delete it from the new todos array
// After you are done scanning with the whole new and old array comparison
// Make new domElements for the remainder of the data todos in new array

function deleteTodo(id) {
  console.log(`delete todo called for ${id}`);
}


window.setInterval(() => {
  let todos = [];
  for (let i = 0; i<Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "Go to gym",
      description: "Go to gym at 6",
      id: i+1
    })
  }

  createDomElements(todos)
}, 20000)
