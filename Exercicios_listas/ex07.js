// 7 - Crie uma lista de filmes favoritos ["Inception", "Matrix", "Interstellar", "Avatar"]. Concatene esta lista com ["Titanic", "O Senhor dos Anéis"], remova o segundo filme e crie uma nova matriz contendo apenas os três primeiros filmes da lista resultante.


filmesFav = ["Inception", "Matrix", "Interestellar", "Avatar"]

filmesFav = filmesFav.concat(["Titanic", "O Senhor dos Anéis"])
console.log(filmesFav)

filmesFav.pop()

novaMatriz = filmesFav.slice(0, 3)
console.log("Top 3 filmes: ")
console.log(novaMatriz)