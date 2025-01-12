
const BrowseDressStyle = () => {

  return (
    <div>
  <div className="flex h-screen px-10 sm:px-20 mt-8 ">
    {/* Parent Container */}
    <div className="w-full px-8 h-[800px] sm:h-[600px] bg-[#F0F0F0] rounded-[20px] space-y-5 flex flex-col justify-center items-center">
        <div>
            <h1 className="text-center text-3xl md:text-5xl font-extrabold ">Browse By Dress Style</h1>
        </div>
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row w-full bg-[#F0F0F0] relative h-auto md:h-[40%] rounded-[18px] justify-between">
        {/* First Div */}
        <div className="w-full h-[150px] sm:h-full md:w-[35%] bg-[#ffffff] p-4 relative rounded-[18px] mb-4 md:mb-0">
          {/* Text */}
          <p className="relative z-10 text-2xl font-bold">Casual</p>
          {/* Image */}
          <img
            src="/images/dress-style-1.png"
            alt="Right Aligned Image"
            className="absolute inset-0 h-full w-full object-cover rounded-[18px] z-0"
          />
        </div>
        {/* Second Div */}
        <div className="w-full h-[150px] sm:h-full md:w-[63%] bg-[#fcfcfc] p-4 relative rounded-[18px]">
          {/* Text */}
          <p className="relative z-10 text-2xl font-bold">Formal</p>
          {/* Image */}
          <img
            src="/images/dress-style-2.png"
            alt="Right Aligned Image"
            className="absolute inset-0 h-full w-full object-cover rounded-[18px] z-0"
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-col md:flex-row w-full bg-[#F0F0F0] relative h-auto md:h-[40%] rounded-[18px] justify-between">
        {/* Third Div */}
        <div className="w-full h-[150px] sm:h-full md:w-[63%] bg-[#ffffff] p-4 relative rounded-[18px] mb-4 md:mb-0">
          {/* Text */}
          <p className="relative z-10 text-2xl font-bold">Party</p>
          {/* Image */}
          <img
            src="/images/dress-style-3.png"
            alt="Right Aligned Image"
            className="absolute inset-0 h-full w-full object-cover rounded-[18px] z-0"
          />
        </div>
        {/* Fourth Div */}
        <div className="w-full h-[150px] sm:h-full md:w-[35%] bg-[#ffffff] p-4 relative rounded-[18px]">
          {/* Text */}
          <p className="relative z-10 text-2xl font-bold">Gym</p>
          {/* Image */}
          <img
            src="/images/dress-style-4.png"
            alt="Right Aligned Image"
            className="absolute inset-0 h-full w-full object-cover rounded-[18px] z-0"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default BrowseDressStyle;
