import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import middlewares from 'middleware/client'
import apisBackendCore from 'components/constans/booksApis'
import { useState } from 'react'
const { clientBakendCore } = middlewares
import { Modal, Input } from 'antd'
export default function useEmployees() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

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
          return pre.filter((Employee) => Employee.id !== record.id);
        });
      },
    });
  };
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
  return {
    headerColumnsEmployees,
    dataSource,
    isEditing,
    editingEmployee,
    resetEditing,
    getAllData
  }
}
