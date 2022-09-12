var a = 0;
function foo() {
    var b = 0;
    return function() {
        console.log(++a, ++b);
    };
}

var f1 = foo();
var f2 = foo();

f1(); // --> A
f1(); // --> B
f1(); // --> B
// f2(); // --> C
// f2(); // --> D