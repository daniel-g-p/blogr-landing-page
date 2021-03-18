const mobileCategories = document.querySelectorAll(".category");
const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");
const mobileNav = document.querySelector("#mobileNav");
const desktopCategories = document.querySelectorAll(".desktopCategory");

mobileCategories.forEach(category => {
    category.addEventListener("click", () => {
        const currentLinks = document.querySelector(".category.active+.links");
        if (currentLinks) {
            currentLinks.style.maxHeight = 0;
        };
        if (category.classList.contains("active")) {
            mobileCategories.forEach(c => c.classList.remove("active"));
        } else {
            mobileCategories.forEach(c => c.classList.remove("active"));
            category.classList.add("active");
            const activeLinks = document.querySelector(".category.active+.links");
            activeLinks.style.maxHeight = activeLinks.scrollHeight + "px";
        };
    });
});

openNav.addEventListener("click", () => {
    mobileNav.style.display = "block";
    mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    mobileNav.style.opacity = "1";
    setTimeout(() => mobileNav.style.maxHeight = "none", 500);
    openNav.classList.toggle("active");
    setTimeout(() => {
        closeNav.style.display = "block";
        openNav.style.display = "none";
        setTimeout(() => closeNav.classList.toggle("active"), 50);
    }, 500);
});

closeNav.addEventListener("click", () => {
    mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    setTimeout(() => mobileNav.style.maxHeight = 0, 0);
    mobileNav.style.opacity = 0;
    setTimeout(() => mobileNav.style.display = "none", 500);
    closeNav.classList.toggle("active");
    setTimeout(() => {
        closeNav.style.display = "none";
        openNav.style.display = "block";
        setTimeout(() => openNav.classList.toggle("active"), 50);
    }, 750);
    const currentCategory = document.querySelector(".category.active");
    if (currentCategory) {
        document.querySelector(".category.active+.links").style.maxHeight = 0;
        currentCategory.classList.toggle("active");
    };
});

desktopCategories.forEach(category => {
    category.addEventListener("click", () => {
        const currentLinks = document.querySelector(".desktopCategory.active .desktopLinks");
        if (currentLinks) {
            currentLinks.style.opacity = 0;
            currentLinks.style.maxHeight = 0;
            currentLinks.style.maxWidth = 0;
            setTimeout(() => currentLinks.style.display = "none", 500);
        };
        if (category.classList.contains("active")) {
            desktopCategories.forEach(c => c.classList.remove("active"));
        } else {
            desktopCategories.forEach(c => c.classList.remove("active"));
            category.classList.add("active");
            const activeLinks = document.querySelector(".desktopCategory.active .desktopLinks");
            activeLinks.style.opacity = 1;
            activeLinks.style.maxHeight = activeLinks.scrollHeight + "px";
            activeLinks.style.maxWidth = activeLinks.scrollWidth + 48 + "px";
        };
    })
})