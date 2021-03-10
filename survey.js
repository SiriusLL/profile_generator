const { RSA_SSLV23_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknmes are also acceptable ', (answer) => {
  rl.question('Whats an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favorite (eg; dinner, brunch, etc)?', (answer4) => {
        rl.question('Whats your favorite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favorite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
  console.log(`Thank you for your valuable feedback: ${answer}'s favorite activity is${answer2} and he likes to listen to ${answer3} while takeing part in this activity.  His favorite meal is${answer4} and his favorite thingto eat for that meal is${answer5}. ${answer6} is his favorite sport.  His one true spuer power is ${answer7}.`);

              rl.close();
              
            });
          });
        });
      });
    });
  });
});