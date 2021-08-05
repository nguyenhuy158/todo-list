let inputTodo = document.querySelector(".input-todo");
let todoList = document.querySelector(".todo-list");
let todo = "";
let btnAdd = inputTodo.querySelector(".bi");
let btnEnter = document.querySelector(".input-todo > .bi");

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
}

function addTodo() {
    if (inputTodo.querySelector("#input").value.length != 0) {
        let html = `
        <li>
            <i
                class="bi bi-square btn-item"
                onclick="todoItem(this)"
            ></i>
            <div class="content">
            ${inputTodo.querySelector("#input").value}
            </div>
            <i
                class="bi bi-x-circle btn-item"
                onclick="clearItem(this)"
            ></i>
        </li>
        `;
        todoList.innerHTML = html + todoList.innerHTML;
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
