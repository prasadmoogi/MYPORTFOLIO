// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('header nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('header nav ul').classList.toggle('show');
});

// Scroll-triggered animations (using AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Dynamic year for copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Skills progress bars
const skills = [
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Deep Learning', level: 75 },
    { name: 'NLP', level: 70 }
];

const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');
    skillDiv.innerHTML = `
        <span>${skill.name}</span>
        <div class="progress-bar">
            <div class="progress" style="width: ${skill.level}%"></div>
        </div>
    `;
    skillsContainer.appendChild(skillDiv);
});

// Project showcase modal
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('project-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').textContent;
        const description = project.querySelector('p').textContent;
        modalContent.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
        `;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
