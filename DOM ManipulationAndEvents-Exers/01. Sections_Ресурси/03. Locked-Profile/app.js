function lockedProfile() {
    let radios = document.querySelectorAll("input[type=radio]");

    for (let radio of radios)
    {
        radio.addEventListener('change', allow);
    }

    function allow(event){
        let currRadio = event.target;
        let btn =  event.target.parentElement.getElementsByTagName("button")[0];
        btn.setAttribute('disabled', '');
        if(currRadio.value === 'unlock')
        {
            currRadio.setAttribute('checked', '');
            btn.removeAttribute('disabled');
           btn.addEventListener('click', show);
        }
        else
        {
            currRadio.removeAttribute('checked');
            btn.removeEventListener('click', show);
        }
    }


    function show(event)
    {
        let rightHidden = event.target.parentElement.querySelector("div[class=profile] div");
        let btn = event.target;

        if(rightHidden.style.display === "inline-block")
        {
            rightHidden.style.display = "none";
            btn.innerText = "Show more";
        }
        else
        {
            rightHidden.style.display = "inline-block";
            btn.innerText = "Hide it";
        }
    }
}