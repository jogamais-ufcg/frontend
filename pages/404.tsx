export default function Custom404() {
  return null;
}

export function getStaticProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}
