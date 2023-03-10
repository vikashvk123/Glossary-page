import React from 'react'

function Header() {
  return (
    <div className='header-cont'>
        <div className='header-main-cont'>
            <h1 className='header-main-cont-title'>Glossary A</h1>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="https://learn.moneysukh.com">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Glossary A</li>
            </ol>
        </div>

    </div>
  )
}

export default Header