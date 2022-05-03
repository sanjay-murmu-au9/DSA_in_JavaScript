const resultData = new Map();
resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = { name: "Germany", population: 82 };
resultData.set(germany, 0.89) // germany as key, 0.89 as value

for (const el of resultData) {
    console.log(el, "el");
}

resultData.set('average', 33.89); // it will overwrite the above one;

// console.log(resultData.get('average'));
// console.log(resultData.average);  // not allowed;
console.log(resultData.delete('lastResult'))
// console.log(resultData.delete({ name: "Germany", population: 82 })) // not allowed;
resultData.delete(germany);
console.log(resultData);

