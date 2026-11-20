
const chatForm = document.getElementById("chatForm");

if (chatForm) {

    const chatBox = document.getElementById("chatBox");

    chatForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const input = document.getElementById("userMessage");

        const message = input.value.trim();

        if (message === "") {
            return;
        }

        // User message
        const userMessage = document.createElement("div");

        userMessage.className = "user-message";

        userMessage.textContent = message;

        chatBox.appendChild(userMessage);

        // Demo AI response
        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.textContent =
            "Your question has been received. " +
            "After backend integration, CarePilot AI will " +
            "retrieve relevant medical documents using RAG " +
            "and prepare a contextual response for professional review.";

        chatBox.appendChild(botMessage);

        // Input clear
        input.value = "";

        // Scroll bottom
        chatBox.scrollTop = chatBox.scrollHeight;

    });

}
