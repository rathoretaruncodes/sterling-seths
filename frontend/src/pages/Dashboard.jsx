import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div className='shadow-2xl h-full py-6 rounded-lg'>
        <Appbar />
        <div className="m-8">
            <Balance value={'10000'} />
            <Users />
        </div>
    </div>
}