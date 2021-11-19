import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'src/user/user.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './strategies/local.strategy'


@Module({
  imports: [UserModule, 
            AuthModule,
            PassportModule,
          JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: 'id'}
          }),
        ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
