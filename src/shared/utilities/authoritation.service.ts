import { Injectable } from "@nestjs/common"
import { UserService } from "src/user/user.service"
import Encryptation from "./encryptation.service"
import { User } from "src/user/entities/user.entity"


@Injectable()

class AuthService{

constructor(
    private userService: UserService){}

// findme one and its password
async validateUser(id: string, pass: string): Promise<string>{
// response
let result: string 
    try {
// find user
const user: User = await this.userService.findOne(+id)

if (user == undefined)  throw new Error('User not in DDBB')

const areEqual: boolean = await Encryptation.comparePassword(user.password, pass)

if(!areEqual) {
    throw new Error('Invalid Password')
} else {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   return result = "You shall pass"
}
        
    } catch (error) {
         console.error(error.message)
         throw error
        
    }
  

}

}

export default AuthService