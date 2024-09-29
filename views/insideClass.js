
const settings = document.querySelectorAll(".settings");
const componentRateContainer = document.querySelector(".component--rate--Container");

settings.forEach(button => {
    button.addEventListener('click', () => {
        const componentTitle = button.closest('div').querySelector('h2').innerText;
        openSetting(componentTitle);
    });
});

function openSetting(title) {
    const componentSection = document.createElement('div');
    componentSection.className = "component--rate--Section";
    componentSection.innerHTML = `
        <div class="componentRateHeader">
            <h1 class="componentTitle">${title}</h1>
            <button class="exit"><img src="x-mark.png" alt="exitIcon"></button>
        </div>
        <label class="crsl" for="rateInput">Component's Rate: </label><br>
        <input type="number" class="rateInput" placeholder="Enter: "><br><br>
        <input type="button" class="saveRate" value="SAVE">
    `;
    
    componentRateContainer.append(componentSection);

    const exit = componentSection.querySelector(".exit");
    exit.addEventListener('click', () => {
        componentRateContainer.removeChild(componentSection);
    });
}


const taskName = document.querySelector(".taskName").value.trim();
const maxScore = document.querySelector(".maxScore").value.trim();
const addWW = document.querySelector(".addWW");
const addPT = document.querySelector(".addPT");
const addExam = document.querySelector(".addExam");
const wwTaskElements = document.querySelector(".wwTaskElements");
const ptTaskElements = document.querySelector(".ptTaskElements");
const examTaskElements = document.querySelector(".examTaskElements");

const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    document.querySelector(".taskName").value = '';
    document.querySelector(".maxScore").value = '';
})

class AddTask {
    constructor(wwBtn, ptBtn, examBtn) {
        this.wwBtn = wwBtn;
        this.ptBtn = ptBtn;
        this.examBtn = examBtn;
        this.initBtns();
    }

    // Initialize event listeners for each button
    initBtns() {
        this.wwBtn.addEventListener('click', () => this.addTask(wwTaskElements));
        this.ptBtn.addEventListener('click', () => this.addTask(ptTaskElements));
        this.examBtn.addEventListener('click', () => this.addTask(examTaskElements));
    }

    // Function to add a task to the corresponding container
    addTask(container) {
        const taskName = document.querySelector(".taskName").value.trim();
        const maxScore = document.querySelector(".maxScore").value.trim();

        if (taskName === "" || maxScore === "") {
            alert("Please fill out both fields!");
            return;
        }

        const taskList = document.createElement('ul');
        taskList.className = "wwTaskListStyle";
        taskList.innerHTML = `
            <li class="taskListItems">
                <p class="addedTaskName">${taskName.charAt(0).toUpperCase() + taskName.slice(1)}</p>
                <div>
                   <p>${maxScore}</p>
                   <button class="deleteTask"><img src="delete.png"></button>
                </div>
            </li>
        `;
        
        container.append(taskList);

        // Clear the inputs after adding the task
        document.querySelector(".taskName").value = '';
        document.querySelector(".maxScore").value = '';

        // Add event listener for the delete button
       const deleteButton = taskList.querySelector(".deleteTask");
       deleteButton.addEventListener('click', () => {
       container.removeChild(taskList); // Remove the entire task list item
       });
    }
}

// Instantiate the AddTask class
const componentTask = new AddTask(addWW, addPT, addExam);

