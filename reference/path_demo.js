const path = require('path');

//--------Base file name
console.log(__filename);
// /Users/huangyifei/Desktop/Node_Crash/reference/path_demo.js
console.log(path.basename(__filename));
//path_demo.js

//--------Directory name
console.log(path.dirname(__filename));
//  /Users/huangyifei/Desktop/Node_Crash/reference

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename))
//{
//   root: '/',
//   dir: '/Users/huangyifei/Desktop/Node_Crash/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

//Concatenate paths
console.log(path.join(__dirname,'test','hello.html'))
// /Users/huangyifei/Desktop/Node_Crash/reference/test/hello.html
