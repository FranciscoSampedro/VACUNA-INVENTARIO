import styles from 'styles/Home.module.css'


export default function Description ({ user }) {
  return (
        <>
            <p className={styles.card_info_full_info_user}>
                <b>Documento Identificación:</b>{user.docIdentification} <br />
                <b>Email:</b> {user.useremail} <br />
                <b>Perfil:</b> {user.profile}
            </p>
        </>
  )
}
