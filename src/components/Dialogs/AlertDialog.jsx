import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Action
import { setSelectedId } from '../../actions/actions';

// Redux
import { useDispatch } from 'react-redux';
export default function AlertDialog(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setOpen(false);
    dispatch(setSelectedId(""))
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="disabled">
            Cancel
          </Button>
          <Button onClick={() => {props.accept();props.setOpen(false);dispatch(setSelectedId(""))}} color={props.color} variant="contained" autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
}