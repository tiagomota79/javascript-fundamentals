// Modify this code to use the shout function to print HELLO after 2 seconds (2000ms)
// There are no tests for this problem, try running it in the web browser console

function shout(x) {
  console.log(x.toUpperCase());
}

setTimeout(() => shout('hello'), 2000);
