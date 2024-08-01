import React from "react";

const IndividualConversation = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div className="w-4/5 h-full border-r flex flex-col">
        <div className="text-center">
          <h1>Chat Header</h1>
        </div>

        <>
          <div className="bg-red-50 h-full flex-1 overflow-auto">
            <div>
              <h1>Chat Messages</h1>
            </div>
          </div>
          <div>
            <h1>Chat Input</h1>
          </div>
        </>
      </div>
      <div className=" w-1/4">Quick Tools</div>
    </div>
  );
};

export default IndividualConversation;
