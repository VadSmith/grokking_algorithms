const form = document.querySelector('.main__form');
const formBig = document.querySelector('.main__form-big');

formBig.addEventListener('submit', evt => {
  evt.preventDefault();
  const bigArrayLength = Number(document.querySelector('.input__big-array-length').value);
  const searchIntNumber = Math.floor(Math.random() * bigArrayLength);
  console.log('\n');
  console.log('Размер массива:', bigArrayLength)
  console.log('Случайно заданное число:', searchIntNumber);
  console.time('Затраченное время');
  console.log('Найденная позиция:', bigArrayBinarySearch(bigArrayLength, searchIntNumber));
  console.timeEnd('Затраченное время');
})

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(binarySearch() === NaN ? `no such number` : `position in array is: ${binarySearch()}`);
  alert(binarySearch() === NaN ? `no such number` : `position in array is: ${binarySearch()}`);
})

function binarySearch() {
  const arrayInput = form.querySelector('.input__array');
  const arrayToSearch = arrayInput.value.split(',').map(item => Number(item));
  const searchNumber = Number(form.querySelector('.search__number').value);

  let low = 0;
  let high = arrayToSearch.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arrayToSearch[mid];
    if (guess === searchNumber) return mid;
    if (guess > searchNumber) {
      high = mid - 1;
    } else { low = mid + 1; }
  }

  return NaN
}

function bigArrayBinarySearch(arrayLength, searchIntNumber) {

  const array = [...new Array(arrayLength).keys()];
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess === searchIntNumber) return mid;
    if (guess > searchIntNumber) {
      high = mid - 1;
    } else { low = mid + 1; }
  }

  return NaN

}
