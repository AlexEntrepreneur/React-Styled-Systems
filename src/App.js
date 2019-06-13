import React from 'react';
import { View } from './components/~reusables/atoms/View';
import { Card } from './components/~reusables/atoms/Card';
import { Container } from './components/~reusables/atoms/Container';
import { Form } from './components/~reusables/molecules/Form';
import { Button, ButtonPrimary } from './components/~reusables/atoms/Buttons';
import { Input } from './components/~reusables/atoms/Inputs';
import { Text, H3, SmallText } from './components/~reusables/atoms/Text';
import { theme_secondary, theme_primary } from './components/~reusables/variables/colors';
import { medium_space, extra_large_space, normal_space } from './components/~reusables/variables/spacing';
import { desktop_width } from './components/~reusables/variables/media-queries';

function App() {
  return (
    <View hCenter vCenter bgColor={theme_secondary}>
      <Card>
        <Container>
          <H3>Welcome Back!</H3>
          <Text>To keep connected with us please login with your personal info.</Text>
          <Button>Sign In</Button>
        </Container>
        <Container>
          <H3>Create Account</H3>
          <SmallText>or use your email for registration</SmallText>
          <Form>
            <Input />
            <Input />
            <Input />
            <Button>Sign Up</Button>
          </Form>
        </Container>
      </Card>
    </View>
  );
}

export default App;
