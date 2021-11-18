import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository <User>){ }

 async create(createUserDto: CreateUserDto) {

const user: User = new User()
Object.assign(user, createUserDto)

return await this.userRepository.save(user)

   // return `This action adds a new user ${createUserDto}`
  }

  async findAll() {
    return await `This action returns all user`
  }

  /* async findOne(mail: string) {
    return await this.userRepository.findOne(mail)
  } */
  async findOne(id: number) {
    return await this.userRepository.findOne(id)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await `This action updates a #${id} user`
  }

  async remove(id: number) {
    return await `This action removes a #${id} user`
  }
}
