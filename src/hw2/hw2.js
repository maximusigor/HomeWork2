const getSumOrMultiByEven = (a, b) => a % 2 === 0 ? a * b : a + b;

const getMinElem = array => {
    if (!array.length) {
        return -1;
    }

    let minIndex = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }

    return minIndex;
};

const getMarkByRating = rating => {
    let result = '';

    if (rating >= 0 && rating < 20) {
        result = 'F';
    } else if (rating >= 20 && rating < 40) {
        result = 'E';
    } else if (rating >= 40 && rating < 60) {
        result = 'D';
    } else {
        throw new Error('Invalid argument provided!');
    }

    return result;
};

const whichQuarterOfCoordinate = (x, y) => {
    let quarter ; 
                                         
    if (x > 0 && y > 0){
        quarter = '1';
    } else if (x < 0 && y > 0) {
        quarter = '2';
    } else if (x < 0 && y < 0) {
        quarter = '3';
    } else if (x > 0 && y < 0) {
        quarter = '4';
    }
    return quarter;
};

const findPositiveSum = (a, b, c) => {
    let sum = 0;

    if (a > 0) {
        sum += a;
    }
    if (b > 0) {
        sum += b;
    }
    if (c > 0) {
        sum += c;
    }
    return sum;
}

const countMaxMultiOrSum = (a, b, c) => {
    let result;
    let sum = a + b + c;
    let multi = a * b * c;

    if (sum > multi) {
        result = sum + 3;
    } else  {
        result = multi + 3;
    }
    return result;
}

const findSumEvenNum = num => {
  var sum = 0, count = 0;

  for(var i = 1 ; i <= num ; i++) {
   if( i % 2 === 0) {
    count++;
    sum += i;
   }
   
  }
  return [sum, count];
}
const getSimpleNum = num => {
    var simple = num != 1;
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            simple = false;
            break;
        }
    }
    return simple;
}