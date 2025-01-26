const fetchAPI = async (api) => {
    const response = await fetch(api);
    const data = await response.json()
    return data;
}

fetchAPI("http://localhost:3000/product")
    .then((data) => {
        console.log(data);
    })