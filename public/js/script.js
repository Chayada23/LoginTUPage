function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU7afdb3fa42968be4778e3ca97aa76112803e5eeddb16f223e939d6e13d00b7923481949f77a0f491'
        },
        body: JSON.stringify({ UserName: username, PassWord: password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        document.getElementById('status').innerText = data.status; 
        document.getElementById('type').innerText =data.type;
        document.getElementById('username').innerText = data.username;
        document.getElementById('tu_status').innerText =  data.tu_status;
        document.getElementById('statusid').innerText = data.statusid;
        document.getElementById('displayname_th').innerText = data.displayname_th;
        document.getElementById('displayname_en').innerText =  data.displayname_en;
        document.getElementById('email').innerText =  data.email;
        document.getElementById('department').innerText =  data.department;
        document.getElementById('faculty').innerText = data.faculty;
    })
    .catch(error => console.error('Error:', error));
}



function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}
