import React, { useState } from "react";
import commaIcon from "../images/commaIcon.svg";
import crsl1 from "../images/crsl-1.svg";
import { Carousel } from "react-bootstrap";

const CarouselSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) {
      setIndex(0);
    }
  };

  const onNextClick = () => {
    if (index === 2) {
      setIndex(2);
    } else if (index === 0 || index > 0) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className="carouselSection pt-[60px] pb-[60px] md:pb-[100px] md:pt-[100px] ">
        <div className="container flex justify-center ">
          <div className="carousel-sub-container flex flex-col  justify-center">
            <h3 className="max-w-[363px] pr-[100px] md:pr-0 md:leading-[48px] text-[32px] md:text-[40px]  font-black ">
              What People Say About Book
            </h3>
            <div className="row1 items-center m-auto ">
              <Carousel
                pause={"hover"}
                wrap={false}
                interval={null}
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                className="w-full "
              >
                <Carousel.Item>
                  <div className="row1 flex-col-reverse md:flex-row max-w-[100%]  items-center  justify-center">
                    <div className="col-12 md:max-w-[58.333333%]  flex md:flex-col  flex-col-reverse  ">
                      <div className="pt-[24px] md:pt-0">
                        <div className="text-[16px] font-bold  leading-[24px]">
                          Sinead Connelly
                        </div>
                        <div className="text-[14px] text-[#444444] leading-[22px] font-normal">
                          Co-founder and Director, Lotus People
                        </div>
                      </div>

                      <div>
                      <div className="max-w-[42px] max-h-[32px] mt-[32px]">
                        <img src={commaIcon} className="" alt="quotesIcon" />
                      </div>
                      <div className="text-[20px] leading-[28px] md:text-[24px] font-light md:leading-[36px] text-[#000000] mt-[16px]   ">
                        I couldn’t recommend Sophie’s book more. As an
                        inexperienced recruitment consultant over ten years ago,
                        I leant on Sophie’s guidance and advice shared in this
                        book to develop the traits of a high performing
                        consultant. Fast forward to my role now as a business
                        owner and I ensure that all of my temp team receive a
                        copy of ‘how to run a lucrative temp desk’. Their
                        enthusiasm for the book is as strong as mine was as a
                        consultant! With solid tips,...
                      </div>
                      <div className="row1 items-center  pt-[41px]">
                        <div className="pl-[20px] hidden md:block">
                          <a
                            href="#"
                            className="text-black underline pt-[41px]"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-12 md:max-w-[41.666667%]">
                      <img
                        src={crsl1}
                        className=" max-h-[160px] max-w-[160px] md:max-h-[500px]   md:max-w-[467px] object-cover  object-center  rounded-full md:rounded-none md:object-contain"
                        alt="Customer Image"
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row1 flex-col-reverse md:flex-row max-w-[100%]  items-center  justify-center">
                    <div className="col-12 md:max-w-[58.333333%]  flex md:flex-col  flex-col-reverse  ">
                      <div className="pt-[24px] md:pt-0">
                        <div className="text-[16px] font-bold  leading-[24px]">
                          Sinead Connelly
                        </div>
                        <div className="text-[14px] text-[#444444] leading-[22px] font-normal">
                          Co-founder and Director, Lotus People
                        </div>
                      </div>

                      <div>
                      <div className="max-w-[42px] max-h-[32px] mt-[32px]">
                        <img src={commaIcon} className="" alt="quotesIcon" />
                      </div>
                      <div className="text-[20px] leading-[28px] md:text-[24px] font-light md:leading-[36px] text-[#000000] mt-[16px]   ">
                        I couldn’t recommend Sophie’s book more. As an
                        inexperienced recruitment consultant over ten years ago,
                        I leant on Sophie’s guidance and advice shared in this
                        book to develop the traits of a high performing
                        consultant. Fast forward to my role now as a business
                        owner and I ensure that all of my temp team receive a
                        copy of ‘how to run a lucrative temp desk’. Their
                        enthusiasm for the book is as strong as mine was as a
                        consultant! With solid tips,...
                      </div>
                      <div className="row1 items-center  pt-[41px]">
                        <div className="pl-[20px] hidden md:block">
                          <a
                            href="#"
                            className="text-black underline pt-[41px]"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-12 md:max-w-[41.666667%]">
                      <img
                        src={crsl1}
                        className=" max-h-[160px] max-w-[160px] md:max-h-[500px]   md:max-w-[467px] object-cover  object-center  rounded-full md:rounded-none md:object-contain"
                        alt="Customer Image"
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row1 flex-col-reverse md:flex-row max-w-[100%]  items-center  justify-center">
                    <div className="col-12 md:max-w-[58.333333%]  flex md:flex-col  flex-col-reverse  ">
                      <div className="pt-[24px] md:pt-0">
                        <div className="text-[16px] font-bold  leading-[24px]">
                          Sinead Connelly
                        </div>
                        <div className="text-[14px] text-[#444444] leading-[22px] font-normal">
                          Co-founder and Director, Lotus People
                        </div>
                      </div>

                      <div>
                      <div className="max-w-[42px] max-h-[32px] mt-[32px]">
                        <img src={commaIcon} className="" alt="quotesIcon" />
                      </div>
                      <div className="text-[20px] leading-[28px] md:text-[24px] font-light md:leading-[36px] text-[#000000] mt-[16px]   ">
                        I couldn’t recommend Sophie’s book more. As an
                        inexperienced recruitment consultant over ten years ago,
                        I leant on Sophie’s guidance and advice shared in this
                        book to develop the traits of a high performing
                        consultant. Fast forward to my role now as a business
                        owner and I ensure that all of my temp team receive a
                        copy of ‘how to run a lucrative temp desk’. Their
                        enthusiasm for the book is as strong as mine was as a
                        consultant! With solid tips,...
                      </div>
                      <div className="row1 items-center  pt-[41px]">
                        <div className="pl-[20px] hidden md:block">
                          <a
                            href=""
                            className="text-black underline pt-[41px]"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-12 md:max-w-[41.666667%]">
                      <img
                        src={crsl1}
                        className=" max-h-[160px] max-w-[160px] md:max-h-[500px]   md:max-w-[467px] object-cover  object-center  rounded-full md:rounded-none md:object-contain"
                        alt="Customer Image"
                      />
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row1 flex-col-reverse md:flex-row max-w-[100%]  items-center  justify-center">
                    <div className="col-12 md:max-w-[58.333333%]  flex md:flex-col  flex-col-reverse  ">
                      <div className="pt-[24px] md:pt-0">
                        <div className="text-[16px] font-bold  leading-[24px]">
                          Sinead Connelly
                        </div>
                        <div className="text-[14px] text-[#444444] leading-[22px] font-normal">
                          Co-founder and Director, Lotus People
                        </div>
                      </div>

                      <div>
                      <div className="max-w-[42px] max-h-[32px] mt-[32px]">
                        <img src={commaIcon} className="" alt="quotesIcon" />
                      </div>
                      <div className="text-[20px] leading-[28px] md:text-[24px] font-light md:leading-[36px] text-[#000000] mt-[16px]   ">
                        I couldn’t recommend Sophie’s book more. As an
                        inexperienced recruitment consultant over ten years ago,
                        I leant on Sophie’s guidance and advice shared in this
                        book to develop the traits of a high performing
                        consultant. Fast forward to my role now as a business
                        owner and I ensure that all of my temp team receive a
                        copy of ‘how to run a lucrative temp desk’. Their
                        enthusiasm for the book is as strong as mine was as a
                        consultant! With solid tips,...
                      </div>
                      <div className="row1 items-center  pt-[41px]">
                        <div className="pl-[20px] hidden md:block">
                          <a
                            href=""
                            className="text-black underline pt-[41px]"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-12 md:max-w-[41.666667%]">
                      <img
                        src={crsl1}
                        className=" max-h-[160px] max-w-[160px] md:max-h-[500px]   md:max-w-[467px] object-cover  object-center  rounded-full md:rounded-none md:object-contain"
                        alt="Customer Image"
                      />
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="md:flex justify-center mt-[39px] items-center hidden ">
              <button
                className={
                  index === 0
                    ? "opacity-40  mr-[28px]"
                    : "opacity-100 mr-[28px]"
                }
                onClick={() => onPrevClick()}
                aria-hidden="true"
                id="Previous"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className={
                  index === 2
                    ? "opacity-40  pl-[28px] border-l border-[#444444]  "
                    : "opacity-100 pl-[28px] border-l border-[#444444]  "
                }
                onClick={() => onNextClick()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
