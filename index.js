// add solution here
const theBeatlesPlay = function(musicians, instruments){
  const tempArr = [];
  for (let i = 0; i < musicians.length; i++){
    tempArr.push(musicians[i] + ' ' + 'plays ' + instruments[i]);
  }
  return tempArr;
};

const johnLennonFacts = arr => {
  let i = 0;
  while (i < arr.length) {
    arr[i] += arr[i] + '!!!';
  }
  return arr;
};