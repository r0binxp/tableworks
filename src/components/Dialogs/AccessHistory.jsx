import React, {useState, useEffect} from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

// Material UI Table 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function AccessHistory({user, open, setOpen, title,  ...props}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog maxWidth='lg' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <Grid container spacing={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Country
                            </TableCell>
                            <TableCell>
                                Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                          {user?.access?.map((row) => (
                              <TableRow key={row.date}>
                                  <TableCell>
                                      {row.location}
                                  </TableCell>
                                  <TableCell>
                                      {row.date}
                                  </TableCell>
                              </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}