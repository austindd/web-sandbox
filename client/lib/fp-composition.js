module.exports = {};
const exports = module.exports;

exports.combinator = {

}

exports.curry = function curry(context, f) {
    return function curried() {
        const args = Array.prototype.slice.apply(arguments);
        console.log(context);
        return (
            args.length >= f.length ?
                f.apply(context, args) :
                curried.bind(context, ...args)
        );
    };
}

/* Arithmetic */
exports.add = function add(a) { return b => a + b; }
exports.subtract = function subtract(a) { return b => a - b; }
exports.multiply = function multiply(a) { return b => a * b; }
exports.divide = function divide(a) { return b => a / b; }
exports.modulo = function modulo(a) { return b => a % b; }
exports.isInteger = function isInteger(a) { return a % 1 === 0; }
exports.isEvent = function isEven(a) { return (a % 2 === 0); }
exports.isOdd = function isOdd(a) { return (a % 2 === 1); }

/* Composition */
exports.identity = function identity(a) { return a; }
exports.not = function not(a) { return !a; }
exports.always = function always(a) { return () => a; }
exports.flip = function flip(a) { return b => c => a(c)(b); }
exports.left = function left(a) { return b => c => b };
exports.right = function right(a) { return b => c => c };

exports.apply = function apply(a) { return b => a(b); }
exports.apply2 = function apply2(a) { return b => c => a(b(c)); }
exports.apply3 = function apply3(a) { return b => c => d => a(b(c(d))); }

exports.defer = function defer(a) { return () => a(); }
exports.deferApply = function defer2(a) { return () => b => a(b); }
exports.deferApply2 = function defer3(a) { return () => b => c => a(b(c)); }

exports.liftA2 = function liftA2(a) { return }

// function either(left) { return (right) => (e) => e.some ? left(e.some) : right(e.none); }

// const Maybe = (maybe) => (fn) => {
//     const m = {}
//     return () => {
//         let j = maybe.just(fn);
//         if (!!j) {
//             m.just = j;
//         } else {
//             m.nothing = maybe.nothing();
//         }
//     }
// }



exports.getProp = function getProp(key) { return obj => obj[key]; };

exports.mapObj = function mapObj(fn) {
    return obj => {
        const res = {};
        for (let i = 0, keys = Object.keys(obj), n = keys.length; i < n; i++) {
            res[keys[i]] = fn(obj[keys[i]]);
        }
        Object.setPrototypeOf(res, obj.prototype);
    }
}

exports.mapArray = function mapArray(fn) {
    return data => {
        const _data = data.slice();
        const res = [];
        let i = 0;
        while (i < _data.length) {
            res[i] = fn(_data[i]);
            i++;
        }
        return res;
    }
};
exports.filterArray = function filterArray(p) {
    return fn => data => {
        const _data = data.slice();
        const res = [];
        let i = 0, j = 0;
        while (i < _data.length) {
            if ((!!p(_data[i], i) === true)) {
                res[j] = fn(_data[i], i);
                i++; j++;
            } else {
                i++;
            }
        }
        return res;
    }
}
exports.reduceArray = function reduceArray(fn) {
    return acc => data => {
        const _data = data.slice();
        let i = 0;
        while (i < _data.length) {
            acc = fn(data[i], i, acc);
            i++;
        }
        return acc;
    }
}
// exports.transduceArray = function transduceArray(...fns) {
//     return acc => data => {

//     }
// }

exports.compose1 = function compose1(...fns) {
    return (...args) => {
        const list = fns.slice();
        if (list.length > 0) {
            const fn = list.pop();
            let res = fn(...args);
            while (list.length > 0) {
                res = list.pop()(res);
            }
            return res;
        }
        return undefined;
    }
}
exports.pipe0 = function pipe0(...fns) {
    let res = fns[0];
    for (let i = 1, n = fns.length; i < n; i++) res = fns[i](res);
    return res;
}
exports.pipe1 = function pipe1(...fns) {
    return (...args) => {
        const list = fns.slice();
        if (list.length > 0) {
            let i = 0;
            const fn = list[i];
            i++
            let res = fn(...args);
            while (i < list.length) {
                res = list[i](res);
                i++;
            }
            return res;
        }
        return undefined;
    }
}
exports.pipe2 = function pipe2(...fns) {
    return (...args) => compose1(...fns.reverse())(...args);
}
exports.pipe3 = function pipe3(...fns) {
    const _pipe3 = compose1(...fns.reverse());
    return (...args) => _pipe3(...args);
}


// Helper functions:

exports.trace = function trace(x) { console.log(x); return x; }
exports._table = function _table(...args) { return console.table(...args); }
exports._slice = function _slice(...args) { return Array.prototype.slice.apply(...args); }
exports.mergeProps = function mergeProps(obj) {
    return (data) => {
        return Object.assign({}, data, obj);
    };
}
exports.filterProps = function filterProps(arr) {
    return (data) => {
        const o = {};
        const keys = Object.keys(data);
        let i = keys.length;
        while (i--) {
            if (arr.includes(keys[i])) {
                break;
            } else {
                o[keys[i]] = data[keys[i]];
            }
        }
        return o;
    };
}


