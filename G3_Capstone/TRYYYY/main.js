const addClass = document.getElementById("addClass");
const createClassContainer = document.querySelector(".createClassContainer");
const myClassContainer = document.querySelector(".myClassContainer");

//GRANDPARENT OR MAIN FUNCTION FOR ADDING A CLASS
addClass.addEventListener('click', createClass);


function createClass() {
   //FIRST ACTION
   // CREATE A SECTION FOR 'CLASS CREATION' - CLASS INFORMATION AS REQUIRED INPUT
    let classDiv = document.createElement("div");
    classDiv.className = "classStyle";
    classDiv.innerHTML =  `
        <div class="first-row">
           <div>
              <label>Subject Code</label>
              <input type="text" placeholder="Enter:" class="subjCodeInput"></input>
           </div>
           <div>
              <label>Subject Title</label>
              <input type="text" placeholder="Enter:" class="subjTitleInput"></input>
           </div>
        </div>
        <div class="second-row">
           <div>
              <label>Section</label>
              <input type="text" placeholder="Enter:" class="sectionInput"></input>
           </div>
           <div class="second-row-child">
              <div>
                 <label>Year</label>
                 <input type="text" placeholder="Enter:" class="yearInput"></input>
              </div>
              <div >
                 <label>Term</label>
                 <input type="text" placeholder="Enter:" class="termInput"></input>
              </div>
              <div>
                 <label>Semester</label>
                 <input type="text" placeholder="Enter:" class="semesterInput"></input>
              </div>
           </div>
        </div>
        <div class="third-row">
           <form action="/upload" method="POST" enctype="multipart/form-data">
               <label for="fileUpload">Import Student data:</label>
               <input type="file" class="fileUpload" name="fileUpload" accept=".xls, .xlsx">
               <!--<input type="submit" value="Upload" class="sumbitFile">-->
            </form>
           <button class="closeCreateClassBtn">CLOSE</button>
           <button class="createClassBtn">CREATE</button>
        </div>
    `;
    // DISPLAY THE SECTION ON THE PAGE WITH ABSOLUTE POSITION
    createClassContainer.append(classDiv);

   // OPTION TO CLOSE THE 'CLASS CREATION' SECTION IF MISTAKENLY TAP FOR ACCIDENTAL REASON
   const closeClass = classDiv.querySelector(".closeCreateClassBtn");

   closeClass.addEventListener('click', () => {
      classDiv.style.display =  "none"; 
   })
   
   // SECOND ACTION
   // DISPLAY THE LIST OF CREATED CLASS AFTER CLICKING THE 'CREATE' BUTTON
   const create  = classDiv.querySelector(".createClassBtn");
   
   create.addEventListener('click', () => {
      const subjectCode = classDiv.querySelector(".subjCodeInput");
      const subjectTitle = classDiv.querySelector(".subjTitleInput");
      const section = classDiv.querySelector(".sectionInput");
      const year = classDiv.querySelector(".yearInput");
      const term = classDiv.querySelector(".termInput");
      const semester = classDiv.querySelector(".semesterInput");

      // CHECK THE CONDITIONS: ENSURE THAT ALL INPUT FIELDS ARE FILLED UP OTHERWISE, DISPLAY THE 'CREATED CLASSES' ON THE PAGE
      const classInformation = [subjectCode.value.trim(), subjectTitle.value.trim(), year.value.trim(), section.value.trim(), term.value.trim(), semester.value.trim() ];
      let alertShown = false;
      if(!alertShown){
         for(classinfo in classInformation){
            if(!classInformation[classinfo]){
               alertShown = true;
               setTimeout(function() {alert('All field requires an input.')}, 500);
               createClassContainer.removeChild(listItems);
            }
         }
      }if(classInformation[classinfo]){
         const listItems = document.createElement("div");
         listItems.classList = "listItemsStyle";
         listItems.innerHTML = `
         <p id="subjkode">${subjectCode.value.trim()}</p>
         <p id="subjectTitle">${subjectTitle.value.trim()}<p>
         <p>${year.value.trim()}</p>
         <p>${section.value.trim()}</p>
         <p>${term.value.trim()}<p>
         <p>${semester.value.trim()}</p>
         <div class="classBtns">
             <button class="approvalStatus">NO STATUS</button>
             <button class="openClass">OPEN</button>
             <button class="deleteClass"><img src="delete.png"></button>
         </div>
      `
      createClassContainer.appendChild(listItems);
      

      // DELETE A SPECIFIC CLASS
      const deleteClass = listItems.querySelector(".deleteClass");
      deleteClass.addEventListener('click', ()=> createClassContainer.removeChild(listItems));

      // SET ALL THE INPUT BOX WITH EMPTY TEXT EVERYTIME A CLASS WAS SUCCESFULLY ADDED OR CREATED
      subjectCode.value = "";
      subjectTitle.value = "";
      section.value = "";
      year.value = "";
      term.value = "";
      semester.value = "";

      classDiv.style.display = "none";

      }

   });
 

}


