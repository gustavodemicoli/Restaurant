export const test = "this ccame from pageload";

export const createAndAppend = function (elementType, elementContent, parentElement ) {
    const newElement = document.createElement(elementType)
    newElement.textContent = elementContent;
    parentElement.appendChild(newElement);

    return newElement
}

export const homePage = function () {
    const contentDiv = document.querySelector('#content');
    const subHeader = createAndAppend("h3", "Welcome to TOP Restaurant", contentDiv )

    const infoDiv = createAndAppend("div", `Step into a world where flavors tell stories, and every dish is crafted with 
         love and passion. We are delighted to have you here, whether you're joining us for a special celebration, a casual
          meal, or simply to indulge in great food and warm hospitality.`, contentDiv)
    
    const br = createAndAppend("br", "", infoDiv)
    const listHeading = createAndAppend("strong", "Awaiting you:", infoDiv)
    
    const list = createAndAppend("ul", "", contentDiv)

    list.id = "list"

    const listItem1 = createAndAppend("li", `🍴 A Culinary Journey: Discover a menu filled with fresh, locally sourced 
        ingredients and creative dishes designed to delight your taste buds.`, list)
    
    const listItem2 = createAndAppend("li", `🍷 Perfect Pairings: Explore our curated selection of beverages, from 
        fine wines to handcrafted cocktails, to complement every bite.`, list)

    const listItem3 = createAndAppend("li", `💖 A Welcoming Ambiance: Relax and enjoy the cozy atmosphere that 
        makes every meal unforgettable.`, list)

    const conclusion = createAndAppend(
        "p", 
        `Thank you for choosing TOP. Let us take care of the details so you can savor every moment. 
        Bon Appétit! The TOP Team`, 
        contentDiv
    );

};