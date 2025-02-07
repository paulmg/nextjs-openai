import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from 'components/AppLayout';

export default function NewPost() {
  return (
    <div></div>
  )
};

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{children}</AppLayout>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
    }
  }
})
