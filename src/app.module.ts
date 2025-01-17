import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookModule } from './book/book.module'
import { UserModule } from './user/user.module'
import { LoanModule } from './loan/loan.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookModule,
    UserModule,
    LoanModule,
    AuthModule
]
  // providers: [ UserService]
})
export class AppModule {}
