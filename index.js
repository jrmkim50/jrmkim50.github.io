var skillsElement = document.getElementById("skills");
var experienceElement = document.getElementById("experience");
var projectsElement = document.getElementById("projects");
var teachingElement = document.getElementById("teaching");

var x;
var y;
var time;
var stepSize;
var start = null;

function scrollToAnimation(xCoord, yCoord, animationTime = 100) {
    
}

document.getElementById("skills-btn").addEventListener("click", () => {
    // scrollToAnimation(skillsElement.getBoundingClientRect().x, skillsElement.getBoundingClientRect().y)
    document.querySelector('#skills').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById("experience-btn").addEventListener("click", () => {
    // scrollToAnimation(experienceElement.getBoundingClientRect().x, experienceElement.getBoundingClientRect().y)
    document.querySelector('#experience').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById("projects-btn").addEventListener("click", () => {
    // scrollToAnimation(projectsElement.getBoundingClientRect().x, projectsElement.getBoundingClientRect().y)
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById("teaching-btn").addEventListener("click", () => {
    // scrollToAnimation(teachingElement.getBoundingClientRect().x, teachingElement.getBoundingClientRect().y)
    document.querySelector('#teaching').scrollIntoView({
        behavior: 'smooth'
    });
})