function nombre(chaine) {
    var somme = 0
    for (var i=0; i < chaine.length; i++) {
        somme += chaine.charCodeAt(i)
    }
    return somme
}

// test de nombre(chaine)

// est-ce 2x plus ?
console.log(nombre("cou"))
console.log(nombre("coucou"))

// chaque caractère :la somme est-elle correcte ?
for (c of "cou") { 
    console.log(c + " : " + nombre(c))
}
// fin de test de nombre(chaine)
