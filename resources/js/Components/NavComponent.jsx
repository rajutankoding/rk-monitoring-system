const NavComponent = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 dropdown">
                <a className="btn btn-ghost normal-case text-xl">
                    RK Management
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Dashboard</a>
                    </li>
                    <li>
                        <a>Kelola Cuti</a>
                    </li>
                    <li>
                        <a>Lembur</a>
                    </li>
                    <li>
                        <a>Izin Karyawan</a>
                    </li>
                    <li>
                        <details>
                            <summary>Akun</summary>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <a>LogOut</a>
                                </li>
                                <li>
                                    <a>Profile</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavComponent;
