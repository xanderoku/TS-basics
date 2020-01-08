//Any - no err when changing type
let customVar: any = 13
customVar = [1, 2, 3]

const str: string = 'hello TS!'

const isLoading: boolean = true

const int: number = 13
const num: number = 3e5

const numArr: number[] = [1, 2, 3, 4, 5]
const numArrTwo: Array<number> = [9, 8, 7, 6, 5]
const strArr: string[] = ['this', 'is', 'array']

//Tuple
const github: [string, number] = ['github_profile', 123456]

//Function
function showTemperature(temp: number): void {
    console.log(temp)
}

showTemperature(10)

//Never
function throwErr(message: string): never {
    throw new Error(message)
}

//Don't run this!
function infinite(): never {
    while (true) {
    }
}

//Type creation - alias
type Login = string
const login: Login = 'admin'

type ID = string | number
const idOne: ID = 999
const idTwo: ID = '888'
