// Load Navbar
fetch('/pages/navbar.html')
    .then(res => res.text())
    .then(data => {
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.innerHTML = data;
    });

// Load Footer
fetch('/pages/footer.html')
    .then(res => res.text())
    .then(data => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.innerHTML = data;

            // ✅ Dynamic year
            const yearSpan = document.getElementById('year');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        }
    });
