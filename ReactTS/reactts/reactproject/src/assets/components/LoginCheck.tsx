import React from 'react'
import { useState } from 'react'


type UserType = {
    name: string,
    email: string,
    phone: string
}

function LoginCheck() {
    // const [user, setUser] = useState<UserType | null>(null)    İkinci Seçenek
    const [user, setUser] = useState<UserType | null>({} as UserType)


    const HandleLogin = () => {
        setUser({
            name: 'Adem',
            email: 'ademkaragulle@outlook.com',
            phone: '05335987708'
        })
    }

    const HandleLogout = () => {
        // setUser(false)    İkinci Seçenek
        setUser({} as UserType)
    }

    return (
        <div>
            <button onClick={HandleLogin}>Giriş Yap</button>
            <button onClick={HandleLogout}>Çıkış Yap</button>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
            </div>
        </div>
    )
}

export default LoginCheck