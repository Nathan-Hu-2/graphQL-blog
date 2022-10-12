import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.graphcms.com/v2/cl21zpqgk4oep01xtflkm1vff/master"
);

// will query the specific post that the slug matches
const QUERY = gql`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      id,
      title,
      slug,
      datePublished,
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

// Gets all the blog post slugs
const SLUGLIST = gql`
  {
    post {
      slug
    }
  }
`;

// Here u call GraphQL to give you what you need (posts)
// if it doesnt exist, you can provide a fallback website
export async function getStaticPaths() {
  const {posts} = await graphcms.request(SLUGLIST)
  return {
    paths: posts.map((post) => ({params: {slug: post.slug}})),
    fallback:false, 
  };
}

export async function getStaticProps({params}) {
  const slug = params.slug;
  const { posts } = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}) {
  return (
    <main className={styles.blog}>
      <img src={post.coverPhoto.url} className={styles.cover} alt="" />
      <div className={styles.title}>
        <img src={post.author.avatar.url} alt=""></img>
        <div className={styles.authtext}>
          <h6>By {post.author.name}</h6>
          <h6 className={styles.date}>{post.datePublished}</h6>
        </div>
      </div>
      <h2>{post.title}</h2>
    </main>
  )
}