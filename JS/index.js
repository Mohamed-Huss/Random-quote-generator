var qoute = [
  {
    qouteOutput:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput:
      "“If you can't explain it to a six year old, you don't understand it yourself.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput:
      "“When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput: "“Be the change that you wish to see in the world.”",
    qouteAuther: "-- Mahatma Gandhi"
  },
  {
    qouteOutput: "“The measure of intelligence is the ability to change.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput:
      "“Science without religion is lame, religion without science is blind.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput: "“You never fail until you stop trying.”",
    qouteAuther: "-- Albert Einstein"
  },
  {
    qouteOutput:
      "“It is not that I'm so smart. But I stay with the questions much longer.”",
    qouteAuther: "-- Albert Einstein"
  },
];

var lastRandom=0;

function generateQoute() {
  do {
    var random = Math.floor(Math.random() * qoute.length);
    // console.log("lastRandom ==>" + lastRandom);
    // console.log("random ==>" + random);
    }
  while (lastRandom == random);
  lastRandom = random;
  document.getElementById("qoute").innerHTML = qoute[random].qouteOutput;
  document.getElementById("auther").innerHTML = qoute[random].qouteAuther;
}




// var lastRandom = -1;
// var random = -1;
// function generateQoute() {
//   do {
//     function generateRndInteger() {
//       return Math.floor(Math.random() * qoute.length);
//     }
//     random = generateRndInteger();
//     console.log("lastRandom ==>" + lastRandom);
//     console.log("random ==>" + random);
//   } while (lastRandom == random);
//   lastRandom = random;
//   document.getElementById("qoute").innerHTML = qoute[random].qouteOutput;
//   document.getElementById("auther").innerHTML = qoute[random].qouteAuther;
// }
