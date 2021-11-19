import  * as bcrypt from 'bcrypt'

class Encryptation {

  static async encrypPassword(password:string){
    
        return await bcrypt.hash(password, 10)
    }

    // descryp aqui
    static async comparePassword(passwordOne: string, hash: string){
      return await bcrypt.compare(passwordOne, hash)
    }
    
    
}
export default Encryptation