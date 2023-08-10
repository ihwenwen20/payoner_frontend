// ** MUI Imports

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import TextFieldValidation from '@app/views/components/forms/text-field/TextFieldValidation'
import { CardContent, CardHeader } from '@mui/material'

const Button = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title='TextFieldValidation' />
        <CardContent>
          <TextFieldValidation />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Button
