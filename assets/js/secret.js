// a key map of allowed keys
var allowedKeys = {
  52: '4',
  16: 'Shift',
  85: 'U',
  83: 's',
  50: '2',
  71: 'G',
  69: 'e',
  84: 't',
  73: 'I',
  78: 'n'
};

// the secret ecode sequence
var secretecode = ['4', 'Shift', 'U', 's', '2', 'Shift', 'G', 'e', 't', 'Shift', 'I', 'n'];

// a variable to remember the 'position' the user has reached so far.
var secretecodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the secret ecode
  var requiredKey = secretecode[secretecodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the secret ecode sequence
    secretecodePosition++;
    console.log(secretecodePosition);

    // if the last key is reached, activate cheats
    if (secretecodePosition == secretecode.length) {
      activateCheats();
      secretecodePosition = 0;
    }
  } else {
    secretecodePosition = 0;
  }
});

function activateCheats() {
  alert("cheats activated");
  window.location.href = "http://turtleducks.duckdns.org:8080/secret.html";
}
