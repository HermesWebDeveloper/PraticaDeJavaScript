// 2 - Dada uma lista de tarefas ["lavar a louça", "varrer a casa", "passar roupa"], remova a última tarefa, adicione "fazer compras" no final da lista e concatene esta lista com ["ir ao banco", "pagar contas"].

listaTarefas = ["lavar a louça", "varrer a casa", "passa roupa"]

listaTarefas.push("fazer compras")

novasTarefas = ["ir ao banco", "pagar contas"]

listaTarefas = listaTarefas.concat(novasTarefas)

console.log(listaTarefas)