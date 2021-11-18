import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import AuthService from 'src/shared/utilities/authoritation.service'
import { User } from './entities/user.entity'

@Module({
  imports:[AuthService,TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, AuthService]
})
export class UserModule {}
