import "./styles.css";
import {Task, Project, TaskManager, ProjectManager} from "./exports/classes.js";
import { format, addDays, subDays, addMonths, differenceInDays, isBefore, isAfter, isToday, parseISO } from 'date-fns'

window.debug = {TaskManager, Task, ProjectManager, Project};

ProjectManager.addProject("Default Project");
ProjectManager.addProject("Project Number 2");
TaskManager.addTask("Sortir le chien", "Default Project", "le chien a besoin de faire sa promenade journalière", [2026, 3, 17], 2);
TaskManager.addTask("Sortir le chat", "Default Project", "le chat a besoin de sortir tous les jours", [2025, 5, 2], 3);
TaskManager.addTask("Manger sainement", "Project Number 2", "Il est important pour la santé de bien manger", [2027, 6, 11], 1);