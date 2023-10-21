import ListCmponent from "@/Components/ListComponent";
import ListImageComponent from "@/Components/ListImageComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function STRPage({ auth }) {
    const Ttabel = [
        "NIP",
        "Nama",
        "Posisi",
        "SIP",
        "Terbit SIP",
        "Selesai SIP",
        "Aksi",
    ];
    const title = Ttabel.map((d) => <th className="text-black">{d}</th>);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    STR
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ListCmponent Dt={{ title }} />
        </AuthenticatedLayout>
    );
}
