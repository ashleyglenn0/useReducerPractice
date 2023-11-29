import React, {useState, useReducer} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function CreditCardForm() {
    const [nameOnCard, setNameOnCard] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cardVerificationValue, setCardVerificationValue] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [shouldSave, setShouldSave] = useState(false);

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
    const handleShouldSave = (e) => {
        setShouldSave(true);
    }

    const newCardPayload = {
        nameOnCard,
        zipCode,
        cardVerificationValue,
        expirationDate,
        cardNumber,
        shouldSave
    }
    console.log("????NEWCARDPAYLOAD", newCardPayload)


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
            <FormControlLabel label = "Save for future payments"
            control={
                <Checkbox onClick={handleShouldSave}/>
            }
            />
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" type="submit">Submit Payment Info</Button>
        </Grid>
    </Grid>
   </div>
  )
}

export default CreditCardForm;