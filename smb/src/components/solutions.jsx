import '../css/solutions.css'

export default function SolutionsPage() {

const businesses = [
   


    {   icon:'chat_bubble',
        businessSolution: 'CRM',
        Description: 'Manage Customer Relationships',
        topFeatures: ['Contact management', 'Lead Tracking', 'Communication History']
    },
    {   icon: 'planner_review',
        businessSolution: 'ERP',
        Description: 'Enterprise Resource Planning for businesses',
        topFeatures: ['Financial Management', 'Supply Chain Management', 'Inventory Tracking']
    },
    {
        icon: 'group',
        businessSolution: 'HRM',
        Description: 'Human Resource Management',
        topFeatures: ['Employee Management', 'Payroll Processing', 'Performance Tracking']
    },
    {
        icon:'content_copy',
        businessSolution: 'CMS',
        Description: 'Content Management System',
        topFeatures: ['Content Creation', 'Media Management', 'SEO Optimization']
    }
];



function SolutionsCategory({businesses}) {
    return (
        <div className="business">
            <div className='solutions__motive_solutions'>
                <h1>Comprehensive Management Suite</h1>
                <p>Everything you need to manage and grow your business</p>
            </div>

                <div className="business__solutions__list">

            {businesses.map((business, index) => (
                <div key={index} className="business__solution__container">
                    <div className='heading__content'>
                    <span className="material-symbols-outlined"> {business.icon}
</span>
                        <h1>{business.businessSolution}</h1></div>
                    <h4>{business.Description}</h4>
                    
                    <ul> 
                        {business.topFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li> 
                        ))
                        }
                       
                    </ul> 
                <button>Access Module</button>
                </div>
            ))}
        </div></div>
    );
}


    return(
<>
<section>
<div className="motive__container">
<h1>   Empower Your Business Growth</h1>

<p>   All-in-one platform for managing your business operations,<br /> customer relationships,
     and team colaboration.

</p>

<div className="call__to__action"><button> Get Started</button> <button> Watch Demo </button> 
</div></div> </section>
 
 <section>
<div className="comprehension__container">
    <SolutionsCategory businesses={businesses}/>
    
    
     </div> </section>



</>




    ) 
}