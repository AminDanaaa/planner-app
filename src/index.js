// "Side effect Import" of the main CSS to load it on Webpack.
import "./styles/styles.css";

// Note: Just a check in console.
// You can remove everything below this comment.
import { checkModules } from "./scripts/initial-module";
console.log(`Webpack template made by [AminDanaaa].`);
checkModules();