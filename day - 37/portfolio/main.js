const skillsDiv = document.getElementById("skills-div");
const projectDiv = document.getElementById("projects-div");

const skillsBtn = document.getElementById("skills-btn");
const projectsBtn = document.getElementById("projects-btn")

// function to toggle theme

function toggleTheme() {
    const htmlEl = document.documentElement;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    htmlEl.classList.toggle("dark");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
}


function displayProjects() {
    //
    skillsDiv.classList.add("hidden-content");
    projectDiv.classList.remove("hidden-content");


    skillsBtn.style.backgroundColor = "var(--theme-btn-bg)";
    projectsBtn.style.backgroundColor = "var(--bg-color)";

}

function displaySkills() {
    // 
    skillsDiv.classList.remove("hidden-content");
    projectDiv.classList.add("hidden-content");


    skillsBtn.style.backgroundColor = "var(--bg-color)";
    projectsBtn.style.backgroundColor = "var(--theme-btn-bg)";
}