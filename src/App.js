import React from 'react';
import Container from '@mui/material/Container';

import CssBaseline from '@mui/material/CssBaseline';
import RegistrationForm from './components/RegistrationForm';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mt: 5 }}>
                <RegistrationForm />
            </Container>
        </React.Fragment>
    );
}

export default App;
