document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = loginForm.elements["email_address"].value;
    const password = loginForm.elements["password"].value;
    const firstName = loginForm.elements["first_name"].value;
    const lastName = loginForm.elements["last_name"].value;
    const appointmentDate = loginForm.elements["appointment_date"].value;
    const appointmentTime = loginForm.elements["appointment_time"].value;

if(email.trim() === "" || password.trim() === ""){
    alert("Email and password are required!");
    return;
}
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Appointment Date:", appointmentDate);
    console.log("Appointment Time:", appointmentTime);

    loginForm.reset();
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.reset();
    });
})