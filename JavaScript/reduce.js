

const sumAll = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  console.log(`${currentIndex}번 index의 요소로 콜백 함수가 동작합니다.`)
  console.log(`accmulator: ${accumulator}`)
  console.log(`currentValue: ${currentValue}`)
  console.log(`------------------`)

  return accumulator + currentValue;
}, 0);

console.log(`sumAll: ${sumAll}`)