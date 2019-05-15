module.exports = {};
exports = module.exports;

// class LinkedNode {
//     constructor(parent, prev, next, data, childList) {
//         this.parent = parent;
//         this.prev = prev;
//         this.next = next;
//         this.data = data;
//         this.childList = childList;
//     }
//     of(parent, prev, next, data, childList) {
//         return new LinkedNode(parent, prev, next, data, childList);
//     }
//     appendChild(node) {
//         this.childList.next = node;
//     }
//     mapChildList(fn) {
//         let head = this.childList
//         let current = head;
//         let result;
//         while (!!current) {

//             result = fn(current.next);
//         }
//     }
//     insertNext(node) {
//         let next = this.next;
//         let prev = this.prev;
//         if (this.next) {
//             this.next = node.next;
//         }
//         if (this.prev) {

//         }
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     add(data) {
//         if (this.head === null) {
//             this.head = new DoublyLinkedList();
//             this.tail = this.head;
//         } else {
//             let 
//         }
//     }
// }

// class DoublyLinkedNodeList {

// }

exports.LinkedNode = class LinkedNode {
    constructor(prev, next, data) {
        this._node = [
            prev || null,
            data,
            next || null
        ]

        this._data = data;
    }
    of(data) {
        return new LinkedNode(null, null, data);
    }
    insertAfter(data) {

    }
}

exports.DLL = class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    of(data) {
        return new DLL().add(data);
    }
    fromDLL(node = [null, null, null]) {

    }
    add(data) {
        if (this.head === null) {
            this.head = [null, data, null];
            this.tail = this.head;
        } else {
            const node = [this.tail, data, null];
            this.tail[2] = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    map(fn) {
        let result = new DLL();
        let current = this.head;
        while (current !== null) {
            result.add(fn(current[1]));
            current = current[2];
        }
        return result;
    }
    mapReverse(fn) {
        let result = new DLL();
        let current = this.tail;
        while (current !== null) {
            result.add(fn(current[1]));
            current = current[0];
        }
        return result;
    }
    traverse(fn) {
        let current = this.head;
        while (current !== null) {
            fn(current[1]);
            current = current[2];
        }
        return this;
    }
    traverseReverse(fn) {
        let current = this.tail;
        while (current !== null) {
            fn(current[1]);
            current = current[0];
        }
        return this;
    }
    indexOf(data) {
        let current = this.head;
        let index = -1;
        let count = 0;
        while (current !== null) {
            if (current[1] === data) {
                index = count;
                break;
            }
            count++;
            current = current[2];
        }
        return index;
    }
    includes(data) {
        let test = this.indexOf(data);
        if (test && test !== -1) return true;
    }
    removeFrom(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (!current) return undefined;
            current = current[2];
        }
        console.log(current);
        if (!!current) {
            let prev = current[0];
            let next = current[2];
            if (prev) {
                prev[2] = next;
            }
            if (next) {
                next[0] = prev;
            }
            current[0] = null;
            this.length = this.length - index - 1;
        }
        return current[1];
    }
}
