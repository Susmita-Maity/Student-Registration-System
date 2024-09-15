const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const studentName = document.getElementById("studentName").value;
  const studentId = document.getElementById("studentId").value;
  const emailId = document.getElementById("emailId").value;
  const contactNo = document.getElementById("contactNo").value;

  // Validate input
  if (!studentName || !studentId || !emailId || !contactNo) {
    alert("Please fill in all required fields.");
    return;
  }

  if (isNaN(studentId)) {
    alert("Student ID must be a valid number.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailId)) {
    alert("Invalid email address.");
    return;
  }

  // Validate contact number format (adjust pattern as needed)
  const contactNoRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number
  if (!contactNoRegex.test(contactNo)) {
    alert("Invalid contact number format.");
    return;
  }

  // Create a student object
  const student = {
    name: studentName,
    id: studentId,
    email: emailId,
    contactNo: contactNo,
  };

  // Check if student ID already exists
  const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
  const existingStudent = storedStudents.find(s => s.id === studentId);

  if (existingStudent) {
    alert("Student ID already exists.");
    return;
  }

  // Store student data in local storage
  storedStudents.push(student);
  localStorage.setItem("students", JSON.stringify(storedStudents));

    alert(`Student "${studentName}" added successfully!`);
    alert("If you want to see the details of the student please click the click here button below");

  

  // Reset the form (clears all fields and validation state)
  registrationForm.reset();
});




