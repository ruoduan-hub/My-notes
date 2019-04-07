const { normalize, join } = require('path')
console.log(normalize('user//local/user'));
console.log(normalize('user//local/../user'));
/* 
user\local\user
user\user
*/

console.log(join('/asd', 'bb', '/cc'))
//   \asd\bb\cc