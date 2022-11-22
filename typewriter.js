
let time = 0;

const animeString = function(sentence) {
  for (const char of sentence) {
    time += 80;
    setTimeout(() => {
      process.stdout.write(char);
    }, time); 
  }
  // setTimeout(() => {
  //   process.stdout.write("\n");
  // },time+50);

  setTimeout(() => {
    console.log(" ");
  }, time+50); 


}

animeString("hello there from lighthouse labs");
