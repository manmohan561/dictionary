console.log("tutorial 38 dictionary api")

let btn = document.getElementById("btn")
btn.addEventListener('click', ClickkHandler);

function ClickkHandler() {
    console.log("Clicked button");
    let input = document.getElementById("input").value;
    console.log(input);
    //initiating xhr object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + input, true);

    //ready to searve
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            let data=[obj]
            let meaning=data[0][0].meanings[0].definitions[0].definition;
            document.getElementById('output').value = meaning;
        } else {
            console.log("Some error occured");
        }
    }
    xhr.send();
    console.log("Fetching employees")

}