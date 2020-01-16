const numbersArray: Array<number> = [1, 2, 3, 4, 5]
const stringsArray: string[] = ['a', 'b', 'c', 'd']

function newReverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

newReverse(numbersArray)
newReverse(stringsArray)