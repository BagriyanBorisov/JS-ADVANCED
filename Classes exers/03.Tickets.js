function result(inputArray, sortCmd)
{
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];

    for(let i = 0; i < inputArray.length; i++)
    {
        let [destination,price,status] = inputArray[i].split("|");
        result.push(new Ticket(destination, price, status));
    }

    return result.sort((a,b) =>
    {
        switch(sortCmd) {
            case "destination" :
                return a.destination.localeCompare(b.destination);
            case "price":
                return a.price - b.price;
            case "status":
                return a.status.localeCompare(b.status);
        }
    });
}

console.log(result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));