import {Form,Item,Input} from 'antd'

export default function FormEmployee() {
    const formItemLayout = {
        labelCol: {
            xs: { span: 12 },
            sm: { span: 6 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 }
        },
        labelAlign: 'left'
    }
    return (
        <>
            <Form {...formItemLayout}>
                <Form.Item label='Nombres:'>
                    <Input name='Nombres' />
                </Form.Item>
                <Form.Item label='Apellidos:'>
                    <Input name='apellidos' />
                </Form.Item>
                <Form.Item label='Correo:'>
                    <Input name='correo' />
                </Form.Item>
                <Form.Item label='cédula:'>
                    <Input name='cedula' />
                </Form.Item>
            </Form>
        </>
    )
}