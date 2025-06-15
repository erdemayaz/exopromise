"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncFunctions = void 0;
exports.Exopromise = Exopromise;
const exopromise_helper_1 = require("./exopromise.helper");
const exopromise_option_1 = require("./exopromise.option");
exports.AsyncFunctions = {};
function Exopromise() {
    return function (target, propertyKey, descriptor) {
        const targetName = target.constructor?.name || '';
        const key = `${targetName}.${propertyKey}.${(0, exopromise_helper_1.randomHex)(16)}`;
        exports.AsyncFunctions[key] = descriptor.value;
        descriptor.value = async function () {
            const { baseUrl } = exopromise_option_1.EXOPROMISE_OPTIONS;
            const response = await fetch(`${baseUrl}/exopromise`, {
                method: 'POST',
                body: JSON.stringify({
                    key,
                    args: arguments,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Please import ExopromiseModule in your app module');
                }
                throw new Error(`${propertyKey}: ${response.statusText}`);
            }
            return response.json();
        };
        return descriptor;
    };
}
