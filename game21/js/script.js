
let a = [10, 9, 8, 7, 6, 5, 4, 3, 2]

let me = 0;

let comp = 0;



$("#start").on("click", function () {

   me = me + a[0 + Math.floor(Math.random() * 8) + 1]
   comp = comp + a[0 + Math.floor(Math.random() * 8) + 1]
   console.log("me", me);
   $("#start").css("display", "none")
})
$("#con").on("click", function () {
   me = me + a[0 + Math.floor(Math.random() * 8) + 1]
   comp = comp + a[0 + Math.floor(Math.random() * 6) + 2]
   console.log(me);
   if (me == 21) {
      alert("me won")
      me = 0
      comp = 0
      $("#start").css("display", "inline-block")
   }
   if (comp == 21) {
      alert("comp won")
      me = 0
      comp = 0
      $("#start").css("display", "inline-block")
   }


   if (me > 21) {
      alert("You lose")
      me = 0
      comp = 0
      $("#start").css("display", "inline-block")
   } if (comp > 21) {
      alert("bot lose")
      me = 0
      comp = 0
      $("#start").css("display", "inline-block")
   }
})


$("#stop").on("click", function () {
   $("#start").css("display", "inline-block")
   if (me > comp) {
      alert("Me won")
      me = 0
      comp = 0
   } else {
      alert("Bot won")
      me = 0
      comp = 0
   }
})