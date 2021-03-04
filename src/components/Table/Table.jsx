import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";

// Icons
import Create from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// dialogs
import AlertDialog from '../Dialogs/AlertDialog'
import EditDialog from '../Dialogs/EditDialog'
// Redux Actions
import * as actions from '../../actions/actions'


const useStyles = makeStyles((theme) => ({
  Container: {
    marginTop: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





export default function Table(props) {
    const dispatch = useDispatch();
    
    const classes = useStyles();
    const [openConfirm, setOpenConfirm] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openHistory, setOpenHistory] = useState(false)
    
    // store actions
    const setSelectedId = (payload) => dispatch( actions.setSelectedId(payload) );
    const deleteUser = (payload) => dispatch( actions.deleteUser(payload));
    const editUser = (payload) => dispatch( actions.editUser(payload));
    // store redux
    const selectedUser = useSelector(store => store.selectedUser)
    const users = useSelector(store => store.users)
    const columns = useSelector(store => store.columns)
    

    const handleDeleteUser = (user) => {
      deleteUser(user.id)
    }
    const handleEditUser = (user) => {
      editUser(user)
      setOpenEdit(false)
    }
    
  

  

  return (
  <>
    <Container  className={classes.Container} component="main" maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Users Statitics
      </Typography>
      <AlertDialog open={openConfirm} setOpen={setOpenConfirm} color="secondary" text={'are you sure to delete? This action can not be undone'} title={`Delete User : ${selectedUser.firstName} ${selectedUser.LastName}`} accept={() => handleDeleteUser(selectedUser)}/>
      <EditDialog open={openEdit} setOpen={setOpenEdit} color="primary"  title={`Edit User : ${selectedUser.firstName} ${selectedUser.LastName}`} user={selectedUser} handleEditUser={() => handleEditUser}/>
      <EditDialog open={openHistory} setOpen={setOpenHistory} color="primary"  title={`Acces History : ${selectedUser.firstName} ${selectedUser.LastName}`} user={selectedUser} handleEditUser={() => handleEditUser}/>
      {users && (
        <MaterialTable
          icons={{ Filter: () => <FilterListIcon  fontSize="small" color='disabled' /> }}
          mt={4}
          actions={[
            {
              icon: () => <Create color="primary" />,
              tooltip: 'Save User',
              onClick: (event, rowData) => {setOpenEdit(true);setSelectedId(rowData)}
            },
            {
              icon: () => <DeleteIcon color="secondary" />,
              tooltip: 'Delete User',
              onClick: (event, rowData) => {setOpenConfirm(true);setSelectedId(rowData)}
            },
            {
              icon: () => <VpnKeyIcon color="default" />,
              tooltip: 'Acces History',
              onClick: (event, rowData) => {setOpenHistory(true);setSelectedId(rowData)}
            }
          ]}
          options={{
            filtering: true,
            editable: true,
            actionsColumnIndex: -1
          }}
          data={Array.from(users)}
          columns={columns}
          title="Users Table"
        />
      )}
    </Container>
    <Container  className={classes.Container} component="main" maxWidth="lg">
      <h1> hola</h1>
    </Container>
  </>
  );
}