const url = process.argv[2];
const localPath = process.argv[3];
console.log(url);
console.log(localPath);

const fs = require('fs');

const request = require('request');
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }

  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log("Download unsuccessful");
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }

  });
  
});