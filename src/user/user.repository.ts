import { EntityRepository, Repository } from "typeorm";
import { createUserDto } from "./createUser.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

export const saltOrRounds = 10;

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async createUser(createUserDto: createUserDto): Promise<User>{
    const { username,firstname,lastname,password,mail } = createUserDto;

    const newUser = new User();
    newUser.username = username;
    newUser.mail = mail;
    newUser.password = await bcrypt.hash(password, saltOrRounds);
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    try{
      await newUser.save();
    }
    catch(err) {
      
      throw new Error("Mail are already used.");
    }

    return newUser;

  }

}
