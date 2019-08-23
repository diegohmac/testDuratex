import React, {useState, useEffect} from 'react';
import { Wrapper, Container, Card } from './styles';
import GlobalStyles from './GlobalStyles';

function App() {

  const [windowWidth, setWidth] = useState(0);
  
  function getWindowSize(func){
    const windowSize = window.innerWidth;
    console.log(windowSize);
    if (func) func(windowSize);
  }

  useEffect(() => {
    window.addEventListener('resize', () => getWindowSize(setWidth));
    setWidth(window.innerWidth);
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', getWindowSize());
    }
  }, [])

  return (
    <>
      <Wrapper>
        <Container>
          <p className='txt1'>Hello world!</p>
          <p className='txt2'>Good morning.</p>
          <Card>
            {windowWidth && windowWidth > 375 
              ? <div><p>Hello strange</p><p>Bye bye.</p></div>
              : <p>Good Night</p>
            }
          </Card>
          {windowWidth && windowWidth > 375 
            ? <p className='txt3'>Hello box!</p>
            : <p className='txt3'>Hello strange!</p>
          }
          <p className='txt4'>Bye bye.</p>
        </Container>
      </Wrapper>
      <GlobalStyles/>
    </>
  );
}

export default App;
