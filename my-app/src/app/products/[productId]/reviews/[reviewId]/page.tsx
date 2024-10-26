
import { notFound } from "next/navigation";
function getRandomInt ( count: number )
{
    return Math.floor( Math.random() * count );
}
export default async function ReviewDetail ( { params, }: { params: { productId: string, reviewId: string; }; } )
{
    const { productId, reviewId } = await params;
    const random = getRandomInt( 2 );
    if ( random == 1 )
    {
        throw new Error( "Error occured in  review detail page" );
    }
    if ( parseInt( reviewId ) > 100 )
    {
        notFound();
    }
    return (
        <>
            <h1>Product id { productId } 's review { reviewId }</h1>
        </>
    );
}