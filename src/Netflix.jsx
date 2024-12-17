
function Netflix() {
  return (
    <>
      <div className="h-[700px] w-[100%] bg-center bg-auto border-b-8 border-zinc-800" style={{ backgroundImage: `url(./img/poster.jpg)` }}>
        <div className="h-full w-full bg-backColor">
          <div className="mx-auto h-full container">
            <div className="grid grid-cols-8 flex items-center gap-3">
              <div className="col-span-6"><img className="w-40 h-24 ml-[20px]" src="img/Netflix_logo.svg" alt="" /></div>
              <div className="relative">
                <div><img className="w-[16px] h-[16px] absolute top-[7px] left-[6px]" src="../img/lang.png" alt="" /></div>
                <select className=" font-semibold bg-transparent border border-gray-400 px-4 text-center rounded w-[120px] h-[30px] text-white" name="" id="">
                  <option className="text-black" value="">English</option>
                  <option className="text-black" value="">Hindi</option>
                </select>
              </div>
              <div><button className="bg-buttonColor hover:bg-red-800 text-white rounded font-semibold py-1 px-4">Sign in</button></div>
            </div>
            <div className="h-[600px] flex flex-col items-center justify-center">
              <h1 className="text-5xl text-white font-bold">Unlimited movies, TV shows and more</h1>
              <h2 className="text-2xl text-white font-semibold leading-[4.5rem]">Watch anywhere. Cancel anytime.</h2>
              <h3 className="text-xl text-white font-medium mb-4">Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="flex justify-center">
                <input className="w-96 rounded text-white bg-selfColor p-4 border border-gray-400 font-semibold" type="email" placeholder="Email Address" />
                <button className="bg-buttonColor hover:bg-red-800 text-white text-2xl rounded font-bold py-3 px-4 ms-3">Get Started <i class="fa-solid fa-chevron-right text-lg px-1"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="container h-full mx-auto grid grid-cols-2 flex items-center gap-4 p-4">
          <div className="w-full h-fit">
            <h1 className="text-5xl text-white font-bold leading-loose">Enjoy on your TV</h1>
            <h2 className="text-2xl text-white font-semibold ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
          <div className="relative w-full h-4/5">
            <video className="absolute w-[75%] top-[80px] left-[70px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" muted loop autoPlay > </video>
            <img className="absolute" src="./img/tv.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="container h-full mx-auto grid grid-cols-2 flex items-center gap-4 p-4">
          <div className="relative w-full h-4/5 flex justify-center">
            <img className="absolute h-full" src="./img/mobile-0819.jpg" alt="" />
            <div className="flex items-center gap-2 border-2 border-zinc-600 rounded-lg w-[300px] h-[100px] absolute bottom-[40px] bg-black p-2">
              <div><img className="w-[60px]" src="./img/boxshot.png" alt="" /></div>
              <div className="text-white"><p className="font-bold text-lg">Stranger Things</p>
                <p className="text-sky-700 font-semibold">Downloading...</p>
              </div>
              <div><img className="w-[40px] " src="./img/download-icon.gif" alt="" /></div>
            </div>
          </div>
          <div className="w-full h-fit">
            <h1 className="text-5xl text-white font-bold leading-normal">Download your shows to watch offline</h1>
            <h2 className="text-2xl text-white font-semibold ">Save your favourites easily and always have something to watch.</h2>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="container mx-auto grid grid-cols-2 flex items-center gap-4 p-4">
          <div className="w-full h-fit pt-20">
            <h1 className="text-5xl text-white font-bold leading-loose">Watch everywhere</h1>
            <h2 className="text-2xl text-white font-semibold ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
          </div>
          <div className="relative w-full h-4/5">
          <video className="absolute w-[65%] top-[30px] left-[90px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" muted loop autoPlay > </video>
            <img className="absolute" src="./img/device-pile-in.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="container h-full mx-auto grid grid-cols-2 flex items-center gap-4 p-4">
          <div className="relative w-full h-4/5">
            <img className="absolute" src="./img/fun.png" alt="" />
          </div>
          <div className="w-full h-fit">
            <h1 className="text-5xl text-white font-bold leading-loose">Create profiles for kids</h1>
            <h2 className="text-2xl text-white font-semibold ">Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="container h-full mx-auto flex flex-col items-center py-20">
          <h1 className="text-5xl text-white font-bold">Frequently Asked Questions</h1>
          <h2 className="text-2xl text-white font-semibold leading-[4.5rem]">Ready to watch? Enter your email to create or restart your membership.
          </h2>
          <div className="flex justify-center">
                <input className="w-96 rounded text-white bg-selfColor p-4 border border-gray-400 font-semibold" type="email" placeholder="Email Address" />
                <button className="bg-buttonColor hover:bg-red-800 text-white text-2xl rounded font-bold py-3 px-4 ms-3">Get Started <i class="fa-solid fa-chevron-right text-lg px-1"></i></button>
              </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[500px] border-b-8 border-zinc-800">
        <div className="justify-conetent"></div>
      </div>
    </>
  );
}

export default Netflix;
