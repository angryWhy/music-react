import styled from "styled-components";
import singer_bg from "../../assets/img/sprite_table.png"
export const SingerCoverA = styled.div`
text-decoration:none;
padding: 0px;
width: 210px;
height: ${props => (props.size)}
margin-left:20px;
margin-bottom:5px;
display: flex;
background: url(${singer_bg}) ;
    .content{
    justify-content: space-around;
    margin-left: 5px;
    font-size: 12px;
    
   .name{
       font-weight: bold;
    }
.describe{
    width: 138px;
    height: 22px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
}

`