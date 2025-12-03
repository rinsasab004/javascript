promise=fetch("https://fakestoreapi.com/products")
promise.then((res)=>(res.json())).then((result)=>{
    console.log(result);
    products=result
    

    data=``
    products.forEach((prod)=>{
        data += `
            <div class="col-md-4 col-lg-3 col-sm-6">
            <div class="card shadow-sm border-0 mb-4 p-2 product-card">
            
            <img src="${prod.image}" class="card-img-top" alt="">
            
            <div class="card-body">
              <h6 class="card-title mb-3">${prod.title.slice(0, 40)}...</h6>

              <h4 class="text-success fw-bold mb-3">₹${prod.price}</h4>

              <p class="text-muted">${prod.description.slice(0, 70)}...</p>

              <p><b>Category:</b> ${prod.category}</p>

              <p><b>Rating:</b> ⭐ ${prod.rating.rate} (${prod.rating.count})</p>

              <button class="btn btn-primary w-100">Buy Now</button>
            </div>

          </div>
        </div>
        `
        console.log(data);

    })


    document.getElementById("card").innerHTML=data

})