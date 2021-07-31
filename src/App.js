import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  RecoilRoot, 
} from 'recoil';
import { Home } from "./containers/home";
import { ImageContainer } from "./containers/image-container";
import { VideoPlayerContainer } from "./containers/video-player-container";

function App() {
  return (
    <div className="flex flex-col h-full font-mono">
      <div className="flex w-full justify-center bg-blue-500 h-12 items-center ">
        <span className="text-lg text-white">YouTube Video Player</span>
      </div>      
      <RecoilRoot>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="flex items-center h-full w-full bg-gradient-to-b bg-gray-100">     
            <Switch>             
                <Route path="/video">
                  <VideoPlayerContainer />
                </Route>
                <Route path="/image">      
                  <ImageContainer />        
                </Route>
                <Route path={["/","/home"]}>
                  <Home />
                </Route>
            </Switch>
          </div>
        </Router>
      </RecoilRoot>
    </div>  
  );
}

export default App;
