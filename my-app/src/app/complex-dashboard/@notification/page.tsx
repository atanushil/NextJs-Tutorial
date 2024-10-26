import Card from "@/components/Card";
import Link from "next/link";

export default function Notification(){
    // console.log("here");

    return <Card>
        <div>Notification</div>
        <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </Card>
}