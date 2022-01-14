import React from 'react'

const PersonalInfo = (props) => {

 
    return (
        <div className='container'>
            <div className='row ms-1'>
                <div onClick={props.nextStep} className='d-flex justify-content-center mt-3'>

                    <div>
                       <div onClick={props.nextStep} class={props.values == 1 ? " pink-color" : " gray-color"}
                        ></div>
                    </div>
                    <div>

                        <div onClick={props.nextStep} class={props.values == 2 ? " pink-color ms-3" : " ms-3 gray-color"}
                        ></div>
                   </div>

                    <div>
                        <div  class={props.values == 3 ? " pink-color ms-3" : " ms-3 gray-color"}
                        ></div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default PersonalInfo