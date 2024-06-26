import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    
    @Get()
    getUsers() {
        return [
            {
                username: 'Alex', 
                email: 'bokoffalexander@gmail.com', 
                age: 32,
            }
        ];
    }

    @Get('posts')
    getUsersPosts() {
        return [
            {
                posts: [
                    {
                        id: 1,
                        title: 'Post 1',
                    },
                    {
                        id: 2,
                        title: 'Post 2',
                    },
                ]
            }
        ];
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return [
            {
                posts: [
                    {
                        id: 1,
                        title: 'Post 1',
                        comments: [],
                    }
                    

                ]
            }
        ];
    }

    @Post()
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send('Created!');
    }
    
}
