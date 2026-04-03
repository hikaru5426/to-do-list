import "./styles.css";
import {Task, Project, TaskManager, ProjectManager} from "./exports/classes.js";
import { format, addDays, subDays, addMonths, differenceInDays, isBefore, isAfter, isToday, parseISO } from 'date-fns'

window.debug = {TaskManager, Task, ProjectManager, Project};

ProjectManager.addProject("Default Project");
TaskManager.addTask("Sortir le chien", "Default Project", "le chien a besoin de faire sa promenade journalière", [2026, 3, 17], 2);