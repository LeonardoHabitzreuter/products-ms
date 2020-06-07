import { HmacSHA256 } from 'crypto-js'

const encrypt = (msg: string) => HmacSHA256(msg, process.env.CRYPT_KEY).toString()

export default encrypt
