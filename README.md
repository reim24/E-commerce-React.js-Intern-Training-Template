# First Time

1. npm install

# Getting Started

1. npm run start-server
2. npm start

# API endpoints

1.  login (POST) body: {
    email:
    string,
    password: string
    }

2.  register (POST) body: {
    email:string,
    password:string,
    age:number, firstname:
    string,
    lastname: string
    }

3.  products (GET)

4.  transactions (GET, POST) body: {
    "bankAccountId": number,
    "amount": number,
    "description": string,
    "dateCreated": string
    }

5.  bankAccounts (GET, POST, PUT) body: {
    "name": string,
    "balance": number,
    "userId": number,
    "isActive": boolean,
    "dateCreated": string
    }
