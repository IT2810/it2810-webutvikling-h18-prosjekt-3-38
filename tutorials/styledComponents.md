# Styled components tutorial

### [Back to README](../README.md/)

## Install:
```javascript
npm install --save styled-components
```

## Usage
```javascript
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 5px 15px;
`
render(
  <div>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
)
```
