import React from 'react';
import UnemploymentRateGraph from './UnemploymentRateGraph';
import EmploymentSectorsGraph from './EmploymentSectorsGraph';
import GraphData from "../../Api/Grapgh";
import {useEffect} from 'react';
import { useRouter } from "next/router";


export default function EconomicGraphs(props) {
    console.log(props)
    
    const router = useRouter();

    const eventId = router.query.id
    useEffect(() => {
        unEmployment()
    }, [props.region])



   const unEmployment = () => {
        const response = GraphData.unEmployment(props.region);
        // console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                // console.log(value.data.Data)
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key)
                    data2.push(value.data.Data[key]);
                }

                // setInventryDate(data1)
                // setInventry(data2)

            }
        })
    }
    return (
        <>
            <div className='card p-3 bg_light'>
                <div className='card my-4'>
                    <div className='w-50'>
                        <p className='fs-30 mb-0 Gothic_3D'>Unemployment Rate</p>
                    </div>
                    <div>
                        <UnemploymentRateGraph employmentDate={props.employmentDate} unEmploymentData={props.unEmploymentData}/>
                    </div>
                </div>
            </div>
            
            <div className='card p-3 bg_light'>
                <div className='card my-4'>
                    <div className='d-lg-inline-flex w-100'>
                        <div className='w-50'>
                            <p className='fs-30 mb-0 Gothic_3D'>EMPLOYMENT SECTORS</p>
                        </div>

                    </div>
                    <div>
                        <EmploymentSectorsGraph sector={props.sector} sectorDate={props.sectorDate}/>
                    </div>
                </div></div>
        </>
    )
}
