var skillsElement = document.getElementById("skills");
var experienceElement = document.getElementById("experience");
var projectsElement = document.getElementById("projects");
var teachingElement = document.getElementById("teaching");

document.getElementById("skills-btn").addEventListener("click", () => {
    window.scrollTo(skillsElement.getBoundingClientRect().x, skillsElement.getBoundingClientRect().y)
})

document.getElementById("experience-btn").addEventListener("click", () => {
    window.scrollTo(experienceElement.getBoundingClientRect().x, experienceElement.getBoundingClientRect().y)
})

document.getElementById("projects-btn").addEventListener("click", () => {
    window.scrollTo(projectsElement.getBoundingClientRect().x, projectsElement.getBoundingClientRect().y)
})

document.getElementById("teaching-btn").addEventListener("click", () => {
    window.scrollTo(teachingElement.getBoundingClientRect().x, teachingElement.getBoundingClientRect().y)
})