#!/bin/bash

# Copyright (c) 2014 The Virtual Vulcano authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that
# can be found in the LICENSE.md file.

set -e
set -u

((mongod > /tmp/mongo-logs) &) && cd app && bash
