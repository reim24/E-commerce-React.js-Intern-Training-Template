import axios from "axios"
import { useEffect, useState } from "react"
import useGetUser from "../../main/hooks/useGetUser"
import Header from "../dashboard/Header"
import './profile.css'
import IBank from '../../main/interfaces/IBank'
import Footer from "../dashboard/Footer"


const Profile = () => {

    const [transactions, setTransactions] = useState([])
    const [bankInfo, setBankInfo] = useState([])
    const [selectedBank, SetSelectedBank] = useState<IBank | null>(null)
    const user = useGetUser()

    async function getBanks() {

        const result = (await axios.get(`bankaccount/get-all?PageNumber=1&PageSize=10`)).data
        setBankInfo(result.data)
    }

    const handleBanks = (e: any) => {
        const ChangeBank = [...bankInfo]
        const selectedBankAC = ChangeBank.find(bank => bank.code === e.target.value)
        SetSelectedBank(selectedBankAC)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = (await axios.get(`bankaccount/${selectedBank?.id}/transactions?PageNumber=1&PageSize=20`)).data;
                setTransactions(result.data)
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [selectedBank]);




    useEffect(() => {
        getBanks()
    }, [])


    return (<section className="profile_wrapper">
        <Header />

        <div className="sidebar">
            <div className="sidebar__top">
                <h2>{user.firstName}</h2>
                <h4>{user.lastName}</h4>
            </div>

            <div className="sidebar__bottom">
                <p>Transactions  {selectedBank ? <p> Balance Left {selectedBank.balance} &euro;</p> : 'Select a bank'}</p>

                <select onChange={(e) => {

                    handleBanks(e)
                }}>
                    <option disabled selected > QTY </option>
                    {bankInfo.map(bank =>
                        < option className="text-muted" key={bank.id} defaultValue={bank.code} > {bank.code}</option>
                    )}
                </select>

                <div className="booked_container">
                    <div className="profile_main-body">
                        <div className="profile_user_card" >
                            <div className="profile_card">
                                {transactions.map(item =>
                                    <div className="card-body" key={item.id}>
                                        <br />
                                        <p className="user_proffesion">{item.action}  {item.amount}$</p>
                                        <p className="user_proffesion"> {item.description}</p>
                                        <p className="User_location">{item.dateCreated}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

    </section >
    )
}

export default Profile