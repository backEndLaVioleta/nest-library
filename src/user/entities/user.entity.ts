import Encryptation from "src/shared/utilities/encryptation.service"
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column({nullable: true})
    photo: string

    @BeforeInsert()
    async hashPassword(){
        this.password = await Encryptation.encrypPassword(this.password)// hashedPass
    }

}
