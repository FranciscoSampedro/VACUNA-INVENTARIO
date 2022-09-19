import { Skeleton, Card } from 'antd'
import { useEffect, useState } from 'react'
import Description from './Description'
import styles from 'styles/Home.module.css'
import useUser from 'hooks/users/useUser'
import ChangePassBtn from './ChangePassBtn'
import EditInfoUserBtn from './editInfoUserBtn'
import { Row, Col, Space } from 'antd'
import Image from 'next/image'
const { Meta } = Card

const titleStyle = {
  marginBottom: '0px',
  background: 'rgba(228, 243, 255, 0.8 )',
  color: '#004e92',
  fontWeight: 'bold',
  textAlign: 'center'
}

const bodyStyle = {
  borderColor: '#004e92',
  borderWidth: '1px 0px 1px 0px',
  borderStyle: 'solid',
  padding: '15px',
  color: '#004e92'
}

export default function CardFullInfoUser() {
  const { isLoading, user, getAuthUser } = useUser()
  useEffect(() => {
    getAuthUser()
  }, [])
  return (
    <>
      <Card
        className={styles.card_container}
        hoverable={true}
        headStyle={titleStyle}
        bodyStyle={bodyStyle}
        bordered={true}
        title={`${user.username}  ${user.userlastname}`}
      >
        <Skeleton loading={isLoading} active>
          <Row justify="center"  >
            <Col  className={styles.col_image_home}>
              <Image
                src="/AVATAR.svg"
                alt="Avatar"
                width="100%"
                height="100%"
// 
              />
            </Col>
            <Col span={22}  >
              <Meta
                description={<Description user={user} />}
              />
            </Col>
            <hr />
            <Space
              align="center"
            >
              <ChangePassBtn />
              <EditInfoUserBtn />
            </Space>
          </Row>
        </Skeleton>
      </Card>

    </>
  )
}