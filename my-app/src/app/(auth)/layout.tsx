"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './styles.css'
const navLinks = [
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Forgot password", link: "/forgot-password" }
];

export default function AuthLayout ( { children }: { children: React.ReactNode; } )
{
    const pathname = usePathname();
    return (
        <div className="auth-layout">
            {
                navLinks.map( ( link, index ) =>
                {
                    const isActive = pathname.startsWith( link.link );
                    return (

                        <Link href={ link.link } key={ index }
                        className={isActive?"font-bold mr-4":"text-blue-500 mr-4 "}>{ link.name }</Link>
                    );
                } )
            }
            { children }
        </div>
    );
}