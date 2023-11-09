import { MainArticle} from "./componentes/MainComponent";
import { Header } from "./componentes/Header";
import { NewContainer } from "./componentes/NewContainer";
import { ArticlesContainer } from "./componentes/ArticlesContainer";



function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-7">
        <MainArticle />
      <NewContainer />
      </div>     
      <ArticlesContainer />   
      
      
    </main>
  );
}

export default App;
