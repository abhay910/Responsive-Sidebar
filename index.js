function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");

    if (window.innerWidth > 768) {
        // For larger screens (desktop)
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        } else {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        }
    } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
        // For tablets
        if (sidebar.style.left === "-200px") {
            sidebar.style.left = "0";
            content.style.marginLeft = "200px";
        } else {
            sidebar.style.left = "-200px";
            content.style.marginLeft = "0";
        }
    } else {
        // For mobile screens
        if (sidebar.style.left === "-100%") {
            sidebar.style.left = "0";
            content.style.marginLeft = "0";
        } else {
            sidebar.style.left = "-100%";
            content.style.marginLeft = "0";
        }
    }
}

// Handle screen resize to ensure sidebar behaves correctly
window.addEventListener('resize', () => {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth > 768) {
        sidebar.style.left = "-250px";
    } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
        sidebar.style.left = "-200px";
    } else {
        sidebar.style.left = "-100%";
    }
});
