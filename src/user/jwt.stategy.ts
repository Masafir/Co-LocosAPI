import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtPayload } from "./jwtPayload";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { jwtConstants } from './constants';

@Injectable()​
export class JwtStrategy extends PassportStrategy(Strategy) {​
constructor(​
   @InjectRepository(UserRepository)​
   private userRepository: UserRepository,​
) {​
   super({​
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),​
     secretOrKey: jwtConstants.secret,​
   });​
}​
//expiration du token ?

//Validation des données
 async validate(payload: JwtPayload): Promise<User> {​
   const { id } = payload;​
   const user = await this.userRepository.findOne(id);​
   if (!user) {​
     throw new UnauthorizedException();​
   }​
   return user;​
}​
}