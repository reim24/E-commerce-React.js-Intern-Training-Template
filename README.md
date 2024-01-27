# E-commerce React.js Intern Training Template

Preconfigured template designed to train new interns on building an e-commerce React.js website.

## Getting Started

Follow these simple steps to set up the project:

1. **Installation**: Run `npm install` to install the required dependencies.

2. **Start the Server**: Navigate to the server folder and execute `npm run start-server` to launch the mock-up API built with Node.js.

3. **Start the App**: Use `npm start` to run the React.js frontend and explore the website.

## API Endpoints

Utilize the following API endpoints to interact with the mock-up API:

1. **Login** (POST):

   - Endpoint: `/login`
   - Request Body: `{ "email": "your_email@example.com", "password": "your_password" }`

2. **Register** (POST):

   - Endpoint: `/register`
   - Request Body: `{ "email": "your_email@example.com", "password": "your_password", "age": 25, "firstname": "John", "lastname": "Doe" }`

3. **Products** (GET):

   - Endpoint: `/products`

4. **Transactions** (GET, POST):

   - Endpoint: `/transactions`
   - Request Body: `{ "bankAccountId": 123, "amount": 100, "description": "Transaction details", "dateCreated": "2023-08-01" }`

5. **Bank Accounts** (GET, POST, PUT):
   - Endpoint: `/bankAccounts`
   - Request Body: `{ "name": "Savings Account", "balance": 1000, "userId": 456, "isActive": true, "dateCreated": "2023-07-01" }`
