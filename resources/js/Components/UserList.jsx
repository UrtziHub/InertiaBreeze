export default function UserList({children,...props}){
    return(
        <td {...props} className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-2">
            {children}
        </td>
    )
}