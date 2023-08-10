import Button from '@mui/material/Button'

export const CButton = (props) => {
  const { variant, size, onClick, type, children, color, disabled, loading } = props

  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {loading ? 'loading...' : children}
    </Button>
  )
}
