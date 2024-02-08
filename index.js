const express = require('express');
const path = require('path');
const app = express();
const publicFolder = path.join(__dirname, '/public');
const port = 3000;

// // Staticaly page loaded
// // Ex: http://localhost:3000, http://localhost:3000/blog.html, http://localhost:3000/about.html
// app.use(express.static(publicFolder));

app.get('', (_, res) => {
    res.sendFile(`${publicFolder}/index.html`);
});

app.get('/about', (_, res) => {
    res.sendFile(`${publicFolder}/about.html`);
});

app.get('/blog', (_, res) => {
    res.sendFile(`${publicFolder}/blog.html`);
});

// Render Html Content
app.get('*', (_,res)=> {
    res.send(`
        <style>
        form{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem;
            border: 1px solid #00000005;
            box-shadow: 2px 2px 5px #00000069;
            border-radius: 1rem;
            color: violet;
            font-family: arial;
        }
        form :where(label, input){
            display: block;
            margin-block: .5rem;
        }

        form input{
            border-color: violet;
            outline-color: violet;
            color: violet;
        }

        form div{
            display: flex;
            justify-content: space-evenly;
        }
        </style>
        <form action="/blog" method="post">
        <h1>Testing Form</h1>
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username or Email" name="username"/>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter Username or Email" name="password"/>
        <div>
            <input type="submit" value="Submit"/>
            <input type="reset" value="Reset"/>
        </div>
        </form>`
    );
});

app.post('*', (_,res)=>{
    res.send('<style>h1{display: inline-block;} a{color: red; font-size: 1.5rem; margin-left: 1rem;}</style><h1>Click Here to :</h1><a href="/form">Go Back To Form</a>');
});

app.listen(port, () => {
    console.log(`Server running on ${port} port http://localhost:3000`);
})