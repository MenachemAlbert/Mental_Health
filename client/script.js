const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', login);

async function login(event) {
    event.preventDefault();

    let userName = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    console.log(userName, password);

    try {
        const res = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: userName, password: password })
        });

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);

            // שמירת הנתונים באחסון מקומי (localStorage)
            localStorage.setItem('userData', JSON.stringify(data));

            // העברת המשתמש לדף HTML אחר (page_2.html)
            window.location.href = './page_2.html';
        } else {
            alert('User not found!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to log in. Please try again.');
    }

    // איפוס הערכים בשדות הקלט
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
}
