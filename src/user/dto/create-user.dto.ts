import { PartialType } from "@nestjs/mapped-types"
import  LoginUserDto from '../../auth/dto/loginUser.dto'

export class CreateUserDto extends PartialType(LoginUserDto) {
   
   readonly photo: string
}
// que DTO necesitamos?