function solve([x,y,xMin,xMax,yMin,yMax]){
    [x,y,xMin,xMax,yMin,yMax] = [x,y,xMin,xMax,yMin,yMax].map(Number);

    if(x >= xMin && x<=xMax && y >= yMin && y<=yMax){
        console.log('inside');
    }else {
        console.log('outside')
    }
}
solve([12.5,-1,2,12,-3,3]);