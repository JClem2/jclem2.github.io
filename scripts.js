// Function to toggle dark mode on portfolio
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Function to handle the "focus" effect for projects
function toggleProject(projectId) {
    const project = document.getElementById(projectId);

    const isExpanded = project.classList.contains("expanded");

    const allProjects = document.querySelectorAll(".project-box");

    allProjects.forEach(box => DOMException.classList.remove("expanded"));

    if(!isExpanded) {
        project.classList.add("expanded");
    }
}