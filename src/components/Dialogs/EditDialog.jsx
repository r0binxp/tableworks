import React, {useState, useEffect} from 'react';

//React Redux
import { useDispatch } from 'react-redux';

// React Hook Form
import { useForm, Controller  } from 'react-hook-form';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

// Action
import { setSelectedId } from '../../actions/actions';

export default function EditDialog(props) {

    const {register, handleSubmit, control, errors: fieldsErrors } = useForm();
    const [user, setUser] = useState(props.user)
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(props.user)
    },[props.user])

    const handleClose = () => {
        props.setOpen(false);
        dispatch(setSelectedId(""))
    };

  return (
    <div>
      <Dialog maxWidth='lg' open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form noValidate onSubmit={handleSubmit(props.handleEditUser(user))}>
            <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                <Grid container spacing={3}>
                    <Grid item lg={6}>
                        <div style={{display: 'none'}}>
                            <Controller
                                name="id"
                                as={
                                    <TextField
                                        ref={register}
                                        margin="normal"
                                        fullWidth
                                        label={"id"}
                                        defaultValue={user.id}
                                        helperText={fieldsErrors.id ? fieldsErrors.id.message : null}
                                        id="id"
                                    />
                                }
                                type="hidden"
                                defaultValue={user.id}
                                control={control}
                                error={fieldsErrors.id}
                            />
                            <Controller
                                name="creationDate"
                                as={
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        label={"creationDate"}
                                        defaultValue={user.creationDate}
                                        helperText={fieldsErrors.creationDate ? fieldsErrors.creationDate.message : null}
                                        id="creationDate"
                                    />
                                }
                                type="hidden"
                                defaultValue={user.creationDate}
                                control={control}
                                error={fieldsErrors.creationDate}
                            />
                            <Controller
                                name="tableData"
                                as={
                                    <TextField
                                        margin="normal"
                                        variant="standard"
                                        fullWidth
                                        label={"tableData"}
                                        defaultValue={user.tableData}
                                        helperText={fieldsErrors.tableData ? fieldsErrors.tableData.message : null}
                                        id="tableData"
                                    />
                                }
                                type="hidden"
                                defaultValue={user.tableData}
                                control={control}
                                error={fieldsErrors.tableData}
                            />
                            <Controller
                                name="access"
                                as={
                                    <TextField
                                        variant="standard"
                                        margin="normal"
                                        fullWidth
                                        label={"access"}
                                        defaultValue={user.access}
                                        helperText={fieldsErrors.access ? fieldsErrors.access.message : null}
                                        id="access"
                                    />
                                }
                                type="hidden"
                                defaultValue={user.access}
                                control={control}
                                error={fieldsErrors.access}
                            />
                        </div>
                        <Controller
                            name="firstName"
                            as={
                                <TextField
                                    ref={register}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    label={"Name"}
                                    defaultValue={user.firstName}
                                    helperText={fieldsErrors.firstName ? fieldsErrors.firstName.message : null}
                                    type="text"
                                    id="firstName"
                                    error={fieldsErrors.firstName ? true : false}
                                />
                            }
                            defaultValue={user.firstName}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Name is required'}
                            }}
                        />
                    </Grid>
                    <Grid item lg={6}>
                        <Controller
                            name="LastName"
                            as={
                                <TextField
                                    ref={register}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    label={"LastName"}
                                    defaultValue={user.LastName}
                                    helperText={fieldsErrors.LastName ? fieldsErrors.LastName.message : null}
                                    type="text"
                                    id="LastName"
                                    error={fieldsErrors.LastName ? true : false}
                                />
                            }
                            defaultValue={user.LastName}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'LastName is required'}
                            }}
                        />
                    </Grid>
                    <Grid item lg={6}>
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    ref={register}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    label={"E-mail"}
                                    defaultValue={user.email}
                                    error={fieldsErrors.email ? true : false}
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                                    type="text"
                                    id="email"
                                />
                            }
                            defaultValue={user.email}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'email required'},
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'invalid email address'
                                }
                            }}
                        />
                            
                    </Grid>
                    <Grid item lg={6}>
                        <Controller
                            name="dni"
                            as={
                                <TextField
                                    ref={register}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    label={"Dni"}
                                    error={fieldsErrors.dni ? true : false}
                                    defaultValue={user.dni}
                                    helperText={fieldsErrors.dni ? fieldsErrors.dni.message : null}
                                    type="number"
                                    id="dni"
                                />
                            }
                            defaultValue={user.dni}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Dni required'},
                            }}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Controller
                            name="address"
                            as={
                                <TextField
                                    ref={register}
                                    variant="standard"
                                    margin="normal"
                                    fullWidth
                                    label={"Address"}
                                    error={fieldsErrors.address ? true : false}
                                    defaultValue={user.address}
                                    helperText={fieldsErrors.address ? fieldsErrors.address.message : null}
                                    type="text"
                                    id="address"
                                />
                            }
                            defaultValue={user.address}
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'address required'},
                            }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </DialogActions>
        </form>   
      </Dialog>
    </div>
  );
}