var argv = require('minimist')(process.argv.slice(2));
var path = require('path');

var map = argv._[0];
var json = argv.json || false;

if (!map) {
    process.stderr.write('no map file defined, use as:\n');
    process.stderr.write('$ map examples\\split.js\n');
    process.exit();
}

var mapper = require(path.resolve(process.cwd(),map));

process.stdin.on('data',function(line) {
    var inp = line.toString('utf8');
    if (json) {
        inp = JSON.parse(inp);
    }
    var out = mapper(inp);
    if (typeof out === 'object') {
        out = JSON.stringify(out);
    }

    process.stdout.write(out+'\n');
});
