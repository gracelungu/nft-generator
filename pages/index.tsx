import Layout from "@/src/components/common/Layout";
import Landing from "@/src/components/Landing";
import Operations from "@/src/components/Operations";
import Sale from "@/src/components/Sale";

function HomePage() {
  return (
    <Layout>
      <Landing />
      <Operations />
      <Sale />
    </Layout>
  );
}

export default HomePage;
