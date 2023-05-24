import './CharacterHeader.jsx'
import './App.css'
import CharacterHeader from "./CharacterHeader";
import Abilities from "./Abilities.jsx";
import { Grid } from '@mantine/core';

function App() {
  return (
      <>
        <CharacterHeader />
          <Grid>
              <Grid.Col span={2}>
                  <Abilities />
              </Grid.Col>
          </Grid>
      </>
  )
}

export default App
