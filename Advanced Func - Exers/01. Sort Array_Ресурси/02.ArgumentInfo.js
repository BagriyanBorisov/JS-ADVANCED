function argumentInfo(...params){
    let arr = params;
    let obj = {};
    for(let argument of arr)
    {
        let type = typeof(argument);
        let str = type + ': ';

        if(type === 'object')
        {
            str += JSON.stringify(argument);
        }
      else{
          str += argument;
        }


        console.log(str);
        if(obj[type] === undefined)
        {
            obj[type] = {count: 1};
        }
        else{
            obj[type].count++;
        }
    }

    for(let entry of Object.entries(obj).sort((a,b) => b[1].count - a[1].count))
    {
        console.log(`${entry[0]} = ${entry[1].count}`)
    }
}

argumentInfo({ name: 'bob'}, 3.333, 9.999);