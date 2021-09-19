import React, {useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Material UI
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import Card from '@material-ui/core/Card';

// Components
import VisualizationData from '../Visualization/VisualizationData'

// Icons
import Create from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

// Dialogs
import AlertDialog from '../Dialogs/AlertDialog'
import EditDialog from '../Dialogs/EditDialog'
import AccessHistory from '../Dialogs/AccessHistory'

// Redux Actions
import * as actions from '../../actions/actions'

// Components
import Header from '../Header/Header'
import Map from '../Map/Map';

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
    const columns = [
      {title: 'Name', field: 'firstName'},
      {title: 'LastName', field: 'LastName'},
      {title: 'E-mail', field: 'email'},
      {title: 'Dni', field: 'dni'},
      {title: 'Address', field: 'address'},
      {title: 'Creation Date', field: 'creationDate'},
    ]
    
    const handleDeleteUser = (user) => {
      deleteUser(user.id)
    }
    const handleEditUser = (user) => {
      let endUser = {
        ...selectedUser,
        id: user.id, 
        firstName: user.firstName,
        LastName: user.LastName,
        email: user.email,
        dni: user.dni,
        address: user.address
      }
      editUser(endUser)
      setOpenEdit(false)
      dispatch(actions.setSelectedId(""))
    }

    const handleDataUserSelected = (user) => {
      setSelectedId(user)
    }
    
  return (
    <>
      <Header/>
      <Container  className={classes.Container} component="main" maxWidth="lg">
        <AlertDialog open={openConfirm} setOpen={setOpenConfirm} color="secondary" text={'Are you sure to delete? This action can not be undone'} title={`Delete User : ${selectedUser.firstName} ${selectedUser.LastName}`} accept={() => handleDeleteUser(selectedUser)}/>
        <EditDialog open={openEdit} setOpen={setOpenEdit} color="primary"  title={`Edit User : ${selectedUser.firstName} ${selectedUser.LastName}`} user={selectedUser} handleEditUser={() => handleEditUser}/>
        {selectedUser && <AccessHistory open={openHistory} setOpen={setOpenHistory} color="primary"  title={`Acces History : ${selectedUser.firstName} ${selectedUser.LastName}`} user={selectedUser} />}

        <Card>
          {users ? (
            <>
              <div className="row">
                <div className="col-12 py-2 cards-header">
                  <div className="row">
                    <h3 className="ms-4 mb-0 text-light">Users</h3>
                  </div>
                </div>
              </div>
              <MaterialTable
                icons={{ Filter: () => <FilterListIcon  fontSize="small" color='disabled' /> }}
                mt={4}
                actions={[
                  {
                    tooltip: 'Save User',
                    icon: () => <Create color="primary" />,
                    onClick: (event, rowData) => {setOpenEdit(true);setSelectedId(rowData)}
                  },
                  {
                    tooltip: 'Delete User',
                    icon: () => <DeleteIcon color="secondary" />,
                    onClick: (event, rowData) => {setOpenConfirm(true);setSelectedId(rowData)}
                  },
                  {
                    tooltip: 'Acces History',
                    icon: () => <VpnKeyIcon  />,
                    onClick: (event, rowData) => {setOpenHistory(true);setSelectedId(rowData)}
                  }
                ]}
                options={{
                  filtering: true,
                  editable: true,
                  actionsColumnIndex: -1
                }}
                data={Array.from(users)}
                onRowClick={(e, rowData) => handleDataUserSelected(rowData) }
                columns={columns}
                title={""}
              />
            </>
          ) : ' '}
        </Card>
      </Container>
      <Container className={classes.Container} component="main">
        <Card className="mt-5">
          <Map />
        </Card>
      </Container>
      <Container className={classes.Container} component="main" >
          <Card className="mb-5 mt-5">
            <VisualizationData />
          </Card>
      </Container>
    </>
  );
}