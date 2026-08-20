/* =========================================
   SERENITYMIND PASSWORD SYSTEM
========================================= */

// CHANGE YOUR PASSWORD HERE
const correctPassword = "SERENITY2026";


/* =========================================
   CHECK PASSWORD
========================================= */

function checkPassword() {

    const passwordInput =
        document.getElementById("passwordInput");

    const passwordError =
        document.getElementById("passwordError");

    const password =
        passwordInput.value.trim();


    if (password === correctPassword) {

        // Hide password screen
        document.getElementById(
            "passwordScreen"
        ).style.display = "none";


        // Show website
        document.getElementById(
            "websiteContent"
        ).classList.remove("hidden");


        // Remember access during this browser session
        sessionStorage.setItem(
            "serenityMindAccess",
            "granted"
        );


        // Remove error
        passwordError.textContent = "";


    } else {

        passwordError.textContent =
            "❌ Kata laluan tidak betul. Sila cuba lagi.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =========================================
   ENTER KEY
========================================= */

document
    .getElementById("passwordInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );


/* =========================================
   CHECK EXISTING SESSION
========================================= */

window.addEventListener(
    "load",
    function() {

        const access =
            sessionStorage.getItem(
                "serenityMindAccess"
            );


        if (access === "granted") {

            document.getElementById(
                "passwordScreen"
            ).style.display = "none";


            document.getElementById(
                "websiteContent"
            ).classList.remove("hidden");

        }

    }
);


/* =========================================
   START RELAXATION SESSION
========================================= */

function startSession() {

    document.getElementById(
        "hipnoterapi"
    ).scrollIntoView({
        behavior: "smooth"
    });

}
