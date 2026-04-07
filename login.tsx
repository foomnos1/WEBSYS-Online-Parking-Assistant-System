export default function ParkingAssistantLoginScreen() {
    return (
      <div className="min-h-screen w-full bg-[#efefef] flex items-center justify-center px-4">
        <div
          className="w-full max-w-[480px] bg-white rounded-[10px] border border-[#ececec]"
          style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)' }}
        >
          <div className="px-[26px] pt-[24px] pb-[22px]">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-[18px]">
                <div className="h-[52px] w-[52px] rounded-full bg-[#dff7e6]" />
                <svg
                  className="absolute inset-0 m-auto"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 11L6.4 7.2C6.69 6.42 7.44 5.9 8.28 5.9H15.72C16.56 5.9 17.31 6.42 17.6 7.2L19 11M5 11H19M5 11V15.2C5 15.64 5.36 16 5.8 16H6.7C7.14 16 7.5 15.64 7.5 15.2V14.5H16.5V15.2C16.5 15.64 16.86 16 17.3 16H18.2C18.64 16 19 15.64 19 15.2V11M7.5 11C7.91 11 8.25 11.34 8.25 11.75C8.25 12.16 7.91 12.5 7.5 12.5C7.09 12.5 6.75 12.16 6.75 11.75C6.75 11.34 7.09 11 7.5 11ZM16.5 11C16.91 11 17.25 11.34 17.25 11.75C17.25 12.16 16.91 12.5 16.5 12.5C16.09 12.5 15.75 12.16 15.75 11.75C15.75 11.34 16.09 11 16.5 11Z"
                    stroke="#18a94b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
  
              <h1 className="text-[20px] leading-none font-medium text-[#202020] mb-[14px]">
                Parking Assistant System
              </h1>
              <p className="text-[13px] leading-none text-[#8a8a8a] mb-[40px]">
                Sign in to manage parking slots
              </p>
            </div>
  
            <div>
              <label className="block text-[13px] font-medium text-[#222222] mb-[10px]">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full h-[46px] rounded-[6px] border border-[#f0f0f0] bg-[#f5f5f5] px-[14px] text-[13px] text-[#222222] placeholder:text-[#b1b1b1] outline-none"
              />
            </div>
  
            <button
              type="button"
              className="mt-[26px] w-full h-[44px] rounded-[7px] text-white text-[14px] font-medium"
              style={{
                background: 'linear-gradient(to bottom, #19b84d 0%, #16aa45 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }