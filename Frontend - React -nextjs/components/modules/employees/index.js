import useEmployees from "hooks/users/useEmployees";
import TableRender from 'components/elements/table/tableRender'
import {useEffect} from 'react'
import { Modal, Input } from 'antd'

import BtnModalAddEmployee from "./btnModalAddEmployee";
const Employess = (props) => {
  const { headerColumnsEmployees, dataSource, getAllData, isEditing, editingEmployee, modalInsert, resetEditing, openCloseModalInsert } = useEmployees();

     useEffect(() => {
       getAllData() 
     },[])

return(
    <>
    <BtnModalAddEmployee modalInsert={modalInsert} openCloseModalInsert={openCloseModalInsert} />
    <TableRender columns={headerColumnsEmployees} dataSource={dataSource}></TableRender>
    <Modal
      title="Editar Empleado"
      open={isEditing}
      okText="Guardar"
      onCancel={() => {
        resetEditing();
      }}
      onOk={() => {
        setDataSource((pre) => {
          return pre.map((Employee) => {
            if (Employee.id === editingEmployee.id) {
              return editingEmployee;
            } else {
              return Employee;
            }
          });
        });
        resetEditing();
      }}
    >
      <Input
        value={editingEmployee?.name}
        onChange={(e) => {
          setEditingEmployee((pre) => {
            return { ...pre, name: e.target.value };
          });
        }}
      />
      <Input
        value={editingEmployee?.sureNames}
        onChange={(e) => {
          setEditingEmployee((pre) => {
            return { ...pre, sureNames: e.target.value };
          });
        }}
      />
      <Input
        value={editingEmployee?.email}
        onChange={(e) => {
          setEditingEmployee((pre) => {
            return { ...pre, email: e.target.value };
          });
        }}
      />
    </Modal>
    </>
)
}


export default Employess