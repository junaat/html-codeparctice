
function clonediv(){
    var orignal = document.getElementById("orignal");
    var clone = orignal.cloneNode(true);
    var container = document.getElementById("container");
    // var count = container.childElementCount;
    // clone.innerHTML = '<h2>'+ (count + 2) +'<h2/>';
  
    container.appendChild(clone);
  }
  function deleteDiv(){
  
    var container = document.getElementById("container");
    container.lastElementChild.remove();