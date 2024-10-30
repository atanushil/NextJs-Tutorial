import {NextRequest} from 'next/server'
import {headers,cookies} from 'next/headers'
export async function GET(
    req:NextRequest
) {
    const reqHeader=new Headers(req.headers);
    const headerList=headers();
    (await cookies()).set("resultsPerPage","20");

    const theme=req.cookies.get("theme");

    console.log(reqHeader.get("Authorization"));

    console.log((await headerList).get("Authorization"));
    
    console.log(theme);
    console.log((await cookies()).get("resultsPerPage"))
    
    return new Response("<h1>Profile API Data</h1>",{
        headers:{
    
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}