import Advantages from "@/src/components/Advantages";
import BottomNav from "@/src/components/common/BottomNav";
import Layout from "@/src/components/common/Layout";
import Landing from "@/src/components/Landing";
import Pricing from "@/src/components/Pricing";

function HomePage() {
  return (
    <Layout description="Generate NFT collections and corresponding metadata with no code">
      <Landing />
      <Advantages />
      {/* <Pricing /> */}

      <BottomNav />
    </Layout>
  );
}

export default HomePage;
