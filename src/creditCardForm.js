import React, {useReducer, useCallback} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const ACTIONS = {
    HANDLE_FIELD_CHANGES: "handle-field-changes",
    HANDLE_SUBMIT: "handle-submit"
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.HANDLE_FIELD_CHANGES:
            return {...state,
                [action.fieldName]: action.payload
            }
        case ACTIONS.HANDLE_SUBMIT:
            return{...state}
        default:
            return state
    }
}
const initialState = {
    nameOnCard: "",
    zipCode: "",
    expirationDate: "",
    cardVerificationValue: "",
    cardNumber: "",
    id: Date.now()
}

function CreditCardForm() {
    const wallet = [];
    const [state, dispatch] = useReducer(reducer, initialState);

    const {nameOnCard, zipCode, cardVerificationValue, expirationDate, cardNumber, id} = state;
 
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.HANDLE_SUBMIT, payload: {
            nameOnCard,
            zipCode,
            cardVerificationValue,
            expirationDate,
            cardNumber,
            id
        }})
    }, [nameOnCard, zipCode, cardVerificationValue, expirationDate, cardNumber, id])

    wallet.push(state);
    console.log("????WALLETCONTENTS", wallet)

    
  return (
   <div>
    <Grid container spacing={3}>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Number"
            value={cardNumber}
            onChange={(e) => dispatch({
                type: ACTIONS.HANDLE_FIELD_CHANGES,
                fieldName: "cardNumber",
                payload: e.currentTarget.value
            })}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Expiration Date"
            value={expirationDate}
            onChange={(e) => dispatch({
                type: ACTIONS.HANDLE_FIELD_CHANGES,
                fieldName: "expirationDate",
                payload: e.currentTarget.value
            })}
            />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Verification"
            value={cardVerificationValue}
            onChange={(e) => dispatch({
                type: ACTIONS.HANDLE_FIELD_CHANGES,
                fieldName: "cardVerificationValue",
                payload: e.currentTarget.value
            })}
           />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Billing Zip Code"
            value={zipCode}
            onChange={(e) => dispatch({
                type: ACTIONS.HANDLE_FIELD_CHANGES,
                fieldName: "zipCode",
                payload: e.currentTarget.value
            })}
           />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Name on Card"
            value={nameOnCard}
            onChange={(e) => dispatch({
                type: ACTIONS.HANDLE_FIELD_CHANGES,
                fieldName: "nameOnCard",
                payload: e.currentTarget.value
            })}
            />
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" type="submit" onClick={handleSubmit}>Submit Payment Info</Button>
        </Grid>
    </Grid>
   </div>
  )
}

export default CreditCardForm;