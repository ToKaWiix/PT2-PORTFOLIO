function openproject(evt, pic) {
    let i, projectcontent, projectlinks;
  
    projectcontent = document.getElementsByClassName("projectcontent");
    for (i = 0; i < projectcontent.length; i++) {
      projectcontent[i].style.display = "none";
    }
  
    projectlinks = document.getElementsByClassName("projectlinks");
    for (i = 0; i < projectlinks.length; i++) {
      projectlinks[i].className = projectlinks[i].className.replace(" active", "");
    }
  
    document.getElementById(pic).style.display = "block";
    evt.currentTarget.className += " active";
  }