import React from 'react'
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import Button from '@mui/material/Button';

const dashboard = () => {
  return (
    <>
        <div className='container bg-gray-100 mx-5 rounded-md h-auto w-screen'>
            <div className='top flex flex-row justify-between items-center p-5 mb-4'>
                <p className='font-bold text-xl'>Book Your Slot</p>
                <div className='legend bg-white shadow-sm shadow-gray-300 h-10 rounded-md flex flex-row justify-around items-center gap-5 px-5'>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-gray-300"/>Available</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-green-400"/>Your Selected</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-yellow-400"/>Booked</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-red-400"/>Not Available</div>
                </div>
            </div>
            <p className='text-xl mb-2 bg-white w-[65px] mx-auto px-1 rounded-md'>ENTRY</p>
            <div className='spaces flex flex-row justify-center items-center gap-28'>
              <div className="left-spaces flex flex-col gap-10 border-slate-400 border-r-4 pr-28">
                <div className='flex gap-8 border-slate-400 border-b-2 pb-10'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-center font-medium text-xl text-gray-800">P1</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center">P2</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P3</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center">P4</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P5</div>
                </div>
                <div className='flex gap-8'>
                  <div className="w-20 h-36 rounded-lg bg-green-400 text-xl text-gray-800 font-medium text-center">P6</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P7</div>
                  <div className="w-20 h-36 rounded-lg bg-green-400 text-xl text-gray-800 font-medium text-center">P8</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P9</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center">P10</div>
                </div>
              </div>
              <div className='right-spaces flex flex-col gap-10'>
                <div className='flex gap-8 border-slate-400 border-b-2 pb-10'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P11</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P12</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P13</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P14</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center">P15</div>
                </div>
                <div className='flex gap-8'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P16</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P17</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center">P18</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center">P19</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center">P20</div>
                </div>
              </div>
            </div>
            <p className='text-xl mt-2 bg-white w-[47px] mx-auto px-1 rounded-md'>EXIT</p>
            <div className='booking-details flex flex-row justify-around items-center mt-10 '>
              <p className='font-bold'>Booking Details</p>
              <div className="details flex flex-row justify-evenly items-center gap-10">
                <div>
                  <p className='text-[15px] font-medium'>Slot Number</p>
                  <p className='font-medium'>P6,P8</p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>Total Slots</p>
                  <p className='font-medium'>2</p>
                </div>
                <div>
                  <p className='text-[15px] font-medium'>Amount Payable</p>
                  <p className='font-medium'>Rs. 500</p>
                </div>
                <Button variant="contained">Book Slot</Button>
              </div>
            </div>
        </div>
    </>
  )
}

export default dashboard