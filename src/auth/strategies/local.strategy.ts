import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "../auth.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private authService: AuthService
    ){
        super({usernameField: 'email'})
    }

    async validate(email: string, pass: string){
        console.log(email, pass)
        const user =   await this.authService.validateUser(email, pass)
        console.log(user)
        // if(!user) throw new Error('Something wrond')
        if(!user) throw new UnauthorizedException()
    }
}