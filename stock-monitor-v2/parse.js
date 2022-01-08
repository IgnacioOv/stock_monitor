const csvtojson = require("csvtojson");

const fs = require("fs");

function parseData() {
  csvtojson()
    .fromFile("./file.csv")
    .then((source) => {
      fs.writeFileSync(
        "data.json",
        JSON.stringify(source),
        "utf-8",
        (err = {
          if(err) {
            console.log(err);
          },
        })
      );
    });
}
