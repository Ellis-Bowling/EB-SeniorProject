// DON'T FORGET:
// 1. update the httpdocs folder path in server.js if needed;, then...
// 2. sudo ipfw add 100 fwd 127.0.0.1,8080 tcp from any to any 80 in
// 3. node server.js
// 4. http://localhost/somefile.html
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('/Users/CordHamrick/Projects/EB-SeniorProject/_repo/EB-SeniorProject/httpdocs/')).listen(8080);
