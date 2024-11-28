import "./styles.css"
import { homePage, test } from "./pageload";
import { menuPage } from "./menu";

// homePage();
menuPage();

const tabRenders = {
    Home: homePage

}

console.log("index.js says hello");
console.log("index.js says " + test);