export default async function ReviewDetail({params,}:{params:{productId:string,reviewId:string}}) {
    const {productId, reviewId} = await params;
    return(
        <>
        <h1>Product id {productId} 's review {reviewId}</h1></>
    )
}