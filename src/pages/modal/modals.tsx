import { useSelector } from "react-redux";
import { RootState } from "../../main/store/redux/rootState";
import TestingModal from "./firstModal";



function Modals() {

    const modal = useSelector((state: RootState) => state.modal);

    if (modal === '') {
        return null
    }
    else if (modal === 'testingModal') {
        return <div>{< TestingModal />}</div>
    }
}

export default Modals