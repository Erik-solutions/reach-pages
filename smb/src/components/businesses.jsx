import reading from '../assets/images/reading-4330761_1280.jpg'
import books from '../assets/images/books-2463779_1280.jpg'
import bigdata from '../assets/images/books-2463779_1280.jpg'
import '../css/landingpage.css'
import { useState } from 'react'


export default function FavourateBusinesses() {

    const businessItems = [
        {name:'Nononono',
            image: books,
            category: 'Technology',
            description: 'A business in the technology and finance landing aspects',
        },
        {name:'Nononono',
            image: reading,
            category: 'Finance',
            description: 'A business in the financial consulting sector',
        },
        {name:'Nononono',
            image: bigdata,
            category: 'Healthcare',
            description: 'A business in the healthcare and medical industry',
        }
       /*, {
            name:'Nononono',
            image: reading,
            category: 'E-commerce',
            description: 'An online marketplace for various products',
        }*/
    ];
    
    function IsFavourate(){
        const [ratings, setRatings] = useState(0); // Initialize the ratings state
        const [starFill, setStarFill]=useState('star')
    
        function increaseRatings() {
            setRatings(prevRatings => {
                const newRating = prevRatings + 1; // Increment the previous rating by 1
    
                // Now that we have the new rating, update the starFill state
                if (newRating > 0) {
                    setStarFill('star_rate_half'); // Half star for rating 1
                } 
    
                return newRating; // Return the updated rating value
            });
        }
      // Apply gold color when the star is a half or full star
      const starStyle = starFill === 'star_rate_half' || starFill === 'star_rate' 
      ? { color: '#2DAA9E' } // Set color to gold for half and full stars
      : {};







        return(
            <div className='ratings__container'>
            <h4> {ratings}</h4>
    <span className="material-symbols-outlined" onClick={increaseRatings} style={starStyle}>
    {starFill}
    </span> </div>
        )
    }




    
      
    function BusinessRender({ businessItems }) {
        return (
            <div className="business__container">
                {businessItems.map((item, index) => (
                    <div key={index} className="image_holder">
                        <img src={item.image} alt={item.category} />
                        <h2 className='name__holder'>{item.name} <IsFavourate/></h2>
                        <a><h4>{item.category}</h4></a>
                        <p>{item.description}</p>
                        <button>Learn more</button>
                    </div>
                ))}
            </div>
        );
    }





    //return(<BusinessRender/>
return (
<>
<BusinessRender businessItems={businessItems} />

</>
    );
}
