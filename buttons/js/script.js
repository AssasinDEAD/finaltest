// console.log("working");
// let amv = {
//    2: 0,
//    5: 0,
//    10: 0,
//    25: 0,
//    50: 0,
//    100: 0,
//    250: 0,
//    500: 0,
// }

// function findCoins() {
//    let count = 0
//    for (let i = 0; i < 1000000000; i++) {
//       amv[500] = amv[500] + 1 * 1

//       if (amv[500] == 500) {
//          count++
//          amv[500] = 0
//          amv[250] = amv[500] + 1 * 2
//       }
//    }
//    console.log(count);
// }


$(document).on('keydown', function (event) {

   $(`.${event.code}`).addClass('red')
   function remove() {
      $(`.${event.code}`).removeClass('red')
   }
   setTimeout(remove, 1000)
});

