var fruta = ["Jaca", "Uva", "Maça", "Caju"]
console.log(fruta[0])
console.log(fruta[1])
console.log(fruta[2])
console.log(fruta[3])

console.log(fruta)

fruta.splice(0,1) // Irá remover 1 item na posição 0
fruta.push("Tamarino") // Acrescentará o Tamarino na última posição
console.log(fruta)

fruta.splice(0,2) // Irá remover 2 item a partir da posição 0
fruta.push("Passas", "Tomate") // Acrescentará Passas e Tomate na penúltima e última posição
console.log(fruta)

fruta.pop()
console.log(fruta)

console.log(`Quantidade de elementos no array: ${fruta.length}`)