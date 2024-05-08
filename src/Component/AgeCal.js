// import React, { useState } from 'react'

// function AgeCal() {
  
//     const [birthday,SetBirthday]=useState(0);
//     const[Year,SetYear]=useState('');
//     const[Mon,SetMon]=useState('');
//     const[Day,SetDay]=useState('');




//     const Agecalculator=()=>{
//        const today=new Date();
//        const birth=new Date(birthday);

//        let year= today.getFullYear()-birth.getFullYear();
//        let Month= today.getMonth()-birth.getMonth();
       

       
//        let date=today.getDate()-birth.getDate();
//          console.log(year)
      
//           if(Month<0||(Month===0&&today.getDate()<birthday.getDate())){
//             year--;
            
//           }

  
//        SetYear(year);
//        SetMon(Month);
//         SetDay(date);
//     }


//     return (
//         <>
//             <div className='Container'>
//              <h2 className='heading container_title'>Age Calculator</h2>
//              <p className=' para container_title'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>
//              <div className='Container_middle'>
//                     <div className='right'>
//                         <h4>Date of Birth</h4>
//                         <input className='date' type="date" value={birthday} onChange={e => SetBirthday(e.target.value)} />
//                         <div className='button_div'>
//                         <button className='button-65'  onClick={Agecalculator}>Calculate Age</button>
//                         <button className="button-65" >
//                 Reset
//               </button>
                        
//                         </div>
//                     </div>
                     
//                     <div className='left'>
//                         <div className='Container_middle_para'>
//                             <h1>{}</h1>
//                         </div>
//                         <h1 className='age_heading'>{Year} Year  {Day} Day</h1>
//                     </div>
//              </div>
//             </div>
//         </>
//     );
// }

// export default AgeCal

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import './AgeCal.css'
 
function AgeCal() {

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);
 
    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);
 
        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        console.log(today.getMonth());
        console.log(birthdateDate.getMonth());


        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }
 
        setAge(age);
    };
 
    const resetCalculator = () => {
        setBirthdate('');
        setAge(0);
      };
 
    return (
        <>
            <div className='Container'>
             <h2 className='heading container_title'>Age Calculator</h2>
             <p className=' para container_title'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years,</p>
             <div className='Container_middle'>
                    <div className='right'>
                        <h4>Date of Birth</h4>
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                        <div className='button_div'>
                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        <button className="button-65" onClick={resetCalculator}>
                Reset
              </button>
                        
                        </div>
                    </div>
                     
                    <div className='left'>
                        <div className='Container_middle_para'>
                            <h1>Your Age is</h1>
                        </div>
                        <h1 className='age_heading'>{age > 0 ? ` ${age}` : ''}</h1>
                    </div>
             </div>
            </div>
        </>
    );
};
 
export default AgeCal;