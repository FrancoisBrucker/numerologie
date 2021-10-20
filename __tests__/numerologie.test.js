const rewire = require('rewire')
const { chiffre } = require('../back/numerologie')

const numerologieRewire = rewire('../back/numerologie')
const numerologie = {
    nombre: numerologieRewire.__get__('nombre'),
    somme: numerologieRewire.__get__('somme'),
    chiffreAssocie: chiffre,
}

describe("numerologie.nombre", () => {
    test("chaine vide", () => {
        expect(numerologie.nombre("")).toBe(0)
    })
    test("un caractère simple", () => {
        expect(numerologie.nombre("A")).toBe(65)
    })
    test("deux caractères", () => {
        expect(numerologie.nombre("éç")).toBe(0xE9 + 0xE7)
    })
})

describe("numerologie.somme", () => {
    test("0", () => {
        expect(numerologie.somme(0)).toBe(0)
    })
    test("un chiffre", () => {
        expect(numerologie.somme(4)).toBe(4)
    })
    test("un nombre", () => {
        expect(numerologie.somme("101")).toBe(2)
    })
})


describe("numerologie.chiffreAssocie", () => {
    test("éç", () => {
        expect(numerologie.chiffreAssocie("éç")).toBe(1 + 4)
    })
})

// pour le coverage non complet du cours
//
// describe("numerologie.chiffreAssocie", () => {
//     test("éç", () => {
//         expect(numerologie.chiffreAssocie("")).toBe(0)
//     })
// })


