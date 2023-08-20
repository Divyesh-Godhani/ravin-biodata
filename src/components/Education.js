import React from 'react'

export default function Education() {
  return (
    <>
     <div className="container-xxl py-6 pb-5" id="skill">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-5 mb-5">Maternal Details</h1>
                    <h3 className="mb-4">Bhikhubhai Shambhubhai Domadiya(Gir Govindpur, Visavadar)</h3>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Business</button>
                        </li>
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6">
                                    <h5>Tirupati Bricks</h5>
                                    <hr className="text-primary my-2"/>
                                    <h6 className="mb-0">Manufacturer of FLy Ash /Cement Bricks</h6>
                                    <p className="text-primary mb-1">Ahmedabad</p>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6">
                                    <h5>B.E. Mechanical</h5>
                                    <hr className="text-primary my-2"/>
                                    <h6 className="mb-0">LJ College</h6>
                                    <p className="text-primary mb-1">Ahmedabad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
