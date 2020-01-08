enum CardTypes {
    Classic,
    Electron,
    Gold,
    Platinum,
    Premium
}

const card = CardTypes.Gold
//console.log(card) // 2
const cardReverse = CardTypes[2]
//console.log(cardReverse) // "Gold"

enum ProgrammingLanguages{
    JS = 'JavaScript',
    PY = 'Python',
    CPP = 'C++',
    ASM = 'Assembly'
}

const lang = ProgrammingLanguages.JS
//console.log(lang) // "JavaScript"