import React from 'react'
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import Button from '@mui/material/Button';

const dashboard = () => {
  return (
    <>
        <div className='container bg-gray-100 rounded-md h-full w-[95%] pb-8 mx-auto'>
            <div className='top flex flex-row justify-between items-center p-5 mb-4'>
                <p className='font-bold text-xl'>Book Your Slot</p>
                <div className='legend bg-white shadow-sm shadow-gray-300 h-10 rounded-md flex flex-row justify-around items-center gap-5 px-5'>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-gray-300"/>Available</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-green-400"/>Your Selected</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-yellow-400"/>Booked</div>
                    <div className='font-medium'><TimeToLeaveRoundedIcon className="mr-3 text-red-400"/>Not Available</div>
                </div>
            </div>
            <p className='text-xl mb-2 bg-white w-[68px] mx-auto px-1 rounded-md font-medium'>ENTRY</p>
            <div className='spaces flex flex-row justify-center items-center gap-28'>
              <div className="left-spaces flex flex-col gap-10 border-slate-400 border-r-4 pr-28">
                <div className='flex gap-8 border-slate-400 border-b-2 pb-10'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-center font-medium text-xl text-gray-800 shadow-md flex flex-row justify-center items-center">P1</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P2</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P3</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P4</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P5</div>
                </div>
                <div className='flex gap-8'>
                  <div className="w-20 h-36 rounded-lg bg-green-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P6</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P7</div>
                  <div className="w-20 h-36 rounded-lg bg-green-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P8</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P9</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P10</div>
                </div>
              </div>
              <div className='right-spaces flex flex-col gap-10'>
                <div className='flex gap-8 border-slate-400 border-b-2 pb-10'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P11</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P12</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P13</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P14</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P15</div>
                </div>
                <div className='flex gap-8'>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P16</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P17</div>
                  <div className="w-20 h-36 rounded-lg bg-yellow-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P18</div>
                  <div className="w-20 h-36 rounded-lg bg-gray-300 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P19</div>
                  <div className="w-20 h-36 rounded-lg bg-red-400 text-xl text-gray-800 font-medium text-center shadow-md flex flex-row justify-center items-center">P20</div>
                </div>
              </div>
            </div>
            <p className='text-xl mt-2 bg-white w-[49px] mx-auto px-1 rounded-md font-medium'>EXIT</p>
        </div>
        <div className='bg-slate-50 booking-details flex flex-row justify-around items-center p-4 mt-5 mb-5 w-[95%] mx-auto'>
          <p className='font-bold text-xl'>Booking Details</p>
          <div className="details flex flex-row justify-evenly items-center gap-10">
            <div className='text-[18px] font-medium'>
              <p>Slot Number</p>
              <p>P6,P8</p>
            </div>
            <div className='text-[18px] font-medium'>
              <p>Total Slots</p>
              <p>2</p>
            </div>
            <div className='text-[18px] font-medium'>
              <p>Amount Payable</p>
              <p>Rs. 500</p>
            </div>
            <Button variant="contained">Book Slot</Button>
          </div>
        </div>
    </>
  )
}

export default dashboard