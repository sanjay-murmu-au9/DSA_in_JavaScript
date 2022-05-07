// Under the hood HashTable is just an array work with indexes;
class HashTable {
    constructor() {
        this.size = 16;
        this.buckets = Array(16).fill(null).map(() => []);
    }

    // Translate string into number ; and use index in our array.
    hash(key) { // a= 1; b= 3; ab => 1+2 ==> 3
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0) // charCode is biild in method which can be called on string to convert into number. 0 --> first character. 
        }
        return hash % this.size;
    }

    // allow us to add key value to its specific key, if key existing will overwrite it.
    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
            return element.key === key;
        });
        if (storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value });
        }
    }

    get(key) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            return element.key === key;
        });
        return storedElement;
    }

    showInfo() {
        // for in loops; in order get key(indexs)
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key])
            }
        }
    }
}

const word = 'hello';
// const word = 'acadimind';

// function findFirstReatedLetter(str) {
//     const table = new HashTable();
//     for (const char of str) {
//         if (table.get(char)) {
//             return char;
//         }
//         table.set(char, 1)
//     }
// }

// console.log(findFirstReatedLetter(word))

const table1 = new HashTable();
for (const char of 'academind') {
    table1.set(char, char)
}

for (const char of 'hello') {
    table1.set(char, char)
}

for (const char of 'does this work') {
    table1.set(char, char)
}

console.log(table1.showInfo());