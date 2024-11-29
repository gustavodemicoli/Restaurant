import "./styles.css"
import { homePage, test } from "./pageload";
import { menuPage } from "./menu";
import { aboutPage } from "./about";

homePage();
// menuPage();
// aboutPage();

const tabRenders = {
    Home: homePage,
    Menu: menuPage,
    About: aboutPage
}

const cleanContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = ""

}

const buttons = document.querySelectorAll('button')



const clickHandler = (e) => {
    cleanContent()
    tabRenders[e.target.textContent]()
}

buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
});


