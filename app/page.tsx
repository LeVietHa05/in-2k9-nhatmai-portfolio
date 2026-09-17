import Image from "next/image";
import { TabItem } from "./components/TabStack";
import TabStack from "./components/TabStack";
import TabStack2 from "./components/TabStack2";
const data: TabItem[] = [
  { title: "Interstellar", variant: "dark", notchX: 10, notchW: 200, link: "" },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    variant: "light",
    notchX: 70,
    notchW: 200,
    link: "",
  },
  { title: "Pearl", variant: "dark", notchX: 10, notchW: 200, link: "" },
  { title: "Coraline", variant: "light", notchX: 70, notchW: 200, link: "" },
  { title: "MAI", variant: "dark", notchX: 10, notchW: 200, link: "" },
  { title: "Mamma Mia", variant: "light", notchX: 70, notchW: 200, link: "" },
  {
    title: "AI - Artificial Intelligence",
    variant: "dark",
    notchX: 10,
    notchW: 200,
    link: "",
  },
  {
    title: "Dead Poets Society",
    variant: "light",
    notchX: 70,
    notchW: 200,
    link: "",
  },
  {
    title: "Adventure Time",
    variant: "dark",
    notchX: 10,
    notchW: 200,
    link: "",
  },
  { title: "Better Days", variant: "light", notchX: 70, notchW: 200, link: "" },
  {
    title: "Spider-Man: No Way Home",
    variant: "dark",
    notchX: 10,
    notchW: 200,
    link: "",
  },
  {
    title: "Little Woman",
    variant: "light",
    notchX: 70,
    notchW: 200,
    link: "",
  },
  { title: "Seven (1995)", variant: "dark", notchX: 10, notchW: 200, link: "" },
  {
    title: "Before Sunrise",
    variant: "light",
    notchX: 70,
    notchW: 200,
    link: "",
  },
  // ...
];

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white text-black font-[var(--font-inter)]">
      <Image src={"/home/1.png"} alt="" width={1440} height={829}></Image>
      <div className="px-12 relative">
        <div className="font-bold text-[74px] uppercase pt-8 drop-shadow-2xl">
          Introduction
        </div>
        <div className="text-2xl">
          <p>
            I have watched more than 500 films on Letterboxd, and it is safe to
            say that watching movies is my favorite thing to do. Before I knew
            it, movies and films have become my comfort zone. A lot of the
            things I know, think about, and get inspired by somehow trace back
            to films. Sometimes a movie gives me a new idea. Sometimes it makes
            me look at something differently. And sometimes I just remember one
            scene for years without really knowing why. I think my love for
            movies started when I was really young. I used to spend hours
            watching television at my grandparents’ house, completely glued to
            the screen. I probably did not understand half of what was
            happening, but I loved the feeling of being pulled into another
            world.
          </p>
          <p>
            As I got older, I started finding films that forced me to think
            more. Some made me question things I had always believed. Some
            showed me lives that are completely different from mine. There were
            also films that made me so stunned that I sat through the credits
            and tried to figure out what I had just watched and why it affected
            me so much.
          </p>
          <p>
            That feeling is probably why I made this website. I wanted a place
            to keep track of the movies that mean something to me, along with
            the thoughts, scenes, and small details I do not want to forget. In
            a way, this website is a way I pay homage to cinema.
          </p>
          <p>
            Movies have been part of my life for as long as I can remember. They
            have shaped the way I see stories, people, and even everyday life.
            This website is my way of giving some of that love back.
          </p>
        </div>
        <div className="border-2 border-black my-8"></div>
        <div className="flex justify-start items-center gap-3">
          <div className="text-[32px]">READING MY REVIEW</div>
          <Image src={"/arrow-down.png"} alt="" width={36} height={36}></Image>
        </div>
        <div className="border-2 border-black my-8"></div>
        <TabStack2 items={data} />

        <div
          className="relative flex items-center justify-center w-4xl aspect-5/3 z-1 "
          style={{ perspective: "1000px" }} // Kích hoạt không gian 3D cho các lớp bên trong
        >
          <div
            className="relative w-full h-full left-100 bottom-100  "
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 1. MẶT TRƯỚC (CHỮ "MY REVIEW") */}
            <div
              className="absolute z-3 inset-0 flex items-center justify-center uppercase text-center text-[#F7F1E3] text-[100px] font-bold bg-[#5D837C] shadow-xl/30"
              style={{
                zIndex: 999,
                transform: "translateZ(0px)", // Đảm bảo cố định ở bề mặt trực diện
              }}
            >
              My Review
            </div>

            {/* 2. MẶT DƯỚI (ĐÓNG VAI TRÒ LÀ CÁI BÓNG NGHIÊNG TRÁI) */}
            <div
              className="absolute  z-0 left-0 right-0 h-[160px] bg-[#5F5C39]"
              style={{
                zIndex: -1,
                bottom: "-160px", // Đặt ngay sát mép dưới của mặt trước
                transformOrigin: "top center", // Ghim tâm xoay ở cạnh đáy mặt trước
                // Xoay nằm ngang 90 độ, sau đó skewX(-45deg) để kéo nghiêng bóng về bên trái
                transform: "rotateX(180deg) skewX(-45deg)",
                // Tạo hiệu ứng bóng mờ nhạt dần ra xa nếu muốn (Tùy chọn, có thể bỏ mask nếu muốn bóng phẳng lì)
                 
                // WebkitMaskImage:
                //   "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
