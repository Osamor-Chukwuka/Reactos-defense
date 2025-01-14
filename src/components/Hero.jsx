import Indenticon from 'react-identicons'
import header_image from '../images/header.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10'>
        <div className='md:w-3/6 w-full'>
            <div>
                <h1 className='text-white text-5xl font-bold'>
                    Trade & React On <br /> Digital Arts, <br />
                    <span className='text-gradient'>NFT</span> Collections
                </h1>
                <p className='text-gray-500 font-semibold text-sm mt-3'>Mint & React on amazing NFTs only on Reactos</p>
            </div>
            <div className='flex mt-5'>
                <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Mint NFT</button>
            </div>
            <div>
                <div className='w-3/4 flex justify-between items-center mt-5'>
                    <div className='text-white'>
                        <p className='font-bold'>10k</p>
                        <small className='text-gray-300'>Users</small>
                    </div>
                    <div className='text-white'>
                        <p className='font-bold'>3.2k</p>
                        <small className='text-gray-300'>Reactors</small>
                    </div>
                    <div className='text-white'>
                        <p className='font-bold'>500</p>
                        <small className='text-gray-300'>Artists</small>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='shadow-xl shadow-black md:w-2/6 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800'>
            <img className='h-80 w-full object-cover' src={header_image} alt='header-image' />
            <div className='flex justify-start items-center p-3'>
                <Indenticon className='h-10 w-10 object-contain rounded-full mr-3' string={'0x22...765f'} size={50} />
                <div>
                    <p className='text-white font-semibold '>0x22...765f</p>
                    <small className='text-pink-800 font-bold'>@you</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero