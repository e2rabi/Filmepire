import { makeStyles } from '@mui/styles';
import { hover } from '@testing-library/user-event/dist/hover';

export default makeStyles((theme) => ({
    movie: {
        padding: '10px'
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center'

    },
    image: {
        borderRadius: '20px',
        height: '300px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.05)'
        },
    },
    links: {
        alignItems: 'center',
        fontWeight: 'bolder',
        textDecoration: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer'
        },
    }

}))