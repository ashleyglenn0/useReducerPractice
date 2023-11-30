import React, {useState, useReducer} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton"

export const ACTIONS = {
    ADD_CREDIT_CARD: "add-credit-card",
    DELETE_CREDIT_CARD: "delete-credit-card"
}

function reducer(cards, action) {
    switch (action.type) {
        case ACTIONS.ADD_CREDIT_CARD:
            return [...cards, newCard(action.payload.nameOnCard,action.payload.cardNumber,action.payload.zipCode,action.payload.cardVerificationValue, action.payload.expirationDate, action.payload.id)]
        case ACTIONS.DELETE_CREDIT_CARD:
            cards.filter(card => console.log("???ID", card.id))
            cards.filter(card => console.log("???PAYLOADID", action.payload.id))
            return cards.filter(card => card.id !== action.payload.id)
        default:
            return cards
    }
}

function newCard(nameOnCard, zipCode, cardNumber, cardVerificationValue, expirationDate, id) {
    return {id: Date.now(), nameOnCard, zipCode, cardNumber, cardVerificationValue, expirationDate}
}

function CreditCardForm() {
    const [cards, dispatch] = useReducer(reducer, []);
    const [nameOnCard, setNameOnCard] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cardVerificationValue, setCardVerificationValue] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cardNumber, setCardNumber] = useState("");

    const newCardPayload = {
        nameOnCard,
        zipCode,
        cardVerificationValue,
        expirationDate,
        cardNumber
    }

    const handleCardChange = (e) => {
        setCardNumber(e.target.value);   
    }
    const handleExpirationChange = (e) => {
        setExpirationDate(e.target.value);   
    }
    const handleZipChange = (e) => {
        setZipCode(e.target.value);   
    }
    const handleCardVerificationChange = (e) => {
        setCardVerificationValue(e.target.value);   
    }
    const handleNameChange = (e) => {
        setNameOnCard(e.target.value);   
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_CREDIT_CARD, payload: newCardPayload})
    }
    const handleDeleteClick = () => {
        dispatch({type: ACTIONS.DELETE_CREDIT_CARD, payload: {id: newCardPayload.id}})
    }

  return (
   <div>
    <Grid container spacing={3}>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Number"
            value={cardNumber}
            onChange={handleCardChange}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Expiration Date"
            value={expirationDate}
            onChange={handleExpirationChange}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Verification"
            value={cardVerificationValue}
            onChange={handleCardVerificationChange}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Billing Zip Code"
            value={zipCode}
            onChange={handleZipChange}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Name on Card"
            value={nameOnCard}
            onChange={handleNameChange}/>
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" type="submit" onClick={handleSubmit}>Submit Payment Info</Button>
        </Grid>
    </Grid>
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

export default CreditCardForm;