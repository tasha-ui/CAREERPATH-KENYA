
// =====================================
// CAREERPATH KENYA
// COMPLETE WEBSITE JAVASCRIPT
// =====================================


// SEARCH ALL KENYAN INSTITUTIONS THROUGH GOOGLE

function searchInstitutions() {
    const searchInput = document.getElementById("institutionSearch");
    const typeInput = document.getElementById("institutionType");

    const search = searchInput.value.trim();
    const type = typeInput ? typeInput.value : "";

    if (!search) {
        alert("Enter an institution, course, county or town.");
        return;
    }

    let query = `${search} ${type} universities colleges TVET institutions Kenya courses fees admission`;

    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query),
        "_blank",
        "noopener,noreferrer"
    );
}


// CONNECT SEARCH BUTTON

document.getElementById("searchInstitutions")
    ?.addEventListener("click", searchInstitutions);


// SEARCH WHEN ENTER IS PRESSED

document.getElementById("institutionSearch")
    ?.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchInstitutions();
        }
    });


// EXPLORE INSTITUTION DIRECTLY

function exploreInstitution(name) {
    const query = `${name} Kenya official website courses fees admissions campus`;

    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query),
        "_blank",
        "noopener,noreferrer"
    );
}


// INSTITUTION DETAILS

function showInstitution(index) {
    const institution = institutions[index];

    if (!institution) return;

    document.getElementById("detailInstitutionName").textContent =
        institution.name;

    document.getElementById("detailInstitutionLocation").textContent =
        institution.location;

    document.getElementById("detailCourses").textContent =
        "Visit the official institution website to view its courses.";

    document.getElementById("detailRequirements").textContent =
        "Check the official admissions information for current requirements.";

    document.getElementById("detailFees").textContent =
        "Check the official institution website for current fees.";

    document.getElementById("detailAccommodation").textContent =
        "Contact the institution for accommodation information.";

    document.getElementById("institutionDetails").hidden = false;

    window.currentInstitution = institution.name;

    document.getElementById("institutionDetails")
        .scrollIntoView({ behavior: "smooth" });
}


function closeInstitution() {
    document.getElementById("institutionDetails").hidden = true;
}


// APPLICATION SECTION

function openApplication() {
    document.getElementById("application").scrollIntoView({
        behavior: "smooth"
    });

    const institutionField = document.getElementById("institution");

    if (institutionField && window.currentInstitution) {
        institutionField.value = window.currentInstitution;
    }
}


// APPOINTMENT SECTION

function openAppointment() {
    document.getElementById("appointments").scrollIntoView({
        behavior: "smooth"
    });

    const institutionField =
        document.getElementById("appointmentInstitution");

    if (institutionField && window.currentInstitution) {
        institutionField.value = window.currentInstitution;
    }
}


// ACCOMMODATION SEARCH

function searchAccommodation() {
    const location = document
        .getElementById("locationSearch").value.trim();

    const type = document
        .getElementById("accommodationType").value;

    if (!location) {
        alert("Enter a town or location.");
        return;
    }

    const query = `${type} student accommodation hostels apartments ${location} Kenya prices`;

    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query),
        "_blank",
        "noopener,noreferrer"
    );
}


document.getElementById("searchAccommodation")
    ?.addEventListener("click", searchAccommodation);


// APPLICATION FORM

document.getElementById("applicationForm")
    ?.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("applicationMessage").textContent =
            "This is a demonstration. Your application has not yet been sent to the institution.";
    });


// APPOINTMENT FORM

document.getElementById("appointmentForm")
    ?.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("appointmentMessage").textContent =
            "This is a demonstration. Your appointment request has not yet been sent to the institution.";
    });


// CAREERPATH ASSISTANT

function getAssistantReply(message) {
    const text = message.toLowerCase();

    if (text.includes("course") || text.includes("career")) {
        return "Tell me your KCSE grade and the subjects you enjoy. I can help you explore possible courses.";
    }

    if (text.includes("fee")) {
        return "Search for your institution on Google and check its official fee structure before applying.";
    }

    if (text.includes("requirement") || text.includes("kcse")) {
        return "Admission requirements differ by course and institution. Always confirm the latest requirements.";
    }

    if (text.includes("accommodation") || text.includes("hostel")) {
        return "Search for student accommodation using the accommodation search section.";
    }

    if (text.includes("appointment")) {
        return "Explore the institution first, then return to CareerPath Kenya to request an appointment.";
    }

    if (text.includes("apply") || text.includes("application")) {
        return "Check the institution's official website, course requirements and fees before applying.";
    }

    return "Welcome to CareerPath Kenya! I can help you explore institutions, courses, fees, admission requirements and applications. What would you like to know?";
}


// CHAT FORM

document.getElementById("chatForm")
    ?.addEventListener("submit", function(event) {
        event.preventDefault();

        const input = document.getElementById("chatInput");
        const chat = document.getElementById("chatWindow");

        const message = input.value.trim();

        if (!message) return;

        const userMessage = document.createElement("p");
        userMessage.textContent = "You: " + message;

        const reply = document.createElement("p");
        reply.textContent =
            "CareerPath Assistant: " + getAssistantReply(message);

        chat.appendChild(userMessage);
        chat.appendChild(reply);

        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    });


// LOAD EXISTING SAMPLE INSTITUTIONS AND ACCOMMODATION

if (typeof institutions !== "undefined" &&
    typeof displayInstitutions === "function") {
    displayInstitutions(institutions);
}

if (typeof accommodation !== "undefined" &&
    typeof displayAccommodation === "function") {
    displayAccommodation(accommodation);
}
