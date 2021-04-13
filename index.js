// let myName = 'Marc'
// let email = 'marc@gmail.com'

function submitData(userName, userEmail) {
    const body = document.querySelector('body')
    const p = document.createElement('p')
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
            })
        })
    .then(resp => resp.json())
    .then(json => {
        p.textContent = json.id
        body.appendChild(p)
        console.log(json)
        // return json
    })
    .catch((error) => {
        console.log(error.message)
        p.textContent = error.message
        body.appendChild(p)
    })
}
//submitData(myName, email);