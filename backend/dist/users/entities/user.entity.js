"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    id;
    userId;
    userName;
    userPassword;
    region;
    userDesc;
    pets;
    profile;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map