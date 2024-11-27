function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*  form validation using javascript */

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        let valid = true;

        // Name Validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        } else {
            nameError.textContent = '';
        }

        // Email Validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        // Message Validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            valid = false;
        } else {
            messageError.textContent = '';
        }

        if (!valid) e.preventDefault();
    });

    

/* ajax script for returning to portfolio website after submitting form*/

        $("#contactForm").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyqYiWNShQTWt8Ipudd68ahcopctfXsk4Od6YJ6zBRpy5CEmvHUmiOML0VJTZ6eGqkU/exec",
                data:$("#contactForm").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
