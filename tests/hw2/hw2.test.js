describe('HomeWork tasks', () => {
    

    describe('getMinElem', () => {
      //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [5],
                expected: 0,
            },
            {
                array: [3, 2],
                expected: 1,
            },
            {
                array: [2, 5, 6, 0, 7],
                expected: 3,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;
            //When
            const actual = getMinElem(array);
            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

         describe('whichQuarterOfCoordinate', () => {
        //Given
        const testData = [
            {
                x: 1,
                y: 5,
                expected : '1',
            },
            {
                x: -1,
                y: 3,
                expected : '2',
            },
            {
                x: -2,
                y: -5, 
                expected : '3',
            },
            {
                x: 1,
                y: -4,
                expected : '4',
            },
        ];

        testData.forEach(data => {
            const { x, y, expected} = data;

            //When
            const actual = whichQuarterOfCoordinate(x,y);

            //Then
            it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

         describe('findPositiveSum', () => {
        //Given
        const testData = [
            {
                a: 11,
                b: 5,
                c: 1,
                expected : 17,
            },
            {
                a: -10,
                b: 5,
                c: 120,
                expected : 125,
            },
            {
                a: 12,
                b: -5,
                c: 18,
                expected : 30,
            },
            {
                a: 10,
                b: 55,
                c: -1,
                expected : 65,
            },
            {
                a: -1,
                b: -5,
                c: -1,
                expected : 0,
            },
        ];

        testData.forEach(data => {
            const { a, b, c, expected} = data;

            //when
            const actual = findPositiveSum(a,b,c);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b} and c = ${c} `, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

describe('getSumOrMultiByEven', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { a, b, expected } = data;

            //When
            const actual = getSumOrMultiByEven(a, b);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

describe('findSumEvenNum', () => {
        //Given
        const testData = [
            {
                num: 99,
                expected: [2450 , 49],
            },
            {
                num: 50,
                expected: [650 , 25],
            },
            {
                num: 123,
                expected: [ 3782, 61],
            }
        ];

        testData.forEach(data => {
            const { num, expected } = data;

            //When
            const actual = findSumEvenNum(num);

            //Then
            it(`should return ${expected} from num = ${num}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSimpleNum', () => {
        const testData = [
            {
                num: 3,
                expected: true,
            },
            {
                num: 5,
                expected: true,
            },
            {
                num: 9,
                expected: false,
            },
        ];
        testData.forEach(data => {
            const { num, expected } = data;

        //When
        const actual = getSimpleNum(num);

        //Then
        it(`should return ${expected} from num = ${num}`, () => {
        assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMarkByRating', () => {
       const testData = [
            {
                rating: 0,
                expected: 'F',
            },
           {
               rating: 1,
               expected: 'F',
           },
           {
               rating: 12,
               expected: 'F',
           },
           {
               rating: 19,
               expected: 'F',
           },
           {
               rating: 20,
               expected: 'E',
           },
           {
               rating: 21,
               expected: 'E',
           },
           {
               rating: 32,
               expected: 'E',
           },
           {
               rating: 39,
               expected: 'E',
           },
           {
               rating: 40,
               expected: 'D',
           },
           {
               rating: 41,
               expected: 'D',
           },
           {
               rating: 55,
               expected: 'D',
           },
           {
               rating: 59,
               expected: 'D',
           },
           {
               rating: 60,
               expected: 'C',
           },
           {
               rating: 61,
               expected: 'C',
           }
        ];

       testData.forEach(data => {
           const { rating, expected } = data;

           const actual = getMarkByRating(rating);

           it(`should return ${expected} when rating = ${rating}`, () => {
               assert.strictEqual(actual, expected);
           });
       })
    });
});