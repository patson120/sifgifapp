import React from 'react';

export const Banniere = () => {
    return (
        <div id="carousel1" className="carousel carousel-fade slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                    <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel1" data-slide-to="1"></li>
                    <li data-target="#carousel1" data-slide-to="2"></li>
                </ul>

                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active w-100 position-relative">
                        <div className="carousel-caption display-5 font-weight-bold" style={{position: 'absolute', top: '30%', left: '3%', fontSize: "32px", lineHeight: '1'}}>Discours À L’occasion De La Position Des Organisations De La Société Civile Sur Le SIGIF2</div>
                        <img src="../../images/gettyimages-638591634-612x612.jpg" className="img-fluid w-100" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                    <div className="carousel-caption display-5 font-weight-bold" style={{position: 'absolute', top: '30%', left: '3%', fontSize: "32px", lineHeight: '1'}}>Discours À L’occasion De La Position Des Organisations De La Société Civile Sur Le SIGIF2</div>
                        <img src="../../images/gettyimages-182921931-612x612.jpg" className="img-fluid w-100" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                    <div className="carousel-caption display-5 font-weight-bold" style={{position: 'absolute', top: '30%', left: '3%', fontSize: "32px", lineHeight: '1'}}>Discours À L’occasion De La Position Des Organisations De La Société Civile Sur Le SIGIF2</div>
                        <img src="../../images/gettyimages-1161416667-612x612.jpg" className="img-fluid w-100" alt="" />
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                {/* <a class="carousel-control-prev" href="#carousel1" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carousel1" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a> */}

            </div>
    );
}