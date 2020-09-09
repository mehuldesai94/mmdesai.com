import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars() {
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };
  console.log('inside the snackbar fucntion');
  return (
    <div>
      <Snackbar open={true} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      {console.log('display')}
    </div>
  );
}