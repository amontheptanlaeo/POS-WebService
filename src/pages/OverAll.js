import React from 'react'
import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Table 
} from "reactstrap";
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
function OverAll() {
    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'ชื่อสาขา', width: 300 ,
        // renderCell: (params) => (
        //     <>
        //         <Link to={`/history/`+params.row.firstName}>
        //             {params.row.firstName}
        //         </Link>
        //         </>)

    },
    { field: 'sell', headerName: 'ยอดขาย', width: 150 },
    
    { field: 'cost', headerName: 'ต้นทุน', width: 120 },
     { field: 'profit', headerName: 'กำไร', width: 120 },
    
    
      ];
      
      const rows = [
        { id: 1, firstName: `กำแพงแสน`, profit: 1400 , cost: 700 , sell: 2100 },
        { id: 2, firstName: 'บางแค', profit: 6400 , cost: 3000 , sell: 9400 },
      ];

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
                <Col md={3} lg={3} style={{height:'100%'}}>
                    {/* <BlankSide/> */}
                </Col>
                <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                    <h4>ยอดขาย</h4>
                        <div style={{ height: '80vh', width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={12}
                                rowsPerPageOptions={[12]}
                                // checkboxSelection
                            />
                        </div>
                </Col>
            </Row>
        </motion.div>
    )
}

export default OverAll
