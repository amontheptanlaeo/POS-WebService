import React, { useState , useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";



import { Button, Form , Row, Col, Alert, Container} from 'react-bootstrap';

function AddGoods() {
  const [err, setErr] = useState('')

  const [Goods_ID, setGoods_ID] = useState("");
  const [Goods_img, setGoods_img] = useState("");
  const [Goods_Name, setGoods_Name] = useState("");
  const [Type_ID, setType_ID] = useState(''); //ListBox
  const [selectCate, setSelectCate] = useState([]);

  
  const AddProduct = (e) => {
    try {
      e.preventDefault();
      axios({
        method: "POST",
        url: "https://posappserver.herokuapp.com/postgoods",
        data: {
           Goods_ID : Goods_ID,
           Count_Stock: 0,
           Price: 0,
           Goods_Name : Goods_Name,
           Type_ID : Type_ID,
           Branch_ID : localStorage.getItem('Branch_ID'),
           Goods_img : Goods_img ? Goods_img:'http://www2.tistr.or.th/Projects/tistrbiza/images/default_product.png',
           Store_ID : localStorage.getItem('Store_ID'),
           Favorite: false
        },
      });

      console.log('SUCCESS')
    } catch (error) {
      console.log(error)
    }
    
  };

  useEffect( async()=>{

  const data = await axios.get('https://posappserver.herokuapp.com/getcategory')
    setSelectCate(data.data)
    console.log(data.data)
  },[])

  const checkTypeID = (e) =>{
    let item = ''
    selectCate.map(Cate=>{
      if(Cate.Type_Name == e.target.value)
      {
        item = Cate.Type_ID
      }
    })
    setType_ID(item)
  }




  return (
    <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
                <Col md={3} lg={3} style={{height:'100%'}}>
                    {/* <BlankSide/> */}
                </Col>
                <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                  <Container>
                     <h4>เพิ่มสินค้า</h4>
                        <div style={{ height: '100%', width: '100%' }}>
                                  {err && <Alert variant="danger">{err}</Alert>}
                      <Form onSubmit={(e)=>AddProduct(e)}>
                        <Form.Group id="storeName">
                          <Form.Label>ชื่อสินค้า</Form.Label>
                          <Form.Control type="text" placeholder="ระบุชื่อสินค้า" value={Goods_Name} onChange={(e)=>setGoods_Name(e.target.value)} required />
                        </Form.Group>
                        <Form.Group id="branchName">
                          <Form.Label >หมวดหมู่สินค้า <Link to='/AddCategory'><Button variant='warning'>เพิ่มหมวดหมู่</Button></Link></Form.Label>
                          <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>checkTypeID(e)} required>
                            <option value="" disabled selected hidden>--เลือกหมวดหมู่--</option>
                            {
                              selectCate.map(e=><option>{e.Type_Name}</option>)
                            }
                          </select>
                        </Form.Group>
                        {/* <Form.Group id="branchName">
                          <Form.Label >หน่วยนับ</Form.Label>
                          <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>setUnit(e.target.value)} required>
                            <option value="" disabled selected hidden>--เลือกหน่วยนับ--</option>
                            <option>ชิ้น</option>
                            <option>อัน</option>
                            <option>แท่ง</option>
                            <option>ห่อ</option>
                            <option>ขวด</option>
                            <option>กระป๋อง</option>
                            <option>กล่อง</option>
                            <option>แพ็ค</option>
                            <option>ลัง</option>
                            <option>โหล</option>
                            <option>แผง</option>
                            <option>โหล</option>
                            <option>แผ่น</option>
                            <option>ใบ</option>
                            <option>กระติก</option>
                            <option>กระปุก</option>
                            <option>คู่</option>
                            <option>ชุด</option>
                            <option>ตลับ</option>
                            <option>ด้าม</option>
                            <option>แก้ว</option>
                            <option>เส้น</option>
                            <option>เมตร</option>
                            <option>เครื่อง</option>
                            <option>หลอด</option>
                            <option>ลูก</option>
                            <option>แกลลอน</option>
                            <option>กะสอบ</option>
                            <option>ก.ก.</option>
                          </select>
                        </Form.Group> */}
                        <Form.Group id="storeName">
                          <Form.Label>เลขบาร์โค้ดสินค้า</Form.Label>
                          <Form.Control type="text" placeholder="ระบุเลขบาร์โค้ด" value={Goods_ID} onChange={(e)=>setGoods_ID(e.target.value)} required />
                        </Form.Group>
                        <Form.Group id="branchName">
                          <Form.Label>รูป</Form.Label>
                          <Form.File />
                        </Form.Group>
                        <Button type='submit' className="w-100 mb-2 log-btn" style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
                          เพิ่มสินค้า
                        </Button>
                      </Form>

                        </div>
                  </Container>
                   
                </Col>
            </Row>
        </motion.div>
  );
}

export default AddGoods;