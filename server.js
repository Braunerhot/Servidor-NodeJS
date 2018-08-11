
const http = require('http')
const port = 9595
const ip = 'localhost'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  console.log('URL', req.url)
  res.end('<h1> Aqui fica o que vamos enviar para o navegador como resposta! </h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('testando...')
  console.log('Para derrubar o servidor: ctrl + c');
})

