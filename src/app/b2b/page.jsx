import Hero from './Hero/index'; 
import SectionTwo from './SectionTwo/index';
import SectionTrhee from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import Chat from './Chat/chat'

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <Hero />
        <SectionTwo />
        <SectionTrhee />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Chat />
      </main>
    </div>
  );
}

export default Home;