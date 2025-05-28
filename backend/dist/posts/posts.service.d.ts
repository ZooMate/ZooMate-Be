import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    createPost(userId: number, createPostDto: CreatePostDto, files: Express.Multer.File[]): Promise<({
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
        attachments: {
            id: number;
            createdAt: Date;
            fileName: string;
            fileUrl: string;
            fileSize: number;
            fileType: string;
            postId: number;
        }[];
    } & {
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    }) | null>;
    getPosts(): Promise<({
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
        answers: {
            userId: number;
            id: number;
            content: string;
            createdAt: Date;
            postId: number;
        }[];
    } & {
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    })[]>;
    getPostById(id: number): Promise<({
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
        answers: {
            userId: number;
            id: number;
            content: string;
            createdAt: Date;
            postId: number;
        }[];
    } & {
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    }) | null>;
    updatePost(id: number, userId: number, dto: UpdatePostDto): Promise<{
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    }>;
    deletePost(id: number, userId: number): Promise<{
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    }>;
    createAnswer(userId: number, postId: number, dto: CreateAnswerDto): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
    getAnswersByPost(postId: number): Promise<({
        user: {
            userId: string;
            userName: string;
            userPassword: string;
            userDesc: string | null;
            id: number;
            region: string | null;
            pets: number[];
            profile: string | null;
        };
    } & {
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    })[]>;
    updateAnswer(id: number, userId: number, dto: UpdateAnswerDto): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
    deleteAnswer(id: number, userId: number): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
}
