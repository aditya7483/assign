import React from 'react'

export default function Item(props) {


  return (
    <div>
      <div className="card mb-3">
        {props.imgUrl && <img src={props.imgUrl} className="card-img-top" alt="..." style={{
          maxWidth: '692px'
          , maxHeight: '220px'
        }} />}
        <div className="card-body">

          <div>
            <h5 className="card-title con-type">{props.type}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='container' style={{}}>
                <h4 className="card-title font-weight-bold con-head">{props.title}</h4>
              </div>

              <div className="dropdown">
                <button className="btn btn-secondary font-weight-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: 'none', background: 'none', fontSize: '1.4rem', color: 'black', padding: '0' }}>
                  ...
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Edit</a></li>
                  <li><a className="dropdown-item" href="#">Report</a></li>
                  <li><a className="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </div>
            </div>

          </div>
          {props.content ? <p className="card-text text-muted small con-content" style={{ padding: '9px 13px', fontSize: 'large' }}>{props.content}</p> :
          <>
            <div style={{ display: 'flex' }}>
              <p className='small'style={{
                margin: '0px 15px',
              }}>{props.date}</p>
              <i class="fa-solid fa-location-dot" style={{ marginTop: '4px', marginLeft: '70px' }}></i><p className='small' style={{margin:'0px 10px'}}>{props.loc}</p>
            </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button"style={{color:props.btnCol,backgroundColor:'white',    marginTop: '17px',fontSize:'small',border:' #bfbfbf 0.5px solid'}}>{props.btnTxt}</button>
              </div>
          </>
          }
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <img src={props.prof} alt='...' style={{ borderRadius: '50%', height: '48px', width: '48px', margin: '14px 10px 27px 15px' }} />
            <p style={{ alignSelf: 'center', fontWeight: 'bold' }}>{props.name}</p>
          </div>
          <div className='small'style={{ alignSelf: 'center'}}>

            <i class="fa-solid fa-eye"></i><small className='text-muted' style={{ margin: '10px' }}>{props.views} views</small>
            <i class="fa-solid fa-share-nodes" style={{
              marginLeft: '2.5rem',
              marginRight: ' 18px'
            }}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

Item.defaultProps = {
  views: '1.4k',
}