import styled from "styled-components";
import singer_bg from "../../assets/img/sprite_table.png"
export const SingerCoverA = styled.div`

width: 210px;
height: 62px;
margin: 20px 20px;
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
    height: 44px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
}

`