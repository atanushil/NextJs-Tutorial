


export default function Dashboardlayout ( {
    children,
    users,
    revenue,
    notification,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;
} )
{
    const isLoggedIn = false; // conditional routes
    return ( isLoggedIn ? (
        <>
            <div>
                <div>{ children }</div>
                <div style={ { display: "flex" } }>
                    <div style={ { display: "flex", flexDirection: "column" } }>
                        <div>{ users }</div>
                        <div>{ revenue }</div>
                    </div>
                    <div style={ { display: "flex", flex: 1 } }>{ notification }</div>
                </div>
            </div>
        </>
    ) : <div>{ login }</div>
    );
}