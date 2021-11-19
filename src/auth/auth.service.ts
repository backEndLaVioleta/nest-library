import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import Encryptation from 'src/shared/utilities/encryptation.service'
import loginUserDto from 'src/auth/dto/loginUser.dto'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthService {
    
constructor( private userService: UserService,
             private jwtService: JwtService){
   
}
    
  async  validateUser(email:string, pass: string): Promise<any>{
const user = await this.userService.findOne(email)
const isValidPassWord = await Encryptation.comparePassword(pass, user.password)

if(user && isValidPassWord){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, photo,  ...result} = user

    return result
}
    }
  
   async login(user:loginUserDto){
    const payload = {email: user.email}
    return{
        acccess_token: this.jwtService.sign(payload)
    }
   /*   const result =   await this.validateUser(user.email, user.password)
     if(result){
        const payload = {email: user.email}
  return{
      acccess_token: this.jwtService.sign(payload)
  }
     }else{
         throw new HttpException(
             'user or password invalid',
            HttpStatus.UNAUTHORIZED)
     } */
  
    }
}
