/* On Scroll Effects */
const sections = [
    document.querySelector("header"),
    ...document.querySelectorAll("section")
];

let options = {
    threshold: 0.5
};

const title = {
    header: "TheHighCrew",
    "test1": "do it work",
    "test2": "ah yes it does",
    "test3": "or does it",
    "test4": "ig it does",
    "test5": "almost done",
    "test6": "fucking finally"
};

// Creates Scroll Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(
        entry => {
            // Goes through each entry and checks if they are intersecting
            if (entry.isIntersecting) {
                // If they are an Idle Callback is called to not process the changes on the Main Thread
                window.requestIdleCallback(() => {
                    observerFunction(entry.target.id);
                });
            }
        },
        {
            threshold: 0.5
        }
    );
}, options);

sections.forEach(section => {
    observer.observe(section);
});

/* On Click Effects */
scrollToGroup([
    ...document.querySelectorAll("nav .linkBox a"),
    document.querySelector("nav .homeBar a")
]);

function scrollToGroup(links) {
    links.forEach(link => {
        let anchor = document.getElementById(
            link.getAttribute("href").substring(1)
        );

        link.addEventListener("click", () => {
            anchor.scrollIntoView({ behavior: "smooth" });
        });
        link.removeAttribute("href");
    });
}

function observerFunction(id) {
    const curSelection = document.querySelector(".currentSection");
    // Selecting the Currently Selected Info Holder (poss. val: main, secondary, tertiary)
    const visElement = curSelection.getAttribute("visibleelement");
    // Gets Text of Currently Selected Info Holder
    const selectedElementText = curSelection.querySelector(`.${visElement}`)
        .innerText;
    const selectedElementScroll = title[id];
    // If the Currently Selected Text and the Title from the currently overscrolling object are the same (if they are, do nothing)
    if (selectedElementText != selectedElementScroll) {
        curSelection.onclick = () => {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        };
        // If the Overscrolling Object is the header, switch to the main Info Holder & Animate the Home Button to go Up
        if (selectedElementScroll == "TheHighCrew") {
            let animationVal = positionLink(
                document.querySelector(`nav a.currentSection`)
            );
            let animateHome = anime({
                targets: ".homeBar",
                translateX: animationVal[0],
                easing: "easeOutElastic(.1, 2)",
                complete: document
                    .querySelector(`nav a.currentSection`)
                    .setAttribute("over", "currentSection")
            });
            const goMain = anime({
                targets: curSelection,
                translateY: 30,
                complete: curSelection.setAttribute("visibleelement", "main"),
                easing: "easeOutElastic(.1, 2)"
            });
        } else {
            // Animate the Home Button to go Up
            let animationVal = positionLink(document.querySelector(`nav a.${id}`));
            let animateBar = anime({
                targets: ".homeBar",
                translateX: animationVal[0],
                easing: "easeOutElastic(.1, 2)"
            });
            let animationButton = anime({
                targets: ".homeBar a",
                width: animationVal[1],
                easing: "easeInOutQuad",
                complete: document
                    .querySelector(`nav .homeBar a`)
                    .setAttribute("over", id)
            });
            let curSelected;
            let translationIndex;
            // If Currently Selected Info Holder is main or tertiary, go to secondary
            switch (visElement) {
                case "main":
                case "tertiary":
                    curSelected = "secondary";
                    translationIndex = -1;
                    break;
                // If Currently Selected Info Holder is secondary, go to tertiary
                case "secondary":
                    curSelected = "tertiary";
                    translationIndex = -30;
                    break;
            }
            curSelection.querySelector(
                `.${curSelected}`
            ).innerHTML = selectedElementScroll;
            const goSelection = anime({
                targets: curSelection,
                translateY: translationIndex,
                complete: curSelection.setAttribute("visibleelement", `${curSelected}`),
                easing: "easeOutElastic(.1, 2)"
            });
        }
    }
}

function positionLink(link) {
    return [link.getBoundingClientRect().left - 30, link.offsetWidth + 60];
}

document.querySelector(".settings .settingsHandle").onclick = () => {
    document.querySelector(".settings").classList.toggle("visible");
};

document.querySelectorAll(".tgl").forEach(button => {
    if (button.id === "cbDarkMode") {
        button.onchange = element => {
            const link = document.querySelector("link.theme");
            if (element.srcElement.checked) {
                link.setAttribute("href", "css/themedark.css");
            } else {
                link.setAttribute("href", "css/themewhite.css");
            }
        };
    }
});