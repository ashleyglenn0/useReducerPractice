import React, {useReducer, useCallback} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const ACTIONS = {
    HANDLE_FIELD_CHANGES: "handle field changes",
    HANDLE_SUBMIT: "handle submit"
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
 
    const handleSubmit = useCallback(e => {
        e.preventDefault();
        dispatch({type: ACTIONS.HANDLE_SUBMIT, payload: {...state}})
    }, [state]);

    const handleTextChange = useCallback(e => {
        dispatch({
            type: ACTIONS.HANDLE_FIELD_CHANGES,
            fieldName: e.target.name,
            payload: e.target.value
        })
    }, [])

    wallet.push(state)
 
  return (
   <div>
    <Grid container spacing={3}>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Number"
            value={state.cardNumber}
            name="cardNumber"
            onChange={handleTextChange}/>
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Expiration Date"
            value={state.expirationDate}
            name="expirationDate"
            onChange={handleTextChange}
            />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Card Verification"
            value={state.cardVerificationValue}
            name="cardVerificationValue"
            onChange={handleTextChange}
           />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Billing Zip Code"
            value={state.zipCode}
            name="zipCode"
            onChange={handleTextChange}
           />
        </Grid>
        <Grid item sm={4}>
            <TextField 
            fullWidth 
            label="Name on Card"
            value={state.nameOnCard}
            name="nameOnCard"
            onChange={handleTextChange}
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