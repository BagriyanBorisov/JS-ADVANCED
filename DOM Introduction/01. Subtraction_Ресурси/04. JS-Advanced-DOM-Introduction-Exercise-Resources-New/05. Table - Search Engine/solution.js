function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
       let tableRows = document.querySelectorAll("tbody tr");
       let searchInput = document.getElementById("searchField").value;
       // tableRows.forEach(e => {
       //            if (e.className === 'select') {
       //                e.className = '';
       //            }
       //        });
       for (let i = 0; i < tableRows.length; i++) {
           let currRow = tableRows[i].querySelectorAll('td');
           let isSelected = false;
            for(let j = 0; j < currRow.length; j++)
            {
                if(currRow[j].textContent === searchInput || currRow[j].textContent.includes(searchInput))
                {
                    isSelected = true;
                }
            }
            if(isSelected === true)
            {
                tableRows[i].className = 'select';
            }
       }
       document.getElementById("searchField").value = '';
       tableRows.forEach(e => {
           if (e.className === 'select') {
               e.className = '';
           }
       });
   }
}
