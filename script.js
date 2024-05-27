document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load the default page
    loadPage('home');

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = '<p>Error loading page. Please try again later.</p>';
                console.error('Error loading page:', error);
            });
    }
});
