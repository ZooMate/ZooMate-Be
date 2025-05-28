export declare class UserEntity {
    id: number;
    userId: string;
    userName: string;
    userPassword: string;
    region?: string | null;
    userDesc?: string | null;
    pets?: Array<number> | null;
    profile?: string | null;
    constructor(partial: Partial<UserEntity>);
}
