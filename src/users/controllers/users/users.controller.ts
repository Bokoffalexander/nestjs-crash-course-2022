import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

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
    toCreateUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send('Created!');
    }
    
    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email);
        return {};
    }
}
