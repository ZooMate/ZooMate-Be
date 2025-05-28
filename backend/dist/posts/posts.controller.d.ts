import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { PostEntity } from './entities/post.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(req: any, dto: CreatePostDto): Promise<PostEntity>;
    getPosts(): Promise<PostEntity[]>;
    getPostById(id: string): Promise<PostEntity>;
    updatePost(req: any, id: string, dto: UpdatePostDto): Promise<PostEntity>;
    deletePost(req: any, id: string): Promise<{
        userId: number;
        title: string;
        id: number;
        content: string;
        createdAt: Date;
    }>;
    createAnswer(req: any, postId: string, dto: CreateAnswerDto): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
    getAnswersByPost(postId: string): Promise<({
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
    updateAnswer(req: any, id: string, dto: UpdateAnswerDto): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
    deleteAnswer(req: any, id: string): Promise<{
        userId: number;
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
    }>;
}
