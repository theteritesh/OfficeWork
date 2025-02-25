document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const validationMessages = document.getElementById("validationMessages");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      validationMessages.innerHTML = ""; // Clear previous messages
      let messages = [];
  
      // Name validation
      const namePattern = /^[A-Za-z\s]{2,}$/; // Only letters and spaces, min 2 characters
      if (!namePattern.test(form.name.value.trim())) {
        messages.push(
          "Name must contain only letters and spaces and be at least 2 characters long."
        );
      }
  
      // Mobile number validation
      const mobilePattern = /^[789]\d{9}$/; // Must start with 7, 8, or 9 and be 10 digits
      if (!mobilePattern.test(form.mobile.value.trim())) {
        messages.push(
          "Mobile number must be exactly 10 digits and start with 7, 8, or 9."
        );
      }
  
      // Email validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      // Example usage in the validation function
      if (!emailPattern.test(form.email.value.trim())) {
        messages.push("Please enter a valid email address.");
      }
  
      // Date of Birth validation
      const dob = new Date(form.dob.value);
      const today = new Date();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (dob > today) {
        messages.push("Date of birth cannot be in the future.");
      }
  
      // Degree validation
      const degreePattern = /^[A-Za-z\s]{2,}$/; // Only letters and spaces, min 2 characters
      if (!degreePattern.test(form.degree.value.trim())) {
        messages.push(
          "Degree must contain only letters and spaces and be at least 2 characters long."
        );
      }
  
      // Institution validation
      const institutionPattern = /^[A-Za-z\s]{2,}$/; // Only letters and spaces, min 2 characters
      if (!institutionPattern.test(form.institution.value.trim())) {
        messages.push(
          "Institution name must contain only letters and spaces and be at least 2 characters long."
        );
      }
  
      // Year of Graduation validation
      const year = parseInt(form.year.value);
      if (isNaN(year) || year < 1950 || year > today.getFullYear()) {
        messages.push(
          "Please enter a valid year of graduation (between 1950 and the current year)."
        );
      }
  
      // Type of Education validation
      if (form["education-type"].value === "") {
        messages.push("Type of education is required.");
      }
  
      // Gender validation
      if (!form.gender.value) {
        messages.push("Gender is required.");
      }
  
      // Display messages
      if (messages.length > 0) {
        validationMessages.innerHTML = messages.join("<br>");
      } else {
        // If no messages, show success message
        validationMessages.innerHTML = "Form submitted successfully!";
        // Optionally reset the form
        form.reset();
      }
    });
  });
  