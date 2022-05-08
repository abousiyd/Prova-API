import 'dotenv/config'
import { getProducts } from "../getProducts/getProducts";
import { getStock } from "../getStock/getStock";

const getParams = (shopSku: string) => JSON.stringify({
    Company: process.env.COMPANY,
    ItemNo: shopSku,
    Location_Filter: process.env.LOCATION
   })


const updateStock = async () => {
    try {
        const { offers } = await getProducts()

        const mappedOffers = offers.map(async (offer: any) => {
            const [data] =  await getStock(getParams(offer.shop_sku))
            offer.Stock = data ? data.Stock : null
            return offer
        })

        return await Promise.all(mappedOffers)
    } catch (error) {
        console.log(error)
    }
};

// test
(async () => {
    const products = await updateStock()
    console.log(products)
})() 


export default updateStock;
