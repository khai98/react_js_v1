import React from 'react';
import styled from 'styled-components';
import { type } from 'os';

const Label = styled.label`
     padding: 4px 8px;
     
`
const Value = styled.input.attrs({
    placeholder: props =>  props.placeholder,
    type: "password",
})`
    margin-left: 12px;
    display: block;
    width: 440px;
    margin-left:9px
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;

const Wrapper = styled.div``


const Input = ({
    label,
    onChange,
    placeholder,
    type,

}) => {
        return (
            <Wrapper>
                 <Label>
                         {label}{"  "}
                    <Value 
                         type={type}
                         onChange={(e)=>onChange(e, label)}                       
                         placeholder={placeholder} 
                    />
                 </Label>
            </Wrapper>
        )
    }

export default Input;