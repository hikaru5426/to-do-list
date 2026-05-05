import { Sidebar } from "./sidebar.js";
import { Modal } from "./modal.js";
import { TaskManager, ProjectManager } from "../logic/classes.js";

const overlayDiv = document.querySelectorAll("overlay");

const modalDiv = document.getElementById("modalDiv");

document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.type === "submit") return;

    const btnClassList = button.classList;

    if (btnClassList.contains("cancelBtn")) Modal.hide();
    else if (btnClassList.contains("addProjectBtn")) Modal.create("addProject");
    else if (btnClassList.contains("editProjectBtn")) {
        const projectTitle = button.parentElement.dataset.projectTitle;
        Modal.create("editProject", projectTitle);
    } else if (btnClassList.contains("removeProjectBtn")) {
        const projectTitle = button.parentElement.dataset.projectTitle;
        Modal.create("removeProject", projectTitle);
    } else if (btnClassList.contains("addTaskBtn")) {
        const currentProject = document.body.dataset.currentProject;
        Modal.create("addTask", currentProject);
    }
})

modalDiv.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (modalDiv.dataset.modalType) {
        case "addProject":
            const addProjectInput = document.getElementById("addProjectInput");
            if (ProjectManager.isTitleAvailable(addProjectInput.value)) {
                Modal.hide();
                ProjectManager.addProject(addProjectInput.value);
                Sidebar.updateProjectsUI();
            } else {
                const nameUnavailable = modalDiv.querySelector(".nameUnavailable");
                nameUnavailable.classList.remove("hidden");
            }

            break;
        case "editProject":
            const editProjectInput = document.getElementById("editProjectInput");
            const newProjectTitle = editProjectInput.value;
            const oldProjectTitle = modalDiv.dataset.projectTitle;
            if (newProjectTitle === oldProjectTitle) Modal.hide();
            if (ProjectManager.isTitleAvailable(newProjectTitle)) {
                Modal.hide();

                ProjectManager.editProject(oldProjectTitle, newProjectTitle);
                Sidebar.updateProjectsUI();
            } else {
                const nameUnavailable = modalDiv.querySelector(".nameUnavailable");
                nameUnavailable.classList.remove("hidden");
            }
            break;

        case "removeProject":
            const projectTitle = modalDiv.dataset.projectTitle;
            Modal.hide();
            ProjectManager.removeProject(projectTitle);
            Sidebar.updateProjectsUI();
            break;
        
        case "addTask":
            //const projectTitle = document.getElementById()
            break;
    }
})