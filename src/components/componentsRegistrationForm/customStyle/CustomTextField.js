import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'grey',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey',
        },
    },
});
export default CustomTextField;