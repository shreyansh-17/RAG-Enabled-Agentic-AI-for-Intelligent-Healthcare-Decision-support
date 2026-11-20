
const profileForm = document.getElementById("profileForm");

if (profileForm) {

    const fields = [
        "fullName",
        "email",
        "role",
        "organization"
    ];

    const profileName = document.getElementById("profileName");

    // Saved profile load karna
    const savedProfile = JSON.parse(
        localStorage.getItem("carepilotProfile") || "null"
    );

    if (savedProfile) {

        fields.forEach(function(id) {

            document.getElementById(id).value =
                savedProfile[id] || "";

        });

        profileName.textContent =
            savedProfile.fullName || "Demo User";

    }

    // Save profile
    profileForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const profile = {};

        fields.forEach(function(id) {

            profile[id] = document.getElementById(id).value;

        });

        localStorage.setItem(
            "carepilotProfile",
            JSON.stringify(profile)
        );

        profileName.textContent = profile.fullName;

        alert("Profile saved successfully!");

    });

    // Reset profile
    document.getElementById("resetProfile")
        .addEventListener("click", function() {

            localStorage.removeItem("carepilotProfile");

            profileForm.reset();

            profileName.textContent = "Demo User";

            alert("Profile reset successfully!");

        });

    // Profile photo preview
    const photoInput = document.getElementById("photoInput");

    photoInput.addEventListener("change", function() {

        const file = photoInput.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function() {

            const avatar = document.getElementById("avatar");

            avatar.textContent = "";

            avatar.style.backgroundImage =
                `url("${reader.result}")`;

        };

        reader.readAsDataURL(file);

    });

}
