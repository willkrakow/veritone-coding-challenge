import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface Props {
    setOpen: (open: boolean) => void;
}

const EmptyList = ({ setOpen }: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "grey.200",
            borderRadius: 1,
            py: 16,
            px: 29,
            width: "fit-content",
            mx: "auto",
            mt: 19,
            textAlign: "center",
            position: "relative",
        }}>
            <Typography variant="subtitle1">Your shopping list is empty :(</Typography>
            <Button variant="contained" color="primary" sx={{ placeSelf: "center" }} onClick={() => setOpen(true)} >
                Add some items
            </Button>
        </Box>
    )
}

export default EmptyList;