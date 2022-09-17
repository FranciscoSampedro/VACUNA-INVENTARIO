import { Button, Table, Modal, Input } from "antd";}
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


export default function Table(columns, dataSource){
    const [isEditing, setIsEditing] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    return(
        <>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
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
        ></Modal>
        </>
    )
}