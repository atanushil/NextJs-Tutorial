import {Metadata} from 'next'
type Props={
    params:{
        productId:string;
    }
}
export const generateMetadata=async({params}:Props):Promise<Metadata>=>{
    const {productId}=await params;
    const title =await new Promise(resolve=>{
        setTimeout(() => {
            resolve(`iPhone ${productId}`)
        }, 100);
    });
    return{
        title:`Product ${title}`,
        description:'Product Details Page',
        keywords:'Product Details Page'
        }
}
export default async function ProductDetail({params,}:Props){
    const  {productId} =await params;
    return(
        <><h1>Product id is {productId}</h1></>
    )
}