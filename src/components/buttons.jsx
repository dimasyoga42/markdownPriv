import { BookOpen } from "react-feather";

const Btn = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-10 mb-4 ml-[80%] flex h-10 w-10 cursor-pointer items-center justify-center justify-items-center rounded-full">
        <BookOpen color="gray" />
      </div>
    </>
  );
};
export default Btn;
