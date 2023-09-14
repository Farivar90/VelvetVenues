import React from 'react';
import { useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ContactUs.css';

function ContactUs(){

    const history = useHistory();

    const handleImageClick = () => {
        history.push('/');
    }

    return(
        <div className="contactUsWrapper">
                <img 
                    src="/resfiles/head.png" 
                    alt="headmain" 
                    className="headmain-image" 
                    onClick={handleImageClick}
                />            
                <ul class="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h1 id='about-project'>About Project</h1><br/>
            <h2 id='first-info'>"Where Opulence Meets Elegance" - VelvetVenues, the epitome of exclusivity in real estate. Unleash your refined taste and explore listings over $20 million, tailored to your luxurious lifestyle.</h2><br /><br />
            <h2 id='second-info'>Welcome to the world of luxurious dreams, where VelvetVenues beckons with opulence and elegance! Our exclusive domain is where the elite of real estate collide, boasting properties that scoff at the mere thought of affordability. Let the journey begin through a realm of magnificence and extravagance.
                But now,let's drop the formalities, shall we? Here's the juicy scoop: VelvetVenues is set to dazzle users with its pomp and grandeur. We're talking listings that could buy you a small island and rentals that'll make you wonder if you're paying for a mansion or an entire village. If you've got the cash, we've got the properties that'll leave your jaw on the floor!
                Buckle up, because we're diving into the glorious Feature List. From hosting parties (read: coding) to giving users the power to create accounts faster than a sports car accelerates, we've got it all covered. Don't even think about peeking at those fabulous listings without logging in. No login, no luxury! And did we mention we're all about that CRUD life? Create, read, update, and delete your property listings with the grace of a billionaire swiping a credit card.
                Favorites, baby! Give those heart-eyed emojis a workout as you favorite and unfavorite listings. Can't miss the map feature—because what's the point of owning a castle if you can't spot it on a fancy map? And as for search, well, we've got filters more intricate than your aunt's 18th-century porcelain collection.
                Oh, and the bonuses? Pshh, we got those too. Ask questions like you're sipping champagne at a gala, and sling messages like a real estate mogul sealing deals in style. Who needs the ordinary when you can have VelvetVenues? So, dear user, step into the world where riches reign and class is a must. It's a digital mansion party, and you're on the VIP list! 🥂
                VelvetVenues ... "Discover Luxury, Your Way"
            </h2> <br /><br /><br />
            <h2 id='contact-inform'> If you are interested to register you can ask me for invitation code</h2>
            <div className='contact-info-cpi'>
                <div id='con-git'>
                    <a  href="https://github.com/Farivar90" ><i class="fa-brands fa-github"></i></a>
                </div>
                <div id='con-link'>
                    <a  href="https://linkedin.com/in/farivar-amiri-458273198" ><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <div>
                    <a  href="https://farivar-amiri.com" ><i class="fa fa-user-circle"></i></a>
                </div>
                <div id='con-ins'>
                    <a  href="https://instagram.com/farivar.amiri" ><i class="fa-brands fa-instagram"></i></a>
                </div>
                <div id='con-fac'>
                    <a  href="https://www.facebook.com/farivar.amiri" ><i class="fa-brands fa-facebook-square"></i></a>
                </div>
            </div>
        </div>
    )
};
export default ContactUs;