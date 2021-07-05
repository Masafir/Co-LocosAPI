import { Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { createUserDto } from './createUser.dto';
import { connexionDto } from './connexion.dto';
//import { errorConnexionDto } from "./errorConnexion.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
     private UserRepository: 
     UserRepository
  ) {}

  /* async getUsersProfiles(): Promise<User[]>{
    const allUsers = await this.UserRepository.find({select: ["id","mail","username"],relations: ["books","books_fav"]});

    if(!allUsers)
    {
      throw new NotFoundException("NOTHING ON DB");
    }
    return allUsers;
  } */

  async getUserProfile(id: number): Promise<User>{
    const found = await this.UserRepository.findOne(id,{select: ["id","mail","username"]});

    if(!found)
    {
      throw new NotFoundException(`Task With id = ${id} NOT FOUND`);
    }

    return found;
  }

  async createUser(user: createUserDto): Promise<User>{
    const { mail,username } = user;
    const newUser = this.UserRepository.createUser(user);
    return newUser;
  }

  /* async deleteUserById(id): Promise<string>{
    if(this.getUserProfile(id))
    {
      await this.UserRepository.delete(id);

      return "User deleted.";
    }
    else{
      return "No users were found.";
    }
  } */

  async checkConnexion(connexionDto: connexionDto): Promise<User>{
    const { mail,password } = connexionDto;

    const foundedUser = await this.UserRepository.findOne({select: ["password","id"],where: {mail}});

    if(foundedUser){
      const checkedPass = await bcrypt.compare(password, foundedUser.password)
      if(checkedPass)
      {
        return await this.getUserProfile(foundedUser.id);
      }
      else{
        throw new InternalServerErrorException("Invalid Pass/Mail.")
      }
    }
    else{
      throw new NotFoundException("No user founded.");
    }
  }

  
  
}
