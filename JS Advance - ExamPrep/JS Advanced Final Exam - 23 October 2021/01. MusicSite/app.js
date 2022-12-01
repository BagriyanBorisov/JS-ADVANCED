window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById("genre");
    const name = document.getElementById("name");
    const author= document.getElementById("author");
    const date = document.getElementById("date");
    const collectionSongs = document.getElementsByClassName("all-hits-container")[0];
    const savedSongs = document.getElementsByClassName("saved-container")[0];
    const totalLikes = document.getElementsByClassName("likes")[0];
    let likes = 0;

    document.getElementById("add-btn").addEventListener("click", addSong);


    function addSong(ev){
        ev.preventDefault();
        let genreValue = genre.value;
        let nameValue = name.value;
        let authorValue = author.value;
        let dateValue = date.value;

        if(!genreValue || !nameValue || !authorValue || !dateValue){
            return;
        }

        let div = document.createElement("div");
        let img = document.createElement("img");
        let hGenre = document.createElement("h2");
        let hName = document.createElement("h2");
        let hAuthor= document.createElement("h2");
        let hDate= document.createElement("h3");
        let btnSave= document.createElement("button");
        let btnLike= document.createElement("button");
        let btnDelete= document.createElement("button");

        div.setAttribute("class", "hits-info");
        img.src = "./static/img/img.png";
        hGenre.textContent = `Genre: ${genreValue}`;
        hName.textContent = `Name: ${nameValue}`;
        hAuthor.textContent = `Author: ${authorValue}`;
        hDate.textContent = `Date: ${dateValue}`;
        btnSave.textContent = `Save song`;
        btnLike.textContent = `Like song`;
        btnDelete.textContent = `Delete`;

        btnSave.setAttribute("class", "save-btn");
        btnLike.setAttribute("class", "like-btn");
        btnDelete.setAttribute("class", "delete-btn");

        btnSave.addEventListener("click", (ev)=>{
            ev.preventDefault();
            saveSong(ev, div, btnSave, btnLike);
        })
        btnLike.addEventListener("click", likeSong);
        btnDelete.addEventListener("click", (ev)=>{
            ev.preventDefault();
            deleteSong(ev, div);
        })

        div.appendChild(img);
        div.appendChild(hGenre);
        div.appendChild(hName);
        div.appendChild(hAuthor);
        div.appendChild(hDate);
        div.appendChild(btnSave);
        div.appendChild(btnLike);
        div.appendChild(btnDelete);
        collectionSongs.appendChild(div);
        clearFields();


    }

    function deleteSong(ev,div){
        ev.target.parentElement.parentElement.removeChild(div);
    }

    function saveSong(ev, div, btnSave, btnLike){
        div.removeChild(btnSave);
        div.removeChild(btnLike);
        savedSongs.appendChild(div);
    }

    function likeSong(ev){
        ev.preventDefault();
        ev.target.disabled = true;
        likes++;
        totalLikes.children[0].textContent = `Total Likes: ${likes}`;

    }

    function clearFields(){
        genre.value ="";
        name.value = "";
        author.value ="";
        date.value = "";
    }
}