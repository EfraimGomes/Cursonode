const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    consele.logo(data);

    fs.unlink("file.txt", (err, data) => {
        if (unlinkErr) throw err;
        console.log("Aquivo Excluído com sucesso!")
    });
});