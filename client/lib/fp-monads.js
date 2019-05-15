module.exports = {};
const exports = module.exports;

const monad = {};

class Monad {
    constructor(fn) {
        this.run = () => fn;
    }
    map(fn) {
        return new this(() => fn(this.run()));
    }
    bind(M) {
        return new this(() => M(this.run()).run());
    }
    thunk() {
        const x = this.run();
        return new this(() => x);
    }
    thunkMap(fn) {
        const x = this.run();
        return new this(() => fn(x));
    }
    pipe(...fns) {
        let x = fns[0];
        for (let i = 1, n = fns.length; i < n; i++) res = fns[i](x);
        return new this(() => x(this.run()));
    }
    when(p) {
        const self = this;
        return fn => {
            return new self(() => (function () {
                const x = self.run();
                if (!!p(x)) {
                    return fn(x);
                }
                return x;
            })());
        };
    }
    tap() {
        const self = this;
        return new self(() => (function () {
            const x = self.run();
            console.log(x);
            return x;
        })());
    }
}

class IO extends Monad {

}

class Either {
    constructor() {

    }
}


monad.IO = IO;
monad.Either = Either;
monad.Maybe = Maybe;

exports.monad = monad;