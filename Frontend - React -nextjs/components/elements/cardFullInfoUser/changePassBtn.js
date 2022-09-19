import { Button } from 'antd'
import { LockFilled } from '@ant-design/icons'
import styles from 'styles/Home.module.css'

export default function ChangePassBtn () {
  return (
        <Button type="default" icon={<LockFilled />} >Cambiar Contraseña</Button>
  )
}
