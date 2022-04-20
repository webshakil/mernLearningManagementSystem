import { GlobalOutlined, MailOutlined, SearchOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Image, Input, Menu } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from "../context";
import styles from '../styles/MainMenu.module.css';

const { SubMenu,Item} = Menu;


const MainNav = () => {
  const {state, dispatch}= useContext(Context);

  const [isSSR, setIsSSR] = useState(true);

        useEffect(() => {
          setIsSSR(false);
        }, []);

  const router =useRouter();

  const logout=async()=>{
    dispatch({type:"LOGOUT"});
    window.localStorage.removeItem("user");
    const {data} =await axios.get("/api/logout");
    toast.success(data.message);
    router.push("/login")
  }

        
  return (
    <Menu className={styles.main} mode="horizontal">
        <Menu.Item key="image" >
          <Link href="/">
              <a> <Image preview={false} width={80} src="image/udemy.png"alt="image"/></a>
           </Link>
        
        </Menu.Item>
        
    <Menu.Item key="istNav" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.Item key="search" disabled >
       <Input  className={styles.wdt} placeholder="search for something" prefix={<SearchOutlined /> } /> 
    </Menu.Item>
   
    <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation">
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <Menu.Item key="busNav">
     
        Udemy Buisness
     
    </Menu.Item>
    <Menu.Item key="teachNav">
      
        Teach On Udemy
     
    </Menu.Item>
    <Menu.Item key="shop">
                <ShoppingCartOutlined style={{ fontSize: '26px', color: '#08c' }}/>
    </Menu.Item>
    <Menu.Item  className={styles.bdr} key="login" >
      <Link href="/login">
              <a> Login</a>
        </Link>
   
    </Menu.Item>
 
      <Menu.Item  key="register" className={styles.bdr} >
         <Link href="/register">
              <a> SignUp</a>
          </Link>
         
      </Menu.Item>
      <Menu.Item onClick={logout} className={styles.bdr} key="logout" >
           Logout
      </Menu.Item>
      
    
    
    
    <Menu.Item  key="global">
      <GlobalOutlined style={{ fontSize: '26px', color: '#08c' }} />
    </Menu.Item>

  
    
  </Menu>
  )
}

export default MainNav

























































































































































// import { GlobalOutlined, MailOutlined, SearchOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// import { Image, Input, Menu } from 'antd';
// import Link from 'next/link';
// import React from 'react';
// import styles from '../styles/MainMenu.module.css';

// const { SubMenu,Item } = Menu;


// const MainNav = () => {
//   return (
//     <Menu className={styles.main} mode="horizontal">
//         <Menu.Item  >
//           <Link href="/">
//                <a> <Image preview={false} width={80} src="image/udemy.png"alt="image"/></a>
//           </Link>
//     </Menu.Item>
        
//     <Menu.Item  icon={<MailOutlined />}>
//       Navigation One
//     </Menu.Item>
//     <Menu.Item disabled >
//        <Input  className={styles.wdt} placeholder="search for something" prefix={<SearchOutlined /> } /> 
//     </Menu.Item>
   
//     <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
//       <Menu.ItemGroup title="Item 1">
//         <Menu.Item key="setting:1">Option 1</Menu.Item>
//         <Menu.Item key="setting:2">Option 2</Menu.Item>
//       </Menu.ItemGroup>
//       <Menu.ItemGroup title="Item 2">
//         <Menu.Item key="setting:3">Option 3</Menu.Item>
//         <Menu.Item key="setting:4">Option 4</Menu.Item>
//       </Menu.ItemGroup>
//     </SubMenu>
//     <Menu.Item>
     
//         Udemy Buisness
     
//     </Menu.Item>
//     <Menu.Item>
      
//         Teach On Udemy
     
//     </Menu.Item>
//     <Menu.Item >
//                 <ShoppingCartOutlined style={{ fontSize: '26px', color: '#08c' }}/>
//     </Menu.Item>
//     <Menu.Item  className={styles.bdr} >
   
//         Login
   
//     </Menu.Item>
 
//       <Menu.Item key="/register" className={styles.bdr} >
//           <Link href="/register">
//               <a> SignUp</a>
//           </Link>
         
//       </Menu.Item>
    
    
    
//     <Menu.Item  >
//       <GlobalOutlined style={{ fontSize: '26px', color: '#08c' }} />
//     </Menu.Item>
//   </Menu>
//   )
// }

// export default MainNav