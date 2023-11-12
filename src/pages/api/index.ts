
export default {
    getProducts: async () => {
        const res = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=9&sortBy=id&orderBy=DESC')
        const json = await res.json()
        return json.products
    }
}


