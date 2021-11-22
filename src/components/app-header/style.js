import styled from "styled-components";
import pic from '@/assets/img/sprite_01.png'
export const HeadWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    .content{
        height: 70px;
        display: flex;
        justify-content: space-between;
    }
    .driver{
        height: 5px;
        background-color: #c20c0c;
    }
`
export const HeadLeft = styled.div`
/* 进行整体flex布局 */
display: flex;




/* 对logo进行flex */
.logo {
    /* 设置为块属性 */
  display: block;
  width: 176px;
  height: 69px;
  background-position: 0 0;
  text-indent: -9999px;
}



/* 列表进行flex布局 */
.select-list {
  display: flex;
  line-height: 70px;
  
  .select-item {

    /* 设置relative是为了选中时，图标底下小红三角 */
    position: relative;
    a {
      display: block;
      padding: 0 20px;
      color: #ccc;
    }
    /* 伪类，找到最后一个 */
     :last-of-type a {
      position: relative;
      /*hot图标设置*/
      ::after {
          /* 绝对定位 */
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        /*需要进行引入雪碧图*/
        background-image: url(${pic});
        /*具hot的体位置*/
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }

    &:hover a, a.active {
      color: #fff;
      background: #000;
      text-decoration: none;
    } 
    
     .active .icon {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    } 
  }
}
`
export const HeadRight = styled.div`
   display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;


  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }

`