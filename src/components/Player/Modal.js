import React from "react";

function Modal({ setIsModal, handleFireWork }) {
    return <div className="music-modal">
                <div className="mask-bg"/>
                <div className="wrapper">
                    <div className="modal-content">
                        <div className="title">
                            Happy Valentine's Day
                        </div>
                        <div className="body">
                            text
                        </div>
                        <p className="body">text</p>
                        <div className="body">
                            <button
                                type={'button'}
                                className='btn-summit'
                                onClick={() => {
                                    setIsModal(false);
                                    handleFireWork();
                                }}
                            >
                                Open it 
                            </button>
                        </div>
                    </div>              
                </div>
        </div>
}

export default Modal;