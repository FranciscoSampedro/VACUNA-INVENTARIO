import { useState } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

export function useMenuPrincipal() {
    const [visibleMenu, setVisibleMenu] = useState(false)

    const showMemu = () => {
        setVisibleMenu(true)
    }

    const closeMenu = () => {
        setVisibleMenu(false)
    }

    return {
        visibleMenu,
        showMemu,
        closeMenu
    }
}

export function useMenuSettings() {
    const [visibleSettings, setVisibleSettings] = useState(false)
    const router = useRouter()

    const showSettings = () => {
        setVisibleSettings(true)
    }

    const closeSettings = () => {
        setVisibleSettings(false)
    }

    const handleSignOut = () => {
        signOut({ redirect: false, callbackUrl: '/auth/login' })
            .finally(() => { router.push('/auth/login') })
    }

    return {
        visibleSettings,
        showSettings,
        closeSettings,
        handleSignOut
    }
}

export const headerStyle = {
    background: 'rgba(228, 243, 255, 0.8 )',
    borderRadius: '34px 0px 0px 0px'
}

export const bodyStyle = {
    background: 'rgba(228, 243, 255, 0.8 )',
    borderRadius: '0px 0px 34px 0px',
    color: '#004e92'
}

export const drawerStyle = {
    background: 'rgba(255,255,255,0)'
}

export const headerStyleSettings = {
    background: '#004e92',
    borderRadius: '0px 34px 0px 0px'
}

export const bodyStyleSettings = {
    background: 'rgba(228, 243, 255, 0.8 )',
    borderRadius: '0px 0px 0px 34px'
}
