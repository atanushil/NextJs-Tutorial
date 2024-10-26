import React from "react";
function getRandomInt ( count: number )
{
    return Math.floor( Math.random() * count );
}
export default function ProductDetilsLayout ( { children }: { children: React.ReactNode; } )
{
    const random = getRandomInt( 2 );
    if ( random == 1 )
    {
        throw new Error( "Error occured in  Loading product" );
    }
    return (
        <>
            { children }
            <h1>from ProductDetilsLayout</h1>
        </>
    );
}