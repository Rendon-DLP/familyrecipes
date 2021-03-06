import React, { useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'

const Prep = (props) => {

    const [values, changeForm] = useFormInput({...props.formData})

    let manageFunc = props.manageForm

    useEffect( () => {
        manageFunc('prepTime', values)
    }, [values, manageFunc])

        return (
            <form id="prep-form">
            <div className="prep2">
            <label htmlFor='name' className="prep-label" />
             <div className="selectorDiv">

{/* HOURS */}
                <select

                type="text"
                name="prepHours"
                className="formInput"
                onChange= {changeForm}  >

                <option>Hours?</option>
                <option value='0' >None</option>
                <option value='1'>1 Hour</option>
                <option value='2'>2 Hours</option>
                <option value='3'>3 Hours</option>
                <option value='4'>4 Hours</option>
                <option value='5'>5 Hours</option>
                <option value='6'>6 Hours</option>
                <option value='7'>7 Hours</option>
                <option value='8'>8 Hours</option>
                <option value='9'>9 Hours</option>
                <option value='10'>10 Hours</option>
                <option value='11'>11 Hours</option>
                <option value='12'>12 Hours</option>
                </select>

{/* MINUTES */}
                <select

                type="text"
                name="prepMinutes"
                className="formInput"
                onChange= {changeForm} >

                <option>Minutes?</option>
                <option value="0">None</option>
                <option value="5">5 Minutes</option>
                <option value="10">10 Minutes</option>
                <option value="15">15 Minutes</option>
                <option value="20">20 Minutes</option>
                <option value="25">25 Minutes</option>
                <option value="30">30 Minutes</option>
                <option value="35">35 Minutes</option>
                <option value="40">40 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="50">50 Minutes</option>
                <option value="55">55 Minutes</option>
                </select>

{/* SERVINGS */}
                <select
                className="formInput"
                type='text'
                name='serves'
                id='serves'
                onChange={changeForm} >

                <option>How many servings?</option>
                <option value="1">1 Serving</option>
                <option value="2">2 Servings</option>
                <option value="3">3 Servings</option>
                <option value="4">4 Servings</option>
                <option value="5">5 Servings</option>
                <option value="6">6 Servings</option>
                <option value="7">7 Servings</option>
                <option value="8">8 Servings</option>

                </select>
                </div>
            </div>
        </form>
        )

}

export default Prep;
