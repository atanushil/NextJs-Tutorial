import { fromJSON } from "postcss"

export default function PrivateRoute(){
    return  (
        <div>
            <h1>Private Route, you cannot view this in the browser</h1>
        </div>
    )

}

/* if you  want to include an underscore in URL segment ; you 
can prefix the folder name with "%5F" , which is the 
URL-encoded from of an underscore */