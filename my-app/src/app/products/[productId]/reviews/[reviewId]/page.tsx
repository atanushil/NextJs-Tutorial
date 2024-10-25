import { notFound } from "next/navigation";
export default async function ReviewDetail({params,}:{params:{productId:string,reviewId:string}}) {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId)>100){
        notFound();
    }
    return(
        <>
        <h1>Product id {productId} 's review {reviewId}</h1></>
    )
}