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

const changerYear = document.querySelector("span#year");
const date = new Date();
const actualYear = date.getFullYear();
changerYear.innerHTML = actualYear;
