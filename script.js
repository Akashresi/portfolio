/* 
 * AR Portfolio - Modern Interaction Script
 * Features: Dark/Light Mode, GitHub API, Scroll Animations
 */

// --- 1. Theme Config (Strict Dark Mode) ---
// The Antigravity theme is designed as a dark-only experience.
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');


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
            <div class="service-box glass-card project-card">
                <i class="fa-brands fa-github project-icon"></i>
                <h3 class="repo-title">${repo.name}</h3>
                <p class="repo-desc">${repo.description || 'No description provided.'}</p>
                <div class="repo-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                </div>
                <a href="${repo.html_url}" target="_blank" class="btn btn-small">View Code</a>
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
