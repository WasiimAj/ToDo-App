var closeBtn = document.getElementById('closeBtn');
var addBtn = document.getElementById('addBtn');
var createNew = document.getElementById('createNew');
var addForm = document.getElementById('addForm');
var todoTitle = document.getElementById('todoTitle');
var todoDiscription = document.getElementById('todoDiscription');
var todosList = document.getElementById('todos-list');

createNew.addEventListener('click', () => {
    addForm.classList.remove('hide');
    createNew.classList.add('hide')
    closeBtn.classList.remove('hide')
    addBtn.classList.remove('hide')
})

closeBtn.addEventListener('click', () => {
    addForm.classList.add('hide');
    createNew.classList.remove('hide')
    closeBtn.classList.add('hide')
    addBtn.classList.add('hide')
})

addBtn.addEventListener('click', () => {
    fetch(
        'https://jsonplaceholder.typicode.com/comments',
        {
            title: todoTitle.value,
            description: todoDiscription.value
        }
    )
    .then(res => {
        res.json()
        console.log('status',res.status)
        console.log(res)
    })
    .then(() => {
        console.log('Added successfully ..')
    })
    .catch(err => {
        console.log(err)
    })
    // console.log(todoTitle.value)
    // console.log(todoDiscription.value)
})

        
const callApi = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response))
            }}
        xhr.open(method, url);
        xhr.send();
    });
}
callApi("GET", 'https://jsonplaceholder.typicode.com/comments')
    .then(res => 
        // console.log(res)
        res.map(i => {
            var box = document.createElement('div');
            box.className = 'todo-card'
            var title = document.createElement('h1');
            title.className = 'title';
            title.innerHTML = i.name;
            var body = document.createElement('p');
            body.className = 'body';
            body.innerHTML = i.body;
            box.appendChild(title);
            box.appendChild(body);
            todosList.appendChild(box);
        })
    );
