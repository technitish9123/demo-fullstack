const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// ! constants for API URLs
const AUTH_URL = 'http://20.244.56.144/train/auth';
const TRAINS_URL = 'http://20.244.56.144/train/trains';

const clientId = process.env.clientID;
const clientSecret = process.env.clientSecret;

let authToken = '';
let tokenExpiration = 0; 

// ! --------------------------------------------------------------------------------------------------------
// !
// ! Function to refresh the authorization token
// !
// ! --------------------------------------------------------------------------------------------------------

async function refreshAuthToken() {
  try {
    const response = await axios.post(AUTH_URL, {
      companyName: 'nmit',
      clientID: process.env.clientID || "28aa38cc-a845-4a71-869e-d1f8a20c8a7b",
      ownerName: 'nitishkumar',
      ownerEmail: 'kumarnitish072001@gmail.com',
      rollNo: '1NT20IS102',
      clientSecret: process.env.clientSecret || "ZmwekIUaxCgSQQon"
    });

    authToken = response.data.access_token;
    const expiresIn = response.data.expires_in;
    tokenExpiration = Date.now() + expiresIn * 1000; 
  } catch (error) {
    console.error('Error obtaining authorization token:', error);
  }
}
// ! --------------------------------------------------------------------------------------------------------
// !
// ! Middleware to check token expiration and refresh if needed
// !
// ! --------------------------------------------------------------------------------------------------------

async function checkAuthToken(req, res, next) {
  if (!authToken || Date.now() > tokenExpiration) {
    await refreshAuthToken();
  }
  next();
}

app.use(checkAuthToken);

// ! --------------------------------------------------------------------------------------------------------
// ! Get All train details
// ! --------------------------------------------------------------------------------------------------------

app.get('/trains', async (req, res) => {
    try {
      const response = await axios.get(TRAINS_URL, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const trainData = response.data;
  
      res.status(200).json(trainData);
    } catch (error) {
      console.error('Error getting train details:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// ! --------------------------------------------------------------------------------------------------------
// ! API Endpoint to fetch train details by Train Number
// ! --------------------------------------------------------------------------------------------------------

  app.get('/trains/:trainNumber', async (req, res) => {
    try {
      const trainNumber = req.params.trainNumber;
      const response = await axios.get(`${TRAINS_URL}/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const trainDetails = response.data;
  
      res.json(trainDetails);
    } catch (error) {
      console.error('Error fetching train details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
