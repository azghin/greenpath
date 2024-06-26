import { User } from "../../recoil_state";
import { useRecoilValue } from "recoil";
export default function Profile(){
    const getUser=useRecoilValue(User)
    return(
        <section>
            <h1> welcome to your profile {getUser.email}</h1>
        </section>
    )
}