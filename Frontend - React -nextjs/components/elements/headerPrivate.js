import Head from 'next/head'
import styles from 'styles/PrivateLayout.module.scss'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
// import MenuSettings from './menuSettings'
import MenuPrincipal from './menuPrincipal'
import CardUser from './cardUser'

export default function Header({ titlePage = '', titleTab = '', userPrincipal = {} }) {
    return (
        <>
            <Head>
                <title>{titleTab}</title>
            </Head>
            <Row justify="space-between" align="middle">
                <Col xs={4} sm={4} md={1} lg={1} className={styles.col_menu}>
                    <MenuPrincipal />
                </Col>
                <Col xs={0} sm={0} md={17} lg={17}>
                    <h1>{titlePage}</h1>
                </Col>
                <Col xs={16} sm={16} md={4} lg={4}>
                    <CardUser userName={userPrincipal.userName} profile={userPrincipal.profile} />
                </Col>
                <Col xs={4} sm={4} md={1} lg={1} className={styles.col_menu_settings}>
                    {/* <MenuSettings /> */}
                </Col>
            </Row>
        </>
    )
}
