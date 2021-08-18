let inputTodo = document.querySelector(".input-todo");
let todoList = document.querySelector(".todo-list");
let todo;
let id = 0;
let btnAdd = inputTodo.querySelector(".bi");
let btnEnter = document.querySelector(".input-todo > .bi");

function loadData() {
    let store = localStorage.getItem("key");
    console.log(store);
    if (store === null) {
        todoList.innerHTML = "";
        todo = [];
        id = 0;
    } else {
        todo = JSON.parse(store);
        id = todo.length;
        console.log(todo);
        for (let index = 0; index < todo.length; index++) {
            add(`
           <li>
               <i
                   class="bi bi-square btn-item"
                   onclick="todoItem(this)"
               ></i>
               <div class="content" name="${index}">
               ${todo[index]}
               </div>
               <i
                   class="bi bi-x-circle btn-item"
                   onclick="clearItem(this)"
               ></i>
           </li>
           `);
        }
    }
}

function todoItem(btnItem) {
    console.log(btnItem);
    console.log(btnItem.classList);
    console.log(btnItem.classList.contains("bi-square-fill"));
    if (btnItem.classList.contains("bi-square-fill")) {
        btnItem.classList.add("bi-square");
        btnItem.classList.remove("bi-square-fill");
    } else {
        btnItem.classList.remove("bi-square");
        btnItem.classList.add("bi-square-fill");
    }
}

function clearItem(btnItem) {
    console.log(btnItem.parentNode);
    document.querySelector(".todo-list").removeChild(btnItem.parentNode);
    console.log(
        btnItem.parentNode.querySelector("div[name]").getAttribute("name")
    );
    // remove 1 element
    todo.splice(
        btnItem.parentNode.querySelector("div[name]").getAttribute("name"),
        1
    );

    localStorage.setItem("key", JSON.stringify(todo));
}

function add(value) {
    todoList.innerHTML = value + todoList.innerHTML;
}

function addTodo() {
    if (inputTodo.querySelector("#input").value.length != 0) {
        let html = `
        <li>
            <i
                class="bi bi-square btn-item"
                onclick="todoItem(this)"
            ></i>
            <div class="content" name="${++id}">
            ${inputTodo.querySelector("#input").value}
            </div>
            <i
                class="bi bi-x-circle btn-item"
                onclick="clearItem(this)"
            ></i>
        </li>
        `;
        todoList.innerHTML = html + todoList.innerHTML;

        todo.push(inputTodo.querySelector("#input").value);
        console.log(todo);
        localStorage.setItem("key", JSON.stringify(todo));
        inputTodo.querySelector("#input").value = "";
    }
}

document.querySelector("#input").addEventListener("keyup", (e) => {
    // console.log(e.key == "Enter");
    if (e.key == "Enter") {
        addTodo();
    }
});

// setInterval(() => {
//     // console.log(document.querySelectorAll("li>i.btn-item.bi-x-circle"));
//     document.querySelectorAll("li>i.btn-item.bi-x-circle").forEach((value) => {
//         // console.log(value);
//         value.addEventListener("mouseover", (e) => {
//             // console.log(value.classList);
//             value.classList.add("bi-x-circle-fill");
//             value.classList.remove("bi-x-circle");
//         });
//     });
//     document.querySelectorAll("li>i.btn-item.bi-x-circle").forEach((value) => {
//         // console.log(value);
//         value.addEventListener("mouseout", (e) => {
//             // console.log(value.classList);
//             value.classList.remove("bi-x-circle-fill");
//             value.classList.add("bi-x-circle");
//         });
//     });

//     // document.querySelectorAll("li>i.btn-item.bi-square").forEach((value) => {
//     //     console.log(value);
//     //     value.addEventListener("mouseover", (e) => {
//     //         // console.log(value.classList);
//     //         value.classList.add("bi-square-fill");
//     //         value.classList.remove("bi-square");
//     //     });
//     // });
//     // document.querySelectorAll("li>i.btn-item.bi-square").forEach((value) => {
//     //     // console.log(value);
//     //     value.addEventListener("mouseout", (e) => {
//     //         // console.log(value.classList);
//     //         value.classList.remove("bi-square-fill");
//     //         value.classList.add("bi-square");
//     //     });
//     // });
// }, 1000);
