
document.addEventListener("DOMContentLoaded", function () {

    // Current page identify karna
    let currentPage = window.location.pathname
        .split("/")
        .pop();

    // Sidebar active link
    document.querySelectorAll(".sidebar nav a")
        .forEach(function (link) {

            let linkPage = link.getAttribute("href");

            if (linkPage === currentPage) {
                link.classList.add("active");
            }

        });

});
