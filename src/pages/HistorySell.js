import React, { useState, useRef , useEffect } from 'react';
import { Button, Form , Alert , Row , Col , Container } from 'react-bootstrap';
import ReactToPrint , { useReactToPrint } from 'react-to-print';
import { Link, useParams } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"
import SellReport from '../components/SellReport';
import axios from 'axios';
function HistorySell() {
    let { bill } = useParams();
    const [data,setData] = useState([])
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/getsellhistorybill',{
            Number_Bill: bill
        })
        console.log(res.data)
        setData(res.data)
      },[])

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>

            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
                <div style={{display:'flex' , width:'100%' , justifyContent:'space-between' , alignItems:'center'}}>
                    <h1>ประวัติการขายสินค้า</h1>
                    <button className="btn btn-primary" onClick={handlePrint}>พิมพ์บิล</button>
                </div>
                <div>
                    <div ref={componentRef}>
                        <SellReport data={data} bill={bill}/>
                    </div>
                </div>
          
                
              </Container>
               
            </Col>
        </Row>
                
    </motion.div>
    )
}

export default HistorySell
