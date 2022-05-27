import React from 'react'
import Item from './item'
import Img1 from './pics/Rectangle 5.png'
import Img2 from './pics/Rectangle 5 (1).png'
import Img3 from './pics/Rectangle 5 (2).png'
import Prof1 from './pics/Rectangle 3.png'
import Prof2 from './pics/Rectangle 3 (1).png'
import Prof3 from './pics/Rectangle 3 (2).png'
import Prof4 from './pics/Rectangle 3 (3).png'
import ProfFollow1 from './pics/Rectangle 6.png'
import ProfFollow2 from './pics/Rectangle 6 (1).png'
import ProfFollow3 from './pics/Rectangle 6 (2).png'
import ProfFollow4 from './pics/Rectangle 6 (3).png'
import Groups from './groups'

let title1 = 'What if famous brands had regular font? Meet RegulaBrands!';
let title2 = 'Tax Benifits for Investment under National Pension Scheme launched by Government';
let title3 = 'Finance & Investment Elite Social Mixer @Lujiazui';

let content1 = "I've worked in UX for the better part of a decade. From now on, I plan to rei..."

let type1 = "✍️ Article"
let type2 = '🔬️ Education'
let type3 = '🗓️ Meetup'
let type4 = '💼️ Job'

let name1 = 'Sarthak Kamra'
let name2 = 'Sarah West'
let name3 = 'Ronal Jones'
let name4 = 'Joseph Gray'

let groupName1 = 'Leisure'
let groupName2 = 'Activism'
let groupName3 = 'MBA'
let groupName4 = 'Philosophy'

let loc1 = 'Ahmedabad, India'
let loc2 = 'Noida, India'

let date = 'Fri, 12 Oct, 2018'
let office = 'Innovacer Analytics Private Ltd.'

let btnTxt1 = 'Visit Website'
let col1 = '#E56135'

let btnTxt2 = 'Apply on Timesjob'
let col2 = '#02B875'

export default function Content(props) {
    const handleClick=()=>{
        props.changeLogin(true);
    }

    return (
        <>
            <div className='container' style={{ display: 'flex', maxWidth: '68rem', flexDirection: 'column' }}>


                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: ' 22px'
                }}>
                    <div style={{ padding: '0px' }}>
                        <ul className="nav">
                            <li className="nav-item  phone mt-3">
                                <a className="nav-link active font-weight-bold" aria-current="page" href="#" style={{color:'black'}}>Posts(368)</a>
                            </li>
                            <li className="nav-item access-link-active big-dev">
                                <a className="nav-link active" aria-current="page" href="#">All Posts(32)</a>
                            </li>
                            <li className="nav-item access-link big-dev">
                                <a className="nav-link disabled" href="#">Article</a>
                            </li>
                            <li className="nav-item access-link big-dev">
                                <a className="nav-link disabled" href="#">Event</a>
                            </li>
                            <li className="nav-item access-link big-dev">
                                <a className="nav-link disabled" href="#">Education</a>
                            </li>
                            <li className="nav-item access-link big-dev">
                                <a className="nav-link disabled" href="#">Job</a>
                            </li>
                        </ul>
                    </div>


                    <div class="dropdown big-dev" style={{
                        alignSelf: 'flex-end',
                        marginBottom: "15px"
                    }}>
                        <button class="btn btn-secondary dropdown-toggle font-1 button-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Write a Post
                        </button>
                        <button type="button" className={`${props.login?'btn text-muted':'btn btn-primary'} ${props.login?'text-muted':''}`} style={{ marginLeft: '12px',border:props.login?'1px solid':'initial' }} onClick={handleClick}>
                            {props.login ?
                                <>
                                    <i className="fa-solid fa-arrow-right-from-bracket text-muted"></i>
                                    <p style={{display:'inline',margin:'0',marginLeft:'2px'}} className='text-muted'>
                                        Leave Group
                                    </p>
                                </> :
                                <>
                                    +<i class="fa-solid fa-user-group" style={{ color: 'white', paddingRight: ' 8px' }}></i>Join Group
                                </>
                                    }
                        </button>
                    </div>
                </div>



                <div className='container' style={{ display: 'flex', padding: '0', justifyContent: 'space-between' }}>
                    <div className='content-div' >

                        <Item imgUrl={Img1} type={type1} content={content1} title={title1} prof={Prof1} name={name1} />
                        <Item imgUrl={Img2} type={type2} content={content1} title={title2} prof={Prof2} name={name2} />
                        <Item imgUrl={Img3} type={type3} title={title3} prof={Prof3} name={name3} loc={loc1} date={date} btnTxt={btnTxt1} btnCol={col1} />
                        <Item type={type4} title={title3} prof={Prof4} name={name4} loc={loc2} date={office} btnTxt={btnTxt2} btnCol={col2} />
                    </div>

                    <div style={{ maxWidth: ' 16rem' }} className='group-tab'>

                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-location-dot" style={{ marginTop: '4px' }}></i></span>
                            <input className="form-control me-2 font-1 search" type="search" aria-label="Search" placeholder="Enter your location" />
                        </div>
                        <div style={{
                            margin: ' 44px 2px',
                            textAlign: 'center'
                        }}>
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <small className='text-muted' style={{
                                fontSize: "small",
                                paddingLeft: ' 6px'
                            }}> Your location will help us serve better and extend a personalised experience.</small>
                        </div>
                        {props.login&&<div>
                            <h5 className='mb-4' style={{ letterSpacing: '1px' }}>
                                RECOMMENDED GROUPS
                            </h5>
                            <Groups img={ProfFollow1} name={groupName1} />
                            <Groups img={ProfFollow2} name={groupName2} />
                            <Groups img={ProfFollow3} name={groupName3} />
                            <Groups img={ProfFollow4} name={groupName4} />
                            <p className='text-end'style={{color:'blue'}}>See More...</p>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
