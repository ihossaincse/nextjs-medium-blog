import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import PostBlock from "../components/PostBlock";
import { sanityClient } from "../lib/sanity.server";

const Home = ({ postData }) => {
  return (
    <Layout>
      <Banner
        title="Medium is a place to write, read, and connect"
        text="It's easy and free to post your thinking on any topic and connect with millions of readers."
        btnText="Start Writing"
        btnUrl="/"
      />

      <div className="grid grid-cols-1 gap-5 px-4 mx-auto my-5 sm:grid-cols-3 max-w-7xl">
        {postData.map(
          ({ _id, slug, title, description, mainImage, author }) => (
            <PostBlock
              key={_id}
              slug={slug?.current}
              title={title}
              description={description}
              mainImage={mainImage}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const sitePostQuery = `*[_type == 'post'] {
    _id, 
    slug,
    title,
    mainImage,
    description
  }`;
  const postData = await sanityClient.fetch(sitePostQuery);
  return {
    props: {
      postData,
    },
  };
}
