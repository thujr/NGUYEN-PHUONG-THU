        let users=JSON.parse(localStorage.getItem("users"))||[];

        function addName(event) {
            console.log('2345');
            event.preventDefault();
            let id=document.getElementById('id').value;
            let name=document.getElementById('name').value;
            let email=document.getElementById('email').value;  
        let flag=false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email===email) {
            flag=true;
                return;  
            }
        }
        if (flag===true) {
            alert('Email đã tồn tại');
            return;
            
        }
            let user={
                id:Math.floor(Math.random()*9999999999),
                name: name,
                email:email,
            };
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
            renderName();
        }  
        function renderName() {
        let table='';
        for (let i = 0; i< users.length; i++) {
        table+=`
        <tr>
                <td>${i+1}</td>
                <td>${users[i].id}</td>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>
                    <button id='button1' onclick=updateEmployee(${i}) >Sửa</button>
                    <button id='button2' onclick=deleteEmployee(${i}) >Xóa</button>
                </td>
            </tr>
        `
            }
            console.log('kkk',table);
            document.getElementById('table').innerHTML=table;  
        }
        renderName();
        function deleteEmployee(index) {
            let confirmDelete=confirm('Bạn có chắc chắn muốn xóa không?');
            if (confirmDelete) {
                for (let i = 0; i < users.length; i++) {
                    if (i===index) {
                        users.splice(i,1);
                        localStorage.setItem('users',JSON.stringify(users));
                        renderName();
                        break;
                    } 
                }
            }
        }
        renderName();

        
