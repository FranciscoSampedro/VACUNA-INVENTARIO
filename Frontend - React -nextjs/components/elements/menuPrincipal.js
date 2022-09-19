import Link from 'next/link'
import Image from 'next/image'
import { useMenuPrincipal, headerStyle, bodyStyle, drawerStyle } from 'hooks/useMenu'
import styles from 'styles/menuPrincipal.module.scss'
import 'antd/dist/antd.css'
import { Button, Drawer } from 'antd'
import { MenuOutlined, HomeFilled, SignalFilled, UserOutlined, ToolOutlined } from '@ant-design/icons'

export default function MenuPrincipal() {
    const { visibleMenu, showMemu, closeMenu } = useMenuPrincipal()

    return (
        <>
            <Button type="ghost"
                className={styles.menu_button}
                icon={<MenuOutlined />}
                size="middle"
                onClick={showMemu}
            />

            <Drawer
                title={<Image
                    src="/demo.png"
                    alt="logo menu"
                    height={45} 
                    width={45} 
                    // layout='fill'
                />}
                placement="left"
                closable={false}
                onClose={closeMenu}
                visible={visibleMenu}
                key="left"
                className={styles.container_menu}
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
                drawerStyle={drawerStyle}
            >
                <Link href="/inicio"><a> <HomeFilled /> Inicio </a></Link>
                <hr />
                <Link href="/usuarios" ><a> <UserOutlined />Gestionar Empleados</a></Link>
                <hr />
                <Link href="/miInfo" ><a> <ToolOutlined />Gestionar Información </a></Link>
                
            </Drawer>
        </>
    )
}
