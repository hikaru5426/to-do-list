import { Sidebar } from "./sidebar.js";
import { MainContent } from "./mainContent.js"

const overlayDiv = document.getElementById("overlayDiv");
const modalDiv = document.getElementById("modalDiv");

class Modal {

    static create(modalType, projectTitle = null) {
        modalDiv.innerHTML = "";
        modalDiv.dataset.projectTitle = projectTitle;
        modalDiv.dataset.modalType = modalType;

        switch (modalType) {
            case "addProject":
                modalDiv.innerHTML = `
                <h2>Add Project :</h2>
                <form class="projectForm" id="addProjectForm">
                    <input type="text" placeholder="Project name" maxlength="50" id="addProjectInput">
                    <p class="nameUnavailable hidden">This name is already used by another project</p>
                    <button type="button" class="cancelBtn" id="addProjectCancelBtn">Cancel</button>
                    <button type="submit" id="addProjectSubmitBtn">Add</button>
                </form>`
                break;
            case "editProject":
                modalDiv.innerHTML = `
                <h2>Edit Project :</h2>
                <form class="projectForm" id="editProjectForm">
                    <input type="text" value="${projectTitle}" maxlength="50" id="editProjectInput">
                    <p class="nameUnavailable hidden">This name is already used by another project</p>
                    <button type="button" class="cancelBtn" id="editProjectCancelBtn">Cancel</button>
                    <button type="submit" id="editProjectSubmitBtn">Confirm</button>
                </form>`
                break;
            case "removeProject":
                modalDiv.innerHTML = `
                <h2>Remove Project :</h2>
                <form class ="projectForm" id="removeProjectForm">
                    <p>Do you really want to remove the <span class="bold">${projectTitle}</span> project ?</p>
                    <button type="button" class="cancelBtn" id="removeProjectCancelBtn">Cancel</button>
                    <button type="submit" id="removeProjectSubmitBtn">Confirm</button>
                </form>`
                break;
            case "addTask":
                const titleDiv = document.createElement("div");
                titleDiv.id = "addTaskTitleDiv";
                const titleLabel = document.createElement("label");
                titleLabel.id = "addTaskTitleLabel";
                titleLabel.for = "addTaskTitleInput";
                titleLabel.textContent = "Task Name :"
                const titleInput = document.createElement("input");
                titleInput.id = "addTaskTitleInput";
                titleInput.type = "text";
                titleInput.required = true;
                titleDiv.append(titleLabel, titleInput);

                const priorityDiv = document.createElement("div");
                priorityDiv.id = "addTaskPriorityDiv";
                const priorityLabel = document.createElement("label");
                priorityLabel.id = "addTaskPriorityLabel";
                priorityLabel.for = "addTaskPriorityInput";
                priorityLabel.textContent = "Priority :";
                const priorityInput = document.createElement("input");
                priorityInput.id = "addTaskPriorityInput";
                priorityInput.type = "number";
                priorityInput.value = 1;
                priorityInput.min = 1;
                priorityInput.max = 5;
                priorityDiv.append(priorityLabel, priorityInput);

                const dueDateDiv = document.createElement("div");
                dueDateDiv.id = "addTaskDueDateDiv";
                const dueDateLabel = document.createElement("label");
                dueDateLabel.id = "addTaskDueDateLabel";
                dueDateLabel.for = "addTaskDueDateInput";
                dueDateLabel.textContent = "Due date :";
                const dueDateInput = document.createElement("input");
                dueDateInput.id = "addTaskDueDateInput";
                dueDateInput.type = "date";
                const today = new Date();
                dueDateInput.value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
                dueDateInput.min = dueDateInput.value;
                dueDateDiv.append(dueDateLabel, dueDateInput);

                const descriptionDiv = document.createElement("div");
                descriptionDiv.id = "addTaskDescriptionDiv";
                const descriptionLabel = document.createElement("label");
                descriptionLabel.id = "addTaskDescriptionLabel";
                descriptionLabel.for = "addTaskDescriptionTextArea";
                descriptionLabel.textContent = "Description :";
                const descriptionTextArea = document.createElement("textarea");
                descriptionTextArea.id = "addTaskDescriptionTextArea";
                descriptionTextArea.placeholder = "Write the description of the task here";
                descriptionDiv.append(descriptionLabel, descriptionTextArea);

                const buttonDiv = document.createElement("div");
                buttonDiv.id = "addTaskButtonDiv";
                const cancelBtn = document.createElement("button");
                cancelBtn.textContent = "Cancel";
                cancelBtn.id = "addTaskCancelBtn";
                cancelBtn.classList.add("cancelBtn");
                cancelBtn.type = "button";
                const confirmBtn = document.createElement("button");
                confirmBtn.textContent = "Confirm";
                confirmBtn.id = "addTaskConfirmBtn";
                confirmBtn.type = "submit";
                buttonDiv.append(cancelBtn, confirmBtn);

                modalDiv.append(titleDiv, priorityDiv, dueDateDiv, descriptionDiv, buttonDiv);
                break;
        }
        Modal.show();

    }

    static hide() {
        overlayDiv.classList.add("hidden");
    }

    static show() {
        overlayDiv.classList.remove("hidden");
    }

    updateUi(modalName) {
        switch (modalName) {
            case "addProject":
            case "editProject":
                Sidebar.updateProjectsUI();
        }
    }

    updateLogic(modalName, values) {
        switch (modalName) {
            case "addProject":// values = [newProjectName]:

            case "editProject":// values = [newProjectName]


        }
    }
}

export { Modal };