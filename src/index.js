// "Side effect Import" of the main CSS to load it on Webpack.
import "./styles/styles.css";

// Imports:
import mainContainer from "./scripts/dom/main-container.js";

// Main:
mainContainer.render();

// Dummy Tasks:
import { createDummyTasks } from "./scripts/dummyCardGenerator.js";
createDummyTasks();