import Head from "next/head";
import Image from "next/image";

export default function ProductPreviewCard() {
  return (
    <>
      <Head>
        <title>Frontend Mentor - Product Preview Card</title>
      </Head>
      <div className="min-h-screen bg-orange-50">
        <main className="py-7 px-4">
          <article className="mx-auto flex max-w-2xl flex-col sm:flex-row">
            <Image
              src="/image-product-mobile.jpg"
              alt="Product Image"
              width={686}
              height={480}
              className="rounded-t-xl sm:hidden"
            />
            <Image
              src="/image-product-desktop.jpg"
              alt="Product Image"
              width={600}
              height={900}
              className="hidden rounded-l-xl sm:inline sm:w-72"
            />
            <section className="flex flex-col rounded-b-xl bg-white p-6 sm:rounded-r-xl sm:p-8">
              <p className="mb-3 font-['Montserrat'] text-xs font-normal uppercase tracking-[5px] text-slate-500 sm:mb-5">
                Perfume
              </p>
              <h1 className="pb-4 font-['Fraunces'] text-3xl font-bold text-neutral-800 sm:pb-6">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="pb-4 font-['Montserrat'] text-sm font-normal leading-7 tracking-wide text-slate-500 sm:pb-6">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <p className="flex items-center pb-4 sm:pb-6">
                <span className="pr-5 font-['Fraunces'] text-3xl font-bold text-green-800/95">
                  $149.99
                </span>
                <span className="font-['Montserrat'] text-sm font-normal text-slate-500 line-through">
                  $169.99
                </span>
              </p>
              <button className="rounded-lg bg-green-800/95 p-4 text-white hover:bg-green-900">
                <span className="flex items-center justify-center">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 inline-block"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8649 8.1664C13.7779 8.52626 14.3794 9.40635 14.3831 10.3878C14.381 11.2088 13.9589 11.9716 13.2644 12.4094C13.4723 12.7661 13.5825 13.1712 13.584 13.584C13.5914 14.5429 13.0268 15.4139 12.1485 15.7985C11.2701 16.1831 10.2471 16.0073 9.54753 15.3516C8.84795 14.6959 8.60643 13.6863 8.93348 12.785H7.0477C7.40887 13.78 7.07458 14.8942 6.22528 15.5261C5.37597 16.158 4.21274 16.158 3.36344 15.5261C2.51413 14.8942 2.17985 13.78 2.54101 12.785H1.59812C1.15681 12.785 0.799059 12.4272 0.799059 11.9859C0.799059 11.5446 1.15681 11.1868 1.59812 11.1868H11.9859C12.4272 11.1868 12.785 10.8291 12.785 10.3878C12.785 9.94648 12.4272 9.58873 11.9859 9.58873H3.76357C3.39211 9.60145 3.06093 9.35638 2.96451 8.99742L0.982843 1.59813H0V1.548e-05H1.59812C1.96072 -0.00157591 2.27893 0.241186 2.37321 0.591319L2.6369 1.59813H13.584C13.8259 1.59095 14.0581 1.69379 14.2153 1.87781C14.3692 2.07435 14.4224 2.33151 14.3591 2.57299L12.8649 8.1664ZM4.39483 7.99061H11.2587L12.5452 3.19625H3.06839L4.39483 7.99061ZM4.79436 14.3831C4.35305 14.3831 3.9953 14.0253 3.9953 13.584C3.9953 13.1427 4.35305 12.785 4.79436 12.785C5.23566 12.785 5.59342 13.1427 5.59342 13.584C5.59342 14.0253 5.23566 14.3831 4.79436 14.3831ZM10.3878 13.584C10.3878 14.0253 10.7455 14.3831 11.1868 14.3831C11.6281 14.3831 11.9859 14.0253 11.9859 13.584C11.9859 13.1427 11.6281 12.785 11.1868 12.785C10.7455 12.785 10.3878 13.1427 10.3878 13.584Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-['Montserrat'] text-sm font-bold">
                    Add to Cart
                  </span>
                </span>
              </button>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
