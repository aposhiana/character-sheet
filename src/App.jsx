import { TextInput, Grid } from '@mantine/core';
import './App.css'

function App() {
  return (
      <>
          <TextInput
              label="Character Name"
          />
          <Grid>
              <Grid.Col span={4}>
                  <TextInput
                      label="Class & Level"
                  />
              </Grid.Col>
              <Grid.Col span={4}>
                  <TextInput
                      label="Background"
                  />
              </Grid.Col>
              <Grid.Col span={4}>
                  <TextInput
                      label="Player Name"
                  />
              </Grid.Col>
              <Grid.Col span={4}>
                  <TextInput
                      label="Race"
                  />
              </Grid.Col>
              <Grid.Col span={4}>
                  <TextInput
                      label="Alignment"
                  />
              </Grid.Col>
              <Grid.Col span={4}>
                  <TextInput
                      label="Experience Points"
                  />
              </Grid.Col>
          </Grid>
      </>
  )
}

export default App
