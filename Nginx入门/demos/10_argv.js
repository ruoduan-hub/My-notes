/*
    argv
    argv0
    execArgv
    execPath
*/

const { argv, argv0, execArgv, execPath } = process

argv.forEach(item => {
    console.log(item);
    // /usr/local/Cellar/node/11.5.0/bin/node
    // /Users/apple/dev/My-notes/Nginx入门/demos/10_argv.js
})

console.log(argv0);

console.log(execArgv);

console.log(execPath);

