var skillsElement = document.getElementById("skills");
var experienceElement = document.getElementById("experience");
var projectsElement = document.getElementById("projects");
var teachingElement = document.getElementById("teaching");

const scrollTime = 500;

document.getElementById("skills-btn").addEventListener("click", () => {
    $("body,html").animate({
        scrollTop: $("#skills").offset().top
    }, scrollTime)
})

document.getElementById("experience-btn").addEventListener("click", () => {
    $("body,html").animate({
        scrollTop: $("#experience").offset().top
    }, scrollTime)
})

document.getElementById("projects-btn").addEventListener("click", () => {
    $("body,html").animate({
        scrollTop: $("#projects").offset().top
    }, scrollTime)
})

document.getElementById("teaching-btn").addEventListener("click", () => {
    $("body,html").animate({
        scrollTop: $("#teaching").offset().top
    }, scrollTime)
})