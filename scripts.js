document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const quizForm = document.getElementById('quizForm');
    const optionForm = document.getElementById('optionForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/Users/Register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Registration successful!');
            } else {
                alert('Registration failed!');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/Users/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                alert('Login successful! Token: ' + result.Token);
            } else {
                alert('Login failed!');
            }
        });
    }

    if (quizForm) {
        quizForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(quizForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/Quizzes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Quiz created successfully!');
            } else {
                alert('Quiz creation failed!');
            }
        });
    }

    if (optionForm) {
        optionForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(optionForm);
            const data = Object.fromEntries(formData.entries());
            const response = await fetch('/api/Options', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert('Option created successfully!');
            } else {
                alert('Option creation failed!');
            }
        });
    }
});
