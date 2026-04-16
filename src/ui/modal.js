
import{Sidebar} from "./sidebar.js";

const overlayDiv = document.getElementById("overlayDiv");
const modalDiv = document.getElementById("modalDiv");

class Modal {
    static type = "";
    static content = "";

    static create(modalType) {
        this.type = modalType;
        switch (this.type) {
            case "addProject":
                this.content = `
                <h2>Add Project :</h2>
                <form id="addProjectForm">
                <label for="addProjectInput">Project Name :</label>
                    <input type="text" placeholder="Project name" maxlength="50" name="addProjectInput" id="addProjectInput">
                    <button type="button" id="addProjectCancelBtn">Cancel</button>
                    <button type="submit" id="addProjectSubmitBtn">Add</button>
                </form>`
                break;
            case "editProject":
                this.content = `
                <h2>Edit Project :</h2>
                <form id="editProjectForm">
                    <label for="editProjectInput">Project Name :</label>
                    <input type="text" maxlength="50" name="editProjectInput" id="editProjectInput">
                    <button type="button" id="editProjectCancelBtn">Cancel</button>
                    <button type="submit" id="editProjectSubmitBtn">Confirm</button>
                </form>`
            case "removeProject":
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