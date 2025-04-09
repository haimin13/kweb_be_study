const arr = [1,2,3,4];

const [b1, ,b3] = arr;
console.log(b1, b3)
const[,,,c4,c5,c6=10] = arr;
console.log(c4,c5,c6)

const obj = {x: 1, y:2, z:3};
console.log(obj)
const {x,z,u,v = 10} = obj;
console.log(x,z,u,v)
const {y: y1} = obj;
console.log(y1)

const emptyArray = []
const val1 = !emptyArray;
const val2 = !emptyArray.length;
console.log()

const getStatusCode = res => {
    try {
    console.log('try');
    return res.status.code;
    } catch (err) {
    console.log('catch');
    return 0;
    } finally {
    console.log('finally');
    }
    };
    const code1 = getStatusCode({ status: { code: 400 } });
    console.log(code1);
    const code2 = getStatusCode({});
    console.log(code2);

const path = require('path');
const myFile = '/home/ubuntu/kuniv/kweb/example.js';
const dirname = path.dirname(myFile);
const basename = path.basename(myFile);
const extname = path.extname(myFile);
console.log(`path.dirname = ${dirname}`);
console.log(`path.basename = ${basename}`);
console.log(`path.extname = ${extname}`);

const circularShapes = require('./circular-shapes');

const h = 20;
const r = 10;

console.log(`Circumference = ${circularShapes.getCircumference(r)}`)
const { getCylinderSurfaceArea } = require('./circular-shapes');
console.log(getCylinderSurfaceArea(r, h))

const fs = require('fs');
console.log('String 1');
fs.readFile('./file.bin', (err, data) => {
if (!err) console.log(`Data length: ${data.length} bytes`);
else console.error(err);
});
console.log('String 2');

