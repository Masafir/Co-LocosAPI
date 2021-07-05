import { Body, Controller, Delete, Get, InternalServerErrorException, NotAcceptableException, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { createUserDto } from './createUser.dto';
import { connexionDto } from './connexion.dto'; 
import { JwtPayload } from './jwtPayload';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from '@nestjs/passport';
import { SimpleConsoleLogger } from 'typeorm';
import { GetUser } from './get-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService,private JwtService: JwtService) {}

  /* @Get()
  @UseGuards(AuthGuard("jwt"))
  getUsers(): Promise<User[]>{
    return this.userService.getUsersProfiles();
  } */

  // SECURE GET USER DATA
 /*  @Get('/myprofile')
  @UseGuards(AuthGuard("jwt"))
  getMyProfile(@GetUser()user: User): Promise<User>{
    
    //return this.userService.getUserProfile(user.id);
  } */
  //UNSECURE GET USER DATA  
 /*  @Get('/profile/:id')
  @UseGuards(AuthGuard("jwt"))
  getUserProfile(@Param('id',ParseIntPipe)id: number): Promise<User>{
    //return this.userService.getUserProfile(id);
  } */
  //ALL
  @Post('signin')
  async connexion(@Body() connexionDto: connexionDto) {
    const userCheck = await this.userService.checkConnexion(connexionDto);
    // check user/pass
    if(userCheck)
    {
      // return jwt
      const { id,username,mail } = userCheck;
      const payload: JwtPayload = {id,username,mail};
      const accessToken = await this.JwtService.sign(payload);
      console.log(payload,accessToken);
      return { accessToken,id,username };
    }
    else{
      throw new NotAcceptableException("Problem occured in signin.");
    }
  }

  //ALL
  @Post('createUser')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: createUserDto ): Promise<User>{
    return this.userService.createUser(createUserDto);
  }

  //NEED TO BY CONTROLLED BY A ROLE
/*   @Delete(':id')
  deleteUserById(@Param() params): Promise<string> {
    
  //return this.userService.deleteUserById(params.id);
  } */


  //CONNEXION / LOGOUT / MIDDLEWARE
}