function openproject(evt, pic) {
  // Declare all variables
  let i, projectcontent, projectlinks;

  // Get all elements with class="tabcontent" and hide them
  projectcontent = document.getElementsByClassName("projectcontent");
  for (i = 0; i < projectcontent.length; i++) {
    projectcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  projectlinks = document.getElementsByClassName("projectlinks");
  for (i = 0; i < projectlinks.length; i++) {
    projectlinks[i].className = projectlinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(pic).style.display = "block";
  evt.currentTarget.className += " active";
}