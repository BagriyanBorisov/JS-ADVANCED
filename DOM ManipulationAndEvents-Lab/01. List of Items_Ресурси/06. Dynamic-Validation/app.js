function validate() {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let input = document.getElementById('email');

    input.addEventListener('change', function ()
    {
        if(!(input.value.match(pattern)))
        {
            input.className = "error";
        }
        else
        {
            input.removeAttribute('class')
        }
    })

}