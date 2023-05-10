import styles from './Container.module.css'
import { ReactNode } from "react"


export type ContainerProps = {
    children: ReactNode
}

export default function Container({ children }: ContainerProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}