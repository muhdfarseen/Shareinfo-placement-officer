import { Button } from '@mantine/core';
import React from 'react';

export const FormInputLabel = ({ children }) => {
    return (

        <Button style={{ pointerEvents: "none" }} autoContrast color='#B2CBF3' variant="filled">
            {children}
        </Button>

    );
};
