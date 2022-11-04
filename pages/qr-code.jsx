import Head from "next/head";
import Image from "next/image";

export default function QrCode() {
  return (
    <>
      <Head>
        <title>Frontend Mentor - QR Code</title>
      </Head>
      <div className="bg-zinc-100 h-screen flex items-center justify-center">
        <main>
          <article className="bg-white w-80 p-4 rounded-2xl">
            <Image
              src="/image-qr-code.png"
              alt="QR Code"
              width={288}
              height={288}
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col space-y-4 pb-6">
              <h1 className="text-center text-slate-800 text-xl font-extrabold">
                Improve your front-end skills by building projects
              </h1>
              <p className="text-center text-slate-500 text-sm font-extralight">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
