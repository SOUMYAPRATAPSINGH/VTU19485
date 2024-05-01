import React, { useState } from 'react'
import axios from 'axios'
import '../src/styles/apply.css'

function Products() {

    const [n,setN] = useState('')
    const [min,setMin] = useState('')
    const [max,setMax] = useState('')
    const [products,setProcuts] = useState(null)

    

    const GetProducts = async()=>{
        console.log(n,min,max)
        await axios.post('http://localhost:8000/',{n: n, min: min, max: max})
        .then((res)=>{
            setProcuts(res.data)
            console.log(res.data)
        })
        .catch ((err)=> {
        console.error('Error fetching products:', err);
      })
    }


  return (
    <div className="container">

    <div className='jj'>
        <input type='text' placeholder='Number of products' onChange={(e) => setN(e.target.value)} className="input-field" />
        <input type='text' placeholder='Minimum price' onChange={(e) => setMin(e.target.value)} className="input-field" />
        <input type='text' placeholder='Maximum price' onChange={(e) => setMax(e.target.value)} className="input-field" />
        <button onClick={GetProducts} className="btn">Get Products</button>
</div>
        <div className="product-list">
            {products &&
                products.map((val, ind) => (
                    <div className="product" key={ind}>
                        <div className='Each'>
                        <p>{val.productName}</p><br></br>
                        <p>${val.price}</p><br/>
                        <p>{val.rating} </p><br/>
                        <p>{val.discount} </p>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Products