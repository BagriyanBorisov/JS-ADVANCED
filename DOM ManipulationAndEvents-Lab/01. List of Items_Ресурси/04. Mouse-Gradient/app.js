function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result = document.getElementById("result");

    gradient.addEventListener('mousemove', function (event){
        let percent =  event.offsetX * 100 / Number(gradient.offsetWidth);
        result.textContent =  Number(percent/100).
        toLocaleString(undefined,
            {style: 'percent', minimumFractionDigits:0});
    });
}