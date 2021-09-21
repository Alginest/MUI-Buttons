import React from 'react'
import { CssBaseline, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    border: 'none',
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Button
        className={classes.root}
        variant='contained'
        color='primary'
        size='small'
      >
        Button One
      </Button>
      <IconButton></IconButton>
    </>
  )
}

export default App
