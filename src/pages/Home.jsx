import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Stepper from '../components/Stepper';
import { PiIdentificationBadge, PiGraduationCap } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineCelebration } from "react-icons/md";

import Education from './Education';
const Home = () => {
  const data = [
    { id: 4, name: 'درنهایت', active: false, icon: <MdOutlineCelebration /> },
    { id: 3, name: 'اطلاعات تکمیلی', active: false, icon: <TbFileDescription /> },
    { id: 2, name: 'مدرک تحصیلی', active: false, icon: <PiGraduationCap /> },
    { id: 1, name: 'اطلاعات شناسنامه‌ای', active: true, icon: <PiIdentificationBadge /> },
  ]
  const [stepper, setSteppr] = useState(data);
  const [activeStep, setActiveStep] = useState(data.find((_d) => _d.active == true));
  const handleChangeStepper = (step) => {
    const newState = stepper.map(_item => {
      if (_item.id === step.id) {
        return { ..._item, active: !_item.active };
      }
      if (_item.id === step.id + 1) {
        return { ..._item, active: !_item.active };
      }
      return _item;
    });
    activeStep.id !== data?.length &&
      setActiveStep(newState.find((_d) => _d.active == true))
    setSteppr(newState);
  }
  function getSectionComponent() {
    switch (activeStep.id) {
      case 1: return <Education />;
      case 2: return <h1>second</h1>;
      case 3: return <h1>thired</h1>;
      default: return null;
    }
  }
  return (
    <div
      className='flex flex-col w-full  items-center'
    >
      <p className='m-8'>  این نقطه‌ شروع آشنایی ما و زندگی جدید شماست و , <span className=' border-solid border-2 rounded  border-purple-500 bg-purple-100 px-1 py-1 font-medium'>ما تا آخر خط همراه تو هستیم</span></p>
      <p className='mb-8 text-gray-400'>لطفا اطلاعات زیر رو تکمیل کن تا بتونیم بهتون بهترین شماوره رو بدیم</p>
      <Stepper currentStep={activeStep} data={stepper} onChangeStepper={handleChangeStepper} />
      {
        getSectionComponent()
      }
      <Outlet />
    </div>
  );
}

export default Home;
