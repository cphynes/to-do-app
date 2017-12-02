function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const removeToDoText = document.getElementById('removeToDoText');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });

  deleteToDoForm.removeEventListener('delete', () => {
    event.preventDefault();

    // get the text
    let title = removeToDoText.value;

    // create a new li
    let button = document.createElement('input');

    // set the input's type to button
    button.type = "delete";

    // set the title
    removeLi.textContent = title;

    // remove the checkbox to the li
    removeLi.removeChild(button);

    // remove li from the ul
    toDoList.removeChild(removeLi);

    // empty the input
    removeToDoText.value = '';
  });

window.onload = function() {
  onReady();
};
