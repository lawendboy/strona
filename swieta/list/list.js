(() => {

    function getDayName(dateStr){
        let date = new Date(dateStr);
        return date.toLocaleDateString('pl-PL', {weekday: 'long'});
    }

    function createCalendar(){

        let table = document.createElement('table');
        table.border = "1";
        document.querySelector(".kalendarz").appendChild(table);

        let titleTR = document.createElement('tr');
        table.appendChild(titleTR);
        let title = document.createElement('td');
        titleTR.appendChild(title);

        title.colSpan = "7";
        title.className = "titleKalendarz"
        title.innerHTML = "<center>KALENDARZ</center>";

        let daysTitle = document.createElement('tr');
        table.appendChild(daysTitle);

        let weekdays = [
            "PN", "WT", "ŚR", "CZ", "PT", "SB", "ND"
        ]

        for(let k = 0; k < 7; k++){
            let td = document.createElement('td');
            
            td.innerHTML = weekdays[k];
            td.className = "tday";

            daysTitle.appendChild(td);
        }

        let day = 0;
        let days = [];

        for(let j = 0; j < 5; j++){
            
            let tr = document.createElement('tr');

            for(let i = 0; i < 7; i++){
                
                let td = document.createElement('td');
                
                day++;
                if(day > 5 && day < 31){
                    td.innerHTML = `${day - 5}`;
                }

                td.className = "day" + i;
                
                tr.appendChild(td);
                days.push(td)

            }

            table.appendChild(tr);

        }

    }

    createCalendar();

})();