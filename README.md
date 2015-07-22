node-qrcodeine
==============
QR Code generator for Node.js using `libqrencode` and `libpng`. This Node.js
module is a fork from [qrc](https://www.npmjs.com/package/qrc) which brings it
to Node.js v0.12.x and adds some customizations.

As opposed to many QR code generators, `qrcodeine` can be passed very specific
options, including not only the error correction level or the QR code version
but also the QR code mode (numeral, alphanumeric, 8-bit binary, Kanji).

Requirements
------------
- [libpng](http://www.libpng.org/pub/png/libpng.html)
- [libqrencode](http://fukuchi.org/works/qrencode/)

Installation
------------
1) Install `libpng(-dev)` and `libqrencode(-dev)` using the package manager of
your choice.

2) `npm install qrcodeine`

Usage
-----

    var qr = require('qrcodeine');

    var qrBuffer = qr.encode('Some text to put in a QR Code');
    // or:
    var qrPngBuffer = qr.encodePng('Some text to put in a QR Code PNG');

    // of course there are some options:
    var qrPngBuffer = qr.encodePng('FOO123', {
      version: 4,
      ecLevel: qr.EC_H,
      mode: qr.MODE_AN,
      dotSize: 5,
      margin: 2,
      foregroundColor: 0xFF0000,
      backgroundColor: 0x00FF00
    });

### Options

`version` – *Minimum* version of QR Code, valid values: 1-41, 0 = auto
[default]

`ecLevel` – error correction level, valid values: EC_L (lowest [default]) –
EC_M – EC_Q - EC_H (highest)

`mode` – QR code mode, valid values: MODE_NUM (numeral)– MODE_AN (alphanumeric)–
MODE_8 (8-bit binary [default])- MODE_KANJI (kanji)

`dotSize`* – Size of one ‚dot‘ in pixels, valid values: 1-50
(default: 3)

`margin`* – Size of margin (in dots with background color),
valid values: 0-10 (default: 4)

`foregroundColor`* – Foreground color, valid values:
0x0-0xFFFFFF (default: 0x0 [= black])

`backgroundColor`* – Background color, valid values: 0x0-0xFFFFFF (default:
0xFFFFFF [= white])

\* = PNG encoding only

Legal
-----
QR Code is a registered trademark of
[DENSO WAVE INCORPORATED](http://www.denso-wave.com/en/).

License
-------
Copyright (C) 2013 Tobias Muellerleile <muellerleile@hrz.uni-marburg.de>

Copyright (C) 2015 Net Oxygen Sàrl <info@netoxygen.ch>

This library is free software; you can redistribute it and/or modify it under
the terms of the GNU Lesser General Public License as published by the Free
Software Foundation; either version 2.1 of the License, or any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along
with this library; if not, write to the Free Software Foundation, Inc., 51
Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
