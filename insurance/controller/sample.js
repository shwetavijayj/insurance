//this file is to explain simple promise example.


//function definition 
function addition(num1, num2) {
    return new Promise(function (resolve, reject) {
        console.log(num1 + "and" + num2);
        if (num1 != 0 && num2 != 0) {
            resolve(num1 + num2);
        }
        else {
            let errorMsg = 'Number should be greater than 0..';
            reject(errorMsg);
        }
    });
}


//function call
addition(10, 0).then(function (res) {
    console.log("Result is :", res);
}).catch(function (err) {
    console.log("Error", err);
})

