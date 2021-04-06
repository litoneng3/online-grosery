import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import fakeData from '../../FakeData/FakeData.json';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useState } from 'react';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({ checkIn: new Date() });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };


    const data = fakeData.find(td => td.id == id);
    const { title, price, img } = data;

    const handleBooking = () => {
        const newProducts = {...loggedInUser, ...selectedDate, ...data};
        fetch('http://localhost:5000/products',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }



    return (
        <div>
            <h5>Hey {loggedInUser.name}, this is cart</h5>
            <h3>Product Id: {id}</h3>
            <img src={img} alt="" />
            <h3>Name: {title}</h3>
            <h3>Price: $ {price}</h3>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="CheckIn Date"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Link to="/review"><Button onClick={handleBooking} variant="contained" color="primary"> Buy Now</Button></Link>
                
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default Cart;