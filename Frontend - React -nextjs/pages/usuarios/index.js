import PrivateLayout from 'components/layouts/privateApp'
import { StarTwoTone } from '@ant-design/icons'
export default function Root() {
  return (
    <>
     <PrivateLayout>
         <section style={{ paddingLeft: "52px", paddingTop: "0px", paddingRight: "50px", paddingBottom: "0px", height: "90px" }} >
            <h3><StarTwoTone />USUARIOS</h3>
          </section>
     </PrivateLayout>
    </>
  )
}