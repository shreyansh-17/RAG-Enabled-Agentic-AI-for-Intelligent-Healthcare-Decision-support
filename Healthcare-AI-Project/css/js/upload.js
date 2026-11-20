
const fileInput = document.getElementById("fileInput");

if (fileInput) {

    fileInput.addEventListener("change", function() {

        const fileList = document.getElementById("fileList");

        fileList.innerHTML = "";

        const files = Array.from(fileInput.files);

        if (files.length === 0) {
            fileList.textContent = "No files selected.";
            return;
        }

        files.forEach(function(file) {

            if (file.type !== "application/pdf") {
                alert("Please select PDF files only.");
                return;
            }

            const fileCard = document.createElement("div");

            fileCard.className = "analysis-card";

            fileCard.style.marginBottom = "12px";

            fileCard.textContent =
                "📄 " + file.name +
                " | Size: " + (file.size / 1024).toFixed(2) +
                " KB";

            fileList.appendChild(fileCard);

        });

    });

}
