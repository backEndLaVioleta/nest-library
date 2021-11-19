import { Controller, Get, Post, Body, Param} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    /*private readonly authService: AuthService*/) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }
/* @Post('login')
  login(@Body() loginUserDto: Login){
    return this.authService.login(loginUserDto)
  } */

  @Get(':mail')
  findOne(@Param('mail') mail: string) {
    return this.userService.findOne(mail)
  }
 /*  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }
 */
 /*  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  } */
}
