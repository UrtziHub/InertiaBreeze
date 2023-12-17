import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Index({ auth, userRoles, users }) {
    const {data, setData, delete:destroy,processing,errors} = useForm({
        user:'',
    });
    const handleDelete = (e,userId) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this user?')) {
            destroy(route('admin.destroy',{user:userId}), {
                preserveScroll: true,
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
        
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Administration
                </h2>
            }
            userRoles={userRoles[0]}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <table className="min-w-full border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className="text-center" key={user.id}>
                                <td className="py-2 px-4 border-b">{user.id}</td>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">
                                <button
                                className="text-red-500 hover:text-red-700"
                                onClick={(e) => handleDelete(e,user.id)}
                                >
                                Delete
                                </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
