function calendar([d,m,y]) {
    [d,m,y]=[d,m,y].map(Number);
    let today = new Date(y, m-1, d);
    let prevMonthLastDay = new Date(y, m-1, 0);
    let currentMonthLastDay = new Date(y, m, 0);
    let currentMonthFirstDay = new Date(y, m-1, 1);
    let oneDay = 24 * 60 * 60 * 1000;
    let values = [];
    let result="<table>\n <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";

    if (currentMonthFirstDay.getDay()!= 0){
        let prevMonthLastDayDate = prevMonthLastDay.getDate();
        for (let i = 1; i <= currentMonthFirstDay.getDay(); i++) {
            values.unshift(`<td class="prev-month">${prevMonthLastDayDate}</td>`);
            prevMonthLastDayDate--;
        }
    }

    for (let i = 1; i <= currentMonthLastDay.getDate(); i++) {
        if(i == today.getDate()){
            values.push(`<td class="today">${i}</td>`);
            continue;
        }
        values.push(`<td>${i}</td>`);
    }

    for (let i = 1; i < 7 - currentMonthLastDay.getDay(); i++) {

        values.push(`<td class="next-month">${i}</td>`);
    }
    for (let i = 0; i < values.length/7; i++) {
        result+="   <tr>";
        for (let j = 0; j < 7; j++) {

            result += values[i*7+j];
        }
        result += "</tr>\n";
    }

    result+="</table>\n";
    return result;
}

