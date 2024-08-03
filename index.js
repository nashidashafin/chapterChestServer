const json_server=require('json-server')
const cors=require('cors')
const library_server=json_server.create()
const middleware=json_server.defaults()
const routes=json_server.router('data.json')
library_server.use(cors())
library_server.use(middleware)
library_server.use(routes)
const PORT=8001
library_server.listen(PORT,()=>{
    console.log(`_______library server on ${PORT}________`);
})