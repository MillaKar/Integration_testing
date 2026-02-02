#Integration testing  
##Description  - Hex to RGB API  
In this project there's a simple node.js and Express API that converts hexadesimal color codes into RGB values  
Automated tests are done by using Jest and Supertest.  

The API accepts a hex color code as a query parameter and returns the corresponding RGB values in JSON format.  
For example:  
GET /api/hex-to-rgb?hex=FF0000  
And the response in Postman should be something like:  
/```json
{
  "hex": "FF0000",
  "rgb": { "r": 255, "g": 0, "b": 0 }
}```  
The "#" should not be used...

##How to run  
(You can run the unit tests first with command: npm test)  
1.) Install dependencies:  
npm install  
2.)Start the server:  
npm run dev  
3.) Open Postman and call for example:  
"http://localhost:3000/api/hex-to-rgb?hex=FF0000" or "http://localhost:3000/api/hex-to-rgb?hex=ZZZZZZ"  
These two make the responses seen in the images.  

##Test output  
For unit testing (seen also in the images):  
PASS  tests/hexToRgb.test.js
PASS  tests/hexRoute.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total  

