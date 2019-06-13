import React from 'react';
import { View } from './components/~reusables/atoms/View';
import { Card } from './components/~reusables/atoms/Card';
import { Container } from './components/~reusables/atoms/Container';
import { H3 } from './components/~reusables/atoms/Text';

function App() {
  return (
    <View>
      <Card>
        <Container>
          <H3>Welcome Back!</H3>
          <Text>To keep connected with us please login with your personal info.<Text>
            <Button>Sign In</Button>
        </Container>
        <Container></Container>
      </Card>
    </View>
  );
}

export default App;
