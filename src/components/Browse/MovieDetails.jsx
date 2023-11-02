import MoreInfoButton from "./MoreInfoButton";

export default function MovieDetails() {
  return (
    <>
      <div className="  absolute text-white z-10 ml-10 bottom-2/4 md:box-content  ">
        <div className="static text-3xl font-extrabold ">MovieName Longer</div>
        <div className=" absolute text-[10px] font-extralight pt-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          magni error voluptatibus accusantium neque? Vitae aliquam quasi fuga
          doloribus laborum nobis repellat atque officia consectetur
          perspiciatis, iusto molestias. Ex, sunt? Lorem ipsum dolor sit amet
          consectetur
          <div>
            <MoreInfoButton />
          </div>
        </div>
      </div>
    </>
  );
}
