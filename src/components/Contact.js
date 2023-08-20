import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">Contact</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="#contact">Say Hello</a>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-2">Address</p>
                    <h3 className="fw-bold">Navi Haliyad, Ta. Bagasara,Di. Amreli</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Call:</p>
                    <h3 className="fw-bold">+91 99096 20712</h3>
                    <hr className="w-100"/>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-2">Mail me:</p>
                    <h3 className="fw-bold">ravinasodariya246@gmail.com</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Follow me:</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <hr className="w-100"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
