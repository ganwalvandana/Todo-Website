
let form = document.querySelector('.signup-form');
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input[type='text']");
const username = document.getElementById('username');
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const about = document.getElementById('about');

const submitBtn = document.querySelector(".submit-btn");

const todoList = document.querySelector(".todo-list")
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault;
    const newTodoText = todoInput.value;
    const newTodo = document.createElement("li");
    const newTodoHTML = `<span class="text">${newTodoText}</span>
            <div class="todo-button">
                <button class="done todo-btn">Done</button>
                <button class="remove todo-btn">Remove</button>
            </div>`
    newTodo.innerHTML = newTodoHTML;
    todoList.append(newTodo);
    todoInput.value =""; 
});

todoList.addEventListener("click", (e)=> {
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("remove")){
        const targetRemoved = e.target.parentNode.parentNode;
        targetRemoved.remove();
    }
});


let newLink = document.createElement("a");
let saveFile = () => {
    let data = 
        '\r Username: ' + username.value + '\r\n' +
        'Password: ' + password.value + '\r\n' +
        'Confirm Password: ' + confirmPassword.value + '\r\n' +
        'Phone Number: ' + phone.value + '\r\n' +
        'Email: ' + email.value + ' \r\n ' + 
        'Message: ' + about.value;

        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';

        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
    



let passwordShow = () => {
    
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    } 
}

let confirmPasswordShow = () => {
    
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    } 
}

const matchPassword = () => {
    if(password != confirmPassword){
        alert("Password did not match")
    } else {
        alert("Password created sucessfully!")
    }
};
function requireValue(input) {
    return !(input.value.trim() === '');
}

form.addEventListener('submit', (event) => {
    requiredFields.forEach((input) => {
        valid = valid|requireValue(input.input);
    });
    if (!valid) {
        event.preventDefault();
    }
});

// submitBtn.addEventListener('click', (e)=> {
//     matchPassword();
// })

// function validateForm() {
//     let x = document.forms["myForm"]["username"].value;
//     if (x == "") {
//       alert("username must be filled out");
//       return false;
//     }
//     let y = document.forms["myForm"]["password"].value;
//     if (y == "") {
//       alert("Password must be filled out");
//       return false;
//     }
//     let z = document.forms["myForm"]["password"].value;
//     if (z == "") {
//       alert("Password must be filled out");
//       return false;
//     }
//     let a = document.forms["myForm"]["phone"].value;
//     if (a == "") {
//       alert("Phone number must be filled out");
//       return false;
//     }
//     let b = document.forms["myForm"]["email"].value;
//     if (b == "") {
//       alert("Email must be filled out");
//       return false;
//     }
    
//   }



