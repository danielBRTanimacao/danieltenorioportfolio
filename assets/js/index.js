const watching = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showing");
        } else {
            entry.target.classList.remove("showing");
        }
    });
});

const hiddenClass = document.querySelectorAll(".hidden");
hiddenClass.forEach((e) => watching.observe(e));
