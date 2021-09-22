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
                        <div className="carousel-caption display-1" style={{position: 'absolute', top: '30%', left: '-30%'}}>SIGIF</div>
                        <img src="images/bg.jpg" className="img-fluid w-100" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                    <div className="carousel-caption display-1" style={{position: 'absolute', top: '30%', left: '0%'}}>SIGIF</div>
                        <img src="images/bg2.jpg" className="img-fluid w-100" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                    <div className="carousel-caption display-1" style={{position: 'absolute', top: '30%', left: '0%'}}>SIGIF</div>
                        <img src="images/bg3.jpg" className="img-fluid w-100" alt="" />
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