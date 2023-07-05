import { productPaths, productDetails } from "../lib/Products";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";

export default function Page({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <img
          className="w-[500px] h-[500px] object-contain"
          src={data.image}
          alt={data.title}
        />

        <div className="grid gap-5 md:flex md:flex-col md:gap-3">
          <div className="text-bold text-xl text-center md:text-left">
            {data.title}
            <span className="text-xs font-normal">
              <br />
              in {data.category}
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="font-semibold">{data.rating.rate}</span>
            <div className="flex gap-1">
              <Image
                src={
                  data.rating.rate < 1
                    ? "/images/star-empty.svg"
                    : "/images/star-filled.svg"
                }
                height={16}
                width={16}
              />
              <Image
                src={
                  data.rating.rate < 2
                    ? "/images/star-empty.svg"
                    : "/images/star-filled.svg"
                }
                height={16}
                width={16}
              />
              <Image
                src={
                  data.rating.rate < 3
                    ? "/images/star-empty.svg"
                    : "/images/star-filled.svg"
                }
                height={16}
                width={16}
              />
              <Image
                src={
                  data.rating.rate < 4
                    ? "/images/star-empty.svg"
                    : "/images/star-filled.svg"
                }
                height={16}
                width={16}
              />
              <Image
                src={
                  data.rating.rate < 5
                    ? "/images/star-empty.svg"
                    : "/images/star-filled.svg"
                }
                height={16}
                width={16}
              />
            </div>
            <span className="font-semibold">
              {data.rating.count}{" "}
              <span className="font-normal text-xs">people rated!</span>
            </span>
          </div>
          <div className="text-bold text-lg">
            ${data.price}
            <span className="font-light text-xs"> only</span>{" "}
          </div>
          <div className="grid gap-1">
            <span className="text-bold mt-2">
              About this Item! <br />
            </span>
            {data.description}
          </div>
          <button
            type="submit"
            className="rounded border-2 border-black hover:bg-[#f85606] hover:text-white transition-all duration-300 px-4 py-1"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await productPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await productDetails(params.id);

  return {
    props: {
      data,
    },
  };
}
