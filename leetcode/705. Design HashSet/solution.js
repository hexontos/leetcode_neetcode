// Total Space Complexity is O(n)
var MyHashSet = function() {
    this.capacity = 16;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);
    this.deleted = Symbol('deleted'); // Unique marker for deleted entries
};

MyHashSet.prototype._hash = function(key) {
    return key % this.capacity;
};

MyHashSet.prototype._jmpInd = function(index) {
    return (index + 1) % this.capacity;
};

// O(n)
MyHashSet.prototype._resize = function() {
    const oldTable = this.table;
    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;

    for (const k of oldTable) {
        if (k !== null && k !== this.deleted) {
            this.add(k);
        }
    }
};


/**
 * @param {number} key
 * @return {void}
 */
// Time: O(n) & Θ(1)
MyHashSet.prototype.add = function(key) {
    if (this.size / this.capacity >= 0.75) {
        this._resize();
    }

    let index = this._hash(key);

    while (true) {
        if (this.table[index] === null || this.table[index] === this.deleted) {
            this.table[index] = key;
            this.size++;
            return;
        } else if (this.table[index] === key) {
            return;
        }
        index = this._jmpInd(index);
    }
};


/**
 * @param {number} key
 * @return {void}
 */
// Time: O(n) & Θ(1)
MyHashSet.prototype.remove = function(key) {
    let index = this._hash(key);
    const original_index = index;

    while (true) {
        if (this.table[index] === null) {
            return;
        } else if (this.table[index] === key) {
            this.table[index] = this.deleted;
            this.size--;
            return;
        }
        index = this._jmpInd(index);
        if (index === original_index) {
            return;
        }
    }
};

/**
 * @param {number} key
 * @return {boolean}
 */
// Time: O(n) & Θ(1)
MyHashSet.prototype.contains = function(key) {
    let index = this._hash(key);
    const original_index = index;

    while (true) {
        if (this.table[index] === null) {
            return false;
        } else if (this.table[index] === key) {
            return true;
        }
        index = this._jmpInd(index);
        if (index === original_index) {
            return false;
        }
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
