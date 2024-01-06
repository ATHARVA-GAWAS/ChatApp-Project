"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    async handleMessage(userMessage) {
        try {
            let response = '';
            if (userMessage.includes('hello')) {
                response = 'Hi there!';
            }
            else if (userMessage.includes('how are you')) {
                response = 'I am just a computer program, but thanks for asking!';
            }
            else if (userMessage.includes('bye')) {
                response = 'Goodbye!';
            }
            else {
                response = 'I do not understand.';
            }
            return { response };
        }
        catch (error) {
            console.error('Error while processing user message:', error);
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('userMessage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "handleMessage", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('chat')
], AppController);
//# sourceMappingURL=app.controller.js.map