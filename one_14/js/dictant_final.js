// let script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// let a = {}
// let b = [1, 2, 3]
// function c(a, b) {
//    if (a > b) {
//       return a
//    } else {
//       return b
//    }
//    a > b ? a : b
// }
// console.log(b[b.length - 1]);
// b.push(4)
// console.log(b[b.length - 1]);

// const shyndyk = true;

// if (shyndyk) {
//    console.log('shundyk');
// } else {
//    console.log('No');
// }

// let na = ["Zhaner", "Kaisar", "Dias", "Disa", "Dancho"];

// function searchName(name) {

//    na.forEach(af => {
//       if (af == name) {
//          console.log(name);
//       }

//    })

// }


// searchName("Kaisar")


// let my_dreams = "my dreams are my dreams"

// function letters(letter) {
//    letter = letter.split(" ").join("");
//    console.log(letter.length);
// }

// letters(my_dreams)



// for (let i = 0; i < 1000; i++) {

//    if ((3 ** i) < 1000) {
//       console.log(3 ** i)
//    } else {
//       break
//    }

// }


// function findPoints(arr, number) {
//    let u = []
//    let a = [arr[0] - (number / 2), arr[1] + (number / 2)]
//    let b = [arr[0] + (number / 2), arr[1] + (number / 2)]
//    let c = [arr[0] - (number / 2), arr[1] - (number / 2)]
//    let d = [arr[0] + (number / 2), arr[1] - (number / 2)]
//    u.push(a, b, c, d)
//    console.log(u)
// }

// findPoints([25, 25], 10)

let arr1 = ["a", "b"]

let  arr = [];
let index = 0;

function recursive(istr, curstr, count) {
   count--;
   let a = [];ь
   for (let i = 0; i < istr.length; i++) {
      let str = curstr + istr.charAt(i);
      if (count > 0) {
         recursive(istr, str, count);
      }
      else {
         a.push(str)
         arr[index++] = str;  // or they are in the array here
         if(length.length = index)
         console.log(a);    // showing answers here
         // console.log(arr);
      }
   }
}

function enumerate(arr, n) {
   for (var i = 0; i < n; i++) {
      recursive(arr.join(), "", i + 1);
   }
}

enumerate(arr1, 2)


// let array = ["a", "b"];
// let number = 2;

// function doThis(arr, num) {
//    for (let i = 0; i < arr.length; i++){
//       let finKod = []
//       let a = arr[i] + arr[i]
//       finKod.push(a)
//    }
   
// }


//  let count = 0;

//  function ffff(arr, num, startL, afterL) {
//       for (let i = 0; i < arr.length; i++){
//          startL = arr[i]
//          afterL= arr[i+1]
//          let endC = startL + afterL
//          if (endC.length = count){
//             console.log(endC);
//          }
//       }
//  }