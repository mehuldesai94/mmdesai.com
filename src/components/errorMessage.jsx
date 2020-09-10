import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomizedSnackbars = () => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };


  return (
    <div>
        <Snackbar open={true} autoHideDuration={500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
        {console.log('display')}
      </div>
  );
}

// export default function CustomizedSnackbars() {
//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//   };

//   console.log('inside the snackbar fucntion');
//   return (
//     render(
//       <div>
//         <Snackbar open={true} autoHideDuration={10000} onClose={handleClose}>
//           <Alert onClose={handleClose} severity="success">
//             This is a success message!
//           </Alert>
//         </Snackbar>
//         {console.log('display')}
//       </div>
//     )
//   );
// }
 
export default CustomizedSnackbars;