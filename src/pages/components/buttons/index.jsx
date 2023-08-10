// ** MUI Imports

import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

import CardSnippet from '@components/card-snippet'
import ButtonsContained from '@app/views/components/buttons/ButtonsContained'
import * as source from '@app/views/components/buttons/ButtonsSourceCode'

const Button = () => {
  return (
    <Grid item xs={12}>
      <CardSnippet
        title='Contained'
        code={{
          tsx: source.ButtonsContainedTSXCode,
          jsx: source.ButtonsContainedJSXCode
        }}
      >
        <Typography>
          Use <code>variant='contained'</code> prop with <code>&lt;Button&gt;</code> component for
          contained buttons.
        </Typography>
        <ButtonsContained />
      </CardSnippet>
    </Grid>
  )
}

export default Button
