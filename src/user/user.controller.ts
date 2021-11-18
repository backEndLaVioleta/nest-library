import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import AuthService from 'src/shared/utilities/authoritation.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
              private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  /* @Get(':mail')
  findOne(@Param('mail') mail: string) {
    return this.userService.findOne(mail)
  } */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }
@Get(':id?pass')
validateOne(@Param('id?pass')id: string, pass:string){
return this.authService.validateUser(id,pass)
}
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
