// hanburger menu 

const toggleButton = document.getElementsByClassName ('toggle-button')[0]
const navMainLinks = document.getElementsByClassName ('nav-main__links')[0]

toggleButton.addEventListener('click', () => {
    navMainLinks.classList.toggle('active')
})


// collapsible approach section

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}