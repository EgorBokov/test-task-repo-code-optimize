import { User } from "../../types/user";

type IUserInfoProps = { 
    user: User | null;
};

export const UserInfo = ({ user }: IUserInfoProps) => { 
    if (!user) { 
        return null;
    }

    return ( 
        <table>
            <thead>
                <tr>
                <th>Username</th>
                <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                </tr>
            </tbody>
        </table>
    );
};