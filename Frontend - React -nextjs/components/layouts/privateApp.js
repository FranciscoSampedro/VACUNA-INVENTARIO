import { Layout, Spin, Row, Col } from 'antd'
import styles from 'styles/PrivateLayout.module.scss'
import CardUser from 'components/elements/cardUser'
import Link from 'next/link'
import HeaderPrivate from 'components/elements/headerPrivate'

import 'antd/dist/antd.css'
const { Header, Footer, Content } = Layout
export default function PrivateLayoutPage({ children, msg }) {
    const userPrincipal = [
        {
            username: "USUARIO PRUEBAS",
            profile: "PERFIL PRUEBAS"
        }
    ]
    const title = "VACUNA INVENTARIO KRUGER"
    return (
        <>
            <Layout className={styles.custom_layout_principal}>
                {/* <Header style={{ color: 'white', fontSize: 24, backgroundColor: '#3367D7' }}>
                    <Row justify="space-between" align="middle">
                        <Col xs={4} sm={4} md={1} lg={1} className={styles.col_menu}>
                        </Col>
                        <Col xs={0} sm={0} md={17} lg={17}>
                            <Link href="/"><h1 style={{ color: 'white' }}>{"VACUNA INVENTARIO KRUGER"}</h1></Link>
                        </Col>
                        <Col xs={16} sm={16} md={4} lg={4}>
                            <CardUser userName={userPrincipal.userName} profile={userPrincipal.profile} />
                        </Col>
                        <Col xs={4} sm={4} md={1} lg={1} className={styles.col_menu_settings}>
                        </Col>
                    </Row>
                </Header> */}
                <header className={styles.header_private} >
                    <HeaderPrivate titlePage={title} userPrincipal={userPrincipal} />
                </header>                <div>
                    <Content className={styles.custom_ant_layout_content}>{children}</Content>
                </div>
            </Layout>
        </>
    )
}