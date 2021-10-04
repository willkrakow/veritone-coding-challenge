import React from 'react'
import { Modal, Button } from '@mui/material'
import { Task } from '../../types'

interface Props {
    handleDelete: (task: Task) => void;
    task: Task;
    open: boolean;
    handleClose: () => void;
}

const DeleteConfirmation = ({
    handleDelete,
    task,
    open,
    handleClose
}: Props) => {

    return <div>modal here</div>;
}