// Components
import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";

const IndividualConversation = ({ params }: { params: { id: string } }) => {
  // console.log(params)
  return (
    <div className="flex flex-1 h-screen">
      <div className="w-full h-full border-r flex flex-col">
        <ChatHeader />
        <>
          <ChatMessages/>
          {/* ChatInput will be not visible unless the Agent joins the conversation or the system assigns the user to the agent */}
          <ChatInput />
        </>
      </div>
      {/* <div className=" w-1/4">Quick Tools</div> */}
    </div>
  );
};

export default IndividualConversation;
