
// Array - A Closer Look;
const names = ['Max', 'Manuel', 'Julie', 'Max'];
// console.log(names[1]) // Manuel;
// console.log(names.length) // 4

for (const el of names) {
    // console.log(el); // ['Max', 'Manuel','Julie','Max']
}

names.push('Julie') // ['Max', 'Manuel','Julie','Max','Julie']
// console.log(names.length); // 5;

// for finding
const JulieIndex = names.findIndex(el => el === 'Julie');

// splice(delete);
names.splice(2, 1); // remove after 2 index, 1 element;
// console.log(names) //['Max', 'Manuel',,'Max','Julie']

//======================XXX=============================
// Sets
const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const el of ids) {
    console.log(el);
} // ---->// ['abc',1,bb2];



//delete
ids.delete('bb2');
console.log(ids); //