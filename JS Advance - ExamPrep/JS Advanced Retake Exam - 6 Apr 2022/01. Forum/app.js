window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById("post-title");
  const category = document.getElementById("post-category");
  const content = document.getElementById("post-content");
  const publishBtn = document.getElementById("publish-btn");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");


  publishBtn.addEventListener("click", (ev) =>{
      ev.preventDefault();
      if(title.value.trim() === ""  || category.value.trim() === "" || content.value.trim() === "" )
      {
          return;
      }
      addPost(ev);
  })

clearBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    for(let i = 0; i < publishedList.children.length;){
        publishedList.removeChild(publishedList.children[i]);
    }
})

    function addPost(ev){
      const li = document.createElement("li");
      const article = document.createElement("article");
      const header = document.createElement("h4");
      const pOne = document.createElement("p");
      const pTwo = document.createElement("p");
      const buttonEdit = document.createElement("button");
      const buttonApprove = document.createElement("button");

        li.setAttribute("class", "rpost");
        header.textContent = title.value;
        pOne.textContent = "Category: " + category.value;
        pTwo.textContent = "Content: " + content.value;
        buttonEdit.textContent = "Edit";
        buttonApprove.textContent = "Approve";
        buttonEdit.setAttribute("class", "action-btn edit");
        buttonApprove.setAttribute("class", "action-btn approve");
        buttonEdit.addEventListener("click", (ev)=>{
            ev.preventDefault();
            console.log(ev.target.parentNode);
            editPost(ev, header.textContent, pOne.textContent, pTwo.textContent);
        });
        buttonApprove.addEventListener("click", (ev)=>{
            ev.preventDefault();
            approvePost(ev, li);
        });

        article.appendChild(header);
        article.appendChild(pOne);
        article.appendChild(pTwo);
        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonApprove);
        reviewList.appendChild(li);
        clearFields();

    }

    function editPost(ev, titleValue, categoryValue, contentValue){

      title.value = titleValue;
      category.value = categoryValue.substring(10);
      content.value = contentValue.substring(9);
      reviewList.removeChild(ev.target.parentNode);
    }

    function approvePost(ev, li){
      li.removeChild(li.children[2]);
      li.removeChild(li.children[1]);
      publishedList.appendChild(li);
      reviewList.removeChild(ev.target.parentNode);
    }

    function clearFields(){
      title.value = "";
      category.value = "";
      content.value = "";
    }

}
