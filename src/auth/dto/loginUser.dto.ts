import { IsEmail, IsNotEmpty } from "class-validator"

 class Login {
     // decoramos para que nos valide el mail
     @IsEmail()
     // decoramos para 
     @IsNotEmpty()
    readonly email: string
    @IsNotEmpty()
   readonly password: string
}
export default Login