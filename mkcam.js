#!/usr/bin/env node

var opn = require('open');

var camUrl = process.argv.slice(2);

var cams = [
    "bogorodica", "tabanovce", "kafasan", "deve_bair", "blace",
    "romanovce_1", "romanovce_2",
    "miladinovci_1", "miladinovci_2",
    "petrovec_1", "petrovec_2",
    "gradsko_1", "gradsko_2",
    "otovica", "sopot",
    "glumovo_1", "glumovo_2",
    "zelino_1", "zelino_2",
    "tetovo_1", "tetovo_2",
    "gostivar_1", "gostivar_2"
];

if (camUrl.length !== 1) {
    console.log("[ error ] add cam as argument");
    process.exit();
} else if (camUrl[0] === '-l') {
    console.log("[ list of cams ]");
    for (var i = 0 ; i < cams.length ; i++) {
        console.log(cams[i]);
    }
    process.exit();
}

var url = 'https://cdn.rawgit.com/SasPes/mkcam/master/mkcam.tpl.html#' + camUrl[0];
opn(url);
