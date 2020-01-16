function sqrt(n: number): number {
    return n * n
}

function stringToArr(str: string): string[] {
    return str.split('')
}

interface Coordinates {
    x: number | undefined
    y: number | undefined
}

interface CoordinatesDefault extends Coordinates {
    default: string
}

function getCoordinates(): Coordinates
function getCoordinates(lat: number): CoordinatesDefault
function getCoordinates(lat: number, long: number): Coordinates


function getCoordinates(lat?: number, long?: number) {
    if (!lat && !long) {
        return {x: undefined, y: undefined}
    }

    if (lat && !long) {
        return {x: lat, y: undefined, default: lat + ''}
    }
    
    if (long && !lat) {
        return {x: long, y: undefined, default: long + ''}
    }

    return {x: lat, y: long}
}

console.log(getCoordinates());
console.log(getCoordinates(45));
console.log(getCoordinates(45, 59));

