// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("Chest2");
var modal2 = document.getElementById("Chest3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn2");
var btn2 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  console("Reach")
}
btn1.onclick = function() {
    modal1.style.display = "block";
  }

btn2.onclick = function() {
    modal2.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
    modal1.style.display = "none";
  }

span2.onclick = function() {
    modal2.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }   

window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  

