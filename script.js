// Event Handling
const spinButton = document.getElementById('spinButton');
const status = document.getElementById('status');

// Click event: Change button text and color
spinButton.addEventListener('click', () => {
    const colors = ['#d4a373', '#8b5e34', '#b8865e', '#6b4e31'];
    spinButton.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    spinButton.textContent = 'Spud-tacular!';
    status.textContent = 'You spun the potato! Look at that color!';
});

// Hover effect
spinButton.addEventListener('mouseover', () => {
    status.textContent = 'Hovering over the spud! Ready to spin?';
});
spinButton.addEventListener('mouseout', () => {
    status.textContent = 'Spin again for more potato fun!';
});

// Keypress detection
document.addEventListener('keypress', (e) => {
    status.textContent = `Key pressed: ${e.key}. Potatoes love music!`;
});

// Secret double-click: Potato pun Easter egg
spinButton.addEventListener('dblclick', () => {
    status.textContent = 'Why did the potato blush? It saw the mash! 🥔';
    spinButton.textContent = 'Blushing Spud!';
    spinButton.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        spinButton.style.transform = 'rotate(0deg)';
    }, 500);
});

// Slideshow: Potato Varieties
const slides = [
    'https://images.pexels.com/photos/12945041/pexels-photo-12945041.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/13110450/pexels-photo-13110450.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/31669764/pexels-photo-31669764/free-photo-of-close-up-of-fresh-red-potatoes-in-a-pile.jpeg?auto=compress&cs=tinysrgb&w=600'
];
let currentSlide = 0;
const slideImage = document.getElementById('slideImage');

function showSlide(index) {
    slideImage.style.opacity = 0;
    setTimeout(() => {
        slideImage.src = slides[index];
        slideImage.alt = slides[index].split('=')[1].replace('+', ' ');
        slideImage.style.opacity = 1;
    }, 500);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Tabs: Recipe Content
function openTab(tabNumber) {
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`button[onclick="openTab(${tabNumber})"]`).classList.add('active');
    document.getElementById(`tab${tabNumber}`).classList.add('active');
}

// Form Validation
const form = document.getElementById('orderForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const potatoTypeInput = document.getElementById('potatoType');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const potatoTypeError = document.getElementById('potatoTypeError');

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    let isValid = true;

    // Name validation
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name, spud lover!';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email. Potatoes need valid addresses!';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Potato type validation
    if (!potatoTypeInput.value.trim()) {
        potatoTypeError.textContent = 'Tell us your favorite potato type!';
        isValid = false;
    } else {
        potatoTypeError.textContent = '';
    }

    return isValid;
}

// Real-time feedback
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim()) {
        nameError.textContent = '';
    } else {
        nameError.textContent = 'Please enter your name, spud lover!';
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Invalid email. Potatoes need valid addresses!';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 8) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must be at least 8 characters';
    }
});

potatoTypeInput.addEventListener('input', () => {
    if (potatoTypeInput.value.trim()) {
        potatoTypeError.textContent = '';
    } else {
        potatoTypeError.textContent = 'Tell us your favorite potato type!';
    }
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert(`Order placed! We'll send your ${potatoTypeInput.value} potatoes soon, ${nameInput.value}! 🥔`);
        form.reset();
    }
});