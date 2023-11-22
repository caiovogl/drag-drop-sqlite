function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
}

function onDragOver(event) {
event.preventDefault();
}

function onDrop(event) {
    const dropzone = event.target;

    const id = event
        .dataTransfer
        .getData('text');
      
    const draggableElement = document.getElementById(id);

    if(dropzone.classList[0] == "example-dropzone" || dropzone.classList[0] == "example-origin" || dropzone.classList[0] == "chefe" && draggableElement.classList[0] != "chefe"){
      
      if(draggableElement.childElementCount > 0){
        draggableElement.style.backgroundColor = '#4AAE9B';
      }

      dropzone.appendChild(draggableElement);

      if(dropzone.classList[0] == "example-origin" || draggableElement.classList[0] == "chefe"){
        draggableElement.style.backgroundColor = '#4AAE9B';
      }else if(dropzone.classList[0] == "chefe"){
        dropzone.style.backgroundColor = '#4AAE9B';
      }

      event
      .dataTransfer
      .clearData();
  }
}