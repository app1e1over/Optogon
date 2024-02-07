import React from 'react';
import Patient from '../Patient/Patient';
import { nanoid } from 'nanoid';
import "./style.css"

function PatientContainer({patients, kill, modify}) {
    return (
        <div className='patcont'>
            {patients.map(v=>(<Patient patient={v} key={nanoid()} kill={kill} modify={modify}/>))}
        </div>
    );
}

export default PatientContainer;