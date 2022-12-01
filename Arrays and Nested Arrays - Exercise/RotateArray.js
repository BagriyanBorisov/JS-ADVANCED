function rotateArray(initArr, count)
{
    for(let i = 0; i < count; i++){
        let lastEl = initArr.pop();
        initArr.unshift(lastEl);
    }

    console.log(initArr.join(' '));
}

rotateArray(['1',
        '2',
        '3',
        '4'],
    2);