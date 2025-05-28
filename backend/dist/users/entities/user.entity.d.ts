export declare class UserEntity {
    id: number;
    userId: string;
    userName: string;
    userPassword: string;
    region: string;
    userDesc: string;
    pets: Array<number>;
    profile: string;
    constructor(partial: Partial<UserEntity>);
}
