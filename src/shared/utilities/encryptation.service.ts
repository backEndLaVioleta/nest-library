import  * as bcrypt from 'bcrypt'

class Encryptation {

  static async encrypPassword(password:string){
    
        return await bcrypt.hash(password, 10)
    }

    // descryp aqui
    static async comparePassword(passwordOne: string, passwordTwo: string){
      return await bcrypt.compare(passwordOne, passwordTwo)
    }
    
    
}
export default Encryptation