const PORT=8000
const axios=require('axios').default
const express=require('express')
const cors=require('cors')
require('detonv').config()
const app=express()
app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log('server listening on PORT ${PORT}'))