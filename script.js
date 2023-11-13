var time = new Date().getHours();

//console.log(time);

var greeting = "Hello";
var name = "Lam";

//your code here
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Why you still up ? Go to bed";
}

//alert();
alert(`${greeting}, ${name}!`);
