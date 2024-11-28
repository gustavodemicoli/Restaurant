import { createAndAppend } from "./pageload";

export const menuPage = function() {
    const contentDiv = document.querySelector('#content');

    const subHeader = createAndAppend("h3", "TOP Menu", contentDiv )

    const menuList = createAndAppend("ol", "",contentDiv )
    const grilledLamb = createAndAppend("li", "Grilled Lamb Rump", menuList)
    const gLDesc = createAndAppend("p", `Tender lamb rump grilled to a perfect 
        medium, topped with a rich, savory mushroom sauce. Accompanied by roasted seasonal 
        vegetables and mashed potatoes.`, grilledLamb)

    const porkBelly = createAndAppend("li", "Herb-Stuffed Pork Belly", menuList);
    const pBDesc = createAndAppend("p", ` Rolled and roasted pork belly infused 
        with garlic and fresh herbs, served with a zesty salsa verde.Served with 
        a side of grilled asparagus and garlic bread.`, porkBelly)

    const salmon = createAndAppend("li", "Pan-Seared Salmon", menuList);
    const salDesc = createAndAppend("p", `Fresh salmon fillet pan-seared to 
        perfection, served with a lemon dill sauce.
        Paired with wild rice pilaf and sautéed spinach.`, salmon);

    const pumpkin = createAndAppend("li", "Pumpkin Gnocchi", menuList);
    const pumpkinDesc = createAndAppend("p", `Handmade pumpkin gnocchi tossed
         in a sage butter sauce, finished with roasted walnuts and parmesan 
         shavings.`, pumpkin);

    const Vegan = createAndAppend("p", "Vegan option available upon request", contentDiv)

}

//Top Restaurant Menu
// 1. Grilled Lamb Rump
// Tender lamb rump grilled to a perfect medium, topped with a rich, savory mushroom sauce.
// Accompanied by roasted seasonal vegetables and mashed potatoes.

// 2. Herb-Stuffed Pork Belly
// Rolled and roasted pork belly infused with garlic and fresh herbs, served with a zesty salsa verde.
// Served with a side of grilled asparagus and garlic bread.

// 3. Pan-Seared Salmon
// Fresh salmon fillet pan-seared to perfection, served with a lemon dill sauce.
// Paired with wild rice pilaf and sautéed spinach.

// 4. Pumpkin Gnocchi
// Handmade pumpkin gnocchi tossed in a sage butter sauce, finished with roasted walnuts and parmesan shavings.
// Vegan option available upon request.

