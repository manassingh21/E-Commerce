import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus a omnis praesentium molestias unde laboriosam illo similique, tenetur saepe ipsam quo id magnam nam dolor consequuntur sunt enim sed quae obcaecati! Numquam porro aperiam nam neque, nihil officia error! Sapiente sequi voluptatibus eveniet sit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla qui nisi, asperiores corporis hic harum cum. Amet ex asperiores mollitia labore, ipsum voluptatum ad recusandae, aliquid, ullam eveniet rem.</p>
        </div>
    </div>
  )
}
