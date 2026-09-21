// Contact modal, navigation, scroll and featured-project rendering.

// Modal Module
const contactModal = {
	open() {
		$('#contact-modal').show();
	},

	close() {
		$('#contact-modal').hide();
	},

	init() {
		window.openContactModal = this.open;
		window.closeContactModal = this.close;

		$(window).on('click', (event) => {
			const modal = $('#contact-modal');
			if (event.target === modal[0]) {
				modal.hide();
			}
		});
	}
};

// Navigation Menu Module
const navigation = {
	toggle() {
		const navMenu = document.querySelector('.nav-menu');
		const hamburger = document.querySelector('.hamburger-menu');
		navMenu.classList.toggle('active');
	},

	init() {
		window.toggleMenu = this.toggle;

		document.addEventListener('click', (event) => {
			const navMenu = document.querySelector('.nav-menu');
			const hamburger = document.querySelector('.hamburger-menu');

			if (!navMenu.contains(event.target) &&
				!hamburger.contains(event.target) &&
				navMenu.classList.contains('active')) {
				navMenu.classList.remove('active');
				hamburger.classList.remove('open');
			}
		});
	}
};

// Scroll Module (Hero section)
const scrollHandler = {
	scrollToNext() {
		const nextSection = document.querySelector('#experience');
		nextSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	},

	init() {
		window.scrollToNextSection = this.scrollToNext;

		// Hide scroll indicator when scrolled
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				document.body.classList.add('scrolled');
			} else {
				document.body.classList.remove('scrolled');
			}
		});
	}
};

// Featured Projects Module
const featuredProjects = {
	createProjectCard(project) {
		return `
            <div class="project-card">
                <div class="card-preview">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription}</p>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" target="_blank">${link.text}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
	},

	init() {
		const featuredProjectsContainer = document.querySelector('.featured-projects .projects-grid');
		if (featuredProjectsContainer) {
			import('./projects/data.js')
				.then(({ projectsData }) => {
					const featuredProjects = projectsData.projects
						.filter(project => project.featured && project.title !== 'evalstats');
					featuredProjectsContainer.innerHTML = featuredProjects.map(this.createProjectCard).join('');
				})
				.catch(error => console.error('Error loading projects:', error));
		}
	}
};

$(document).ready(() => {
	contactModal.init();
	navigation.init();
	scrollHandler.init();
	featuredProjects.init();
});
