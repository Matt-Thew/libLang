const fs = require('fs');

function getQuotes() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                resolve(json);
            }
        });
    });
}

(async () => {
    console.log("sfs");
    const data = await getQuotes(8721);
    console.log("TCL: data", data)
})();



