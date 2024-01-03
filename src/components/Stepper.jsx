import React, { useState } from "react";
import './stepper.css';
import { TiTick } from 'react-icons/ti';

const Stepper = ({ data, onChangeStepper, currentStep }) => {

    const [complete, setComplete] = useState(false);
    return (

        <div className='flex flex-col gap-12 items-center'>
            <div className='flex justify-between'>
                {
                    data?.map((step) => (

                        <div key={step.id} className={`step-item ${currentStep?.id === step.id && 'active'} ${(step.id < currentStep.id || complete) && 'complete'}`}>
                            <div className="step">{(step.id < currentStep?.id || complete) ? <TiTick size={24} /> : step.icon}</div>
                            <p className='text-purple-500'>{step.name}</p>
                        </div>
                    )

                    )
                }
            </div>
            {!complete &&
                <button
                    onClick={() => {
                        currentStep?.id === data?.length &&
                            setComplete(true);
                        !complete && onChangeStepper(currentStep)
                    }}
                    className="btn">
                    {currentStep.id === data?.length ? 'Finish' : 'Next'}
                </button>}


        </div>
    );
}
export default Stepper