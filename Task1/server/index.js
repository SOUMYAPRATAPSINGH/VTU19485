const http = require("http");
const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.listen(8000,()=>{
    console.log('Server running at port http://localhost:8000')
})

app.post('/',async(req,res)=>{
    API = "http://20.244.56.144/test/companies/FLP/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000"
    // const params = {
    //     top: 10,
    //     minPrice: 1,
    //     maxPrice: 1000
    // };
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NTQ4OTQxLCJpYXQiOjE3MTQ1NDg2NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIxOTkxZmYyLWNkMWYtNDA5ZC1hYzZhLWVjOWM4OWZiM2E5ZCIsInN1YiI6InNvdW15YXByYXRhcHNpbmdoMTExQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlByYXRhcCIsImNsaWVudElEIjoiMjE5OTFmZjItY2QxZi00MDlkLWFjNmEtZWM5Yzg5ZmIzYTlkIiwiY2xpZW50U2VjcmV0Ijoid2RaV3BHdHBKcWxiSVFwZyIsIm93bmVyTmFtZSI6IlByYXRhcCIsIm93bmVyRW1haWwiOiJzb3VteWFwcmF0YXBzaW5naDExMUBnbWFpbC5jb20iLCJyb2xsTm8iOiIxOTQ4NSJ9.YR0S2mzxGXjhsAQiMgWQKHH7Ox_oFzHrX2ya-XuWqmQ"
    const headers = {
        Authorization: `Bearer ${bearerToken}`
    }
    const result = await axios.get(API, { headers });
    res.send(result.data)
})