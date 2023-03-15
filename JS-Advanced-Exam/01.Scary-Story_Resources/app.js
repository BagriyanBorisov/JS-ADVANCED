window.addEventListener("load", solve)

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const genre = document.getElementById('genre');
  const storyTitle = document.getElementById('story-title');
  const storyText = document.getElementById('story');
  const previewList = document.getElementById('preview-list');
  const mainDiv = document.getElementById('main');

  document.getElementById('form-btn').addEventListener("click", addStory);

  function addStory(ev){
      ev.preventDefault();
      let publishBtn = ev.target;
      let firstNameValue = firstName.value;
      let lastNameValue = lastName.value;
      let ageValue = age.value;
      let genreValue = genre.value;
      let storyTitleValue = storyTitle.value;
      let storyTextValue = storyText.value;

      if(!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !storyTextValue){
          return;
      }

      let li = document.createElement('li');
      let article = document.createElement('article');
      let hName = document.createElement('h4');
      let pAge = document.createElement('p');
      let pTitle = document.createElement('p');
      let pGenre = document.createElement('p');
      let pStoryText = document.createElement('p');
      let saveBtn = document.createElement('button');
      let editBtn = document.createElement('button');
      let deleteBtn = document.createElement('button');

      li.setAttribute('class', 'story-info');
      hName.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
      pAge.textContent = `Age: ${ageValue}`;
      pTitle.textContent = `Title: ${storyTitleValue}`;
      pGenre.textContent = `Genre: ${genreValue}`;
      pStoryText.textContent = storyTextValue;
      saveBtn.setAttribute('class', 'save-btn');
      saveBtn.textContent= `Save Story`;
      editBtn.setAttribute('class', 'edit-btn');
      editBtn.textContent= `Edit Story`;
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.textContent = `Delete Story`;
      publishBtn.disabled = true;
      editBtn.addEventListener('click', (ev)=>{
          ev.preventDefault();
          editStory(ev,firstNameValue,lastNameValue,storyTitleValue, genreValue, storyTextValue,ageValue, li);
          publishBtn.disabled = false;
      });

      deleteBtn.addEventListener('click', (ev)=>{
          ev.preventDefault();
          deleteStory(li);
          publishBtn.disabled = false;
      });

      saveBtn.addEventListener('click', (ev)=>{
          ev.preventDefault();
          saveStory();
      });

      article.appendChild(hName);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStoryText);
      li.appendChild(article);
      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      previewList.appendChild(li);
      clearFields();

  }

  function deleteStory(li){
      previewList.removeChild(li);
  }
  function editStory(ev,firstNameValue,lastNameValue,storyTitleValue, genreValue, storyTextValue,ageValue, li){
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      genre.value = genreValue
      storyText.value = storyTextValue;
      previewList.removeChild(li);
  }

  function saveStory(){
    mainDiv.textContent ="";
    let hSave = document.createElement('h1');
    hSave.textContent = `Your scary story is saved!`
      mainDiv.appendChild(hSave);
  }

  function clearFields(){
      firstName.value = "";
      lastName.value = "";
      age.value = "";
      storyTitle.value = "";
      storyText.value = "";
  }

}
