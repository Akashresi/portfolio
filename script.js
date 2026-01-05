/* 
 * AR Portfolio - Modern Interaction Script
 * Features: Dark/Light Mode, GitHub API, Scroll Animations
 */

// --- 1. Dark/Light Mode Toggle ---
const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙';
toggleBtn.className = 'theme-toggle btn';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.padding = '1rem';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.fontSize = '1.5rem';

document.body.appendChild(toggleBtn);

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update Icon
    toggleBtn.innerText = newTheme === 'light' ? '☀️' : '🌙';
};

toggleBtn.addEventListener('click', toggleTheme);

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
toggleBtn.innerText = savedTheme === 'light' ? '☀️' : '🌙';


// --- 2. GitHub API Integration ---
async function fetchGitHubProjects(username) {
    const projectsContainer = document.querySelector('.services-container');
    // Note: detailed implementation would require a dedicated container in HTML.
    // For now, we log to console or append if a specific container exists.

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`);
        if (!response.ok) throw new Error('GitHub API Error');
        const repos = await response.json();

        // Create a new section for Projects if it doesn't exist
        let projectSection = document.getElementById('latest-projects');
        if (!projectSection) {
            projectSection = document.createElement('section');
            projectSection.id = 'latest-projects';
            projectSection.className = 'projects';
            projectSection.innerHTML = `<h2 class="heading">Latest <span>Code</span></h2><div class="projects-grid services-container"></div>`;

            // Insert after Projects Section
            const services = document.getElementById('projects');
            if (services) {
                services.parentNode.insertBefore(projectSection, services.nextSibling);
            } else {
                // Fallback if ID was changed
                document.querySelector('body').appendChild(projectSection);
            }
        }

        const grid = projectSection.querySelector('.projects-grid');
        grid.innerHTML = repos.map(repo => `
            <div class="service-box glass-card" style="text-align: left;">
                <i class="fa-brands fa-github" style="font-size: 3rem;"></i>
                <h3 style="font-size: 2rem;">${repo.name}</h3>
                <p>${repo.description || 'No description provided.'}</p>
                <div style="margin-top: 1rem; color: var(--accent-color);">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span style="margin-left: 10px;">🍴 ${repo.forks_count}</span>
                </div>
                <a href="${repo.html_url}" target="_blank" class="btn" style="margin-top: 1.5rem; padding: 0.5rem 1.5rem;">View Code</a>
            </div>
        `).join('');

    } catch (error) {
        console.error('Failed to load GitHub projects', error);
    }
}

// Call with your username
fetchGitHubProjects('Akashresi');


// --- 3. Scroll Animations (Intersection Observer) ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-card, .heading').forEach(el => {
    el.style.opacity = '0'; // Initial state
    observer.observe(el);
});
