import ListImageComponent from "@/Components/ListImageComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function GajiPage({ auth }) {
    const Ttabel = ["Nama", "Tambahan", "Total", "Detail"];
    const title = Ttabel.map((d) => <th>{d}</th>);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Gaji Karyawan
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ListImageComponent Dt={{ title }} />
        </AuthenticatedLayout>
    );
}
