import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { inter, playfair } from "@/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Anchor,
  ArrowDown,
  Calendar,
  ChevronDown,
  Coffee,
  ConciergeBell,
  Film,
  Globe,
  Group,
  MapPin,
  Menu,
  Search,
  Ship,
  Star,
  User,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const placeData = [
  {
    id: 1,
    name: "Luxurious Pearl Villa",
    location: "The Pearl, Daha",
    rating: 4.8,
    price: 1200,
    img: "/qatar-v2-img/house.jpg",
  },
  {
    id: 2,
    name: "Sunset Bay Resort",
    location: "Sunrise Beach, Maribu",
    rating: 4.6,
    price: 850,
    img: "/qatar-v2-img/house2.jpg",
  },
  {
    id: 3,
    name: "Mountain Bliss Retreat",
    location: "Highlands, Pura",
    rating: 4.9,
    price: 1500,
    img: "/qatar-v2-img/house3.jpg",
  },
  {
    id: 4,
    name: "Ocean Breeze Hotel",
    location: "Coastal Line, Sevilla",
    rating: 4.7,
    price: 950,
    img: "/qatar-v2-img/house4.jpg",
  },
  {
    id: 5,
    name: "Urban Comfort Suites",
    location: "City Center, Megapolis",
    rating: 4.3,
    price: 700,
    img: "/qatar-v2-img/house5.jpg",
  },
  {
    id: 6,
    name: "Lakeview Serenity Cabin",
    location: "Emerald Lake, Carintha",
    rating: 4.8,
    price: 1100,
    img: "/qatar-v2-img/house6.jpg",
  },
  {
    id: 7,
    name: "Tropical Haven Villa",
    location: "Paradise Island, Sumara",
    rating: 4.5,
    price: 1300,
    img: "/qatar-v2-img/room2.jpg",
  },
  {
    id: 8,
    name: "Arctic Glow Chalet",
    location: "Frostville, Northland",
    rating: 4.9,
    price: 1800,
    img: "/qatar-v2-img/room3.jpg",
  },
];

const amenities = [
  { icon: <Wifi />, name: "Wi-Fi" },
  { icon: <Coffee />, name: "Personal Bar" },
  { icon: <Anchor />, name: "Personal Pier" },
  { icon: <Ship />, name: "Superyacht" },
  { icon: <Film />, name: "Own Cinema" },
  { icon: <ConciergeBell />, name: "Room Service" },
];

