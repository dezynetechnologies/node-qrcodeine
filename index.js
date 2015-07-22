var qrcodeine = require('bindings')('qrcodeine.node');

// some convenience consts:

// consts for EC level
qrcodeine.EC_L = 0;
qrcodeine.EC_M = 1;
qrcodeine.EC_Q = 2;
qrcodeine.EC_H = 3;

// consts for mode
qrcodeine.MODE_NUM   = 0; // numeric
qrcodeine.MODE_AN    = 1; // alphanumeric
qrcodeine.MODE_8     = 2; // 8-bit bytes (binary)
qrcodeine.MODE_KANJI = 3; // Kanji

module.exports = qrcodeine;
