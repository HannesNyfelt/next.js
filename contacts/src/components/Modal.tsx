import { ReactNode } from 'react'
import styles from './Modal.module.css'
import cn from 'classnames'

export type ModalProps = {
    open: boolean,
    onClose: () => void,
    children?: ReactNode
}

export default function Modal({ open, onClose, children }: ModalProps) {
    return (
        <div
            onClick={onClose}
            className={cn(
                styles.background,
                { [styles.open]: open }
            )}>
            <div onClick={e => e.stopPropagation()} className={styles.box}>
                {children}
            </div>
        </div>
    )
}