import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'next-i18next'
import styles from 'styles/cardAvatar.module.scss'
import { signOut, useSession } from 'next-auth/react'
export default function CardUser({ userName }) {
  return (
    <>
      <section className={styles.container_user_card}>
      <Avatar size="default" icon={<UserOutlined />} className={styles.avatar_user_card} />
      <div className={styles.info_user_card}>
       <h4> {"test"}</h4>
      {/* <LoginLogout /> */}
      </div> 

      </section>
    </>
  )
}

function LoginLogout() {
  const { data: session, status } = useSession()
  const { t } = useTranslation(['common'])
  if (status === "authenticated") {

    return ([
      <div key={session}>
        {/* <h3>{session.user.idPerfil}</h3>,  */}
        <Button type="primary" onClick={() => signOut()}>{t('SignOut')}</Button>
      </div>

    ])
  }
  return null
}
