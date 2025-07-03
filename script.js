function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleAbout(section) {
    document.querySelectorAll(".about-side").forEach(side => side.classList.remove("active"));
    document.querySelectorAll(".about-toggle").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`${section}-content`).classList.add("active");
    document.querySelector(`.about-toggle[onclick*='${section}']`).classList.add("active");
}

function showExperienceTab(tab) {
    const tabs = ['teaching', 'technical', 'management'];
    tabs.forEach(id => {
      document.getElementById('experience-' + id).classList.remove('active');
    });
    document.getElementById('experience-' + tab).classList.add('active');

    const buttons = document.querySelectorAll('.experience-toggle');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.experience-toggle[onclick*="${tab}"]`).classList.add('active');
}

const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    // Add dark mode stylesheet
    if (!document.getElementById('dark-mode-style')) {
      const darkModeLink = document.createElement('link');
      darkModeLink.rel = 'stylesheet';
      darkModeLink.href = 'darkMode.css'; // Your dark mode CSS file path
      darkModeLink.id = 'dark-mode-style';
      document.head.appendChild(darkModeLink);
    }
  } else {
    // Remove dark mode stylesheet
    const darkModeLink = document.getElementById('dark-mode-style');
    if (darkModeLink) darkModeLink.remove();
  }
});