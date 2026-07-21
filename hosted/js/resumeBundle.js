const init = () => {
    const respProps = {
        showDropdown: false,
    };
    navOnHover();
    setupDropdown(respProps);
};
window.onload = init;
const navOnHover = () => {
    const logo = document.getElementById("logo");
    const linkedIn = document.getElementById("shortcutLinkedIn");
    const github = document.getElementById("shortcutGithub");
    logo.addEventListener(
        "mouseover",
        () => (logo.src = "hosted/images/face.webp"),
    );
    logo.addEventListener(
        "mouseout",
        () => (logo.src = "hosted/images/face_gray.webp"),
    );
    linkedIn.addEventListener(
        "mouseover",
        () => (linkedIn.src = "hosted/images/linkedin.webp"),
    );
    linkedIn.addEventListener(
        "mouseout",
        () => (linkedIn.src = "hosted/images/linkedin_gray.webp"),
    );
    github.addEventListener(
        "mouseover",
        () => (github.src = "hosted/images/github.webp"),
    );
    github.addEventListener(
        "mouseout",
        () => (github.src = "hosted/images/github_gray.webp"),
    );
};
const toggleDropdown = (respProps) => {
    const navbarList = document.getElementById("respNavbarList");
    if (respProps.showDropdown) {
        navbarList.animate(
            {
                top: ["61px", "-500px"],
            },
            {
                duration: 500,
                easing: "ease-in-out",
            },
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
            },
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
                },
            );
        }
        if (respProps.showDropdown && window.innerWidth <= "768") {
            toggleDropdown(respProps);
        }
    });
    let logoAnchor = document.getElementById("logoAnchor");
    let aboutMeAnchor = document.getElementById("aboutMeAnchor");
    let programmingAnchor = document.getElementById("programmingAnchor");
    let artistAnchor = document.getElementById("artistAnchor");
    let designAnchor = document.getElementById("designAnchor");
    let contactsAnchor = document.getElementById("contactsAnchor");
    let respAboutMeAnchor = document.getElementById("respAboutMeAnchor");
    let respProgrammingAnchor = document.getElementById(
        "respProgrammingAnchor",
    );
    let respArtistAnchor = document.getElementById("respArtistAnchor");
    let respContactsAnchor = document.getElementById("respContactsAnchor");

    logoAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.add("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.add("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    aboutMeAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.add("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.add("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    programmingAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.add("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.add("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    artistAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.add("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.add("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    designAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.add("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.add("selected");
        respContactsAnchor.classList.remove("selected");
    });
    contactsAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.add("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.add("selected");
    });
    respAboutMeAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.add("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.add("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    respProgrammingAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.add("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.add("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    respArtistAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.add("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.add("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.remove("selected");
    });
    respDesignAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.add("selected");
        contactsAnchor.classList.remove("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.add("selected");
        respContactsAnchor.classList.remove("selected");
    });
    respContactsAnchor.addEventListener("click", () => {
        aboutMeAnchor.classList.remove("selected");
        programmingAnchor.classList.remove("selected");
        artistAnchor.classList.remove("selected");
        designAnchor.classList.remove("selected");
        contactsAnchor.classList.add("selected");
        respAboutMeAnchor.classList.remove("selected");
        respProgrammingAnchor.classList.remove("selected");
        respArtistAnchor.classList.remove("selected");
        respDesignAnchor.classList.remove("selected");
        respContactsAnchor.classList.add("selected");
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
