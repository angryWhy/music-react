import React, { memo,/*useState,*/useEffect,useRef } from 'react'


import ThemeHeaderRcm from '../../../../../../components/theme-header-rcm/index'

import AlbumCover from '../../../../../../components/album-cover/index'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { AlbumWrapper } from './style'
export default memo(function NewAlbum() {
    // const [album, setAlbum] = useState([]);
    // useEffect(() => {
    //     getNewAlbum().then(res=>{
    //         console.log(res.weekData[0].name);
    //         setAlbum(res.weekData);

    //     })
    // }, [])
    const pageRef=useRef();

    //redux相关
    const { newAlbum } = useSelector(state => ({ newAlbum: state.recommend.newAlbum }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])
    return (
        <AlbumWrapper>
            <ThemeHeaderRcm title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02"
                onClick={e=>pageRef.current.prev()}
                >
                </button>
                <div className="album">
                <Carousel ref={pageRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className="page">{
                                        newAlbum.slice(item * 5, (item +1)*5).map((album, index) => {
                                            return <AlbumCover key={album.id }
                                                               info={album}
                                                               size={100}
                                                               width={118}
                                                               bgp="-570px"  
                                            >{album.name}</AlbumCover>
                                        }
                                        )
                                    }
                                    </div>
                                )
                            }
                            )
                        }
                         
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                onClick={e=>pageRef.current.next()}
                >
                </button>
            </div>
        </AlbumWrapper>
    )
})
