"use client";

import { ArrowRightIcon, XIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authOptions } from "../../app/lib/auth";
import { cn } from "../../functions/cn";
// import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  const [session, setSession] = useState<any>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative w-full h-full">
      <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] bg-[rgba(10,10,10,0.8)] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>

      <header
        className={cn(
          "fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th",
          isOpen ? "h-[calc(100%-24px)]" : "h-12"
        )}
      >
        <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] px- md:px-2 flex items-center justify-start">
          <div className="flex items-center justify-between w-full sticky mt-[7px] lg:mt-auto mb-auto inset-x-0">
            <div className="flex items-center flex-1 lg:flex-none pl-1">
              <Link href="/" className="text-lg font-semibold text-foreground">
                {/* <Icons.icon className="w-auto h-5" /> */}
                <svg
                  className="w-auto h-5"
                  width="196"
                  height="196"
                  viewBox="0 0 196 196"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M73.9216 7.17157V38.2486C73.9216 38.519 74.0311 38.7779 74.2251 38.9662L90.3396 54.6067C90.7128 54.969 91.2125 55.1716 91.7326 55.1716H104.093C104.624 55.1716 105.132 54.9609 105.507 54.5858L121.129 38.9645C121.316 38.7769 121.422 38.5226 121.422 38.2574V7.17157L114.836 0.585786C114.055 -0.195263 112.788 -0.195261 112.007 0.585787L105.422 7.17157V37.6716C105.422 38.2239 104.974 38.6716 104.422 38.6716H90.9216C90.3693 38.6716 89.9216 38.2239 89.9216 37.6716V7.17157L83.3358 0.585786C82.5547 -0.195263 81.2884 -0.195261 80.5074 0.585787L73.9216 7.17157ZM7.17158 121.422H38.2486C38.519 121.422 38.7779 121.312 38.9662 121.118L54.6067 105.004C54.969 104.63 55.1716 104.131 55.1716 103.611V91.25C55.1716 90.7196 54.9609 90.2109 54.5858 89.8358L38.9645 74.2145C38.7769 74.0269 38.5226 73.9216 38.2574 73.9216H7.17157L0.585786 80.5074C-0.195263 81.2884 -0.195261 82.5547 0.585787 83.3358L7.17157 89.9216H37.6716C38.2239 89.9216 38.6716 90.3693 38.6716 90.9216V104.422C38.6716 104.974 38.2239 105.422 37.6716 105.422H7.17157L0.585787 112.007C-0.195261 112.788 -0.19526 114.055 0.585789 114.836L7.17158 121.422ZM38.8598 72.4469L16.8851 50.4722V41.1585C16.8851 40.0539 17.7805 39.1585 18.8851 39.1585H28.1988L49.7655 60.7252C50.1561 61.1157 50.7892 61.1157 51.1798 60.7252L60.7257 51.1793C61.1162 50.7887 61.1162 50.1556 60.7257 49.7651L39.1589 28.1983V18.8846C39.1589 17.78 40.0544 16.8846 41.1589 16.8846H50.4726L72.4536 38.8656C72.6411 39.0531 72.7465 39.3075 72.7465 39.5727V61.6646C72.7465 62.195 72.5358 62.7037 72.1607 63.0788L63.4205 71.819C63.0527 72.1868 62.5561 72.3968 62.0361 72.4046L39.5819 72.7397C39.3115 72.7438 39.051 72.6381 38.8598 72.4469ZM145.565 16.8284L123.591 38.8032C123.4 38.9944 123.294 39.2549 123.298 39.5252L123.633 61.9795C123.641 62.4995 123.851 62.9961 124.219 63.3638L132.959 72.1041C133.334 72.4791 133.843 72.6899 134.373 72.6899H156.465C156.73 72.6899 156.985 72.5845 157.172 72.397L179.153 50.416V41.1023C179.153 39.9977 178.258 39.1023 177.153 39.1023H167.839L146.273 60.669C145.882 61.0596 145.249 61.0596 144.858 60.669L135.312 51.1231C134.922 50.7326 134.922 50.0994 135.312 49.7089L156.879 28.1421V18.8284C156.879 17.7239 155.984 16.8284 154.879 16.8284L145.565 16.8284ZM121.422 157.095V188.172L114.836 194.757C114.055 195.538 112.788 195.538 112.007 194.757L105.422 188.172V157.672C105.422 157.119 104.974 156.672 104.422 156.672H90.9216C90.3693 156.672 89.9216 157.119 89.9216 157.672V188.172L83.3358 194.757C82.5547 195.538 81.2884 195.538 80.5074 194.757L73.9216 188.172V157.086C73.9216 156.821 74.0269 156.566 74.2145 156.379L89.8358 140.757C90.2109 140.382 90.7196 140.172 91.25 140.172H103.611C104.131 140.172 104.63 140.374 105.004 140.736L121.118 156.377C121.312 156.565 121.422 156.824 121.422 157.095ZM188.172 73.9216H157.095C156.824 73.9216 156.565 74.0311 156.377 74.2251L140.736 90.3396C140.374 90.7128 140.172 91.2125 140.172 91.7326V104.093C140.172 104.624 140.382 105.132 140.757 105.507L156.379 121.129C156.566 121.316 156.821 121.422 157.086 121.422H188.172L194.757 114.836C195.538 114.055 195.538 112.788 194.757 112.007L188.172 105.422H157.672C157.119 105.422 156.672 104.974 156.672 104.422V90.9216C156.672 90.3693 157.119 89.9216 157.672 89.9216H188.172L194.757 83.3358C195.538 82.5547 195.538 81.2884 194.757 80.5074L188.172 73.9216ZM156.483 122.896L178.458 144.871V154.185C178.458 155.289 177.563 156.185 176.458 156.185H167.144L145.578 134.618C145.187 134.227 144.554 134.227 144.163 134.618L134.617 144.164C134.227 144.554 134.227 145.188 134.617 145.578L156.184 167.145V176.459C156.184 177.563 155.289 178.459 154.184 178.459H144.871L122.89 156.478C122.702 156.29 122.597 156.036 122.597 155.77V133.679C122.597 133.148 122.807 132.639 123.182 132.264L131.923 123.524C132.29 123.156 132.787 122.946 133.307 122.939L155.761 122.603C156.032 122.599 156.292 122.705 156.483 122.896ZM51.1663 178.401L73.1411 156.427C73.3323 156.235 73.4379 155.975 73.4339 155.705L73.0987 133.25C73.091 132.73 72.8809 132.234 72.5132 131.866L63.7729 123.126C63.3979 122.751 62.8892 122.54 62.3587 122.54H40.2668C40.0016 122.54 39.7473 122.645 39.5597 122.833L17.5788 144.814L17.5788 154.128C17.5788 155.232 18.4742 156.128 19.5788 156.128H28.8925L50.4592 134.561C50.8497 134.17 51.4829 134.17 51.8734 134.561L61.4194 144.107C61.8099 144.497 61.8099 145.13 61.4194 145.521L39.8526 167.088V176.401C39.8526 177.506 40.748 178.401 41.8526 178.401H51.1663Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div className="items-center hidden ml-4 lg:flex">
                <Menu />
              </div>
            </div>
            <div className="items-center flex gap-2 lg:gap-4">
              {session?.user ? (
                <Button
                  size="sm"
                  variant="white"
                  asChild
                  className="hidden sm:flex"
                >
                  <Link href="/app">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="tertiary"
                    asChild
                    className="hover:translate-y-0 hover:scale-100"
                  >
                    <Link href="/sign-in">Login</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="white"
                    asChild
                    className="hidden sm:flex"
                  >
                    <Link href="/sign-in">
                      Start for free
                      <ArrowRightIcon className="w-4 h-4 ml-2 hidden lg:block" />
                    </Link>
                  </Button>
                </>
              )}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden p-2 w-8 h-8"
              >
                {isOpen ? (
                  <XIcon className="w-4 h-4 duration-300" />
                ) : (
                  //   <Icons.menu className="w-3.5 h-3.5 duration-300" />
                  <svg
                    className="w-3.5 h-3.5 duration-300"
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9H15M1 1H15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Wrapper>
      </header>
    </div>
  );
};

export async function getServerSideProps(context:any) {
  const sessionData = await getServerSession(authOptions);
  return {
    props: {
      session: sessionData,
    },
  };
}

export default Navbar;
