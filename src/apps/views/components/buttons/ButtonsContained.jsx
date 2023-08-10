import { CButton } from '@mycomponents/buttons/button'

const ButtonsContained = () => {
  return (
    <div className='demo-space-x'>
      <CButton variant='contained'>Primary</CButton>
      <CButton variant='contained' color='secondary'>
        Secondary
      </CButton>
      <CButton variant='contained' disabled>
        Disabled
      </CButton>
      <CButton variant='contained' color='warning'>
        Link
      </CButton>
      <CButton variant='contained' loading>
        loading
      </CButton>
    </div>
  )
}

export default ButtonsContained
