import React from 'react'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkInedIcon from '@mui/icons-material/LinkedIn'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkInedIcon/>
        </div>
        <p>&copy; 2023 LegendaryBurger.com</p>
    </div>
  )
}

export default Footer
