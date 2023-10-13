// Loader Script
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-container");
    loader.style.cssText = "opacity: 0; display: none;";
});


// Animation Script
const animationList = document.querySelectorAll(".home-animation");
const MAX_INDEX = animationList.length - 1; // Maximum index for animationList

function animate(index) {
    if (index > MAX_INDEX) {
        setTimeout(() => {
            resetAnimation();
        }, 3000);
        return;
    }

    const currentItem = animationList[index];
    const nextItem = animationList[index + 1];

    currentItem.style.display = "block";
    if (index === 3 || index === 4) {
        currentItem.classList.add("activateButtonAnimation");
    } else {
        currentItem.classList.add("activateTextAnimation");
    }

    function handleAnimationEnd() {
        currentItem.classList.remove("activateTextAnimation");
        currentItem.classList.remove("activateButtonAnimation");
        currentItem.removeEventListener("animationend", handleAnimationEnd);

        if (nextItem) {
            nextItem.style.display = "block";
        }

        requestAnimationFrame(() => {
            animate(index + 1);
        });
    }

    currentItem.addEventListener("animationend", handleAnimationEnd);
}

function resetAnimation() {
    animationList.forEach((item) => {
        item.style.display = "none"; // Hide instead of empty string
    });
    animate(0);
}

resetAnimation();


