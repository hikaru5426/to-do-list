import { Task, Project, TaskManager, ProjectManager, LocalStorageManager } from "../logic/classes.js";
const sidebarDiv = document.getElementById("sidebar");

const projectsDiv = document.getElementById("sidebarProjectsContainer");



class Sidebar {

    static buildProjects() {
        for (const project of ProjectManager.projects) {
            const projectDiv = document.createElement("div");
            projectDiv.dataset.projectTitle = project.title;
            projectDiv.classList.add("sidebarRow", "sidebarProject");

            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.title;

            const editProjectBtn = document.createElement("button");
            editProjectBtn.type = "button";
            editProjectBtn.classList.add("sidebarBtn", "editProjectBtn");
            editProjectBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>pencil</title>
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
                    `;

            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.type = "button";
            removeProjectBtn.classList.add("sidebarBtn", "removeProjectBtn");
            removeProjectBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>trash-can-outline</title>
                <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
            `

            projectDiv.append(projectTitle, editProjectBtn, removeProjectBtn);
            projectsDiv.append(projectDiv);

        }
    }

    static updateProjectsUI(){
        projectsDiv.innerHTML = "";
        this.buildProjects();
    }
}




export { Sidebar };