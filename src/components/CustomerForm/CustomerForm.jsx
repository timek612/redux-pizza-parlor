import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function CustomerForm() {

    const history = useHistory()
    let dispatch = useDispatch()

    let [check, setCheck] = useState(false)

    let [customer, setCustomer] = useState({ name: '', streetAdress: '', city: '', zip: '', type: '' })

    const nameChange = (event) => {
        setCustomer({
            ...customer,

        })
    }
    const streetChange = (event) => {
        setCustomer({
            ...customer,
            name: event.target.value
        })
    }
    const cityChange = (event) => {
        setCustomer({
            ...customer,
            city: event.target.value
        })
    }
    const zipChange = (event) => {
        setCustomer({
            ...customer,
            zip: event.target.value
        })
    }
    const typeChange = (event) => {
        setCustomer({
            ...customer,
            type: event.target.value
        })
    }

    const addInfo = (event) => {
        console.log(customer)
        dispatch({
            type: 'USER_INFO',
            payload: customer
        })
    }

    return (
        <>
            <form onSubmit={(event) => addInfo(event)}>
                <input value={customer.name} onChange={nameChange} type='text' placeholder="Name" />
                <input value={customer.streetAdress} onChange={streetChange} type='text' placeholder="StreetAddress" />
                <input value={customer.city} onChange={cityChange} type='text' placeholder="City" />
                <input value={customer.zip} onChange={zipChange} type='text' placeholder="Zip" />
                <div>
                    <input value={customer.type} onChange={typeChange} type="checkbox" />Pick Up
                    <input value={customer.type} onChange={typeChange} type="checkbox" />Delivery
                </div>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default CustomerForm