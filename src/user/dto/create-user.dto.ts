import { PartialType } from "@nestjs/mapped-types"
import  LoginUserDto from './loginUser.dto'

export class CreateUserDto extends PartialType(LoginUserDto) {
   
   readonly photo: string
}
// que DTO necesitamos?