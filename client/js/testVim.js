console.log("hello");
const helloWorld = (function () {
    return JSON.stringify({
        test: {
            message: "Hello World"
        }
    })
})();

console.log(helloWorld);

function makeInt(integer) {
    if (integer % 1 !== 0) {
        console.error(`${integer} is not an integer`);
    }
    console.log(integer);
    return integer;

}

function either(some, none) {
    return {
        some: some,
        none: none,
        typeOf: "either"
    };
}

class Reactor {
    constructor(eventType) {
        this.eventType = eventType;
        this.callbacks = [];
    }
    dispatch(e, cb) {
        const r = this.callbacks.map(x => x(e));
        return cb(r);
    }
}

class EventHub {
    constructor(eventList) {
        this.eventList = eventList;
        this.reactors = eventList.reduce((reactor, eventName) => {
            reactor[eventName] = new Reactor(eventName);
            return reactor;
        }, {});
        this.events = eventList || {};
    }
    dispatch(e, cb) {
        const r = this.reactors[e.type].dispatch(e);
        return cb(r);
    }
    subscribe(eventType, ...callbacks) {
        const cbs = [...callbacks];
        this.reactors[eventType].callbacks.concat(callbacks);
        return this;
    }
    unsubscribe(eventType, ...callbacks) {
        const reactor = this.reactors[eventType];
        const cbs = [...callbacks];
        for (let i = 0; i < reactor.callbacks.length; i++) {
            if (cbs.includes(reactor.callbacks[i])) {
                reactor.callbacks.splice(i, 1);
                i--;
            }
        }
        return true;
    }
    init() {

    }
}

function tap(value) {
    let i = 0;
    let v = value;
    let fns = [];
    while (typeof v === "function") {
        i++;
        v = v()
    }
}

let i = makeInt(1);
let b = 1;

let a = 0;

let c = 2;