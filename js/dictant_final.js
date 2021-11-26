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


// let center = [5, 6]
// let number = 4
// let number1 = 4 / 2

// function serik() {

//    let a = [center[0] - number1, center[1] + number1]
//    let b = [center[0] + number1, center[1] + number1]
//    let c = [center[0] + number1, center[1] - number1]
//    let d = [center[0] - number1, center[1] - number1]
//    console.log("Верхний угол левый", a, "верхний угол правый", b, "Нижний угол левый", c, "Нижний угол правый", d)

// }

// serik()


// var arr = [];
// var index = 0;

// function recursive(istr, curstr, count) {
//    count--;
//    for (var i = 0; i < istr.length; i++) {
//       var str = curstr + istr.charAt(i);
//       if (count > 0) {
//          recursive(istr, str, count);
//       }
//       else {
//          console.log(str);    // showing answers here
//          arr[index++] = str;  // or they are in the array here
//       }
//    }
// }

// function enumerate(str, n) {
//    for (var i = 0; i < n; i++) {
//       recursive(str, "", i + 1);
//    }
// }

// enumerate("ab", 2)