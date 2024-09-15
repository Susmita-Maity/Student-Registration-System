const studentData = document.getElementById("studentData");

const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

storedStudents.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.contactNo}</td>
        <td><button class="editButton">Edit</button></td>
        <td><button class="deleteButton">Delete</button></td>
    `;

      // Add event listeners for edit and delete buttons
      const editButton = row.querySelector(".editButton");
      const deleteButton = row.querySelector(".deleteButton");
      
      // Implement edit functionality here
      
        editButton.addEventListener("click", () => {
          // Implement edit functionality here
            console.log("Edit button clicked for student:", student);
           // Remove data from local storage
            //Update data in local storage
            const index = storedStudents.indexOf(student);
            if (index > -1) {
              storedStudents.splice(index, 1);
              localStorage.setItem("students", JSON.stringify(storedStudents));
            }
            row.remove();
            //Redirect to the main page
            window.location.href = "./index.html";
              
              
            
              
      
          
            
                
                

        });
        
        
      
      // Implement delete functionality here
    deleteButton.addEventListener("click", () => {
         // Implement delete functionality here
        // confirm deletion, remove data from storage and redraw table
        console.log("Delete button clicked for student:", student);
        // Remove student from local storage
        const index = storedStudents.indexOf(student);
              if (index > -1) {
                storedStudents.splice(index, 1);
                localStorage.setItem("students", JSON.stringify(storedStudents));
              }
        const isConfirmed = confirm("Are you sure you want to proceed?");
                if (isConfirmed) {
                    // User clicked "OK"
                    row.remove(); // Remove the row from the table as well
                    alert("Student deleted successfully!");
                  } else {
                    // User clicked "Cancel"
                  }   
    });

    studentData.appendChild(row);
});


