import {Sidebar} from "./sidebar.js";
import {Modal} from "./modal.js";
import { TaskManager, ProjectManager } from "../logic/classes.js";

const overlayDiv = document.querySelectorAll("overlay");

const modalDiv = document.getElementById("modalDiv");

document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.type === "submit") return;
    switch (button.id) {
        case "addProjectBtn":
            Modal.create("addProject");
            // overlayAddProjectDiv.classList.remove("hidden");
            break;
        case "addProjectCancelBtn":
            Modal.hide();
            break;
    }
})

modalDiv.addEventListener("submit", (event) => {
    event.preventDefault();
    switch(modalDiv.dataset.modalType){
        case "addProject":
            const addProjectInput = document.getElementById("addProjectInput");
            Modal.hide();
            ProjectManager.addProject(addProjectInput.value);
            Sidebar.updateProjectsUI();
            break;
    }

    const newProjectName = addProjectInput.value;
    
    // const newProjectName = addProjectInput.value;
    // ProjectManager.addProject(newProjectName);
    // overlayAddProjectDiv.classList.add("hidden");
    // Sidebar.updateProjects();
})