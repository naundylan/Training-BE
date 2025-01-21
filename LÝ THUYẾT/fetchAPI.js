fetch("https://dummyjson.com/products")
.then(response => response.json()) // chuyển từ dạng json thành object javascript (dữ liêu thô)
.then(data => {
    console.log(data.products);

    const newArray = data.products.map((item) => {
        return `
            <li>${item.title}</li>
        `;
    });
    var htmls = newArray.join("")
    var list = document.querySelector("#products-list");
    list.innerHTML = htmls
    
})  // chờ chuyển dữ liệu xong thì in ra