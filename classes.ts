class Car {
    readonly brand: string
    readonly model: string
    readonly hull: string = 'SUV'

    constructor(Nbrand: string, Nmodel: string, Nhull: string) {
        this.brand = Nbrand
        this.model = Nmodel
        this.hull = Nhull
    }
    
    getBrandAndNameWithYear(year: number) {
        return `${this.brand} ${this.model} year is ${year}`
    }
}

//short syntax for constructor
class Bike {
    readonly numberofCylinders: number = 2
    constructor(readonly brand: string) {}
}

//modificators (protected, private, public - default one if not specified)
// protected - available in parent class and inherited (but not in class instances*)
// private - available only in class they were defined in
// public are available in classes, extended classes and instances
class Unit {
    protected targetPriority: string = 'ground'
    public trainingTime: number = 60
    private elixirCost: number = 1000

    private battleCry() {
        console.log('Chaaarge!')
    }
}

class Dragon extends Unit {
    public setTargetPriority(target: string): void {
        this.targetPriority = target
    }
}

const dragon = new Dragon()
dragon.setTargetPriority('air')
dragon.trainingTime = 5000
//* dragon.targetPriority - err, not available from a class instance

//abstract classes

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Rendered');
    }
    
    info(): string {
        return 'Something'
    }
}
