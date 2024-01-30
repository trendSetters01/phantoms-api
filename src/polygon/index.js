import { Network, Alchemy } from 'alchemy-sdk';
import axios from 'axios';
import fs from 'fs';

// Replace with your Alchemy API key and other constants:
const apiKey = process.env.ALCHEMY_API_KEY; // Use your actual API key here
const baseURL = `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}`;
const ownerAddr = "0xe38678c915f002245ED3Ed24370d745e362cb94e";
const url = `${baseURL}/getNFTs/?owner=${ownerAddr}&pageSize=${1000}`;

const config = {
    method: 'get',
    url: url,
};

axios(config)
    .then(response => {
        // Convert the response data to a JSON string
        const data = JSON.stringify(response.data, null, 2);
        // Log the data to the console
        console.log(data);
        // Write the data to test.json file
        fs.writeFile('test.json', data, (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('Successfully wrote to test.json');
            }
        });
    })
    .catch(error => console.log('error', error));
