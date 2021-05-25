import React,{useState} from 'react';
import { useForm, Controller  } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// Material Ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// Actions
import * as actions from '../../actions/actions';
// React Router
import { useHistory } from "react-router-dom";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Matias Heredia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '3px 3px 3px rgba(0,0,0,0.2)',
    borderRadius: '6px',
    padding: theme.spacing(5),
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


export default function Login() {
    const {handleSubmit, control, errors: fieldsErrors } = useForm();
    const classes = useStyles();
    const [noExist, setNoExist] = useState(false)
    const [succes, setSucces] = useState(false)
    const dispatch = useDispatch();
    const setLogged = (payload) => dispatch( actions.setLogged(payload) );
    const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNoExist(false);
    setSucces(false);
  };

  const onSubmit = (event) => {
      if(event.email === 'matias@wispro.com' && event.password === '12345'){
          setSucces(true)
          setLogged(true)
          window.sessionStorage.setItem('logged', 'true')
          setTimeout(() => {
            history.push('/')
          }, 2000)
      } else {
           setNoExist(true)
      }
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={succes} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                Login success
            </Alert>
        </Snackbar>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={noExist} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                User doesn't exist
            </Alert>
        </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller
            name="email"
            as={
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={fieldsErrors.email ? fieldsErrors.email.message : null}
                    autoFocus
                />}
            defaultValue='' 
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
            error={fieldsErrors.email}
            />
          <Controller
            name="password"
            as={
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                helperText={fieldsErrors.password ? fieldsErrors.password.message : null}
                type="password"
                id="password"
                autoComplete="current-password"
                />
            }
            defaultValue=""
            control={control}
            error={fieldsErrors.email}
            rules={{
                required: {
                    value: true,
                    message: 'password is required'},
                minLength: {
                    value: 3,
                    message: 'password length is more than 3 characters'
                  }
            }}
          />


          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}