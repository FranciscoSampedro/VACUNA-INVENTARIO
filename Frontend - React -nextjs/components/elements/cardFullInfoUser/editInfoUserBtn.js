import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import styles from 'styles/Home.module.css'

export default function EditInfoUserBtn () {
  return (
        <Button type="default" icon={<EditOutlined />} >Editar Información</Button>
  )
}
