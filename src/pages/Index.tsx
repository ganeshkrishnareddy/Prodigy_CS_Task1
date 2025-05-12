
import { CaesarCipher } from "@/components/CaesarCipher";
import { AboutMe } from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <CaesarCipher />
      <AboutMe />
    </div>
  );
};

export default Index;
