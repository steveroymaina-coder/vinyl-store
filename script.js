let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cartCount").textContent = cart;
}

// Greeting & Date
const greeting = document.getElementById("greeting");
if (greeting) {
    const hour = new Date().getHours();
    let message = "Good evening";
    if (hour < 12) message = "Good morning";
    else if (hour < 18) message = "Good afternoon";

    greeting.textContent = `${message}! Today is ${new Date().toDateString()}`;
}

// Form validation
function validateForm() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
