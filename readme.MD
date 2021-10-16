# Convert an object to javascript that exports the object with simple commenting mechanism 

## How to install

    npm install @ritani/to-simple-js

## How to use

    const { to_simple_js } = require('@ritani/to-simple-js');

    const object = [
        {
            x: 1,
            y: (a) => console.log(a),
        }
        {
            x: 2,
            y: (a) => console.log(a),
        }
    ];

    const result = to_simple_js('test', object);
    
    console.log(result);