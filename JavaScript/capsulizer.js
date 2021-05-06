function createUser(email, birthdate) {
  let _email = email;
  let _point = 0;

  function increasePoint() {
    _point += 1;
  }

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },

    get point() {
      return _point;
    },

    buy (item) {
      console.log(`${this.email} buys ${item.name}`);
      increasePoint();
    },
  };

  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('chris123@google.com', '19920321');
user1.buy(item);
user1.buy(item);
user1.buy(item);
console.log(user1.point);