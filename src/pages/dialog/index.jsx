// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@components/card-snippet'
// ** Source code imports
import * as source from '@mycomponents/Dialog/DialogSourceCode'

// ** Demo Components Imports
import DialogSizes from '@mycomponents/Dialog/DialogSizes'
import DialogConfirmation from '@mycomponents/Dialog/DialogConfirmation'
import DialogRespoFullScreen from '@mycomponents/Dialog/DialogRespoFullScreen'
import DialogTransition from '@mycomponents/Dialog/DialogTransition'

// ** Source code imports
import DialogCreate from '@mycomponents/Dialog/DialogCreate'
import DialogShowDetail from '@mycomponents/Dialog/DialogShowDetail'
import DialogEdit from '@mycomponents/Dialog/DialogEdit'
import DialogDelete from '@mycomponents/Dialog/DialogDelete'

const Dialog = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Optional Sizes'
          code={{
            tsx: source.DialogSizesJSXCode,
            jsx: source.DialogSizesJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            You can set a dialog maximum width by using the <code>maxWidth</code> enumerable in combination with the{' '}
            <code>fullWidth</code> boolean. When the <code>fullWidth</code> property is true, the dialog will adapt
            based on the <code>maxWidth</code> value.
          </Typography>
          <DialogSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Responsive full-screen'
          code={{
            tsx: null,
            jsx: source.DialogRespoFullScreenJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Make a full screen dialog at particular screen sizes only by using <code>useMediaQuery</code> hook.
          </Typography>
          <DialogRespoFullScreen />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet
          title='Confirmation Dialog'
          code={{
            tsx: null,
            jsx: source.DialogConfirmationJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            Use <code>disableEscapeKeyDown</code> prop to disable 'Escape' key and use <code>onClose</code> prop to
            disable the backdrop.
          </Typography>
          <DialogConfirmation />
        </CardSnippet>
      </Grid>
			<Grid item xs={12} md={6}>
        <CardSnippet
          title='Transitions'
          code={{
            tsx: null,
            jsx: source.DialogTransitionJSXCode
          }}
        >
          <Typography sx={{ mb: 4 }}>
            You can also use any of the transitions that you like. Use <code>TransitionComponent</code> prop for the
            transition.
          </Typography>
          <DialogTransition />
					<br />
					<br />
					<DialogCreate />
					<DialogShowDetail />
					<DialogEdit />
          <DialogDelete />
        </CardSnippet>
      </Grid>
			<Grid item xs={12} md={6}>
      </Grid>
    </Grid>
  )
}

export default Dialog