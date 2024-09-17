// const fs=require('fs');
// console.log(fs);
// fs.writeFileSync("contact.txt","utf8","hello g3");

// fs.writeFile('newFile.txt', 'Hello, world!', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
//   });

// fs.appendFile('g3.txt', '\nThis is additional content.', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('Content appended successfully');
//   })

// const { ifError } = require('assert');
const fs=require('fs');
// console.log(fs);

console.log("hello 1");
 //sync->blocking operaions
//   let result=fs.readFileSync('g3.txt',"utf8");
//   console.log(result);

//async ->non-blocking operartions
// fs.readFile("g3.txt","utf8",(error,data)=>{
//     if(error){
//         throw error;
//     }
//     else{
//         console.log(data);
        
//     }
// })
//   console.log("hello 2");
  