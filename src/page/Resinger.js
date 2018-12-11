import React from 'react';
import styled from 'styled-components';
import Input from '../conponents/Input.js';
import Button from '../conponents/Button.js';

const Wrapper = styled.div`
    width: 500px;
    border: 1px solid ;
    height: 350px;
    margin-left: 470px;
    margin-top: 50px;
    border-radius: .25rem;
`
const Btn_input = styled.div`
    margin-top: 30px;
    margin-left: 8px;
`
const FormTest = ({
    email,
    pwd,
    phone,
    onChange,
    onSubmit,

}) => (
    <Wrapper>
        <Btn_input>
            <Input
                label = "Email:"
                type="Email"
                onChange = {onChange}
                placeholder={" your Email"}
            />
            <Input
                label = "Password:"
                type="Password"
                onChange = {onChange}
                placeholder={" your Password"}
            />
            <Input
                label = "Phone:"
                type="Phone"
                onChange = {onChange}
                placeholder={" your Phone"}
            />
            <Button 
             name="Resinger"
             onClick = {onSubmit}

            />
        </Btn_input>
    </Wrapper>

)

class From extends React.Component {
    constructor(props) {
        super(props);
        
    }

    onChange = (e , name) => {
        console.log(e.target.value)

    }

    onSubmit = () =>  {
        console.log("Resinger Sussion")
    }

render() {
    return(
        <FormTest
        onSubmit = {this.onSubmit}
        onChange={this.onChange}
        />

    )
}
}

export default From;