import { Body, Controller, Post } from '@nestjs/common'
import Login from 'src/auth/dto/loginUser.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){

    }
    @Post('login')
  login(@Body() loginUserDto: Login){
    return this.authService.login(loginUserDto)
  }
}
