import { TextInput, Grid, Flex } from '@mantine/core';
import './App.css'

function App() {
  return (
      <>
          <Grid>
              <Grid.Col span={4}>
                  <Flex
                      mih="100%"
                      justify="center"
                      align="center"
                  >
                      <TextInput
                          label="Character Name"
                      />
                  </Flex>
              </Grid.Col>
              <Grid.Col span={8} sx={{ border: '1px solid black' }}>
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
              </Grid.Col>
          </Grid>
      </>
  )
}

export default App
