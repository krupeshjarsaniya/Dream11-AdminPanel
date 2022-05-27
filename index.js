const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const moment = require('moment');
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

var blocks = {};
hbs.registerPartials(__dirname + '/views/admin/partials/');
hbs.registerHelper('json', function (obj) {
    return JSON.stringify(obj);
});
hbs.registerHelper('extend', function (name, context) {
    var block = blocks[name
    ];
    if (!block) {
        block = blocks[name
        ] = [];
    }
    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});
hbs.registerHelper('block', function (name) {
    var val = (blocks[name
    ] || []).join('\n');
    blocks[name
    ] = [];
    return val;
});
hbs.registerHelper('checkIf', function (v1, o1, v2, options) {
    if (typeof v1 === "object" && typeof v2 === "object") {
        v1 = (typeof v1 === "object") ? (v1.toString()) : v1;
        v2 = (typeof v2 === "object") ? (v2.toString()) : v2;
    }
    var operators = {
        '==': function (a, b) { return a == b
        },
        '===': function (a, b) { return a === b
        },
        '!=': function (a, b) { return a != b
        },
        '!==': function (a, b) { return a !== b
        },
        '<': function (a, b) { return a < b
        },
        '<=': function (a, b) { return a <= b
        },
        '>': function (a, b) { return a > b
        },
        '>=': function (a, b) { return a >= b
        },
        '&&': function (a, b) { return a && b
        },
        '||': function (a, b) { return a || b
        },
    }
    var a1 = operators[o1
    ](v1, v2);
    return a1 ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper("formatDate", function (datetime) {
    return moment(datetime).format('D-MMM-Y');
});
hbs.registerHelper("unixformatDate", function (datetime) {
    return moment(datetime).format('D-MMM-YYYY hh:mm A');
});
hbs.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});
hbs.registerHelper("slice", function (value, options) {
    if (value.length > 40) {
        return value.slice(0,
        35) + '...';
    }
    return value;
});

app.set('view engine', 'hbs');

app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000})); // support encoded bodies
app.use(function (req, res, next) {
    res.locals.user = req.session ?. user ?. name;
    next();
})

app.use(express.static(__dirname + '/public'));

app.use(require('./routes'));


// Start server
app.listen(port, () => {
    console.log(`Server Started at port ${port}`);
});