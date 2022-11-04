import Head from "next/head";
import Image from "next/image";

export default function QrCode() {
  return (
    <>
      <Head>
        <title>Frontend Mentor - QR Code</title>
      </Head>
      <div className="flex h-screen items-center justify-center bg-slate-200">
        <main>
          <article className="w-80 rounded-2xl bg-white p-4">
            <Image
              src="/image-qr-code.png"
              alt="QR Code"
              width={288}
              height={288}
              className="mb-6 rounded-lg"
            />
            <div className="flex flex-col space-y-4 pb-6">
              <h1 className="text-center text-xl font-extrabold text-slate-800">
                Improve your front-end skills by building projects
              </h1>
              <p className="text-center text-sm font-extralight text-slate-500">
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
