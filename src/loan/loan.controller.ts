import { Controller, Post, Body, Patch, Param,  UseFilters, UseGuards } from '@nestjs/common'
import { LoanService } from './loan.service'
import { LoanDto } from './dto/loan.dto'
import { HttpExceptionFilter } from '../shared/exceptions/http-exception.filter'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth } from '@nestjs/swagger'

// import { UpdateLoanDto } from './dto/update-loan.dto'
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async create(@Body() loanDto: LoanDto) {
      return await this.loanService.create(loanDto)
  }

  @Patch(':loanId')
  async update(@Param('loanId') loanId: number, @Body() loanDto: LoanDto){
    return await this.loanService.update(loanId,loanDto)
  }

}
