import express from "express";

const create = (req, res, next) => {
  const { bankAccountId, amount } = req.body;
  const { db } = req.app;
  if (db == null) {
    throw Error("You must bind the router db to the app");
  }
  try {
    const bankAccount = db.get("bankAccounts").find({ id: bankAccountId }).value();
    if (bankAccount && bankAccount.balance > amount) {
      db
        .get("bankAccounts")
        .find({ id: bankAccountId })
        .assign({ balance: bankAccount.balance - amount })
        .write();
    } else {
      res.status(400).jsonp("Your balance is insufficient");
    }
  } catch (error) {
    throw Error('You must add a "transactions" and "bankAccounts" collection to your db');
  }
  next();
};

export default express
  .Router()
  .post("/transactions", create);

