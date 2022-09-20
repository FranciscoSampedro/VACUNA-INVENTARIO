import PrivateLayout from 'components/layouts/privateApp'
import { StarTwoTone } from '@ant-design/icons'
import Employees from 'components/modules/employees'

export default function Root() {

  return (
    <>
     <PrivateLayout>
         <section style={{ paddingLeft: "52px", paddingTop: "0px", paddingRight: "50px", paddingBottom: "0px", height: "90px" }} >
            <h3><StarTwoTone />Empleados</h3>
          </section>
        <section style={{ paddingLeft: "52px", paddingTop: "0px", paddingRight: "50px", paddingBottom: "0px", height: "90px" }}>
          <Employees></Employees>   
          </section>
       
       
     </PrivateLayout>
    </>
  )
}