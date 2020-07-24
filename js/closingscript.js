
function  closeModal(a)
{
  var modal = document.getElementById(a);
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function  openModal(a)
{
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event)
  {
      if (event.target == document.getElementById(a))
      {
          modal.style.display = "block";
      }
  }
}
