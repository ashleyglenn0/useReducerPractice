import React, {useState, useReducer} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton"

export const ACTIONS = {
    DELETE_CREDIT_CARD: "delete-credit-card"
}

const testData = [{
    nameOnCard: "Test Card 1",
    cardNumber: "444444444444444448",
    expirationDate: "12/25",
    cardVerificationValue: "123",
    zipCode: "63136",
    id: 1
},
{
    nameOnCard: "Test Card 2",
    cardNumber: "444444444444444446",
    expirationDate: "12/25",
    cardVerificationValue: "123",
    zipCode: "63136",
    id: 2
},
{
    nameOnCard: "Test Card 3",
    cardNumber: "444444444444444447",
    expirationDate: "12/25",
    cardVerificationValue: "123",
    zipCode: "63136",
    id: 3
}
]


function reducer(cards, action) {
    switch (action.type) {
        case ACTIONS.ADD_CREDIT_CARD:
            return [...cards, ...action.payload]
        case ACTIONS.DELETE_CREDIT_CARD:
            return cards.find(card => card.id === action.payload.id)
        default:
            return cards
    }
}

function SavedPaymentsPanel() {
    const [cards, dispatch] = useReducer(reducer, testData);
    
    const handleDeleteClick = () => {
        dispatch({type: ACTIONS.DELETE_CREDIT_CARD, payload: {id: newCardPayload.id }})
    }

  return (
   <div>
    <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="card table">
            <TableHead>
                <TableRow>
                    <TableCell>Name On Card</TableCell>
                    <TableCell align="right">Card Number</TableCell>
                    <TableCell align="right">Card Billing Zip Code</TableCell>
                    <TableCell align="right">Card Verification Value</TableCell>
                    <TableCell align="right">Card Expiration Date</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cards.map((card) => {
                    return <TableRow
                    key={card.id}
                    sx={{"&:last-child td, &:last-child th" : { border: 0} }} >
                        <TableCell component="th" scope="row">
                            {card.nameOnCard}
                        </TableCell>
                        <TableCell align="right">{card.cardNumber}</TableCell>
                        <TableCell align="right">{card.zipCode}</TableCell>
                        <TableCell align="right">{card.cardVerificationValue}</TableCell>
                        <TableCell align="right">{card.expirationDate}</TableCell>
                        <TableCell align="right"><IconButton aria-label="delete" size="small" onClick={handleDeleteClick}><DeleteIcon/></IconButton></TableCell>
                        
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
   </div>
  )
}

export default SavedPaymentsPanel;