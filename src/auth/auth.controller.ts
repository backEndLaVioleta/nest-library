import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import LoginUserDto from 'src/auth/dto/loginUser.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService){

    }
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto){
    return this.authService.login(loginUserDto)
  }
}
