import { Button, Modal } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import FormEmployee from './formEmployee'
export default function BtnModalAddEmployee (props){
    return (
        <>
            <Button type='default' onClick={props.openCloseModalInsert}><UserAddOutlined />Nuevo Empleado</Button>
            <Modal
                open={props.modalInsert}
                title='Insertar Empleado'
                destroyOnClose={true}
                onCancel={props.openCloseModalInsert}
                centered
                footer={[
                    <Button onClick={props.openCloseModalInsert}>Cancelar</Button>,
                    <Button type='primary'>Insertar</Button>
                ]}
                >
                <FormEmployee/>
                </Modal>
        </>
    )
    
}