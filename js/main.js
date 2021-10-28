function getRandomInt(min, max) {
  if (min < 0 ) {
    return undefined;
  }
  if(max < 0 ) {
    return undefined;
  }
  if (max < min) {
    return undefined;
  }
  if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 19);

function checkStringLength(currentComment, maxLength) {
  return  currentComment.length < maxLength;
}

checkStringLength('Test Message', 140);
