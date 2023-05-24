import { Grid } from '@mantine/core';
import './CharacterHeader.jsx'
import './App.css'
import CharacterHeader from "./CharacterHeader";
import Abilities from "./Abilities.jsx";
import Inspiration from "./Inspiration.jsx";

function App() {
  return (
      <>
        <CharacterHeader />
          <Grid>
              <Grid.Col span={2}>
                  <Abilities />
              </Grid.Col>
              <Grid.Col span={3}>
                  <Inspiration />
              </Grid.Col>
          </Grid>
      </>
  )
}

export default App
