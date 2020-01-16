interface User {
    id: number
    email: string
}

type UserKeys = keyof User
//only:  'id' | 'email'

let key: UserKeys = 'email'
key = 'id'
//err:
//key = true

export type Admin = {
    _id: number
    username: string
    email: string
    phone: number | string
    admin: boolean
}

type AdminKeysWithoutPhoneAndID = Exclude<keyof Admin, '_id' | 'phone'>
type AdminKeysSecond = Pick<Admin, 'admin' | 'email' | 'username'>

let seniorAdmin: AdminKeysSecond = {admin: true, email: 'foo@bar.baz', username: 'test'}
