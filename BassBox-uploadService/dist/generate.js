"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = generate;
const Idlength = 5;
function generate() {
    const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
    let id = "";
    for (let i = 0; i < Idlength; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
}