// Navigation Bar Script
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-bar a");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetSectionId = entry.target.id;
            const correspondingLink = Array.from(navLinks).find(link =>
                link.getAttribute("href") === `#${targetSectionId}`
            );

            navLinks.forEach(link => {
                link.classList.toggle("active", link === correspondingLink);
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

sections.forEach((section) => {
    observer.observe(section);
});


// Tab change Script
function openImage(imagePath, title) {
    var newTab = window.open(imagePath, "_blank");
    newTab.document.title = title;
}


// Project Script 
projectData = [
    [
        "PROTECTIUM",
        "HTML, CSS, JS, MySQL, Flask, VSCode",
        "Protectium is a web-based Multi-Factor Authentication (MFA) system, requiring three verification factors for accessing resources such as applications or online accounts. This approach substantially enhances security, effectively minimizing the vulnerability to cyber attacks.",
        "The project aims to improve the connection between customers and their private accounts, ensuring a secure and convenient login experience. It prioritizes enhancing customer interactions while safeguarding their access to individual accounts.",
        [
            "/Documents/Protectium/Protectium1.png",
            "/Documents/Protectium/Protectium2.png",
            "/Documents/Protectium/Protectium3.png",
            "/Documents/Protectium/Protectium4.png",
            "/Documents/Protectium/Protectium5.png",
            "/Documents/Protectium/Protectium6.png"
        ]
    ],

    [
        "FLAPPY",
        "Python, CV2, Mediapipe, PyGame, PyCharm",
        "Flappy is a simple game where players navigate a bird, endeavoring to glide through narrow pipe columns without collision. Accumulating points hinges on successfully traversing obstacles. The player's score increases with each pipe cleared, adding an element of challenge as they strive to achieve higher scores.",
        "Flappy Bird, devised by Vietnamese game artist and programmer Dong Nguyen, gained fame for its simplicity. To infuse novelty, players guide the bird through hand gestures.",
        [
            "/Documents/Flappy/Flappy1.png",
            "/Documents/Flappy/Flappy2.jpg",
            "/Documents/Flappy/Flappy3.jpg",
            "/Documents/Flappy/Flappy4.jpg"
        ]
    ],

    [
        "AUTO MEET",
        "Python, Selenium, Chromdriver, Static and Dynamic Web Scraping, PyCharm",
        "Auto Meet is an automated program designed to streamline Google Meet management. It efficiently manages tasks, monitors participant data, and compiles it into a singular, user-friendly file. This integration enhances user convenience by providing a comprehensive overview of the meet's proceedings and participants' information.",
        "In the wake of the COVID-19 pandemic, numerous offices, schools, and educational institutions shifted online. Managing participants and technical glitches during virtual meetings became challenging. Auto Meet emerged to streamline these tasks, offering a user-friendly platform for convenient online meetings.",
        [
            "/Documents/AutoMeet/AutoMeet1.png",
            "/Documents/AutoMeet/AutoMeet2.png",
            "/Documents/AutoMeet/AutoMeet3.png",
            "/Documents/AutoMeet/AutoMeet4.png",
            "/Documents/AutoMeet/AutoMeet5.png"
        ]
    ],

    [
        "JET HIGH",
        "HTML, CSS, JS, VSCode",
        "The Airline Ticketing System (ATS) is a web-based platform that simplifies flight booking, enabling users to search, select, and reserve flights between specified cities and dates. It ensures efficient and user-friendly online air travel reservations.",
        "ATS strives to elevate customer convenience during flight bookings and optimize airline procedures, nurturing positive customer connections, loyalty, and streamlined air travel administration.",
        [
            "/Documents/JetHigh/JetHigh1.jpg",
            "/Documents/JetHigh/JetHigh2.jpg",
            "/Documents/JetHigh/JetHigh3.jpg",
            "/Documents/JetHigh/JetHigh4.jpg",
            "/Documents/JetHigh/JetHigh5.jpg"
        ]
    ],

    [
        "CRIC WIN",
        "Python, NumPy, Pandas, Matpltlib, Seaborn, Sklearn, Google Colab",
        "Cric Win performs comprehensive data analysis on the IPL dataset, employing a machine learning model for winner prediction. This advanced approach leverages insights from data to forecast the victor, enhancing the accuracy and informed decision-making within the realm of cricket.",
        "The Indian Premier League, a professional 20-20 cricket league in India, takes place annually from March to May. Teams representing diverse cities and states of India compete, showcasing a dynamic blend of cricket talent and regional pride.",
        [
            "/Documents/CricWin/CricWin1.png",
            "/Documents/CricWin/CricWin2.png",
            "/Documents/CricWin/CricWin3.png",
            "/Documents/CricWin/CricWin4.png",
            "/Documents/CricWin/CricWin5.png",
        ]
    ],

    [
        "PANDEMETER",
        "Python, Static and Dynamic Web Scraping, Tkinter, PyCharm",
        "Pandemter is a computerized system designed to gather real-time data about COVID-19. It presents this information on a single window, enhancing user convenience. By providing a comprehensive overview of the pandemic's status, Pandemter aids in informed decision-making and ensures quick access to essential information for users.",
        "In December 2019, the coronavirus outbreak unfolded, triggering global havoc. With varying and inaccurate information on websites, finding reliable sources became challenging. Pandemter emerged to meet the high demand for accurate and trustworthy information during the crisis.",
        [
            "/Documents/Pandemeter/Pandemeter1.png",
            "/Documents/Pandemeter/Pandemeter2.png",
            "/Documents/Pandemeter/Pandemeter3.png",
            "/Documents/Pandemeter/Pandemeter4.png",
            "/Documents/Pandemeter/Pandemeter5.png",
            "/Documents/Pandemeter/Pandemeter6.png",
        ]
    ]
]

function flip(index) {
    const currentData = projectData[index];
    const imageData = currentData[4];
    const imageList = document.querySelectorAll(".project-images-list img");

    for (let i = 0; i < currentData.length - 1; i++) {
        document.getElementById("description" + (i + 1)).textContent = currentData[i];
    }

    imageList.forEach((image, i) => {
        if (imageData[i]) {
            image.src = imageData[i];
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });

    document.getElementById("projectBack").style.display = "block";
    document.querySelector('.project-inner-content').style.transform = 'rotateY(180deg)';

    setTimeout(() => {
        document.getElementById("projectFront").style.display = "none";
    }, 500);
}

function flipBack() {
    const imageList = document.querySelectorAll(".project-images-list img");

    imageList.forEach(image => {
        image.style.display = "none";
    });

    document.querySelector('.project-inner-content').style.transform = 'rotateY(0deg)';
    document.getElementById("projectFront").style.display = "block";

    setTimeout(() => {
        document.getElementById("projectBack").style.display = "none";
    }, 500);
}


// Form Submission Script
async function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name");
    const subject = formData.get("subject");
    const phone = formData.get("phone");

    formData.set("subject", `Mail from ${name}: ${subject}`);

    if (!phone) {
        formData.delete("phone");
    }

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";
            form.reset();
            setTimeout(function () {
                successMessage.style.display = "none";
            }, 3000);
        } else {
            throw new Error("Form submission failed");
        }
    } catch (error) {
        const failureMessage = document.getElementById("failureMessage");
        failureMessage.style.display = "block";
        form.reset();
        setTimeout(function () {
            failureMessage.style.display = "none";
        }, 3000);
    }
}
