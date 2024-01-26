import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {

  useEffect(() => {
    document.body.classList.add("overflow-hidden"); // 當 Modal render 時不讓頁面滾動
    return () => {
      document.body.classList.remove("overflow-hidden"); // 當 Modal 消失時, 讓頁面滾動
    };
  }, []);



  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container") //jsx 要插入的地方
  );
}

export default Modal;
