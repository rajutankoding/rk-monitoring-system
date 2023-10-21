const UserListComponent = (props) => {
    return (
        <div className="overflow-x-auto p-4">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-black">{props.Dt.title}</tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div className="text-sm opacity-50">
                                        32490235175349032
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Kegiatan/keperluan
                            <br />
                            <span className="badge badge-ghost badge-sm">
                                2 Digunakan
                            </span>
                        </td>
                        <td>12</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                details
                            </button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">Brice Swyre</div>
                                    <div className="text-sm opacity-50">
                                        32490235175349032
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Kegiatan/keperluan
                            <br />
                            <span className="badge badge-ghost badge-sm">
                                2 Digunakan
                            </span>
                        </td>
                        <td>12</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                details
                            </button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Marjy Ferencz
                                    </div>
                                    <div className="text-sm opacity-50">
                                        32490235175349032
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Kegiatan/keperluan
                            <br />
                            <span className="badge badge-ghost badge-sm">
                                2 Digunakan
                            </span>
                        </td>
                        <td>12</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                details
                            </button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">Yancy Tear</div>
                                    <div className="text-sm opacity-50">
                                        32490235175349032
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Kegiatan/keperluan
                            <br />
                            <span className="badge badge-ghost badge-sm">
                                2 Digunakan
                            </span>
                        </td>
                        <td>12</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                details
                            </button>
                        </th>
                    </tr>
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th
                            colSpan={4}
                            className="items-center text-center text-black"
                        >
                            Table {props.Tp.titlePage}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default UserListComponent;
