//Interface creation
interface Profile {
    readonly id: string
    cell?: number | string
    address: {
        line_one: string
        zip: number
        state: string
        country: string
    }
}

const userOne: Profile = {
    id: '001',
    address: {
        line_one: '5th Ave, 202',
        zip: 10010,
        state: 'NY',
        country: 'USA'
    }
}

userOne.cell = '(212)999-0000'

const userTwo = {} as Profile
const userThree = <Profile>{}

//Interface inheritance
interface ProfileWithMethod extends Profile {
    isDomestic: () => boolean
}

const userFour: ProfileWithMethod = {
    id: '004',
    address: {
        line_one: 'Colonian Farm Rd, McLean',
        zip: 22101,
        state: 'VA',
        country: 'USA'
    },
    isDomestic(): boolean {
        return this.address.country === 'USA'
    }
}

//Interface implementation
interface ITimeSay {
    time: Date
    getTime(date: Date): string
}

class TimeAnnouncer implements ITimeSay {
    time: Date = new Date()
    getTime(date: Date): string {
        return this.time + ''
    }
}

//Dynamic keys
interface Style {
    [key: string]: string
}
const css: Style = {
    border: '1px solid black',
    marginTop: '5px',
    borderRadius: '5px'
}