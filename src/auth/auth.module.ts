import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'src/user/user.module'
import { AuthService } from './auth.service'


@Module({
  imports: [UserModule, 
            AuthModule,
            PassportModule,
          JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: 'id'}
          }),
        ],
  providers: [AuthService],
  exports: [AuthService],
  controllers: []
})
export class AuthModule {


}
