import { ApiProperty } from "@nestjs/swagger"

export class createBookDto {
    @ApiProperty({example:'Gone with thge wind'})
    readonly title: string
    @ApiProperty({example:'Fantasy'})
    readonly genre: string
    @ApiProperty({example:'lorem ipsum description'})
    readonly description: string
    @ApiProperty({example:'lorem ipsum author'})
    readonly author: string
    @ApiProperty({example:'lorem ipsum publisher'})
    readonly publisher: string
    @ApiProperty({example:'624'})
    readonly pages: string
    @ApiProperty({example:'lorem ipsum img_url'})
    readonly image_url: string
}

export class updateBookDto {
    readonly id:number
    readonly title: string
    readonly genre: string
    readonly description: string
    readonly author: string
    readonly publisher: string
    readonly pages: string
    readonly image_url: string
}