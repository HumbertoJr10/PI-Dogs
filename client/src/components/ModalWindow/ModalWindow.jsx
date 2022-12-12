import React from 'react'
import styles from './ModalWindow.module.css'

const ModalWindow = ({children, modalState, setModalState, title = 'Alert', header}) => {
  return (
    <>
      {
        modalState && 
        <div className={styles.Overlay}>
          <div className={styles.ContenedorModal}>
            {
              header && 
              <div className={styles.ModalHeader}>
                <h3> {title} </h3>
              </div>
            }
            <button onClick={()=> setModalState(!modalState)} className={styles.CloseButton}>X</button>
              {children}
            </div>
        </div>
      }
    </>
  )
}

export default ModalWindow;