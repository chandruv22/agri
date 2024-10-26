import React from 'react';
import image from '../../assests/land.jpg';
import "./Catalog.css";
import spray from "../../assests/sprays.jpg";
import fertilizer from "../../assests/fertilizer.jpg";
import seeds from "../../assests/seeds.webp";
import pest from "../../assests/pesticides.jpeg";
import knife from "../../assests/knife.jpg";
import wheat from "../../assests/wheat.jpg";
import gun from "../../assests/gun.jpg";

function Catalog() {
    return (
        <section className='bgimage'>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px" }} src={seeds} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>wheat crops - $40</p>
                    </div>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px" }} src={fertilizer} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>Rice crop - $150</p>
                    </div>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px" }} src={pest} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>Tomamto - $749</p>
                    </div>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px", height: "250px" }} src={knife} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>Sugarcane - $179</p>
                    </div>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px" }} src={wheat} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>Groundnut - $429</p>
                    </div>
                    <div className='col-lg-4 card'>
                        <img style={{ borderRadius: "10px" }} src={gun} className='img-fluid mt-3' />
                        <p className='fw-bold mt-3 fs-5 ms-2'>About - $1500</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Catalog;
