import PrivateLayout from 'components/layouts/privateApp'
import { StarTwoTone } from '@ant-design/icons'
import CardFullInfoUser from 'components/elements/cardFullInfoUser'
import { Row, Col } from 'antd'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
export default function Root() {
  return (
    <>
     <PrivateLayout>
         <section style={{ paddingLeft: "52px", paddingTop: "0px", paddingRight: "50px", paddingBottom: "0px", height: "90px" }} >
            <h3><StarTwoTone />Inicio</h3>
          </section>
          <Row justify="center" align="top" >
            {/* <Col xs={24} sm={24} md={4} lg={4} className={styles.col_image_home}>
            <Image
              src="/AVATAR.svg"
              alt="Avatar"
             width="100%"
            height="100%"
            
            />
          </Col> */}
          <Col xs={24} sm={24} md={8} lg={8} >
  <CardFullInfoUser />
  </Col>
  </Row>
     </PrivateLayout>
    </>
  )
}