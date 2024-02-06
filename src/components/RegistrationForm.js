import React, { useState } from 'react';
import FirstNameInput from "./componentsRegistrationForm/FirstNameInput";
import LastNameInput from "./componentsRegistrationForm/LastNameInput";
import PhoneNumberInput from "./componentsRegistrationForm/PhoneNumberInput";
import GenderSelect from "./componentsRegistrationForm/GenderSelect";
import TermsCheckbox from "./componentsRegistrationForm/TermsCheckbox";
import RegisterButton from "./componentsRegistrationForm/RegisterButton";
import validateForm from "../utils/validateForm";
import userService from "../services/userService";
import resetForm from "./resetForm";
import './formStyles.css';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        agree: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? checked : value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(user);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const data = await userService.registerUser(user);
            console.log(data);
            resetForm(setUser, setErrors);
            alert('Registration successful!');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ padding: '2rem', boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
            <Typography variant="h5" component="h2" sx={{mb: 4, textAlign: 'center', fontFamily: "'Arial', sans-serif", fontSize: '40px', color: '#049074FF'}}>
                Registration form
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <FirstNameInput value={user.firstName} onChange={handleChange} error={errors.firstName}/>
                <LastNameInput value={user.lastName} onChange={handleChange} error={errors.lastName}/>
                <PhoneNumberInput value={user.phoneNumber} onChange={handleChange} error={errors.phoneNumber}/>
                <GenderSelect value={user.gender} onChange={handleChange} error={errors.gender}/>
                <TermsCheckbox checked={user.agree} onChange={handleChange} error={errors.agree}/>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <RegisterButton />
                </Box>
            </Box>
        </Container>
    );


};

export default RegistrationForm;
