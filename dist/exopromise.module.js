"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ExopromiseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExopromiseModule = void 0;
const common_1 = require("@nestjs/common");
const exopromise_controller_1 = require("./exopromise.controller");
const exopromise_option_1 = require("./exopromise.option");
let ExopromiseModule = ExopromiseModule_1 = class ExopromiseModule {
    static register(options) {
        Object.assign(exopromise_option_1.EXOPROMISE_OPTIONS, options);
        return {
            module: ExopromiseModule_1,
            controllers: [exopromise_controller_1.ExopromiseController],
        };
    }
};
exports.ExopromiseModule = ExopromiseModule;
exports.ExopromiseModule = ExopromiseModule = ExopromiseModule_1 = __decorate([
    (0, common_1.Module)({})
], ExopromiseModule);
