class human {
    birthYear: number = 0
    static birthyear: number
    ageDifference(){
        console.log("The age difference between my animal and I is 15 years")
}
}
class animal {
    birthYear: number = 0
    static birthYear: number
}
animal.birthYear = 2015
human.birthyear = 2000
