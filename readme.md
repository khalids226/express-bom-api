# BOM Weather API Application

1. npm run dev (in development mode)

Go to http://localhost:3000/v1/bom/temperature in your browser to see temperature forecast data.

This application fetches data from with bom.gov.au for its weather forecast information and filters temperatures greater than 20, and sorts it in ascending order.

Data Source URL: http://www.bom.gov.au/fwo/IDN60801/IDN60801.95765.json  

For docker/production:
1. docker build docker build -t express-bom-api .
2. docker run --publish 3000:3000 express-bom-api