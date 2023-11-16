import React from "react";
import './features.css'
import { Feature } from "../../components";
const features = ()=>{
    return (
        <div className="gpt3__Features__container section__padding" id="FT">
            <div className="gpt3__Features-container__left-side">
                <div>
                    <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                    </h1>
                </div>
                <div>
                    <p>
                    Request Early Access to Get Started
                    </p>
                </div>
            </div>
            <div   className="gpt3__Features-container__right-side">
                <Feature title='Improving end distrusts instantly ' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
                <Feature title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
                <Feature title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
                <Feature title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />

            </div>
        </div>
    )
}

export default features