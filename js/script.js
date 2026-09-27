let cards = document.querySelectorAll('.card'); /*creating a node list*/ 
let lists = document.querySelectorAll('.list');

for(const card of cards) {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
}

for(const list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave);
  list.addEventListener('drop', drop);
}

function dragStart(e) {
  //this allows the drop location to know which element is being moved when you release it
  e.dataTransfer.setData("text/plain",this.id);
}

function dragEnd() {
  console.log("Drag ended");
}

function dragOver(e) {
  //by default browsers dont let you drop elements into other elements, so we prevent the default
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();

  this.classList.add('over');
}

function dragLeave(e) {
  this.classList.remove('over');
}

function drop(e) {
  const id = e.dataTransfer.getData('text/plain');

  const card = document.getElementById(id);

  this.appendChild(card);

  this.classList.remove('over');
}