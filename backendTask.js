// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting 
// which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. 
// Your goal is to count how many items exist that have an age equal to 32. Then you should create a write stream to a file called output.txt
// and the contents should be the key values (from the json) each on a separate line in the order they appeared
// in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.
// Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. 
// If the new final string is empty, return the string EMPTY. Your ChallengeToken: gvhylzau3109

const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');

const ChallengeToken = 'gvhylzau3109';

axios.get('https://coderbyte.com/api/challenges/json/age-counting')
  .then(response => {
    const data = response.data.data;
    const ageItems = data.split(', ')
      .filter(item => item.includes('age=32'))
      .map(item => item.split('=')[1]);
      
    const outputFilePath = 'output.txt';

    const writeStream = fs.createWriteStream(outputFilePath);

    ageItems.forEach(item => {
      writeStream.write(`${item}\n`);
    });

    writeStream.end();

    writeStream.on('finish', () => {
      console.log('Write stream finished. Data has been written to output.txt.');

      // Calculate the SHA1 hash of the output file
      const hash = crypto.createHash('sha1');
      const stream = fs.createReadStream(outputFilePath);

      stream.on('data', data => {
        hash.update(data);
      });

      stream.on('end', () => {
        const sha1Hash = hash.digest('hex');
        console.log('SHA1 Hash:', sha1Hash);
        const filteredHash = sha1Hash.replace(new RegExp(`[${ChallengeToken.toLowerCase()}${ChallengeToken.toUpperCase()}]`, 'g'), '');

        if (filteredHash === '') {
          console.log('Result:', 'EMPTY');
        } else {
          console.log('Result:', filteredHash);
        }
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
