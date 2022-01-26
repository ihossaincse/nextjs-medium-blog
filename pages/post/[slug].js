import Image from "next/image";
import Layout from "../../components/Layout";
import { urlFor } from "../../lib/sanity";
import { sanityClient } from "../../lib/sanity.server";

const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <div className="max-w-3xl px-5 mx-auto">
        <div className="relative w-full h-52">
          <Image
            src={urlFor(postData.mainImage).url()}
            alt={postData.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="py-5">
          <h2 className="mb-5 text-3xl">{postData.title}</h2>
          <div className="postText">
            <BlockContent blocks={postData.body} serializers={serializers} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const sitePostQuery = `*[_type == 'post'] {
    _id, 
    slug {
      current
    }
  }`;
  const postData = await sanityClient.fetch(sitePostQuery);
  const paths = postData.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const sitePostQuery = `*[_type == 'post' && slug.current == $slug] {
    _id, 
    slug {
    current
  },
  body,
  mainImage,
  title
  } `;
  const postData = await sanityClient.fetch(sitePostQuery, {
    slug: params?.slug,
  });

  return {
    props: {
      postData: postData[0],
    },
  };
}
