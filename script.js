document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");

    window.toggleMenu = () => {
        menuLinks.classList.toggle("open");
        hamburgerIcon.classList.toggle("open");
    };

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile'); // For mobile hamburger menu
    const body = document.body;

    // Function to set theme
    const setTheme = (isDark) => {
        if (isDark) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.checked = true;
            if (darkModeToggleMobile) darkModeToggleMobile.checked = true;
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.checked = false;
            if (darkModeToggleMobile) darkModeToggleMobile.checked = false;
        }
    };

    // Initialize theme based on local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(true); // Default to dark if system preference is dark
    } else {
        setTheme(false); // Default to light
    }

    // Event listener for desktop toggle
    darkModeToggle.addEventListener('change', (event) => {
        setTheme(event.target.checked);
    });

    // Event listener for mobile toggle (if it exists)
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('change', (event) => {
            setTheme(event.target.checked);
        });
    }

    // Toggle for About Section
    window.toggleAbout = (activeTab) => {
        document.querySelectorAll('.about-side').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll('.about-toggle').forEach(button => {
            button.classList.remove('active');
        });

        document.getElementById(`${activeTab}-content`).classList.add('active');
        document.querySelector(`.about-toggle[onclick="toggleAbout('${activeTab}')"]`).classList.add('active');
    };

    // Toggle for Experience Section
    window.showExperienceTab = (activeTab) => {
        document.querySelectorAll('.experience-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.experience-toggle').forEach(button => {
            button.classList.remove('active');
        });

        document.getElementById(`experience-${activeTab}`).classList.add('active');
        document.querySelector(`.experience-toggle[onclick="showExperienceTab('${activeTab}')"]`).classList.add('active');
    };

    // Ensure correct tab is active on load (for about and experience)
    toggleAbout('developer'); // Default active tab for About
    showExperienceTab('teaching'); // Default active tab for Experience
});