// 1. Define your global variables
window.projectData = {
    name: "Madalena Barros",
    // make email clickable
    email: "mariamadalenarob@gmail.com"
};



// 2. Update the HTML elements immediately
// This script is at the end of the body, so the elements already exist.

// Update Name
const nameElements = document.querySelectorAll(".my-name");
nameElements.forEach(element => {
    element.textContent = window.projectData.name;
});

// Update Email
const emailElements = document.querySelectorAll(".my-email");
emailElements.forEach(element => {
    element.href = `mailto:${window.projectData.email}`;
    element.textContent = window.projectData.email;
});

// Update Phone
const phoneElements = document.querySelectorAll(".my-phone");
phoneElements.forEach(element => element.textContent = window.projectData.phone);


// Spotlight Effect Logic
const spotlightBody = document.body;

document.addEventListener('mousemove', (e) => {
    spotlightBody.style.setProperty('--mouse-x', `${e.clientX}px`);
    spotlightBody.style.setProperty('--mouse-y', `${e.clientY}px`);
    
    if (!spotlightBody.classList.contains('spotlight-active')) {
        spotlightBody.classList.add('spotlight-active');
    }
});

document.addEventListener('mouseout', (e) => {
    // Check if the mouse left the window (relatedTarget is null)
    if (!e.relatedTarget && !e.toElement) {
        spotlightBody.classList.remove('spotlight-active');
    }
});