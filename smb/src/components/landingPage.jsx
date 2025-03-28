import reading from '..assets/images/reading-4330761_1280.jpg'
import books from '../assets/images/books-2463779_1280.jpg'


export default function LandingPage() {

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
            image: books,
            category: 'Healthcare',
            description: 'A business in the healthcare and medical industry',
        },
        {
            name:'Nononono',
            image: reading,
            category: 'E-commerce',
            description: 'An online marketplace for various products',
        }
    ];
    
    
      
    function BusinessRender({ businessItems }) {
        return (
            <div className="business-container">
                {businessItems.map((item, index) => (
                    <div key={index} className="image_holder">
                        <img src={item.image} alt={item.Category} />
                        <h2>{item.name}</h2>
                        <h2>{item.category}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        );
    }





    return(
<p>This is p on</p>

    );
}

