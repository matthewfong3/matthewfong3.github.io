// Image Slider Reference:
// https://www.youtube.com/watch?v=nJWq74MHplc&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z&index=4
// https://www.youtube.com/watch?v=wQcR25IyPBQ&index=5&list=PLB_Wd4-5SGAZbFpxT_9CrdY773Ipdag1Z
const imageSlider = () => {
    let slideIndex = {
        val: 0,
    };
    showImage(slideIndex);
    let nextBtn = document.getElementsByClassName("next");
    let prevBtn = document.getElementsByClassName("prev");
    let dots = document.getElementsByClassName("dots");
    if (nextBtn)
        nextBtn[0].addEventListener("click", () => incrementIndex(slideIndex));
    if (prevBtn)
        prevBtn[0].addEventListener("click", () => decrementIndex(slideIndex));
    if (dots) {
        for (const d of dots)
            d.addEventListener("click", () =>
                currentSlide(slideIndex, d.getAttribute("data-i"))
            );
    }
};
const incrementIndex = (sI) => {
    sI.val++;
    showImage(sI);
};
const decrementIndex = (sI) => {
    sI.val--;
    showImage(sI);
};
const currentSlide = (sI, i) => {
    sI.val = i;
    showImage(sI);
};
const showImage = (sI) => {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dots");
    if (sI.val >= slides.length) sI.val = 0;
    if (sI.val < 0) sI.val = slides.length - 1;
    for (const s of slides) s.style.display = "none";
    slides[sI.val].style.display = "block";
    if (dots) {
        for (const d of dots) d.classList.remove("selected");
        dots[sI.val].classList.add("selected");
    }
};
const AudioViz = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/audiovizSample2.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/audioviz1.png",
                    alt: "Audio Vizualizer 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/audioviz2.png",
                    alt: "Audio Vizualizer 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/audioviz3.png",
                    alt: "Audio Vizualizer 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Audio Visualizer"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, JavaScript, Canvas"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed & implemented core functionality of audio visualizer, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "reading in selected audio file"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "converting sound data to frequency/waveform data for visualization on canvas"
                        )
                    ),
                    "- Designed visual experience of the app ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed layout of the app"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browsers"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "For this project, I had the chance to explore and experiment with JavaScript and Canvas by developing and designing an audio visualizer. Heavily inspired by audio visualizers from youtube videos, I created an interactive experience and included a control panel for users to tweak/toggle different audio & visual features. The app reads in an audio file and converts sound data to frequency/waveform data that the user can then visualize."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    /*#__PURE__*/ React.createElement(
                        "b",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "span",
                            null,
                            "Experience it Yourself! "
                        ),
                        /*#__PURE__*/ React.createElement(
                            "a",
                            {
                                href: "https://matthewfong3.github.io/audioviz/",
                            },
                            "Audio Visualizer"
                        )
                    )
                )
            )
        )
    );
};
const KingOfTheBall = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/kingOfTheBall1.png",
                    alt: "King of the Ball 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/kingOfTheBall2.png",
                    alt: "King of the Ball 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/kingOfTheBall3.png",
                    alt: "King of the Ball 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/kingOfTheBall4.png",
                    alt: "King of the Ball 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/kingOfTheBall5.png",
                    alt: "King of the Ball 5",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/kingOfTheBall6.png",
                    alt: "King of the Ball 6",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/kingOfTheBall7.png",
                    alt: "King of the Ball 7",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "4",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "5",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "6",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "King of the Ball"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, JavaScript, Canvas"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed game physics, core mechanics, and functionality of the game using Object-Oriented Programming, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "simple physics system (collision detection)"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "bounding boxes"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "player movement and interactions"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "player and ball respawn logic"
                        )
                    ),
                    "- Sprite Animations ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Sound Design (sound effects, background music)",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed style/look and feel of the game ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed level layouts ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed game menus"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browser"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Heavily inspired by PlayStation's ",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "BaraBariBall"
                    ),
                    ", King of the Ball is a local 1-versus-1 arcade-party game. This project features 3 custom levels, implementation of game physics (constant gravity force), basic player movement & jumping, and player interactions (players can pick up the ball from the ground or steal the ball from the other player holding it). The game mode is based on Microsoft Halo's OddBall game mode, in which players try to hold onto the ball for as long as they can while being in their respective color regions to gain points. The player with the most points after the timer expires wins. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "This project demonstrates understanding and utilization of HTML5's canvas element by updating game logic and animations and then displaying these updates on the canvas for players."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    /*#__PURE__*/ React.createElement(
                        "b",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "span",
                            null,
                            "Play the Game! "
                        ),
                        /*#__PURE__*/ React.createElement(
                            "a",
                            {
                                href: "https://matthewfong3.github.io/king-of-the-ball/",
                            },
                            "King of the Ball"
                        )
                    )
                )
            )
        )
    );
};
const Tweeter = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/tweeter1.png",
                    alt: "tweeter 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter2.png",
                    alt: "tweeter 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter3.png",
                    alt: "tweeter 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/tweeter4.png",
                    alt: "tweeter 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter5.png",
                    alt: "tweeter 5",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter6.png",
                    alt: "tweeter 6",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter7.png",
                    alt: "tweeter 7",
                    width: "100%",
                    height: "100%",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/tweeter8.png",
                    alt: "tweeter 8",
                    width: "100%",
                    height: "100%",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "4",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "5",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "6",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "7",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Tweeter"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, JavaScript, Jquery, (MERN) NodeJs, ReactJS, ExpressJS, MongoDB, Redis"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer (Full Stack Developer)"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed and implemented core functionality of the app, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "secure sign-up/log-in with accounts"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "encrypting passwords for user accounts"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "account's following/followers system"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "creating, editing, deleting, favoriting, replying to user's tweets"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "attaching images, gifs, and video files to tweets"
                        )
                    ),
                    "- Implemented dynamic and responsive application with ReactJS ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Developed a light/dark mode feature ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed style/look and feel of the app"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 4 months"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browser"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Tweeter is a social media ",
                    /*#__PURE__*/ React.createElement("i", null, "Twitter"),
                    "-clone app project, demonstrating understanding of RESTful API and implementation of a Model-View-Controller (MVC) framework. Although, it is still missing various features, Tweeter was developed and designed to exemplify the core concept of what Twitter is, an application where users can view a collection of data created by other users and interact with each other through this collection of data, which is stored in a database. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "Some features of Tweeter include creation of user accounts, following accounts, tweeting (posting) messages, while also the ability to attach images, video, and gif files to tweets. Users can view not only their own tweets, but also tweets from other Tweeter accounts they follow. Additionally, users may also edit and/or delete their own tweets and can reply to other tweets. Account users can change their password and may toggle between a light/dark mode interface as well."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    /*#__PURE__*/ React.createElement(
                        "b",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "span",
                            null,
                            "Experience it Yourself! "
                        ),
                        /*#__PURE__*/ React.createElement(
                            "a",
                            {
                                href: "https://tweeter-3de7.onrender.com/",
                            },
                            "Tweeter"
                        )
                    )
                )
            )
        )
    );
};
const Pictionary = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "hosted/images/pictionary1.png",
                    alt: "pictionary 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/pictionary2.png",
                    alt: "pictionary 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/pictionary3.png",
                    alt: "pictionary 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "hosted/images/pictionary4.png",
                    alt: "pictionary 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Draw With Friends!"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, JavaScript, NodeJs, Canvas, Websockets (socket.io)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed core functionality of the game, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "connecting different client browsers in a game session (4 player server rooms) using websockets (socket.io)"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "the server assigns one random drawer at the start of each game, while the other three players will guess the word"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "communication logic between clients and server when sending and receiving data, i.e - chatbox messages, updates to the canvas when drawing"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "emitting and broadcasting image data (canvas drawings) between server and all connected clients"
                        )
                    ),
                    "- Designed layout and style/look and feel of the game"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browser"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Draw With Friends! is a clone copy of the popular game",
                    " ",
                    /*#__PURE__*/ React.createElement("i", null, "Pictionary"),
                    ". Each round, a different player is given a random word to draw and the other 3 players must guess the word to gain a point. The first player to reach 3 points will be declared the winner of the game and a new game will begin. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "By utilizing Websockets (socket.io), Canvas and NodeJs, Draw With Friends! is a project that connects users (players) from different client browsers into a game session (server room). Multiple rooms are also supported, as the first four players to join will be put in one game (server) room and the following four will be put in another game (server) room. Within a game, as the drawer is painting his artwork onto their canvas, all the image data is being emitted to the server, in which the server will then broadcast the data back to the other 3 guessers onto their respective canvases. Similarly, all the messages in the chatbox that the 3 guessers send will be emitted to the server, which will be checked against the drawer's word and then broadcasted back to every player in the room."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    /*#__PURE__*/ React.createElement(
                        "b",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "span",
                            null,
                            "Play the Game! "
                        ),
                        /*#__PURE__*/ React.createElement(
                            "a",
                            {
                                href: "https://pictionary-n42s.onrender.com/",
                            },
                            "Draw With Friends!"
                        )
                    )
                )
            )
        )
    );
};
const ArcadeJam = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/arcadeJam1.png",
                    alt: "arcadeJam 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/arcadeJam2.png",
                    alt: "arcadeJam 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/arcadeJam3.png",
                    alt: "arcadeJam 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Arcade-Jam"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, JavaScript, NodeJs, Canvas, Websockets (socket.io)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed core mechanics and functionality of the game using Object-Oriented Programming, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "data communication between client and server (emitting and broadcasting data back and forth between server and all connected clients)"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "creating server rooms and connecting players in a game session with websockets (socket.io)"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "player movement"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "bullet firing"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "bullet shielding"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "simple physics system (collision detection)"
                        )
                    ),
                    "- Designed style/look and feel of the game ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed UI elements and game menus",
                    " "
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browser"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    'Inspired by air-hockey, Arcade-Jam is a four player, team-based, sports-like shooting game. With two players on the red team and two players on the blue team, players must shoot projectiles past the opposing team\'s side to get a point However, players may block incoming projectiles from reaching the "goal" (sides of screen). The first team to get 3 points is declared the winning team. Arcade-Jam offers very fast-paced and chaotic gameplay. ',
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "By using websockets (socket.io), Arcade-Jam is able to connect users (players) from different browsers together in game sessions (server rooms). There can be multiple game rooms at once, so 4 players connected are placed in one room and the next 4 are placed in another room, and so on."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    /*#__PURE__*/ React.createElement(
                        "b",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "span",
                            null,
                            "Play the Game! "
                        ),
                        /*#__PURE__*/ React.createElement(
                            "a",
                            {
                                href: "https://arcade-jam2.onrender.com/",
                            },
                            "Arcade-Jam"
                        )
                    )
                )
            )
        )
    );
};
const Portfolio = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/newport1.png",
                    alt: "New Portfolio",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/oldport1.png",
                    alt: "Old Portfolio",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Portfolio Websites"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "HTML5, CSS3, Sass, JavaScript, Jquery, NodeJs, ExpressJS, ReactJS"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed core functionality of portfolio websites",
                    " ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed style/look and feel of portfolio websites ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Organized CSS3 styles and files through Sass pre-processor ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed website layout"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 2 months"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Desktop Browser"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "For my first portfolio website (second slide), I developed a very simple website using HTML5, CSS3 and JavaScript. I used fancybox to help showcase my featured projects. In terms of design, I envisioned a",
                    " ",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Marvel's Iron Man"
                    ),
                    " theme; I wanted to create a futuristic sci-fi UI for users while they navigate through my portfolio site. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "For my second portfolio website, my focus was to make a more modernized and clean portfolio site. In terms of development, this site is powered by HTML5, Sass, CSS3 & Flexbox, JavaScript, Jquery, NodeJs, ExpressJS and ReactJS. For the design, I wanted the look and feel of my new portfolio site to be crisp, clear, and easier on the eyes. My old portfolio site (Iron Man theme) felt very dark and a bit overwhelming as there was a lot going on in each page. Instead, with my new portfolio, information and content being presented is less compact and cluttered. I utilized negative space much better, offering more breathing room."
                )
            )
        )
    );
};
const Cookie = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/cookie.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/donuts.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Cookie & Donuts"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools Used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Blender"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    " ",
                    "- 3D modelling ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Texturing and Shading ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Compositing (Post processing) ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Lighting ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Animation ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Rendering"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 2 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "After following Blender Guru's Donut Tutorial series on Youtube, I challeneged myself to apply the knowledge and skills I learned to create a cookie in Blender. I modeled and sculpted the shape of the cookie and the chocolate chips seperately. Then by using geometry nodes, I was able to randomize the placement of the chocolate chips onto the cookie. By using some random noise and height maps (normals), I was also able to make the cookie more realistic by adding in detailed cracks and bumps in the cookie dough. Finally, with some texturing, shading, animations, lighting and compositing (post processing), I successfully rendered out a short video displaying my grandiose cookie."
                )
            )
        )
    );
};
const DevilFruit = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/devilfruit1.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/devilfruit2.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            })
        ),
        /*#__PURE__*/ React.createElement(
            "h3",
            null,
            '"One Piece" Devil Fruit'
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools Used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Blender"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    " ",
                    "- 3D modelling ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Texturing and Shading ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Compositing (Post processing) ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Lighting ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Animation ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Rendering"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 2 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Inspired by ",
                    /*#__PURE__*/ React.createElement("i", null, "One Piece"),
                    "'s gomu gomu devil fruit, I created two variations of the devil fruit. Using primitives and bezier curves, I first modeled the shape of devil fruit. After some simple texturing and shading, I found myself investing most of my time into lighting and compositing (post processing) to really make my devil fruit pop and shine. Finally, with some simple animations, I rendered out a short video showcasing my irresistible devil fruits. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "P.S. - I never finished watching ",
                    /*#__PURE__*/ React.createElement("i", null, "One Piece"),
                    " and probably never will because it is too long -",
                    " ",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Ain't nobody got time fo' dat!"
                    ),
                    " :)"
                )
            )
        )
    );
};
const ChessEnvironment = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement(
                    "video",
                    {
                        controls: true,
                    },
                    /*#__PURE__*/ React.createElement("source", {
                        src: "hosted/images/chess_environment.mp4",
                        type: "video/mp4",
                    })
                )
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Chess Environment"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools Used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Blender"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    " ",
                    "- 3D modelling ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Texturing and Shading ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Compositing (Post processing) ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Lightning ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Animation ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Rendering"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 3 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "For this project, I decided to revisit my first 3D modeling assignment, which was to make a chess piece. Since every chess piece is unique, I spent most of my time modelling each chess piece. After doing so, I applied a metalic, chrome-like material to the chess set. Finally, after reusing some old hosted I modeled and borrowed hosted as well, I put together a simple aesthetic environment to showcase my chess set."
                )
            )
        )
    );
};
const DynamicDash = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/dynamicDash1.png",
                    alt: "dynamic dash 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/dynamicDash2.png",
                    alt: "dynamic dash 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/dynamicDash3.png",
                    alt: "dynamic dash 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/dynamicDash4.png",
                    alt: "dynamic dash 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Dynamic Dash Game"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Visual Studio, C#, Unity"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Level Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed & implemented some core mechanics of the game using Object-Oriented Programming, such as Power-Up abilities, in C# ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Wrote C# scripts to handle the interactions between different power-up abilities and how they affect the players ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed GUI/UI elements and game menus in Unity ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed layout of game levels in Unity editor",
                    " "
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "5 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "5"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Influenced by Steam's ",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "SpeedRunners"
                    ),
                    " game, Dynamic Dash is a two player, 1-versus-1 2D side-scrolling game. Dynamic Dash is a split-screen racing game in which both player 1 (red) and player 2 (blue) compete against each other to reach the finish line first. As the players traverse through each level while dodging obstacles, both players can collect coins, which can be spent to use power-up abilities to give themselves a slight boost, a shield, or interfere with the other player by slowing them down. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "My main role for this project was designing and developing the power-up abilities and handling the logic behind how they interact with each other and the players. I was also responsible for designing the levels/courses of the game, as well as designing the GUI and UI menus for the game."
                )
            )
        )
    );
};
const BunkR = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/bunkR1.png",
                    alt: "BunkR 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/bunkR2.png",
                    alt: "BunkR 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/bunkR3.png",
                    alt: "BunkR 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "BunkR: The Game"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Visual Studio, C#, Photoshop"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer, Designer & Animator"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed some core mechanics/functionality of the game with Object-Oriented Programming, such as",
                    /*#__PURE__*/ React.createElement(
                        "ul",
                        null,
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "basic player & enemy movement"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "bullet firing"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "simple physics system (collision-detection)"
                        ),
                        /*#__PURE__*/ React.createElement(
                            "li",
                            null,
                            "bounding boxes"
                        )
                    ),
                    "- Programmed C# scripts for different types of weapons and health kit spawns ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Assisted with implementation of the bomb/nuke logic in game manager script",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed and adjusted character sprites ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed GUI elements and UI game menus",
                    " "
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 5 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Monogame, Desktop"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "3"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "BunkR is a simple 2D shoot-em up platformer, arcade game. The player must survive in a post-apocalyptic city environment against waves of zombies. The player may pick up various weapons and health kits that spawn in random areas on the screen. There are also platforms that the player may jump onto; however, they will lose health the longer they remain on the platforms. Additionally, a nuke/bomb will occasionally drop into the level that will clear all zombies, including the player. In order to survive against the nuke, there will be a safe spot/bunker that activates and the player must get there before. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "I assisted my team in developing the core mechanics and physics of the game, including C# scripts for player movement, bullet firing, collision-detection, different weapon types and health kits. Using Photoshop, I was also able to make the player and zombie animations with spritesheets."
                )
            )
        )
    );
};
const DefendSina = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/defendSina1.png",
                    alt: "Defend Sina 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/defendSina2.png",
                    alt: "Defend Sina 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/defendSina3.png",
                    alt: "Defend Sina 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/defendSina4.png",
                    alt: "Defend Sina 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Defend Sina Game"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Swift, Xcode, Photoshop, Audacity"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer & Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed core mechanics/functionality of the game, such as basic player shooting, in Xcode ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Assisted in scripting the player, enemy, power-up abilities and game manager classes with Object-Oriented Programming ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed emitter effects for power-up abilities ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed GUI elements and UI for game menus ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed the style/look and feel of the game ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Lead sound designer (Sound Effects/Foley Art, Background Music)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "iPad (iOS)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "2"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Defend Sina is a top-down, tower defense game. Heavily influenced by the ",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Attack on Titan"
                    ),
                    " anime, the game pits the player against endless hordes of monsters. The player must defend Wall Sina from collapsing by preventing monsters from reaching the wall. The player can fire crossbow shots and pick up power-up abilities, which occasionally spawn randomly on the battlefield. Elemental (magic) abilities are also available to the player to use to help them fend off the monster hordes. However, after using one, it will go on cooldown until it is available again. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "My main role for this project was to build the sounds, visual effects, and style of the game to create an immersive experience. I also assisted my team in implementation of the player shooting mechanic."
                )
            )
        )
    );
};
const GolfIt = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/golfit1.png",
                    alt: "Golf It? 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/golfit2.png",
                    alt: "Golf It? 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/golfit3.png",
                    alt: "Golf It? 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/golfit4.png",
                    alt: "Golf It? 4",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/golfit5.png",
                    alt: "Golf It? 5",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/golfit6.png",
                    alt: "Golf It? 6",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/golfit7.png",
                    alt: "Golf It? 7",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "4",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "5",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "6",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "Golf It? Game"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Swift, Xcode, Photoshop, Audacity"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Programmer, Designer & Level Designer"
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "- Programmed core mechanics/functionality of the game, such as the physics system (golf ball interacting with different obstacles), in Xcode ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Assisted in scripting the game manager class with Object-Oriented Programming ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed 9 level layouts of a 18 hole levels Golf game ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Designed GUI elements and UI for game menus ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Lead sound designer (Sound Effects/Foley Art, Background Music)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 6 weeks"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Platform"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "iPad (iOS)"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "2"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Golf It? is a single-player, top-down, casual game. Heavily influenced by Steam's ",
                    /*#__PURE__*/ React.createElement("i", null, "Golf It!"),
                    " game, Golf It? is a simple mini-golf game that showcases the use of the simple physics collision system in SpriteKit. As the player plays through a complete 18-hole game of mini-golf, they will face challenging levels with various obstacles laid throughout. At the end of each hole, the game will record the number of strokes the player took before getting the ball in the hole. At the end of the game, the game will display the player's total score. ",
                    /*#__PURE__*/ React.createElement("br", null),
                    /*#__PURE__*/ React.createElement("br", null),
                    "My main role for this project was designing the levels so they are both challenging but also not frustrating for the player; sound design to immerse the player in an interactive experience. I also assisted my team in developing some of the game's mechanics, including certain obstacles and how they interact with the golf ball, i.e - dirt patches, water ponds, moving and rotating obstacles."
                )
            )
        )
    );
};
const Models = () => {
    return /*#__PURE__*/ React.createElement(
        "div",
        {
            className: "reactComponent",
        },
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "slider-container",
            },
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    src: "/hosted/images/usp1.png",
                    alt: "USP 1",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/usp2.png",
                    alt: "USP 2",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/usp3.png",
                    alt: "USP 3",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/ironman.png",
                    alt: "Iron Man helmet",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/starwarsls.png",
                    alt: "star wars",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/halosniper.png",
                    alt: "halo sniper",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/saoasunarapier.png",
                    alt: "SAO: Asuna's rapier",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/aotsword.png",
                    alt: "Attack on Titan Sword",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "div",
                {
                    className: "slides fade",
                },
                /*#__PURE__*/ React.createElement("img", {
                    id: "img",
                    src: "/hosted/images/kunai.png",
                    alt: "kunai",
                })
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "prev",
                },
                "\u276E"
            ),
            /*#__PURE__*/ React.createElement(
                "a",
                {
                    className: "next",
                },
                "\u276F"
            )
        ),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                id: "dotsDiv",
            },
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "0",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "1",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "2",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "3",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "4",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "5",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "6",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "7",
            }),
            /*#__PURE__*/ React.createElement("span", {
                className: "dots",
                "data-i": "8",
            })
        ),
        /*#__PURE__*/ React.createElement("h3", null, "3D models"),
        /*#__PURE__*/ React.createElement(
            "div",
            {
                className: "description",
            },
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "left",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Tools used"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Autodesk Maya, Photoshop, Unity"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Role"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    " ",
                    "- 3D Modelling ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- UV unwrapping ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Texturing ",
                    /*#__PURE__*/ React.createElement("br", null),
                    "- Animations"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Duration"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "Less than 2 weeks each"
                )
            ),
            /*#__PURE__*/ React.createElement(
                "section",
                {
                    className: "right",
                },
                /*#__PURE__*/ React.createElement("h4", null, "Team size"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    {
                        className: "p",
                    },
                    "1"
                ),
                /*#__PURE__*/ React.createElement("h4", null, "Overview"),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "Most of these featured 3D models were directly inspired from movies (",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Marvel's Iron Man, Star Wars"
                    ),
                    "), anime shows (",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Attack on Titan, Naruto, Sword Art Online"
                    ),
                    "), and videogames (",
                    /*#__PURE__*/ React.createElement(
                        "i",
                        null,
                        "Halo, Counter-Strike"
                    ),
                    ")."
                ),
                /*#__PURE__*/ React.createElement(
                    "p",
                    null,
                    " ",
                    "The CS:GO USP-S pistol began in Autodesk Maya with 3D modelling. Then, custom textures were created with Photoshop and UV unwrapped in Maya. After applying the textures onto the model, I utilized joints and joint points in Maya to animate some parts of the model; animation includes pulling the hammer and trigger back, as well as toggling the safety switch on and off. Finally, the model, texture, and animation was imported into Unity."
                )
            )
        )
    );
};
const init = () => {
    const respProps = {
        showDropdown: false,
    };
    navOnHover();
    setupDropdown(respProps);

    imageSlider();
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
