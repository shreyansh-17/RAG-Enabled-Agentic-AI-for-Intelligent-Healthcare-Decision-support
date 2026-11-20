
const workflowButton = document.getElementById("runWorkflow");

if (workflowButton) {

    workflowButton.addEventListener("click", function() {

        const status = document.getElementById("workflowStatus");

        const stages = [

            "Step 1: Receiving User Query...",

            "Step 2: AI Agent Processing...",

            "Step 3: Retrieving Medical Documents using RAG...",

            "Step 4: LLM Analyzing Retrieved Context...",

            "Step 5: Preparing Final Response..."

        ];

        let index = 0;

        workflowButton.disabled = true;

        status.textContent = stages[index];

        const interval = setInterval(function() {

            index++;

            if (index < stages.length) {

                status.textContent = stages[index];

            } else {

                clearInterval(interval);

                status.textContent =
                    "Demo Workflow Completed Successfully!";

                workflowButton.disabled = false;

            }

        }, 1500);

    });

}
