import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";

export default function TableRender(props){
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    
    return(
        <>
        <Table columns={props.columns} dataSource={props.dataSource}></Table>
        {/* <Modal
          title="Editar Empleado"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((employee) => {
                if (employee.id === editingemployee.id) {
                  return editingemployee;
                } else {
                  return employee;
                }
              });
            });
            resetEditing();
          }}
        ></Modal> */}
        </>
    )
}