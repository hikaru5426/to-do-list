import { Task, Project, TaskManager, ProjectManager, LocalStorageManager } from "../logic/classes.js";
const sidebarDiv = document.getElementById("sidebar");

class sidebar {
    
    static buildProjects() {
        const projectsDiv = document.createElement("div");
        projectsDiv.id = "sidebarProjectsContainer";

        for (const project of ProjectManager.projects) {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("sidebarRow", "sidebarProject");

            const projectTitle = document.createElement("h2");
            projectTitle.textContent = project.title;

            const editProjectBtn = document.createElement("button");
            editProjectBtn.id = project.title;
            editProjectBtn.classList.add("sidebarBtn", "editProjectBtn");
            editProjectBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>pencil</title>
                        <path
                            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                    `;
            projectDiv.append(projectTitle, editProjectBtn);
            projectsDiv.append(projectDiv);

        }
        sidebarDiv.append(projectsDiv);

    }
}

// sidebarDiv.addEventListener("click",(e) {
//     const button = e.target.closest("button");
//     switch(button.id){
//         case ""
//     }
// })

export { sidebar };