function sameCheck(x){
    let stringNum = x.toString();
    let firstNum = Number(stringNum[0]);
    let isSame = true;
    let sum = firstNum;
    for( i = 1; i < stringNum.length; i++)
    {
        sum += Number(stringNum[i]);
        if(String(firstNum) !== stringNum[i]){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameCheck(2222222);