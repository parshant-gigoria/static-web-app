import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter , faFacebook,faInstagram , faPinterest ,faGooglePlus , faYoutube , faTelegram } from '@fortawesome/free-brands-svg-icons';


const Footer=()=>{



    return(
        <>


        <div className="row mt-5">
            

        <div className="col" style={{paddingLeft:'120px'}}>
                    <h6>Hobbycue</h6>
                    <p>About us</p>
                    <p>Our Services</p>
                    <p>Work with us</p>
                    <p>FAQ</p>
                    <p>Contact us</p>

                </div>
                <div className="col">

                    <h6>How Do I</h6>
                    <p>Sign Up</p>
                    <p>Add a Listing</p>
                    <p>Claim Listing</p>
                    <p>Post a Query</p>
                    <p>Add a Blog Post</p>
                    <p>Other Queries</p>
                    
                </div>

                <div className="col">
                    <h6>Quick Links</h6>
                    <p>Listings</p>
                    <p>Blog Posts</p>
                    <p>Shop / Store</p>
                    <p>Community</p>
                    
                </div>


                <div className="col-5 px-5">
                    <div className='px-5 ' style={{marginRight:'50px'}}>

<h6>Social Media</h6>
<div className="row pt-2">
        <div className="col">
          <FontAwesomeIcon icon={faFacebook} style={{  color: '#6D747A' }}/>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faTwitter}  style={{ color: '#6D747A' }} />
        </div>
        <div className="col">
        <FontAwesomeIcon icon={faInstagram} style={{ color: '#6D747A' }}/>
        </div><div className="col">
        <FontAwesomeIcon icon={faPinterest} style={{ color: '#6D747A' }}/>
        </div><div className="col">
        <FontAwesomeIcon icon={faGooglePlus} style={{ color: '#6D747A' }}/>
        </div>

        <div className="col">
        <FontAwesomeIcon icon={faYoutube} style={{ color: '#6D747A' }}/>
        </div>
        <div className="col">
        <FontAwesomeIcon icon={faTelegram} style={{ color: '#6D747A' }}/>
        </div>
        <div className="col">
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#6D747A' }}/>
        </div>
        
      </div>

      <h6 style={{paddingTop:'60px', paddingBottom:'10px'}}>Invite Friends</h6>
      <input style={{width:'300px'}}placeholder='Email ID'></input>

      </div>

      



                    
                </div>
            </div>

            <div className='d-flex mt-5 justify-content-center align-items-center' style={{backgroundColor:'#F7F5F9', height: '78px'}}>
  <h6>© Purple Cues Private Limited</h6>
</div>


        
        </>
        


    );


}

export default Footer;