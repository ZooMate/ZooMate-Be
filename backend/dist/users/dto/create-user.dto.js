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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
    userId;
    userName;
    userPassword;
    userDesc;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: '사용자 ID', example: 'ZooMate' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: '사용자 이름', example: '최우리' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6),
    (0, swagger_1.ApiProperty)({ description: '비밀번호', example: 'password' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '소개글',
        example: '귀여운 초코푸들 마루가 있어요',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userDesc", void 0);
//# sourceMappingURL=create-user.dto.js.map