import { useContext } from "react"
import { AbilityContext } from "../../utility/Can"

export const Permissions = () => {

  const ability = useContext(AbilityContext)

  const handlePermission = (type: number) => {
    switch (type) {
      case 1: {
        ability.update([{
          action: 'manage',
          subject: 'all'
        }])
        break;
      }
      case 2: {
        ability.update([{
          action: 'manage',
          subject: 'Fornecedor'
        }])
        break;
      }
      case 3: {
        ability.update([{
          action: 'create',
          subject: 'Financeiro'
        }, {
          action: 'read',
          subject: 'Financeiro'
        }, {
          action: 'update',
          subject: 'Financeiro'
        }])
        break;
      }
      case 4: {
        ability.update([{
          action: 'manage',
          subject: 'Financeiro'
        }])
      }
    }
  }
 
  return(    

    <>
      <button type="button" onClick={() => handlePermission(1)}>Admin permissions</button>
      <br />
      <button type="button" onClick={() => handlePermission(2)}>User permissions</button>
      <br />
      <button type="button" onClick={() => handlePermission(3)}>Financial permissions without delete</button>
      <br />
      <button type="button" onClick={() => handlePermission(4)}>Financial permissions with delete</button>
    </>
  )
}