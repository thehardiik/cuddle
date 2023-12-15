const right  = document.querySelector('.Right_box');
const reg = document.getElementById('Reg')
const cont = document.querySelector('.Main_container')


const change = () => {
    right.remove()
    const newDiv = document.createElement('div')
    newDiv.className = "Right_box"
    newDiv.innerHTML = 
    `<h1 class="Hello">Welcome to the Cuddle</h1>
        <div class="form">
            <form>
                <input type="text" class="Name" placeholder="Enter Username">
                <input type="password" class="password_up" placeholder="Enter Password">
                <input type="password" class="password" placeholder="Confirm Password">
                <input type="Submit" class="button" value="Create Account" id="RegFinal"> 
            </form>
        </div>`;
    cont.appendChild(newDiv)
}
reg.addEventListener("click" , change)