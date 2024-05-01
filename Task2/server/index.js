const express = require('express')
const app = express()
const cors = require('cors')
const requests = require('requests')
const axios = require('axios')
const bodyparser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.listen(8000,()=>{
    console.log('Server running at port 8000')
})

app.post('/products',async(req,res)=>{
    console.log("called",req.body)
    API = "http://20.244.56.144/test/companies/${req.body.company}/categories/${req.body.type}/products?top=${req.body.n}&minPrice=${req.body.min}&maxPrice=${req.body.max}"
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NTUwMDM5LCJpYXQiOjE3MTQ1NDk3MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIxOTkxZmYyLWNkMWYtNDA5ZC1hYzZhLWVjOWM4OWZiM2E5ZCIsInN1YiI6InNvdW15YXByYXRhcHNpbmdoMTExQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlByYXRhcCIsImNsaWVudElEIjoiMjE5OTFmZjItY2QxZi00MDlkLWFjNmEtZWM5Yzg5ZmIzYTlkIiwiY2xpZW50U2VjcmV0Ijoid2RaV3BHdHBKcWxiSVFwZyIsIm93bmVyTmFtZSI6IlByYXRhcCIsIm93bmVyRW1haWwiOiJzb3VteWFwcmF0YXBzaW5naDExMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIxOTQ4NSJ9.CoXc8NymQm4iM2yUPQzA3UZPVpgg2n5Q4veltf6VjpA'
    const headers = {
        Authorization: `Bearer ${bearerToken}`
    }
    const result = await axios.get(API, { headers });
    res.send(result.data)
})