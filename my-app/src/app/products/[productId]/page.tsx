export default async function ProductDetail({params,}:{params:{productId:string}}){
    const  {productId} =await params;
    return(
        <><h1>Product id is {productId}</h1></>
    )
}