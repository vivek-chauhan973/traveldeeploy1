import "../../app/globals.css";

 const BottomLink  = () => {
  const repeatedContent = Array.from({ length: 100 }, (_, index) => (
    <p
      key={index}
      className=" hover:text-primary cursor-pointer text-slate-500 outline rounded-sm px-[5px] md:outline-1"
    >
      hello
    </p>
  ));
  return (
    <>
      <div className="bg-slate-100 py-8">
        <div className="container-wrapper">
          <p className="text-para  font-semibold">Manali Package</p>
          <div className="text-[13px]  flex gap-2 flex-wrap mt-3">
            {repeatedContent}
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomLink;
