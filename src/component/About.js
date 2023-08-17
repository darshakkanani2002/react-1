import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <!------------------------------------------Header----------------------------------------> */}
    <div className="row container mx-auto my-5 ">
        <div className="col-lg-12">
            <img src="/assets/image/About/Header-img.png" alt="" className="img-fluid" />
        </div>
    </div>


    {/* <!-----------------------------------------------------------------------> */}

    {/* <!-----------------------------About Section--------------------------------------> */}
    <section className="mt-4">
        <div className="row container mx-auto">
            <div className="col-lg-12">
                <h2>About the company</h2>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci velit, sed quia non
                    numquam eius modi ullma tempora incidunt ut labore et dolore magnam aliquam quaerat fruitr
                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem. Itaque earum rerum hic tea
                    sapiente delectus, ut aut reiciendis voluptatibus.</p>
            </div>
        </div>

        <div className="row container mx-auto mt-5">
            <div className="col-lg-6">
                <h4>Our mission</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip.</p>
                <p>Excepteur sint occaecat cupidatat non proident.</p>
                <p>Quis autem vel eum iure reprehende qui in ea.</p>
                <p>At vero eos accusamus iusto odio dignissimos.</p>
            </div>

            <div className="col-lg-6">
                <h4>Our mission</h4>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    minima veniam.</p>
            </div>
        </div>
    </section>
    {/* <!-----------------------------About Section end--------------------------------------> */}

    {/* <!--------------------------------------Client Section------------------------------------------> */}
    <section className="mt-5 client-section pb-5">
        <div className="row container mx-auto">
            <div className="col-lg-12">
                <h2 className="mt-5">What our clients say</h2>
            </div>
        </div>

        <div className="row container mx-auto">
            <div className="col-lg-4 border p-5 mt-5 mx-auto about-personal-div">
                
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet condimentum in pretium. Montes tristique amet pellentesque ut fames condimentum.”</p>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <h6>Darlene Robertson</h6>
                <p>Coustomer in U.S.A</p>
            
            </div>

            <div className="col-lg-4 border p-5 mt-5 mx-auto about-personal-div">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet condimentum in pretium. Montes tristique amet pellentesque ut fames condimentum.”</p>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <h6>Darlene Robertson</h6>
                <p>Coustomer in U.S.A</p>
            </div>
 
            <div className="col-lg-4 border p-5 mt-5 mx-auto about-personal-div">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet condimentum in pretium. Montes tristique amet pellentesque ut fames condimentum.”</p>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <i className="bi bi-star-fill" style={{ color: 'orange' }}></i>
                <h6>Darlene Robertson</h6>
                <p>Coustomer in U.S.A</p>
            </div>
        </div>
    </section>
    {/* <!--------------------------------------Client Section end------------------------------------------> */}

    {/* <!---------------------------------Team Section---------------------------------------------> */}

    <section className="my-5">
        <div className="row container mx-auto">
            <div className="col-lg-12 text-center">
                <h2>Meet our team</h2>
            </div>
        </div>

        <div className="row container mx-auto mt-5">
            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team1.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Darlene Robertson</h4>
                    <p>Founder & CEO</p>
                </div>
            </div>

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team2.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Jenny Wilson</h4>
                    <p>Marketing Manager</p>
                </div>
            </div>  

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team3.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Jerome Bell</h4>
                    <p>Product Manager</p>
                </div>
            </div>

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team4.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Annette Black</h4>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>


        <div className="row container mx-auto mt-5">
            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team5.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Eleanor Pena</h4>
                    <p>Creative Director</p>
                </div>
            </div>

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team6.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Marvin McKinney</h4>
                    <p>Chief Financial Officer</p>
                </div>
            </div>  

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team7.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Annette Black</h4>
                    <p>Product Manager</p>
                </div>
            </div>

            <div className="col-lg-3 text-center">
                <img src="/assets/image/About/team8.png" alt="" className="img-fluid" />
                <div className=" mt-4">
                    <h4>Darrell Steward</h4>
                    <p>President of Sales</p>
                </div>
            </div>
        </div>
    </section>

      </div>
    );
  }
}
