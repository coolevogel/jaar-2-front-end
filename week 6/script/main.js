const toBeClonedSection = document.getElementById("js--toBeCloned");

fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        const clone = toBeClonedSection.cloneNode(true);
        clone.classList.toggle('tasks--hidden');
        clone.setAttribute("id", "");
        document.querySelector('main').appendChild(clone);
        //h2
        clone.firstElementChild.firstElementChild.innerText = data.title;
        //number
        clone.firstElementChild.children[1].children[0].innerText = data.activitiesCount
    }
)