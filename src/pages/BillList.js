import React , { useState , useEffect} from 'react'
import {
    Row,
    Col,

} from "reactstrap";
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function BillList() {


    const [BillHistory,setBillHistory] = useState([])

    useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/getbilltable',{
            Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(res.data)
        setBillHistory(res.data)
    },[])

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'รายการ', width: '500' ,
        renderCell: (params) => (
            <>
                <Link to={`/history/sell/`+params.row.firstName}>
                    {params.row.firstName}
                </Link>
            </>)
        },
        {
          field: 'age',
          headerName: 'วันที่ ป/ด/ว',
          type: 'date',
          width: 400,
        },
        {
            field: 'nameSeller',
            headerName: 'ชื่อผู้ขาย',
            width: 400,
          },
      ];
      
      const rows = BillHistory.map((e,idx)=>{
        return { id: idx+1, firstName: `${e.Number_Bill}`, age: `${e.DateSell_History.replace("T"," ")}` , nameSeller: `${e.FirstName} ${e.LastName}`  }
      })
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                <h4>ประวัติรายการขายสินค้า</h4>
                    <div style={{ height: '80vh', width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={12}
                            rowsPerPageOptions={[12]}
                        />
                    </div>
            </Col>
        </Row>
    </motion.div>
    );
}

export default BillList
