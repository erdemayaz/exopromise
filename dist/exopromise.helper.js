"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHex = randomHex;
function randomHex(size) {
    return [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');
}
