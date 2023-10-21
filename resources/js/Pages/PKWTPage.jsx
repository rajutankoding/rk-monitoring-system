import ListCmponent from "@/Components/ListComponent";
import ListImageComponent from "@/Components/ListImageComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function PKWTPage({ auth }) {
    const Ttabel = [
        "NIP",
        "Nama",
        "Posisi",
        "Title",
        "Tgl.Kontrak",
        "Tgl.Selesai",
        "Aksi",
    ];
    const title = Ttabel.map((d) => <th className="text-black">{d}</th>);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="dropdown dropdown-right">
                    <label tabIndex={0} className="btn btn-sm btn-wide">
                        PKWT Dokter/Karyawan
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Dokter</a>
                        </li>
                        <li>
                            <a>Karyawan</a>
                        </li>
                    </ul>
                </div>
            }
        >
            <Head title="Dashboard" />

            {/* <ListImageComponent Dt={{ title }} /> */}
            <ListCmponent Dt={{ title }} />
        </AuthenticatedLayout>
    );
}
