import '../global.css'
export default function Card ( { children }: { children: React.ReactNode; } )
{
    return (
        <div className="p-40 m-3 border-2 flex justify-center items-center">
            { children }
        </div>
    );
}
