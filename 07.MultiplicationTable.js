function solve(n) {
    n = Number(n);
    console.log(`<table border="1">`);
    for(let row = 0; row <= n;row++){
        let line = '';
        line += `<tr>`;
        if(row != 0){
            line += `<th>${row}</th>`;
        }

        for(let col = 0; col <= n;col++){
            if(row == 0 && col == 0){
                line += `<th>x</th>`
            }
            else if(row == 0 && col != 0){
                line += `<th>${col}</th>`;
            }
            else if(row != 0 && col != 0){

                line += `<td>${row * col}</td>`;
            }
        }
        line += `</tr>`;
        console.log(line);
    }
    console.log(`</table>`)
}
solve(5);