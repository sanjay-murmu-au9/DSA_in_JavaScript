// Under the hood HashTable is just an array work with indexes;
class HashTable {
    constructor() {
        this.size = 100;
        this.buckets = Array(100).fill(null); // arr of size 1000 buckets; fill(null) to replace with empty value with null;
    }

    // Translate string into number; and use index in our array.
    hash(key) { // a= 1; b= 3; ab => 1+2 ==> 3
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0) // charCode is bild in method which can be called on string to convert into number. 0 --> first character. 
        }
        return hash % this.size;
    }

    // allow us to add key value to its specific key, if key existing will overwrite it.
    set(key, value) {
        let keyHash = this.hash(key);
        if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
            this.buckets[keyHash] = { key: key, val: value };
        } else {
            while (this.buckets[keyHash] !== null) {
                keyHash++;
            }
            this.buckets[keyHash] = { key: key, val: value };
        }
    }

    get(key) {
        const keyHash = this.hash(key);
        for (let i = keyHash; i < this.buckets.length; i++) {
            if (!this.buckets[i]) {
                continue;
            }
            if (this.buckets[i].key === key) {
                return this.buckets[i].val;
            }
        }
        return undefined;
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