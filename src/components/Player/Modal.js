import React from "react";

function Modal({ setIsModal, handleFireWork }) {
    return <div className="music-modal">
                <div className="mask-bg"/>
                <div className="wrapper">
                    <div className="modal-content">
                        <div className="title">
                            Happy Birthday Ngọc Anh
                        </div>
                        <div className="body">
                            Chúc em có một tuổi 23 thật vui vẻ, mong mọi dự định của em sẽ thành hiện thực và trở thành phiên bản tốt nhất của mình nhé !
                        </div>
                        <p className="body">Anh có một món quà nhỏ tặng em, mong rằng em sẽ thích</p>
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