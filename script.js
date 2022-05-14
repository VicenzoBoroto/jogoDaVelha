var vez = 1
var grid = [0,0,0,0,0,0,0,0,0]

function play(p1) {
  var img = document.getElementById(p1)
  if(vez == 1) {
    img.src = "./img/X.png"
    vez = 2
    grid[p1] = 1
  }else {
    img.src = "./img/O.png"
    vez = 1
    grid[p1] = -1
  }
  img.removeAttribute("onclick")
  console.log(grid)
  verificaGanhador()
}

function verificaGanhador() {
  var linha1 = grid[0] + grid[1] + grid[2]
  var linha2 = grid[3] + grid[4] + grid[5]
  var linha3 = grid[6] + grid[7] + grid[8]

  var coluna1 = grid[0] + grid[3] + grid[6]
  var coluna2 = grid[1] + grid[4] + grid[7]
  var coluna3 = grid[2] + grid[5] + grid[8]

  var diagonal1 = grid[0] + grid[4] + grid[8]
  var diagonal2 = grid[2] + grid[4] + grid[6]

  if(linha1 == 3 || linha2 == 3 || linha3 == 3 || coluna1 == 3 || coluna2 == 3 || coluna3 == 3 || diagonal1 == 3 || diagonal2 == 3){
    alert("Jogador 1 ganhou!")
  }else if(linha1 == -3 || linha2 == -3 || linha3 == -3 || coluna1 == -3 || coluna2 == -3 || coluna3 == -3 || diagonal1 == -3 || diagonal2 == -3){
    alert("Jogador 2 ganhou!")
  }
}

function reiniciar() {
  document.location.reload(false)
}
