
import{Sidebar} from "./sidebar.js";

const overlayDiv = document.getElementById("overlayDiv");
const modalDiv = document.getElementById("modalDiv");

class Modal {
    static content = "";

    static create(modalType, projectTitle=null) {
        switch (modalType) {
            case "addProject":
                this.content = `
                <h2>Add Project :</h2>
                <form class="projectForm" id="addProjectForm">
                    <input type="text" placeholder="Project name" maxlength="50" id="addProjectInput">
                    <p class="nameUnavailable hidden">This name is already used by another project</p>
                    <button type="button" class="cancelBtn" id="addProjectCancelBtn">Cancel</button>
                    <button type="submit" id="addProjectSubmitBtn">Add</button>
                </form>`
                break;
            case "editProject":
                modalDiv.dataset.projectTitle = projectTitle;
                this.content = `
                <h2>Edit Project :</h2>
                <form class="projectForm" id="editProjectForm">
                    <input type="text" value="${projectTitle}" maxlength="50" id="editProjectInput">
                    <p class="nameUnavailable hidden">This name is already used by another project</p>
                    <button type="button" class="cancelBtn" id="editProjectCancelBtn">Cancel</button>
                    <button type="submit" id="editProjectSubmitBtn">Confirm</button>
                </form>`
                break;
            case "removeProject":
                modalDiv.dataset.projectTitle = projectTitle;
                this.content = `
                <h2>Remove Project :</h2>
                <form class ="projectForm" id="removeProjectForm">
                    <p>Do you really want to remove this project ?</p>
                    <button type="button" class="cancelBtn" id="removeProjectCancelBtn">Cancel</button>
                    <button type="submit" id="removeProjectSubmitBtn">Confirm</button>
                </form>`
                break;
        }
        modalDiv.dataset.modalType = modalType;
        modalDiv.innerHTML = this.content;
        Modal.show();

    }

    static hide(){
        overlayDiv.classList.add("hidden");
    }

    static show(){
        overlayDiv.classList.remove("hidden");
    }

    updateUi(modalName){
        switch(modalName){
            case "addProject":
            case "editProject":
                Sidebar.updateProjectsUI();
        }
    }

    updateLogic(modalName, values){
        switch(modalName){
            case "addProject":// values = [newProjectName]:
                
            case "editProject":// values = [newProjectName]

            
        }
    }
}

export { Modal };