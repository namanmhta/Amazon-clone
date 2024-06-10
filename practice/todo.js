const todolist = [{name:'wash clothes',
dueDate:'2024-02-10'},
{name: 'do dishes',
dueDate: '2024-02-11'}];

function renderlist(){


    let todolistHTML='';
    for(let i=0;i< todolist.length;i++){
        const todoObject = todolist[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `<p>
        ${name} ${dueDate}
        <button onclick = "
            todolist.splice(${i},1);
            renderlist();"
            >delete</button>
        </p>
        `;
        todolistHTML += html;
    }
    console.log(todolistHTML);
    
    document.querySelector('.show').innerHTML= todolistHTML;
}


function addtodo(){
    const a = document.querySelector('.addname');
    const name = a.value;

    const dateinp = document.querySelector('.day');
    const dueDate = dateinp.value;

    todolist.push({name,
    dueDate
    });
    console.log(todolist);
    a.value='';
    renderlist();
}