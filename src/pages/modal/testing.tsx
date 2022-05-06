import { useDispatch } from "react-redux";
import { setModal } from "../../main/store/stores/modal/state.modal";

import "./modal.css";

const TestingModal = () => {
    const dispatch = useDispatch()

    return (
        <div className="modal-wrapper" onClick={() => {
            dispatch(setModal(''))
        }}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => {
                    dispatch(setModal(''))
                }} className="close-modal">
                    X
                </button>
                <div className='modal-container'>

                    <h1>testModal</h1>
                </div>
            </div>
        </div>
    )
}

export default TestingModal