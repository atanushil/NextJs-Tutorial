import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotification ()
{
    return <Card>
        <div>Archived Notification</div>
        <Link href={ "/complex-dashboard" }>Default</Link>
    </Card>;
}