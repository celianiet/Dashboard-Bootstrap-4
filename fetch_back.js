function fetchData(){
    //var rollDie = new getRandomizer( 0, 3 );
    const xhttp = new XMLHttpRequest();
    xhttp.open ('GET', 'employees.json', true);
    xhttp.send();
    var statusProblems = [];
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
         
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector("#dashboard-table");
            res.innerHTML = '';   
            
            

        for(let item of datos){
            var alerts = item.status;
            if (alerts == true) {
                statusProblems.push(item);
                res.innerHTML += `
                    <tr>
                        <td>${item.email}</td>
                        <td>${item.role}</td>
                        <td>${item.email}</td>
                        <td>${item.accounting_list[0]}</td>
                    </tr>
                `

            }
        }
            

        }

    }
    return statusProblems;

}
fetchData();

function drawRolesTable(){
    //var rollDie = new getRandomizer( 0, 3 );
    const xhttp2 = new XMLHttpRequest();
    xhttp2.open ('GET', 'employees.json', true);
    xhttp2.send();
    xhttp2.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
         
            let data2 = JSON.parse(this.responseText);
            let rolesTable = document.querySelector("#roles_table");
            rolesTable.innerHTML = '';   
            
            

        for(let item of data2){

                rolesTable.innerHTML += `
                    <tr>
                        <td class="statusTd">${item.status ? '<i class="bi bi-exclamation-triangle"></i>' : '<i class="bi bi-check2-circle"></i>'}</td>
                        <td>${item.email}</td>
                        <td>${item.role}</td>
                        <td id="appropiate">Alert!</td>
                        <td>Oct 27, 2020</td>
                        <td>Sean O'Neill</td>
                        <td>${item.last_login}</td>
                        <td>
                           <select class="form-select">
                                <option>Select</option>
                                <option id="remove">Remove role</option>
                                <option id="keep">Keep role as it is</option>
                           </select>
                        </td>
                    </tr>
                `

        }
            

        }

    }

}
drawRolesTable()

function drawPermissionTable(){
    //var rollDie = new getRandomizer( 0, 3 );
    const xhttp3 = new XMLHttpRequest();
    xhttp3.open ('GET', 'employees.json', true);
    xhttp3.send();
    xhttp3.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
         
            let data3 = JSON.parse(this.responseText);
            let permissionTable = document.querySelector("#permission_table");
            permissionTable.innerHTML = '';   
            
            

        for(let item of data3){
            var alerts = item.status;
            if (alerts == true) {
                permissionTable.innerHTML += `
                    <tr>
                        <td class="statusTd">${item.status ? '<i class="bi bi-exclamation-triangle"></i>' : '<i class="bi bi-check2-circle"></i>'}</td>
                        <td>${item.email}</td>
                        <td>${item.role}</td>
                        <td>Access Payment Audit Log</td>
                        <td>
                            <select class="form-select">
                                <option>View</option>
                                <option>Edit</option>
                                <option>Create</option>
                                <option>Full</option>
                                <option>none</option>
                            </select>
                        </td>
                        <td>${item.last_login}</td>
                        <td id="frequency">Used frequently</td>
                        <td>${item.status}</td>
                        <td>
                           <select class="form-select">
                                <option>Select</option>
                                <option id="review">Review next cycle</option>
                                <option id="keep">Keep role as it is</option>
                                <option id="remove">Remove Permission</option>
                           </select>
                        </td>
                       
                    </tr>
                `

        }
    }
            

        }

    }

}
drawPermissionTable()


// var statusTd = document.getElementsByClassName('statusTd').valueOf(true);
// statusTd.innerHTML(<b>hola</b>)




