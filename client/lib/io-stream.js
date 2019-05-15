/* File is incomplete. Still working on implementation. */
module.exports = {};
const exports = module.exports;

exports.IOStream = class IOStream {
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