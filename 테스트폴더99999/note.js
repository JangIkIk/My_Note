const stringifiableObjects = [
    9,
    null,
    true,
    false,
    "Hello world",
    [],
    [8],
    ["hi"],
    [8, "hi"],
    [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999],
    [8, [[], 3, 4]],
    [[[["foo"]]]],
    {},
    { a: "apple" },
    { foo: true, bar: false, baz: null },
    { "boolean, true": true, "boolean, false": false, null: null },
    // basic nesting
    { a: { b: "c" } },
    { a: ["b", "c"] },
    [{ a: "b" }, { c: "d" }],
    { a: [], c: {}, b: true },
  ];


  function stringifyJSON(obj) {
    console.log("함수실행");
    
    
    if(obj.length === 0){
        return obj
    }



 
    
    ///
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === "number") {
            result.push(`"${obj[i]}"`);
        } else if(obj[i] === null ){
            result.push(`"${obj[i]}"`);
        } else if(typeof obj[i] === "boolean"){
            result.push(`"${obj[i]}"`);
        } else if(typeof obj[i] === 'string'){
            result.push(`"${obj[i]}"`)
        }

        if(Array.isArray(obj[i])){
            if(obj[i].length === 0){
                result.push(`"${"[]"}"`)
            } else{
                result.push(`"${[obj[i]]}"`)
            }
        }
        // else if (typeof obj[i] === 'array') {
        //     result.push(stringifyJSON(obj[i]));
        // }
    }
    
    return `'${result}'`
    ////

    
    
  }

  const r = stringifyJSON(stringifiableObjects);
  console.log(r);
  console.log(typeof r[5]);

// console.log(["a",2,3,4])
