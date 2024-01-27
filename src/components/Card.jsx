import React, { useState, useRef , useEffect} from 'react';
import './Style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCalendarCheck, faLocationDot, faPlus, faQuoteLeft, faUsers } from '@fortawesome/free-solid-svg-icons';

const Card=()=>{


    const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentAudioRef = audioRef.current; // Capture the current value
      if (currentAudioRef) {
        setCurrentTime(currentAudioRef.currentTime);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, []);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onTimeChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

    return(
        <>
<div className="container-fluid pt-5" style={{font:'poppins', width:'100%', fontWeight:'300'}}>
<div className="row pb-3 w-100">
  <div className="col-sm-6 ">
    <div className="card p-5 ">
      <div className="card-body">
        <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faUsers} size="2x" color='#8064A2' />
          </div>
         
        <h5 className=" col card-title pb-3 ">People</h5>

        </div>
        
        <p className="card-text pb-3 ">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
        <button href="/connect" className="btn px-4" style={{borderColor:'#8064A2', color: '#8064A2'}}>Connect</button>
      </div>
    </div>
  </div>
  <div className="col-sm-6 ">
    <div className="card p-5">
      <div className="card-body">
      <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faLocationDot} size="2x" color='#77933C' />
          </div>
         
        <h5 className=" col card-title pb-3 ">Place</h5>

        </div>
        <p className="card-text pb-3">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
        <button href="/meetup" className="btn px-4"style={{borderColor:'#8064A2', color: '#8064A2'}}>Meet Up</button>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-sm-6">
    <div className="card p-5">
      <div className="card-body">
      <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faBagShopping} size="2x" color='#C0504D' />
          </div>
         
        <h5 className=" col card-title pb-3 ">Product</h5>

        </div>
        <p className="card-text  pb-3">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
        <button href="/getit" className="btn px-4 " style={{borderColor:'#8064A2', color: '#8064A2'}}>Get It</button>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card p-5">
      <div className="card-body">
      <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faCalendarCheck} size="2x" color='#0096C8' />
          </div>
         
        <h5 className=" col card-title pb-3 ">Program</h5>

        </div>
        <p className="card-text pb-3" style={{}}>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
        <button href="/attend" className="btn px-4" style={{borderColor:'#8064A2', color: '#8064A2'}}>Attend</button>
      </div>
    </div>
  </div>
</div>

</div>


<br></br>
<br></br>
<br></br>

<div className="viewBox p-5" style={{backgroundColor:'#F7FDFF' , fontWeight:'400' , font:'Poppins'}}>
    <div className="container py-5">
    <div className="card p-4">
        <div className="card-body">
        <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faPlus} size="2x" color='#0096C8' />
          </div>
         
        <h5 className=" col card-title pb-3 ">Add your own</h5>

        </div>
            <p className="card-text"> Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
            <button href="/attend" className="btn px-4 " style={{borderColor:'#8064A2', color: '#8064A2'}}>Add new </button>
        </div>
        </div>

    </div>


</div>

<div className="viewBox " >

    <div className="container py-5" >

    <div className="card  " style={{backgroundColor:'#F7F5F9'}}>
        <div className="card-body">
        <div className='row'>
          <div className='col-auto '>
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" color='#0096C8' />
          </div>
         
        <h5 className=" col card-title pb-3 ">Testimonials</h5>

        </div>
            
            <p className="card-text"> In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
       






<div className='row'>
<div className=' container rounded-1 col-8' style={{backgroundColor:'#CCC1DA'}}>
<div className="container mt-4 mb-3  ">
      <div className="row align-items-center">

      <div className="col-auto">
          {/* Play/Pause icons */}
          {isPlaying ? (
            <button className="btn bg-white rounded-5" onClick={playPauseHandler}>
              <i className="fas fa-pause"></i>
            </button>
          ) : (
            <button className="btn bg-white rounded-5" onClick={playPauseHandler}>
              <i className="fas fa-play"></i>
            </button>
          )}
        </div>
       
        <div className="col-md col-sm-12 ">
          {/* Your progress bar or other visualization of song progress */}
          <input 
            type="range"
            className="form-range" 
            value={currentTime}
            max={audioRef.current ? audioRef.current.duration : 0}
            onChange={onTimeChange}
          />
        </div>
        
    
      <audio ref={audioRef} src="https://dl.musopen.org/recordings/0d2b20df-6ba6-46c9-b058-62f5e7976cb0.mp3?filename=Cello+Suite+no.+1+-+Prelude+in+G%2C+BWV+1007.mp3&preview" />

      <div className="col-md-auto col-sm-12 ">
          {/* Microphone button */}
          <button className="btn text-white position-absolute top-1 start-30 translate-middle-x">
            <i className="fas fa-microphone"></i>
          </button>
          {/* Your song icon or other information */}
          <img src="https://ik.imagekit.io/4kv3ly02s/song%20icon.png?updatedAt=1706278188327" alt="Song Icon" style={{width:'30px', height:'30px'}}className=" rounded-5 img-fluid" />
        </div>


        </div>
    </div>

    </div>

    <div className='col-4'>
        <div className='mx-5 ' >

<div className='row'>
<div className='col-1'></div>
    <div className='col-4'>
    <img src="https://ik.imagekit.io/4kv3ly02s/song%20icon.png?updatedAt=1706278188327" alt="Song Icon" style={{width:'70px', height:'70px'}}className=" mt-2 rounded-5 img-fluid" />
    </div>
    
    <div className='col-7 pt-4'>
     <h6 style={{color:'#8064A2', margin:'0' , font:'Poppins'}}>Shubha Nagarajan</h6>
     <p style={{color:'#0096C8' , fontSize:'14px' , font:'Poppins'}}>Classical Dancer</p>

     </div>
     

     </div>
    </div>

    </div>

    </div>




















        </div>
        </div>

































    </div>

</div>



<div className='py-5' style={{backgroundColor:'#F7FDFF'}}>
<div className='container pt-5 ' >

    <h1 style={{font:'Poppins'}}>Your <span style={{color:'#8064A2'}}>Hobby</span> , Your <span style={{color:'#0096C8'}}>Community...</span></h1>
    <button className="btn mt-3" style={{backgroundColor:'#8064A2' , color:'white'}}>Get started</button>

    <img src="https://ik.imagekit.io/4kv3ly02s/diagram.png?updatedAt=1706290253718" alt="imageof" style={{ paddingTop:'100px' ,width:'100%' ,height:'302px'}}></img>
</div>
</div>





















        </>

    );
}

export default Card;