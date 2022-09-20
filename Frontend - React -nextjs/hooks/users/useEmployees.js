import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import middlewares from 'middleware/client'
import apisBackendCore from 'components/constans/booksApis'
import { useState } from 'react'
const { clientBakendCore } = middlewares
import { Modal, Input } from 'antd'
export default function useEmployees() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [modalInsert,setModalInsert] = useState(false);
  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null);
  };
  const onDeleteEmployee = (record) => {
    Modal.confirm({
      title: "Esta seguro que desea eliminar el Empleado?",
      okText: "Si",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          deleteEmployee(record.id);
          return pre.filter((Employee) => Employee.id !== record.id);
        });
      },
    });
  };
  const openCloseModalInsert = ()=>{
    setModalInsert(!modalInsert)
  }
  const [dataSource, setDataSource] = useState([])
  const headerColumnsEmployees = [{
    key: "1",
    title: "Id",
    dataIndex: "id"
  },
  {
    key: "2",
    title: "Nombres",
    dataIndex: "name"
  },
  {
    key: "3",
    title: "Apellidos",
    dataIndex: "sureNames"
  },
  {
    key: "4",
    title: "Correo Electrónico",
    dataIndex: "email"
  },
  {
    key: "5",
    title:'Cédula',
    dataIndex:'cedula'
  },
  {
    key: "6",
    title: "Acciones",
    render: (record) => {
      return (
        <>
          <EditOutlined
            onClick={() => {
              onEditEmployee(record);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              onDeleteEmployee(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />

        </>
      )
    }
  }

  ]
  const getAllData = () => {
    clientBakendCore
      .get(apisBackendCore.users.get_users())
      .then((data) => {
        console.log(data)
        setDataSource(data.data)
      })
  }
  const deleteEmployee=(id)=>{
    clientBakendCore
    .delete(apisBackendCore.users.delete_User(id))
  }
  return {
    headerColumnsEmployees,
    dataSource,
    isEditing,
    editingEmployee,
    modalInsert,
    resetEditing,
    openCloseModalInsert,
    getAllData,
    deleteEmployee
  }
}
