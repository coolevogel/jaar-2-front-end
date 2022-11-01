//haalt de informatie uit het .json bestand door middel van een response te returnen
fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    //zet de informatie van de response in een function met de naam data
    function (data) {
        //maakt het object "main aan"
        const main = document.querySelector('main');

        // //maakt een secrion met classe "tasks" en zet in de msin
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);

        // //maakt een header met classe "tasks__header" en zet in de section
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);

        // //maakt een h2 met classe "tasks__h2 en zet in de header
        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__h2");
        toBeAddedH2.innerText = data.title;
        toBeAddedHeader.appendChild(toBeAddedH2);

        // //maakt een div met classe "tasks__headerWrapper" en zet in de header
        let toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);

        // //maakt een div met classe "tasks__number" en zet in de wrapper
        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__number");
        toBeAddedNumber.innerText = data.activities.length;
        toBeAddedWrapper.appendChild(toBeAddedNumber);

        // //maakt een Button met classe "tasks__edit" en zet in de wrapper
        let toBeAddedButton = document.createElement("button");
        toBeAddedButton.classList.add("tasks__edit");
        toBeAddedButton.innerText = "...";
        toBeAddedWrapper.appendChild(toBeAddedButton);

        // //maakt een ul met classe "tasks__list" en zet in de section
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);

        //maakt een for loop die loopt voor hoeveel objects er in de array "activities" staan
        for (let i = 0; i < data.activities.length; i++) {
            //maakt een Li met classe "tasks__listItem" en zet in de ul
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);




            //maakt een label met de classe "tasks__label"
            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label");
            //geeft het label een extra class op basis van wat er in het object "extraClass" staat
            if (data.activities[i].extraClass !== "") {
                toBeAddedLabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            };
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);

            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedP);
            

            //maakt div aan waarin de naame van de author word gezet met een aparte kleurr
            let toBeAddedAuthor = document.createElement("div");
            toBeAddedAuthor.classList.add("tasks__author");
            toBeAddedAuthor.innerText = data.activities[i].name;
            toBeAddedLi.appendChild(toBeAddedAuthor);

            if (data.activities[i].color !== "") {
                toBeAddedAuthor.classList.add("tasks__author" + data.activities[i].color)
            };
        }
    }
)



//activity label
//clone.children[1].children[0].children[0].innerText = data.activities[0].label;
//activity text
//clone.children[1].children[0].children[1].innerText = data.activities[0].description;
