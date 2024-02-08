const http = require('http');
const fs = require('fs');
const path = require('path');
const extraData = process.argv;
const rootFolder = path.join(__dirname, 'test');
const color=require('colors');

console.log('Hello World'.rainbow);

switch (extraData[2]) {
    case 'add':
        fs.writeFileSync(`${rootFolder}/${extraData[3]}`, extraData[4]);
        console.log('File Added');
        break;
    case 'delete':
        fs.unlink(`${rootFolder}/${extraData[3]}`, (err) => {
            const message = !err ? 'File Delted Success Fully' : 'something error: ' + err;
            console.log(message);
        });
        break;
    case 'list':
        fs.readdir(`${rootFolder}`, (err, items) => {
            if (err) {
                console.log('Something Error: ' + err);
            } else {
                items.map(item => {
                    console.log(item);
                });
            }
        });
        break;
    case 'read':
        fs.readFile(`${rootFolder}/${extraData[3]}`, 'utf8', (err, data) => {
            if (err) {
                console.log('Something Error: ' + err);
            } else {
                console.log(data);
            }
        })
        break;
    case 'update':
        fs.appendFileSync(`${rootFolder}/${extraData[3]}`, extraData[4], (err) => {
            const message = !err ? 'File Update Success Fully' : 'something error: ' + err;
            console.log(message);
        });
        break;
    case 'rename':
        fs.rename(`${rootFolder}/${extraData[3]}`, `${rootFolder}/${extraData[4]}`, (err) => {
            const message = !err ? 'File Renamed Success Fully' : 'something error: ' + err;
            console.log(message);
        })
        break;
}

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const data={test: 5000};
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);