import {NextRequest} from 'next/server'
import {headers} from 'next/headers'
export async function GET(
    req:NextRequest
) {
    const reqHeader=new Headers(req.headers);
    const headerList=headers();

    console.log(reqHeader.get("Authorization"));

    console.log((await headerList).get("Authorization"));
    
    
    return new Response("<h1>Profile API Data</h1>",{
        headers:{
    
            "Content-Type":"text/html"
        }
    })
}