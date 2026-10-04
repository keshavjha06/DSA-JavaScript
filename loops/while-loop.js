// this for loop never runs because the condition is false from the start
function forLoopNeverRuns() {
  for (let i = 11; i <= 10; i++) {
    console.log(i + ' ');
  }
}

function whileLoopOneToTen() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

// a do-while loop always runs at least once
function doWhileRunsOnce() {
  let i = 11;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

forLoopNeverRuns();
whileLoopOneToTen();
doWhileRunsOnce();
