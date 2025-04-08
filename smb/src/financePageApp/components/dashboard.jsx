import '../css/dashboard.css'

import React from 'react';

export default function Dashboard() {
  const metrics = [
    { name: 'Total Revenue', figure: '$24,500', comment: '+12.5% from last month', indicator:'good' },
    { name: 'Total Expenses', figure: '$8,300', comment: '-3.2% from last month',indicator:'bad' },
    { name: 'Net Profit', figure: '$16,200', comment: '+15.8% from last month',indicator:'good' },
    { name: 'Customer Satisfaction', figure: '85%', comment: '+2% from last month',indicator:'bad' }
  ];

  // MetrixRender now accepts props, not metrics directly
  function MetrixRender({ metrics }) {
    return (
      <div className="finacial_metrix">
        {metrics.map((item, index) => (
          <div className="metric" key={index}>
            <div className='metrics__heading'>
                <h1>{item.name}    </h1>   <span class="material-symbols-outlined"  
            style={{ color: item.indicator === 'good' ? 'blue' : 'red' }}>
                {item.indicator==='good'?  'trending_up' :'trending_down'}
            
                </span> </div>
            <h3>{item.figure}</h3>
            <p style={{ color: item.indicator === 'good' ? 'blue' : 'red' }}
            >{item.comment}</p>
           
           

           
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
    <div className='dashboard__motive'> <h1>Dashboard</h1>
      <h3>Welcome Back to your financial overview</h3>
        </div> 
      {/* Pass metrics as props */}
      <MetrixRender metrics={metrics} />
    </>
  );
}



