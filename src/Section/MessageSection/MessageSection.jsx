// import React from 'react'

const MessageSection = () => {
  return (
    <div className="MessageSection">
      <hr />
      <div className="p-32">
        <div className="">
          <h6 className="text-[#aeaeae] text-3xl">Message Me</h6>
          <p className="mt-3 text-md">
            Send me a message and i would reply via email
          </p>
        </div>

        <div className="mt-10">
          <form action="">
            <div className="">
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="">
                  <label htmlFor="">Full Name :</label>
                  <input
                    className="w-full mt-3 p-3 rounded-full outline-none border border-black text-black"
                    type="text"
                    placeholder="Anas Yakubu"
                  />
                </div>

                <div className="">
                  <label htmlFor="">Phone :</label>
                  <input
                    className="w-full mt-3 p-3 rounded-full outline-none border border-black text-black"
                    type="text"
                    placeholder="+234-9090 9999 37"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="w-full" htmlFor="">
                  Email :
                </label>

                <input
                  className="w-full mt-3 p-3 rounded-full outline-none border border-black text-black"
                  type="text"
                  placeholder="+234-9090 9999 37"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="">Message</label>
                <textarea
                  className="w-full mt-3 p-3 rounded-3xl outline-none border border-black text-black"
                  name=""
                  id=""
                  rows="10"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="p-3 w-36 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
