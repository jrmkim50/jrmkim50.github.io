var skillsElement = document.getElementById("skills");
var experienceElement = document.getElementById("experience");
var projectsElement = document.getElementById("projects");
var teachingElement = document.getElementById("teaching");

function scrollToAnimation(x, y) {
    window.scrollTo(x, y);
}

document.getElementById("skills-btn").addEventListener("click", () => {
    scrollToAnimation(skillsElement.getBoundingClientRect().x, skillsElement.getBoundingClientRect().y)
})

document.getElementById("experience-btn").addEventListener("click", () => {
    scrollToAnimation(experienceElement.getBoundingClientRect().x, experienceElement.getBoundingClientRect().y)
})

document.getElementById("projects-btn").addEventListener("click", () => {
    scrollToAnimation(projectsElement.getBoundingClientRect().x, projectsElement.getBoundingClientRect().y)
})

document.getElementById("teaching-btn").addEventListener("click", () => {
    scrollToAnimation(teachingElement.getBoundingClientRect().x, teachingElement.getBoundingClientRect().y)
})