import ListImageComponent from "@/Components/ListImageComponent";
import UserListComponent from "@/Components/UserListComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function LemburPage({ auth }) {
    const Ttabel = ["Nama", "Lama Lembur", "Bonus", "Detail"];
    const title = Ttabel.map((d) => <th>{d}</th>);
    const titlePage = "Lembur Kerja";
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Lembur Karyawan
                </h2>
            }
        >
            <Head title="Dashboard" />

            <UserListComponent Dt={{ title }} Tp={{ titlePage }} />
        </AuthenticatedLayout>
    );
}
