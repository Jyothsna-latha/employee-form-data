# employee-form-data
Tech Stack
Frontend: Angular (Reactive Forms, Routing, HTTP)
Backend: Node.js + Express.js
Database: MongoDB Atlas
Styling: CSS / Angular Material (optional)

API Requirements
Backend should expose:
POST /employees – to add employee
GET /employees – to retrieve employee list
Update the API endpoint in employee.ts:
ts
private apiUrl = 'http://localhost:9000/employees';
