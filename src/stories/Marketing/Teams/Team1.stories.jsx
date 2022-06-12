import { BsFillPersonFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Team1 = () => {
    return (
      <>
        <SectionWrapper>
          <div className=" md:px-10">
          <div className="px-6 py-3 text-center">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
            Meet Our Great Team
            </h1>{" "}
          </div>
          <div className="px-6 py-3 text-center">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add your images from Sketch
              or
              <br className="hidden md:inline" /> Figma. You can even sync
              designs from your cloud storage!
            </h3>
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4">
          <div className="py-4 opacity-40 md:opacity-100 -ml-10 md:ml-0 text-center">
              <div className="flex  py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Dany Monson
                </h1>
                <p>
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="mx-14 md:mx-0 py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Baha Moretz
                </h1>
                <p>
                  Art Director
                </p>
              </div>
            </div>
            <div className="-mr-16  opacity-40 md:opacity-100 md:mr-0 py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Dima Grinchenko
                </h1>
                <p>
                  Front End Developer
                </p>
              </div>
            </div>
            <div className="hidden md:inline py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Polly Clark
                </h1>
                <p>
                  Manager
                </p>
              </div>
            </div>
            <div className="hidden md:inline py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Markus Johnson
                </h1>
                <p>
                  Front End Engineer
                </p>
              </div>
            </div>
            <div className="hidden md:inline py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Terry Valdez
                </h1>
                <p>
                  Support
                </p>
              </div>
            </div>
            <div className="hidden md:inline py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Elen Joseph
                </h1>
                <p>
                  Senior Designer
                </p>
              </div>
            </div>
            <div className="hidden md:inline py-4 text-center">
              <div className="flex py-3 justify-center">
                <div className="h-12  w-12 rounded-full bg-primary">
                  <div className="mx-3 py-3">
                  <BsFillPersonFill className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Iva Doyle
                </h1>
                <p>
                  Product Manager
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:hidden">
              <GoPrimitiveDot className="opacity-30"/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot className="opacity-30"/>
              <GoPrimitiveDot className="opacity-30"/>
            </div>
          </div>
        </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Teams/Team 1",
  component: Team1,
};