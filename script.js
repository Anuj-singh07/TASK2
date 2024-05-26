// Display a greeting message based on the current time when the page loads
window.onload = function() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 16) {
        greeting = "Good Afternoon!";
    } else if (hours < 20){
        greeting = "Good Evening!";
    }
     else {
        greeting = "Good Night!";
    }

    alert(greeting);
};

// Change the button's color when clicked
document.getElementById('clrbtn').onclick = function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33F6','#DAF7A6','#FFC300','#C70039','#581845','#BDB76B'];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

// Show an alert when the alert button is clicked
function showAlert() {
    alert("Button clicked!");
}

// Perform addition of two numbers and display the result
document.getElementById('add').onclick = function() {
    const firstNumber = parseFloat(document.getElementById('finput').value);
    const secondNumber = parseFloat(document.getElementById('sinput').value);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        const sum = firstNumber + secondNumber;
        document.getElementById('result').innerText = `Result: ${sum}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers!';
    }
};
