import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Backdrop = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({children}) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
    </div>;
};

const portalElement = document.getElementById('overlays');

const Modal = ({children, onClose}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;