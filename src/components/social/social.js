import React from 'react'
import Stars from './stars/stars'
import Repos from './repos/repos'

const Social = (props) => (
    <div>
        <Stars stars={props.stars}/>
        <Repos repos={props.repos}/>
    </div>
)

export default Social;