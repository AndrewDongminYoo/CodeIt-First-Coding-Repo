const list = document.querySelector('.list');
const data = [{
    title: '자바스크립트 공부하기',
    isClear: true,
  }, {
    title: '쓰레기 분리수거',
    isClear: false,
  }, {
    title: '고양이 밥주기',
    isClear: true,
  }, {
    title: '독서하기',
    isClear: false,
  }, {
    title: '영어 공부하기',
    isClear: false,
  }
];

// if 문 활용
data.forEach ((item, index) => {
  console.log(`${index+1}, ${item.title}, ${item.isClear}`);
  let toDo = document.createElement('li');
  toDo.textContent = `${index + 1}. ${item.title}`;
  if (item.isClear) {
    toDo.classList.add('item', 'done');
  } else {
    toDo.classList.add('item');
  };
  list.appendChild(toDo)
});

// 삼항연산자 활용
// data.forEach ((item, index) => {
//   console.log(`${index+1}, ${item.title}, ${item.isClear}`);
//   let toDo = document.createElement('li');
//   item.isClear
//     ? toDo.classList.add('item', 'done')
//     : toDo.classList.add('item');
//   toDo.textContent = `${index + 1}. ${item.title}`;
//   list.appendChild(toDo)
// });

// 논리 연산자 활용
// data.forEach ((item, index) => {
//   console.log(`${index+1}, ${item.title}, ${item.isClear}`);
//   let toDo = document.createElement('li');
//   toDo.classList.add('item', item.isClear && 'done');
//   toDo.textContent = `${index + 1}. ${item.title}`;
//   list.appendChild(toDo)
// });