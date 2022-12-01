function solve(){
    let author = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');
    let formSection = document.getElementsByTagName('section')[1];
    let archiveSection = document.getElementsByTagName('ol')[0];

    document.getElementsByClassName("create")[0].addEventListener('click', createPost);


    function createPost(ev){
      ev.preventDefault();
      let authorValue = author.value;
      let titleValue = title.value;
      let categoryValue = category.value;
      let contentValue = content.value;

      //if (!authorValue || !titleValue || !categoryValue || !contentValue){
        //return;
     // }
      let article = document.createElement("article");
      let hTitle = document.createElement('h1');
      let pCategory = document.createElement('p');
      let strongCat = document.createElement('strong');
      let pCreator = document.createElement('p');
      let strongCreator = document.createElement('strong');
      let pContent = document.createElement('p');
      let divBtn = document.createElement('div');
      let deleteBtn = document.createElement('button');
      let archiveBtn = document.createElement('button');

      hTitle.textContent = titleValue;
      pCategory.textContent = `Category: `;
      strongCat.textContent = categoryValue;
      pCreator.textContent = `Creator: `;
      strongCreator.textContent = authorValue;
      pContent.textContent = contentValue;
      divBtn.setAttribute("class", "buttons");
      deleteBtn.setAttribute("class", "btn delete");
      deleteBtn.textContent = `Delete`;
      deleteBtn.addEventListener('click', (ev)=>{
        ev.preventDefault()
        deletePost(ev,article);
      })
      archiveBtn.setAttribute("class", "btn archive");
      archiveBtn.textContent =`Archive`;
      archiveBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        archivePost(ev,hTitle.textContent);
        deletePost(ev,article);
      })

      pCategory.appendChild(strongCat);
      pCreator.appendChild(strongCreator);
      divBtn.appendChild(deleteBtn);
      divBtn.appendChild(archiveBtn);
      article.appendChild(hTitle);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divBtn);
      formSection.appendChild(article);
      // clearFields();
    }

    function archivePost(ev,value){
      let li = document.createElement('li');
      li.textContent= value;
      archiveSection.appendChild(li);
      let res=[];
      for (let li of Object.values(archiveSection.children).sort((a,b)=>a.textContent.localeCompare(b.textContent))){
          res.push(li);
      }
      archiveSection.textContent="";
      for (let li of res){
          archiveSection.appendChild(li);
      }
    }

    function deletePost(ev,article){
      formSection.removeChild(article);
    }

    // function clearFields(){
    //   author.value="";
    //   title.value="";
    //   category.value="";
    //   content.value="";
    // }
  }
