
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}


const promises = [
  delayedPromise("Проміс 1 завершено", 2000),   // 2 секунди
  delayedPromise("Проміс 2 завершено", 1000),   // 1 секунда
  delayedPromise("Проміс 3 завершено", 3000),   // 3 секунди
  delayedPromise("Проміс 4 завершено", 500),    // 0.5 секунди
  delayedPromise("Проміс 5 завершено", 1500),   // 1.5 секунди
];


Promise.all(promises)
  .then((results) => {
    console.log("Усі проміси успішно завершені!");
    
    results.forEach((result, index) => {
      console.log(`${index + 1}: ${result}`);
    });
    

    console.log("Повний масив результатів:", results);
  })
  .catch((error) => {
    console.error("Один з промісів відхилено:", error);
  });










function createRacer(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  console.log(`Учасник "${value}" стартує з затримкою ${delay} мс`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const racers = [
  createRacer("Блискавка "),
  createRacer("Ракета "),
  createRacer("Гепард "),
  createRacer("Вітер "),
  createRacer("Тінь "),
];
Promise.race(racers)
  .then((fastest) => {
    console.log(`ПЕРЕМОЖЕЦЬ: ${fastest}`);
  })
  .catch((error) => {
    console.error("Один з промісів відхилено:", error);
  });
