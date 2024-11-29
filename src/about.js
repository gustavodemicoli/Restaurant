import { createAndAppend } from "./pageload";

export const aboutPage = function () {
    const contentDiv = document.querySelector('#content');
    const subHeader = createAndAppend("h3", "About Us", contentDiv);
    const div = createAndAppend("div", "", contentDiv);

    const pargraph1 = createAndAppend("p",`Welcome to TOP Restaurant,
         where culinary excellence meets warm hospitality. At our 
         restaurant, we believe that dining is more than just a meal—its 
         an experience that brings people together, creates memories, and 
         tells a story through every bite.`, div)

    const pargraph2 = createAndAppend("p",`Our journey began with a 
        passion for fresh, locally sourced ingredients and a vision to 
        create dishes that not only delight the taste buds but also celebrate 
        the artistry of cooking. From our carefully curated menu to our thoughtfully 
        designed dining space, every detail is crafted with care to ensure that 
        your time with us is unforgettable.`, div)

    const pargraph3 = createAndAppend("p",`Whether you’re joining us for a special 
        celebration, a casual meal with loved ones, or a solo visit to unwind, 
        our team is here to make you feel at home. With a diverse selection of 
        dishes, from savory mains to vegetarian and vegan options, we cater to 
        every palate. Pair your meal with our expertly chosen beverages, including 
        fine wines, handcrafted cocktails, and non-alcoholic options.`, div)

    const pargraph4 = createAndAppend("p",`Come and experience the warmth, flavors, 
        and joy that TOP Restaurant has to offer. Let us take care of the details 
        so you can savor each moment.`, div)

    



    


}