// let ac = {
//    a: "b",
//    c: "d"
// }

// const result = {}

// Object.entries(ac).forEach(([key, value]) => {
//    result[value] = key
// })

// console.log(result)


let a = ["Serik", "Gala", "Zhasik"]

let d = {
   hours: 10,
   minutes: 00
}

function findTime(arr, n) {
   for (let i = 0; i < arr.length; i++) {
      d.minutes += n
      if (d.minutes > 60) {
         d.minutes = d.minutes - 60
         d.hours += 1
      }
      console.log(a[i] + " " + d.hours + ":" + d.minutes);

   }
   console.log(d);
}

findTime(a, 25)