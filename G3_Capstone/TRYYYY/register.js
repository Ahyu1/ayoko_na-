

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener('submit', registration);

//!fullName.value || !employeeID.value || !department.value || !username.value || !password.value || !advisory.value


function registration(){
    //Code here (save user info in database)
    //----------------------
    
    //if (!fullName.value || !employeeID.value || !department.value || !username.value || !password.value || !advisory.value){
     //   event.preventDefault();
     //   alert("Registration Failed! Please fill all the information required");
    //}

    //form input fields
    const fullName = document.getElementById("fullName");
    const employeeID = document.getElementById("employeeID");
    const department = document.getElementById("department");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const advisory = document.getElementById("advisory");

    const teacherInfo = [fullName.value, employeeID.value, department.value, username.value, password.value,  advisory.value];

    for(info in teacherInfo) {
        if(!info){
            alert("Registration Failed! Please fill all the information required");
            //event.preventDefault();
        }
    }
}