function attachEventsListeners() {

    let buttons = document.querySelectorAll("input[type=button]");

    for(let btn of buttons)
    {
        btn.addEventListener('click', onSubmit);
    }

    function onSubmit(event)
    {
       let value = Number(event.target.parentElement.children[1].value);
      let id = event.target.id;

      switch(id){
          case "daysBtn": calculate(value * 60 * 60 * 24);
              break;
          case "hoursBtn": calculate(value * 60 * 60);
              break;
          case "minutesBtn": calculate(value * 60);
              break;
          case "secondsBtn": calculate(value);
              break;
      }

      function calculate(valueInSeconds)
      {
            let inputs = Array.from(document.querySelectorAll("input[type=text]"));
            inputs.pop().value = valueInSeconds;
            inputs.pop().value = valueInSeconds / 60;
            inputs.pop().value = valueInSeconds / 60 / 60;
            inputs.pop().value = valueInSeconds / 60 / 60 / 24;
      }
    }
}