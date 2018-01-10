var fs=require('fs'); 
// js是异步的，回调  
// node是一个异步无阻塞 封装webkit 高并发 能迅速降低成本的后端语言 提高性能，服务器需求
// 异步 同步
// fs.readFile(filename,[encoding],[callback(err,data)])
// filename（必选），表示要读取的文件名。
// encoding（可选），表示文件的字符编码。
// callback 是回调函数，用于接收文件的内容。
// const f1 = fs.readFileSync('./input.txt','utf-8');
// console.log(f1);
// const f2 = fs.readFileSync('./input2.txt','utf-8');
// console.log(f2);
// const f3 = fs.readFileSync('./input3.txt','utf-8');
// console.log(f3);
// 回调地狱
// fs.readFile('input.txt', function (err, data) {
//     console.log(data.toString());
//     fs.readFile('input2.txt', function (err, data) {
//         console.log(data.toString());
//         fs.readFile('input3.txt', function (err, data) {
//             // .....
//             console.log(data.toString());
//         })
//     })
// });
function readFile1() {
    return new Promise((resolve, reject) => {
        fs.readFile('input.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
function readFile2() {
    return new Promise((resolve, reject) => {
        fs.readFile('input2.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
function readFile3() {
    return new Promise((resolve, reject) => {
        fs.readFile('input3.txt', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
readFile1()
.then(data => {
    console.log(data.toString());
    return readFile2();
})
.then(data => {
    console.log(data.toString());
    return readFile3();
})
.then(data => {
    console.log(data.toString());
})
















