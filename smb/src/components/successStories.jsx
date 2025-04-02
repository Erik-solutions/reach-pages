import reading from '../assets/images/reading-4330761_1280.jpg'
import '../css/successStories.css'



export default function  UserStory() {
    const userStories = [
        {
            companyLogo: reading, 
            message: "This platform transformed our business operations completely. We have seen a 200% increase in efficiency.",
            author: "Sarah Chen",
            position:"CEO",
            company:  "Techstart Solutions"
        },
        
        {
            companyLogo: reading,
            message: "The efficiency improvements from this platform have been incredible. It's saved us countless hours in project management and communication.",
            author: "Emily Nguyen",
            position:"CTO",
            company:  "NextGen Solutions"
        },
        {
            companyLogo:  reading,
            message: "Our sales team has benefited greatly from the data insights provided by this platform. It's been a game-changer for targeting new customers.",
            author: "James Lee",
            position:"VP of Sales",
            company: "DataStream Analytics"
        }
    ];
    
    function StoryRender({userStories}) {
        return (
            <div className="story__container">
                {userStories.map((item, index) => (
                    <div key={index} className="story_holder">
                       <div className='image__container'> <img src={item.companyLogo} alt='Company Logo' /> </div>
                        <p className='message__holder'>{item.message}</p>

                        <h3>{item.author}</h3>
    
                        {/* Fix the map syntax */}
                        <a href="#">  {/* Add an href if this is a clickable link */}
                           
                           <span> {item.position} at {item.company}</span>     
                                    
                                
                            
                        </a>
    
                    </div>
                ))}
            </div>
        );
    }
    








    return (
<section className='users__stories__container'>

    <h1> Success Stories </h1>
    <h3> See how businesses are transforming with our platform</h3>
<StoryRender  userStories={userStories} />
</section>

    )
}