import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is one that allows people to buy and sell physical goods, 
            services, and digital products over the internet rather than at a brick-and-mortar location. 
            Through an e-commerce website, a business can process orders, accept payments, manage shipping 
            and logistics, and provide customer service.</p>
            
            <p>The consumers can get the right details of the product you sell on your online store. 
                With online chat, email, telephone you can resolve customer queries in real-time to 
                strengthen your relations with them. Maintain omni channel presence of your brand with 
                Builderfly and be present everywhere where your shoppers are available to shop from you.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
