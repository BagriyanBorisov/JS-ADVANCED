function carFactory(inputCar){

    let carCreated = {model: inputCar.model};

    if (inputCar.power <= 90)
    {
        carCreated["engine"] = {power: 90, volume: 1800};
    }
    else if (inputCar.power <= 120)
    {
        carCreated["engine"] = {power: 120, volume: 2400};
    }
    else
    {
        carCreated["engine"] = {power: 200, volume: 3500};
    }
    carCreated["carriage"] = {type: inputCar.carriage, color: inputCar.color }

    let size = Number(inputCar["wheelsize"]);
    if (inputCar["wheelsize"] % 2 === 0)
    {
        size -= 1;
    }
    carCreated["wheels"] = Array(4).fill(size);
    return carCreated;
}

carFactory({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 });