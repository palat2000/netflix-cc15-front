import { createContext } from 'react'


export const ContentModalContext = createContext()
export default function ContentModalProvider({ children }) {
    return (
        <div>ContentModalContext</div>
    )
}
