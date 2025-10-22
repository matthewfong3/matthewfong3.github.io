const setupProjectsLinks = () => {
    const links = document.getElementsByClassName("fake-links");
    for (const l of links) {
        l.addEventListener("mouseover", () => {
            let image = l.firstElementChild;
            let file = image.getAttribute("data-file");
            image.src = `hosted/images/${file}.png`;
        });
        l.addEventListener("mouseout", () => {
            let image = l.firstElementChild;
            let file = image.getAttribute("data-file");
            image.src = `hosted/images/${file}_gray.png`;
        });
    }
};
const init = () => {
    const respProps = {
        showDropdown: false,
    };
    navOnHover();
    setupDropdown(respProps);
    smoothScrolling(respProps);
    setupProjectsLinks();
};
window.onload = init;
const navOnHover = () => {
    const logo = document.getElementById("logo");
    const linkedIn = document.getElementById("shortcutLinkedIn");
    const github = document.getElementById("shortcutGithub");
    logo.addEventListener(
        "mouseover",
        () => (logo.src = "hosted/images/face.png")
    );
    logo.addEventListener(
        "mouseout",
        () => (logo.src = "hosted/images/face_gray.png")
    );
    linkedIn.addEventListener(
        "mouseover",
        () => (linkedIn.src = "hosted/images/linkedin.png")
    );
    linkedIn.addEventListener(
        "mouseout",
        () => (linkedIn.src = "hosted/images/linkedin_gray.png")
    );
    github.addEventListener(
        "mouseover",
        () => (github.src = "hosted/images/github.png")
    );
    github.addEventListener(
        "mouseout",
        () => (github.src = "hosted/images/github_gray.png")
    );
};
const toggleDropdown = (respProps) => {
    const navbarList = document.getElementById("navbarList");
    if (respProps.showDropdown) {
        navbarList.animate(
            {
                top: ["61px", "-500px"],
            },
            {
                duration: 500,
                easing: "ease-in-out",
            }
        );
        navbarList.style.top = "-500px";
        respProps.showDropdown = false;
    } else {
        navbarList.animate(
            {
                top: ["-500px", "61px"],
            },
            {
                duration: 500,
                easing: "ease-in-out",
            }
        );
        navbarList.style.top = "61px";
        respProps.showDropdown = true;
    }
};
const setupDropdown = (respProps) => {
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("click", () => {
        toggleDropdown(respProps);
    });
};
const smoothScrolling = (respProps) => {
    // smooth scrolling
    // references: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    $(".navLinks").on("click", function (e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery"s animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                500,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        }
        if (respProps.showDropdown && window.innerWidth <= "768") {
            toggleDropdown(respProps);
        }
    });
    let logoAnchor = document.getElementById("logoAnchor");
    let aboutMeAnchor = document.getElementById("aboutMeAnchor");
    let projectsAnchor = document.getElementById("projectsAnchor");
    let contactsAnchor = document.getElementById("contactsAnchor");
    logoAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.add("selected");
        projectsAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
    });
    aboutMeAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.add("selected");
        projectsAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
    });
    projectsAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        projectsAnchor.classList.add("selected");
        contactsAnchor.classList.remove("selected");
    });
    contactsAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        projectsAnchor.classList.remove("selected");
        contactsAnchor.classList.add("selected");
    });
};
const redirect = (res) => {
    localStorage["url"] = JSON.stringify(res.url);
    window.location = res.redirect;
};
const sendAjax = (type, action, data, success) => {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: "json",
        success: success,
        error: (xhr, status, error) => {
            let messageObj = JSON.parse(xhr.responseText);
            console.log(messageObj.error);
        },
    });
};