const PlacesPage = () => {
  const searchParams = useSearchParams();
  const paramId = searchParams.get("id");

  const mainPlace = placeData.filter(
    ({ id }) => paramId !== null && id === Number(paramId),
  )[0];

  const otherPlaces = placeData.filter(
    ({ id }) => paramId !== null && id !== Number(paramId),
  );

  return (
    <>
      <div className="relative z-10 min-h-screen">
        <div className="absolute inset-0 z-10 h-[14.5%] bg-[#ffe5d5]" />
        <div className="absolute inset-0 z-0 bg-white" />
        <Navbar />
        <main className="relative z-20 mx-auto mt-5 w-11/12 px-7">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/animations/qatar-travel-v2">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Place to Stay</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Villa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-5 flex gap-10">
            {/* Image Content */}
            <div className="w-full space-y-3">
              <motion.div
                key={mainPlace.id}
                initial={{ scale: 0.4, top: 300, opacity: 0 }}
                animate={{ scale: 1, top: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-30 h-[30rem] w-full overflow-hidden rounded-xl"
              >
                <motion.div
                  initial={{ scale: 1.3 }}
                  animate={{ scale: [1.3, 1, 1.3] }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute h-[30rem] w-full"
                >
                  <Image
                    src={mainPlace.img}
                    alt=""
                    fill
                    className="rounded-xl"
                  />
                </motion.div>
              </motion.div>

              <div className="flex gap-5">
                {otherPlaces.slice(0, 3).map(({ img, id }, i, array) => (
                  <motion.div
                    key={id}
                    className="relative z-30 flex h-44 w-44 overflow-hidden rounded-xl"
                  >
                    <motion.div
                      initial={{ scale: 1.3 }}
                      animate={{ scale: [1.3, 1, 1.3] }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="absolute h-full w-full"
                    >
                      <Image src={img} alt="" fill className="rounded-xl" />
                    </motion.div>

                    {i === array.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-3xl"
                      >
                        +9
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Image Content */}

            {/* Description Content */}
            <div className={cn("w-full bg-transparent text-black")}>
              <h1 className={cn("text-3xl font-semibold", playfair.className)}>
                {mainPlace.name}
              </h1>

              <p className="mt-1 flex items-center gap-1 font-semibold">
                <span className="flex gap-1 text-slate-700">
                  Hosted by{" "}
                  <User className="rounded-full border border-slate-400 bg-slate-400 p-1 text-black" />
                </span>{" "}
                Abbas Abdullah
              </p>

              <p
                className={cn(
                  "mt-3 text-2xl font-semibold",
                  playfair.className,
                )}
              >
                About {mainPlace.name}
              </p>

              <p className="mt-2 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                distinctio qui maxime voluptatibus quod repellendus mollitia
                quasi dignissimos ducimus ullam.
              </p>

              <p className="m-5 text-3xl font-bold">
                ${mainPlace.price} / night
              </p>

              <div className="max-w-sm space-y-7 rounded-lg bg-slate-100 p-5 shadow-2xl">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-slate-500" />
                    <div className="-mt-1">
                      <span className="font-medium text-slate-500">Start</span>
                      <p className="font-semibold">July 22,2021</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-slate-500" />
                    <div className="-mt-1">
                      <span className="font-medium text-slate-500">Start</span>
                      <p className="font-semibold">July 22,2021</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <Users className="text-slate-500" />
                    <div className="-mt-1">
                      <span className="font-medium text-slate-500">Guests</span>
                      <p className="font-semibold">2 Guests</p>
                    </div>
                  </div>
                  <ChevronDown size={26} />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="my-3"
                >
                  <Button className="rounded-full border bg-orange-400 text-white hover:border-orange-400 hover:bg-transparent hover:text-orange-400">
                    Book Now
                  </Button>
                </motion.div>
              </div>

              <div className="mb-3 mt-8 flex max-w-sm items-center justify-between border-b border-t border-black py-4">
                <div>
                  <p className="flex items-start gap-1 text-4xl font-bold">
                    {mainPlace.rating}{" "}
                    <span className="text-sm font-medium"> / 128 reviews</span>
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <Star className="size-5 text-slate-600" />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="z-30 flex">
                    <Image
                      width={40}
                      height={40}
                      src="/qatar-v2-img/person.png"
                      alt=""
                      className="relative z-10 rounded-full border border-white"
                    />
                    <Image
                      width={40}
                      height={40}
                      src="/qatar-v2-img/person2.png"
                      alt=""
                      className="relative -ml-2 rounded-full border border-white"
                    />
                    <Image
                      width={40}
                      height={40}
                      src="/qatar-v2-img/person3.png"
                      alt=""
                      className="-ml-2 rounded-full border border-white"
                    />
                  </div>
                </div>

                <motion.div>
                  <Button
                    variant="outline"
                    className="rounded-full border-black text-black hover:bg-black hover:text-white"
                  >
                    Rate Now
                  </Button>
                </motion.div>
              </div>

              <div className="max-w-sm pb-10">
                <h1 className="text-2xl font-semibold">Amenities</h1>
                <div className="grid grid-cols-3 items-center justify-between gap-6 py-3">
                  {amenities.map(({ icon, name }) => (
                    <p className="flex flex-col items-center font-medium">
                      {icon} {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Description Content */}
          </div>

          <div className="w-full pb-5">
            <h1
              className={cn(
                "text-3xl font-semibold text-black",
                playfair.className,
              )}
            >
              Similiar Place to Stay
            </h1>

            <ul className="grid h-full w-full grid-cols-4 gap-7 pb-10 pt-3">
              {otherPlaces
                .slice(0, 4)
                .map(({ id, name, price, location, rating, img }) => (
                  <motion.li
                    key={id}
                    whileTap={{ scale: 0.8 }}
                    className="cursor-pointer"
                  >
                    <Link href={`/animations/qatar-travel-v2/places?id=${id}`}>
                      <Card
                        className="relative flex flex-col justify-between gap-44 overflow-hidden border-none px-0 py-2"
                        style={{
                          background: `url(${img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="absolute inset-0 z-0 bg-black bg-opacity-40" />

                        <CardContent className="relative z-10 px-2">
                          <div className="flex items-center justify-between">
                            <p className="w-fit rounded-lg bg-white px-2 py-2">
                              ${price} / night
                            </p>
                            <Search
                              size={32}
                              className="rounded-full bg-white p-2"
                            />
                          </div>
                        </CardContent>

                        <CardFooter className="relative z-10 flex-col items-start gap-2 p-0 px-2">
                          <p className="text-lg font-medium text-white">
                            {name}
                          </p>
                          <p className="flex gap-1 text-white">
                            <MapPin />
                            {location}
                          </p>
                          <p className="text-white">{rating}</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.li>
                ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav
      className={`sticky z-30 bg-[#ffe5d5] text-black transition-transform duration-300`}
    >
      <ul className="z-20 flex w-full items-center justify-between px-5 py-3 xl:px-20">
        <ul>
          <li className="text-2xl font-semibold">Zuhal Travel</li>
        </ul>

        <ul className="hidden w-1/3 items-center justify-between px-5 sm:flex">
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Appartment
          </li>
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Where to go
          </li>
          <li className="cursor-pointer text-base font-medium capitalize hover:underline">
            Contact Us
          </li>
        </ul>

        <ul className="flex items-center gap-5">
          <li className="">Become a host</li>
          <li className="">
            <Globe />
          </li>
          <li className="flex gap-3 rounded-lg border border-black px-3 py-2">
            <Menu />
            <User />
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <ul className="flex flex-col gap-4 pt-5 text-black">
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Appartment
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Where to go
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Contact Us
              </li>
              <li className="cursor-pointer text-sm font-medium capitalize hover:underline">
                Become a Host
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
};

export default PlacesPage;
