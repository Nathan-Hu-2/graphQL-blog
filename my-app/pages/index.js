import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Hero from "../components/Hero";
import BlogRepo from "../components/BlogRepo";
import Footer from "../components/Footer";


const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/cl9hqtf1n0sdo01uh615z6v5f/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Blog Hu</title>
        <meta name="description" content="A blog made with JAMstack" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <Hero />
      <BlogRepo />

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}      
      </main>
      <Footer />

    </div>
  );
}