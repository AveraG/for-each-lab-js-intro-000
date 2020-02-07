function iterativeLog(array) {
  array.forEach((index ) => {
    console.log(`${index}:${element}`);
  })
}

function iterate(callback) {
  let array = ['cat', 'dog', 'horse']
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
