// class BankAccount {
//   constructor(name, money) {
//     this.holder = name;
//     this.balance = money;
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(value) {
//     if (value >= 0) {
//       this._balance = value;
//     } else {
//       console.log('You cannot set negative number for balance')
//     }
//   }

//   deposit(money) {
//     this.balance += money;
//   }

//   withdraw(money) {
//     if (this.balance - money < 0) {
//       console.log('Insufficient balance');
//     } else {
//       this.balance -= money;
//     }
//   }

//   transfer(money, anotherAccount) {
//     const account = anotherAccount;
//     if (this.balance - money < 0) {
//       console.log('Insufficient balance');
//     } else {
//       this.balance -= money;
//       account.balance += money;
//     }
//   }
// }

// const account1 = new BankAccount('Michael', 10000);
// account1.balance = 20000;
// account1.balance = -5000;

function createBankAccount(name, money) {
  const holder = name;
  let _balance = money;

  const account = {
    get balance() {
      return _balance;
    },

    set balance(money) {
      if (money >= 0) {
        _balance = money;
      } else {
        console.log('You cannot set negative number for balance');
      }
    },

    deposit(money) {
      this.balance += money;
    },

    withdraw(money) {
      if (this.balance - money < 0) {
        console.log('Insufficient balance');
      } else {
        this.balance -= money;
      }
    },

    transfer(money, anotherAccount) {
      const account = anotherAccount;
      if (this.balance - money < 0) {
        console.log('Insufficient balance');
      } else {
        this.balance -= money;
        account.balance += money;
      }
    },
  };
  return account;
}

const account1 = createBankAccount('Michael', 10000);
console.log(account1._balance); // undefined 출력
account1.balance = 20000;
account1.balance = -5000; // 'You cannot set negative number for balance' 출력