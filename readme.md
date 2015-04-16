Cli-mapper
==========

Minimalistic command line mapper to use in pipes. Can work on json data as well.

Use it to transform line based output of one utility to something else.

Use like:

```bash
$ echo "foo bar" | map examples\split.js --json
```

You need to define mapping functions yourself. These come in the following form:

    module.exports = function(input) {
        //do something
        return input
    }

Installation
---------

