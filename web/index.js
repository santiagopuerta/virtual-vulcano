'use strict';

// Copyright (c) 2014 The Virtual Vulcano authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that
// can be found in the LICENSE.md file.

var express = require('express');


var app = express();

app.get('/clusters', clusters.list);
app.get('/clusters', clusters.show);
app.get('/clusters', clusters.remove);
app.get('/clusters', clusters.create);
app.get('/clusters', clusters.update);

app.get('/', function (req, res) {
  res.send('Hello Worl2d!')
})


app.listen(8080, function () {
  console.log('server listening in localhost:8080');
});

