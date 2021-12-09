import React, { memo } from 'react'
import {LoginWrap} from "./style"
import { Button } from 'antd'
export default memo(function Login() {
    return (
        <LoginWrap>
            <div className="content">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <div className="loginButton"><Button type="primary" style={{ background: "red"}}>用户登录</Button></div>
        </LoginWrap>
    )
})
