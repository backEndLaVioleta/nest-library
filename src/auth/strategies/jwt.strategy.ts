import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()

class JwtStrategy extends PassportStrategy(Strategy) {
constructor(){
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: "secret",//recordar tenerlo en config
    })
}
// payload es la parte del token con la info que estamos pidiendo
// ex: usermail yt user.id en nuestro ejemplo solo el email
    async validate(payload: any){
        return {
            email: payload.email
        }
    }
}

export default JwtStrategy