document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("welcome").appendChild((function () {
        const hello = document.createElement("h1");
        const text = document.createTextNode("welcome");
        hello.appendChild(text);
        hello.className = "fill-parent";
        console.log(hello);
        return hello;
    })());


    // class LinkedNode {
    //     constructor(prev, next, data) {
    //         this._node = [
    //             prev || null,
    //             data,
    //             next || null
    //         ]

    //         this._data = data;
    //     }
    //     of(data) {
    //         return new LinkedNode(null, null, data);
    //     }
    //     insertAfter(data) {

    //     }
    // }

    // class DLL {
    //     constructor() {
    //         this.head = null;
    //         this.tail = null;
    //         this.length = 0;
    //     }
    //     of(data) {
    //         return new DLL().add(data);
    //     }
    //     fromDLL(node = [null, null, null]) {

    //     }
    //     add(data) {
    //         if (this.head === null) {
    //             this.head = [null, data, null];
    //             this.tail = this.head;
    //         } else {
    //             const node = [this.tail, data, null];
    //             this.tail[2] = node;
    //             this.tail = node;
    //         }
    //         this.length++;
    //         return this;
    //     }
    //     map(fn) {
    //         let result = new DLL();
    //         let current = this.head;
    //         while (current !== null) {
    //             result.add(fn(current[1]));
    //             current = current[2];
    //         }
    //         return result;
    //     }
    //     mapReverse(fn) {
    //         let result = new DLL();
    //         let current = this.tail;
    //         while (current !== null) {
    //             result.add(fn(current[1]));
    //             current = current[0];
    //         }
    //         return result;
    //     }
    //     traverse(fn) {
    //         let current = this.head;
    //         while (current !== null) {
    //             fn(current[1]);
    //             current = current[2];
    //         }
    //         return this;
    //     }
    //     traverseReverse(fn) {
    //         let current = this.tail;
    //         while (current !== null) {
    //             fn(current[1]);
    //             current = current[0];
    //         }
    //         return this;
    //     }
    //     indexOf(data) {
    //         let current = this.head;
    //         let index = -1;
    //         let count = 0;
    //         while (current !== null) {
    //             if (current[1] === data) {
    //                 index = count;
    //                 break;
    //             }
    //             count++;
    //             current = current[2];
    //         }
    //     }
    //     includes(data) {
    //         let test = this.indexOf(data);
    //         if (test && test !== -1) return true;
    //     }
    //     removeFrom(index) {
    //         let current = this.head;
    //         for (let i = 0; i < index; i++) {
    //             if (!current) return undefined;
    //             current = current[2];
    //         }
    //         console.log(current);
    //         if (!!current) {
    //             let prev = current[0];
    //             let next = current[2];
    //             if (prev) {
    //                 prev[2] = next;
    //             }
    //             if (next) {
    //                 next[0] = prev;
    //             }
    //             current[0] = null;
    //             this.length = this.length - index - 1;
    //         }
    //         return current[1];
    //     }
    // }


    // =============================================================
    // =============================================================
    // =============================================================
    // =============================================================


    /*
    *
    *
    *
    *
    *
    *
    * 
    * */


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



    const internalCurry = (_this) => {
        console.log(_this);
        const args = Array.prototype.slice.apply(_this.arguments);
        return (
            args.length >= _this.length ?
                _this.apply(null, args) :
                new Function.bind(_this, ...args)
        );
    }

    class Functor_Array {
        constructor(array) {
            this.__array = array;
        }
        of(array) {
            return new Functor_Array(array);
        }
        map(fn) {
            const arr = _slice(this.__array);
            const r = [];
            for (let i = 0; i < arr.length; i++) {
                r[i] = fn(arr[i]);
            };
            return new Functor_Array(r);
        }
        filter(p) {
            const r = []; let j = 0;
            for (let i = 0; i < this.__array.length; i++) {
                const x = this.__array[i];
                if (!!p(x)) {
                    r[j] = x;
                    j++;
                }
            }
            return new Functor_Array(r);
        }
        mapFilter(p) {
            return fn => {
                const array = _slice(this.__array);
                const r = []; let j = 0;
                for (let i = 0; i < this.__array.length; i++) {
                    const x = array[i];
                    if (!!p(x, i)) {
                        r[j] = fn(x, i);
                        j++;
                    }
                }
                return new Functor_Array(r);
            };
        }
        reduce(fn) {
            return acc => {
                let a = acc;
                for (let i = 0; i < this.__array.length; i++) {
                    a = fn(this.__array[i], i, a);
                }
                return a;
            }
        }
        pipe(...fns) {
            const _fns = [...fns];
            const array = this.__array.slice();
            let r = _fns[0](array);
            for (let i = 1; i < _fns.length; i++) {
                console.log(r);
                r = _fns[i](r);
            }
            return r;
        }
        transduce(...xfs) {
            const _fns = [...fns];
            const arr = this.__array.slice();
            const r = [];
        }


    }



    // =====================================================================
    /*
    *
    *
    *       Implementing streaming model.
    * 
    * 
    */
    // =====================================================================


    class IOStream {
        constructor(config) {
            this.congig = config ? config : {
                request: {
                    requency: 200
                },
                process: {
                    frequency: 200
                },
                alternating: true,
                chunkLimit: 512,
                structure: "array",
                pipeOrCompose: null,
                sizeLimit: null,
                useMemoryCleanup: false,
                memoryCleanup: {
                    frequency: null
                }
            }
            this.run = (callback) => this.finalReduce(callback);
            this._inputPool = [];
            this._outputPool = [];
            this._transducers = [];
            this._mapChain = [];
        }
        getData(fn) {
            return () => { }
        }
        setTransducer(fn) {
            this._transducers.push(fn);
            if (this._transducers.length > 1) {

            }
        }
        spliceTransducers(startIndex, deleteCount, ...fns) {
            return this.map(this._transducers.splice(startIndex, deleteCount, ...fns));
        }
        map(fn) {
            if (data === undefined) {
                return this.map.bind(this, fn);
            }
            return
        }
        join() {

        }
        sendRequest(msg, getterPlugin, callback, data) {

        }
        processData(msg, callback, data) {

        }
        pipe(...fns) {
            const transducer = (data) => {
                const list = fns.slice();
                if (list.length > 0) {
                    let i = 0;
                    const fn = list[i];
                    i++
                    let res = fn(data);
                    while (i < list.length) {
                        res = list[i](res);
                        i++;
                    }
                    return res;
                }
                return undefined;
            }
            this._transducers.push(transducer);
            return this;
        }


    }
    let testSteam = new IOStream();
    console.log(testSteam.pipe);

    function producer(type, payload) {
        if (type === "start") {
            const consumer = payload;
            let i = 0;
            let handle;
            consumer("start", (t, p) => {
                if (t === "stop") clearInterval(handle);
                if (t === "data") i = p;
            });
            handle = setInterval(() => {
                consumer("data", i++);

            }, 1000);
        }
        if (type === "stop") {
            clearInterval(handle);
        }
    }
    function consumer(type, payload) {
        if (type === "start") {
            /*
                Producer will call start -- `producer("start", consumer)`.
                The payload will be the callback to the consumer
            */
            const cb = payload;
            setTimeout(function () {
                cb("data", 17);
            }, 3500);
            setTimeout(function () {
                cb("stop");
            }, 7500);
        }
        if (type === "data") {
            /* Handle data from producer here: */
            console.log(payload);
        }

    }
    producer("start", consumer);





});