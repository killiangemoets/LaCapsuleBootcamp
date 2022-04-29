import React from 'react';
import './App.css';
import {Input,Button} from 'antd';

function ScreenHome() {

  return (
    <div className="Login-page" >

          {/* SIGN-IN */}

          <div className="Sign">
                  
                  <Input className="Login-input" placeholder="arthur@lacapsule.com" />

                  <Input.Password className="Login-input" placeholder="password" />
            

            <Button style={{width:'80px'}} type="primary">Sign-in</Button>

          </div>

          {/* SIGN-UP */}

          <div className="Sign">
                  
                  <Input className="Login-input" placeholder="Arthur G" />

                  <Input.Password className="Login-input" placeholder="password" />
            

            <Button style={{width:'80px'}} type="primary">Sign-up</Button>

          </div>

      </div>
  );
}

export default ScreenHome;
