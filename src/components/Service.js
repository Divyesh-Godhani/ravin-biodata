import React from 'react'

export default function Service() {
  return (
    <>
    <div className="container-fluid bg-light my-5 py-6" id="service">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">Details</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="#details">About Me</a>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-crop-alt fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Date Of Birth</h4>
                            <h6 className="mb-3"><span className="text-primary">24th February, 2000</span></h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code-branch fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Height</h4>
                            <h6 className="mb-3"><span className="text-primary">"5.8"</span></h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Weight</h4>
                            <h6 className="mb-3"><span className="text-primary">60KG</span></h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Hobbies</h4>
                            <h6 className="mb-3"><span className="text-primary">Reading, Travelling, Cooking</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
