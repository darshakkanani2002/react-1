import React from 'react';
import {useState} from 'react'


export default function Faq() {
    const [toggle,toggleHeading] = useState(true);
    const [toggle1,toggleHeading1] = useState(false);
  return (
    <div>
      <div class="row container mx-auto mt-5">
                    <div class="col-lg-12 text-center">
                        <h1>Frequently asked questions</h1>
                    </div>
                </div>

                <div class="row container mx-auto">
                    {/* <script>
                        $(document).ready(function () {
                            $(".faq-div-1").click(function () {
                                $("#mydiv1").slideToggle("slow")
                            });

                        $(".faq-div-2").click(function () {
                            $("#mydiv2").slideToggle("slow")
                        });

                        $(".faq-div-3").click(function () {
                            $("#mydiv3").slideToggle("slow")
                        });

                        $(".faq-div-4").click(function () {
                            $("#mydiv4").slideToggle("slow")
                        });

                        $(".faq-div-5").click(function () {
                            $("#mydiv5").slideToggle("slow")
                        });

                        $(".faq-div-6").click(function () {
                            $("#mydiv6").slideToggle("slow")
                        });

                        $(".faq-div-7").click(function () {
                            $("#mydiv7").slideToggle("slow")
                        });

                        $(".faq-div-8").click(function () {
                            $("#mydiv8").slideToggle("slow")
                        });
            });
                    </script> */}
                    <div class="col-lg-6">
                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-1" style={{justifyContent: 'space-between'}} onClick={()=>toggleHeading(!toggle)}>
                            <div class="col-md-11 user-select-none " style={{cursor: 'pointer'}}>
                                <h6 class=" m-0" >How will I receive my payment?</h6>
                            </div>
                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>

                        </div>

                    {toggle && (
                                                <div id="mydiv1">
                                                <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                                    accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                                    impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                                            </div>
                    )}




                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-2"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}} onClick={()=>toggleHeading1(!toggle1)}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How to extend the support?</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {toggle1 && (
                                                <div id="mydiv1">
                                                <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                                    accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                                    impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                                            </div>
                    )}




                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-3"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How to using widget in Elementor</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
{/* 
                        <div id="mydiv3">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}

                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-4"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How Can I Config Twitter Key API?</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {/* <div id="mydiv4">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}
                    </div>


                    <div class="col-lg-6">
                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-5"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How to import demo Traveler</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {/* <div id="mydiv5">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}

                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-6"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">Internal Server Error ?</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {/* <div id="mydiv6">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}


                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-7"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How to Reset to Default Color ?</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {/* <div id="mydiv7">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}

                        <div class="clearfix1 border p-2 mt-4 rounded-2 faq-div-8"
                            style={{justifyContent: 'space-between',cursor: 'pointer'}}>
                            <div class="col-md-11">
                                <h6 class=" m-0">How to increase the PHP Time Limit</h6>
                            </div>

                            <div class="col-md-1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        {/* <div id="mydiv8">
                            <p style={{margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero nemo
                                accusantium expedita provident, maiores voluptatem reprehenderit explicabo iusto rem? Ducimus natus
                                impedit aliquid corporis culpa beatae accusamus quam repellat?</p>
                        </div> */}
                    </div>
                </div>

                <section class="p-5">
                    <div class="row2 clearfix my-5 align-items-center s7-border bg-light">
                        <div class="col-lg-6">
                            <img src="/assets/image/seaplane-1.png" alt="" class=" img-border-2 border" width="100%" />
                        </div>

                        <div class="col-lg-6 text-center">
                            <h2>Get special offers, and <br /> more from traveler</h2>
                            <p>subscribe to see secret deals prices drop <br /> the moment you sign up!</p>

                            <form class="row g-3 justify-content-center">


                                <div class="custom-search" style={{width: '70%'}}>
                                    <input type="text" class="custom-search-input" placeholder="Enter your email" />
                                    <button class="custom-search-botton" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
    </div>
  );
}


