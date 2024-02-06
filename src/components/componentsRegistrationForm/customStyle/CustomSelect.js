import {styled} from "@mui/material/styles";
import {InputLabel, MenuItem, Select} from "@mui/material";

const CustomSelect = styled(Select)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'grey',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'grey',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'grey',
    },

});

const CustomInputLabel = styled(InputLabel)({
    color: 'grey',
    '&.Mui-focused': {
        color: 'grey',
    },
});


const CustomMenuItem = styled(MenuItem)({
    color: 'grey',
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export { CustomSelect, CustomInputLabel, CustomMenuItem };