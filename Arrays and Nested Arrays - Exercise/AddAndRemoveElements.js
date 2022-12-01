function solve(inputArray){
    let outputArray= [];
    let num = 1;
    for(let i = 0; i < inputArray.length; i++)
    {  
        if(inputArray[i] === 'add')
        {
            outputArray.push(num);
        }
        else if(inputArray[i] === 'remove')
        {
            outputArray.pop();
        }     
       num++;
    }

    if(outputArray.length <= 0 )
    {
        console.log('Empty');
    }
    else
    {
        for(let num of outputArray)
            {
                console.log(num);
            }
        
    }
}

solve(['add', 
'add',
'add', 
'add']);