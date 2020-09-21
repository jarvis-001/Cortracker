import React,{useState,useEffect} from 'react';
import {NativeControl, FormControl, NativeSelect} from '@material-ui/core';
import {fetchCountries} from '../../api';
import styles from './Countrypicker.module.css';


const Countrypicker = ({handleCountryChange}) =>{
    const [fetchedCountries, setFetchedCountries]=useState([]);
    useEffect(() =>{
        const fetchAPI =async()=>{
           setFetchedCountries(await fetchCountries());}
           fetchAPI();     
        },[]);
    return(
        <FormControl class={styles.formControl}>
            <NativeSelect defaultValue ="" onChange ={(e)=>handleCountryChange(e.target.value)}>
                <option value ="">Global</option>
                {fetchedCountries.map((country,i)=> <option key ={i} value ={country}> {country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default Countrypicker;


