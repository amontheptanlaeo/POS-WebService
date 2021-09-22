import React , { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import '../styles/NavAdmin.scss'
import Banner from '../images/LOGO/Shop-Starter.jpg'

var elem = document.documentElement;





function NavbarAdmin() {

    const [fullScreen, setFullScreen] = useState(false)


    const signOut = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }
    
    function openFullscreen() {
    
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      }
      function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }


    return (
        <div className="SideBar">
            <div className="detailStore">
                <div className="Banner" style={{display:'flex' ,justifyContent:'space-between' , alignItems:'center' , textAlign:'center'}}>
                    <h3>ร้าน {localStorage.getItem('user')}</h3>
                    <img src={Banner} alt="LOGO" style={{width:'50px' , height:'50px' , borderRadius:'100%' , marginLeft:'10px'}}/>
                </div>
                <div className="detailBox">
                    <p>สาขา กำแพงแสน</p>
                    <p>ผู้ใช้งาน: อามรเทพ ทันแล้ว</p>
                </div>
                
            </div>
            
            <ul>
                <li>
                    <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>หน้าหลัก</motion.span>
                    </Link>
                </li>

                {/* <li>
                    <Link to="/Product" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการสินค้า</motion.span>
                    </Link>
                </li>
                <li>
                    <Link to="/Employee" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการพนักงาน</motion.span>
                    </Link>
                </li> */}
                   <li>
                    <Link to="/Branch" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการสาขา</motion.span>
                    </Link>
                </li>
                <li>
                    <Link to="/Setting" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ตั้งค่า</motion.span>
                    </Link>
                </li>
             
                {/* <li>
                    <Link to="/Profit" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.span>
                    </Link>
                </li> */}
                <li className='Logout-admin' onClick={signOut} >
                    <Link ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ออกจากระบบ</motion.span>
                    </Link>
                </li>
                <li className='FullScreenBTN' onClick={() => {
              setFullScreen(!fullScreen)
              if (fullScreen) {
                closeFullscreen()

              } else {

                openFullscreen()
              }
            }}>
                    <Link ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>{fullScreen ? 'โหมดปกติ' : 'โหมดเต็มจอ'}</motion.span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default NavbarAdmin