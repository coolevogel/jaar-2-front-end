const toBeClonedSection = document.getElementById("js--toBeCloned");

fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        const main = document.querySelector('main');

        //maakt section
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);

        //maakt header
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);

        //maakt h2 in de header
        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__h2");
        toBeAddedH2.innerText = data.title;
        toBeAddedHeader.appendChild(toBeAddedH2);

        //maakt wrapper in de header
        let toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);

        //maakt number in de wrapper
        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__number");
        toBeAddedNumber.innerText = data.activities.length;
        toBeAddedWrapper.appendChild(toBeAddedNumber);

        //maakt button in de wrapper
        let toBeAddedButton = document.createElement("button");
        toBeAddedButton.classList.add("tasks__edit");
        toBeAddedButton.innerText = "...";
        toBeAddedWrapper.appendChild(toBeAddedButton);
        
        //maakt list in de section
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);

        for(let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);



            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label");
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);

            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedP);
        }
    }
)









//activity label
//clone.children[1].children[0].children[0].innerText = data.activities[0].label;
//activity text
//clone.children[1].children[0].children[1].innerText = data.activities[0].description;
