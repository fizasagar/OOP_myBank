#!usr/bin/env/ node
// Class
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    // publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit successfully get into new account and your balance is:" + this.accountbalance);
        }
        else {
            console.log("credit unsuccessful");
        }
    }
    // publically debit 
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit successfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit unsuccessfully");
        }
    }
}
// Customer Details
class Customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        //this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    // publically user access
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Amount In Bank:" + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(8000);
const c1 = new Customer({ firstname: "Fiza", lastname: "Sagar" }, 23, "female", 34531650062, a1);
c1.display();
c1.bankaccount.debit(1000);
console.log();
const a2 = new Bankaccount(12000);
const c2 = new Customer({ firstname: "Jiya", lastname: "Asif" }, 20, "female", 345312250062, a2);
c2.display();
c2.bankaccount.debit(2000);
console.log();
export {};
