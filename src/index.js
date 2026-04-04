import "./styles.css";
import {Task, Project, TaskManager, ProjectManager, LocalStorageManager} from "./exports/classes.js";
import { format, addDays, subDays, addMonths, differenceInDays, isBefore, isAfter, isToday, parseISO } from 'date-fns'

debugger;
let testBreakpoint = "Please mister breakpoint show yourself";
window.debug = {Task, Project, TaskManager, ProjectManager, LocalStorageManager, testBreakpoint};

//LocalStorageManager.retrieveData();

ProjectManager.addProject("Default Project");
ProjectManager.addProject("Project Number 2");
TaskManager.addTask("Default Project", "Sortir le chien", "le chien a besoin de faire sa promenade journalière", [2026, 3, 17], 2);
TaskManager.addTask("Default Project", "Sortir le chat", "le chat a besoin de sortir tous les jours", [2025, 5, 2], 3);
TaskManager.addTask("Project Number 2", "Manger sainement", "Il est important pour la santé de bien manger", [2027, 6, 11], 1);
TaskManager.findTaskWithId(1);