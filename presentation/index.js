// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  opener: require("../assets/opener.jpg"), 
  waiting: require("../assets/waiting.jpg"), 
  coding: require("../assets/coding.jpg"), 
  next: require("../assets/next.jpg"), 
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  reactLogo: require("../assets/react_logo.png"),
  markdown: require("../assets/markdown.png"),
  reactTree: require("../assets/react-element-tree.png"),
  animTree: require("../assets/animated-tree.gif"),
  sketch: require("../assets/sketch.jpg"),
  lifecycle: require("../assets/lifecycle.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgImage={images.opener.replace("/", "")} bgDarken={0.45} transition={["zoom"]} bgColor="primary">
          <Image src={images.reactLogo.replace("/", "")} margin="0px auto 20px" height="128px" />

          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React Codelab
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Get your laptops ready to rumbbble
          </Text>
        </Slide>
        <Slide bgImage={images.waiting.replace("/", "")} bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Let's get to know YOU
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How many of you already React?
          </Text>
        </Slide>
        <Slide bgImage={images.coding.replace("/", "")} bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            So what is React?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            What do you think it is?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>5 keys to understand React</Heading>
          <List>
            <Appear><ListItem>Everything is a Component</ListItem></Appear>
            <Appear><ListItem>JSX is not HTML</ListItem></Appear>
            <Appear><ListItem>Using Props vs State</ListItem></Appear>
            <Appear><ListItem>Know the Component Lifecycle</ListItem></Appear>
            <Appear><ListItem>Know your Component Types</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>Everything is a Component</Heading>
          <CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-hello.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>And that gives us composition</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-parent-child.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>Let's build Facebook</Heading>
          <Appear><CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-facebook.example")}
          /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>What is JSX?</Heading>
          <Appear><CodePane
            textSize={30}
            lang="js"
            source={require("raw-loader!../assets/code/react-jsx.example")}
          /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>Conditional Logic</Heading>
          <Appear><CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/react-jsx-conditional.example")}
          /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>Conditional Rendering</Heading>
          <Appear><CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/react-jsx-conditional-rendering.example")}
          /></Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44} bold>
            React Component Tree
          </Text>
          <Image src={images.reactTree.replace("/", "")} margin="0px auto 40px" height="500px" />
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44}>
            Data flows from parent to children, except when it comes to state, which originates inside a component.
          </Text>
          <Image src={images.reactTree.replace("/", "")} margin="0px auto 40px" height="500px" />
        </Slide>
        <Slide bgColor="primary">
          <Text margin="40px 0" textColor="secondary" textSize={44}>
            Data keeps flowing through React
          </Text>
          <Image src={images.animTree.replace("/", "")} margin="0px auto 40px" height="500px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit textColor="tertiary" caps>What is Data in React?</Heading>
          <Appear><Heading size={3} fit textColor="secondary" caps>Two concepts of data: Props and State</Heading></Appear>         
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>Props are how components talk to each other</Heading>
          <Appear><CodePane
            textSize={25}
            lang="js"
            source={require("raw-loader!../assets/code/react-props.example")}
          /></Appear>
        </Slide>
        <Slide>
          <Image src={images.sketch.replace("/", "")} margin="0px auto 40px" height="500px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>State is what changes inside a component</Heading>
          <Text margin="40px 0" textColor="secondary" textSize={24} bold>
             (a local dictionary of values available inside components)
          </Text>
          <Appear><CodePane
            textSize={22}
            lang="js"
            source={require("raw-loader!../assets/code/react-state.example")}
          /></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.lifecycle.replace("/", "")} margin="0px auto 40px" height="700px" />
        </Slide>
        <Slide bgImage={images.next.replace("/", "")} transition={["zoom"]} bgColor="primary">
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>The problem with learning React</Heading>
          <List>
            <Appear><ListItem>Hard to setup</ListItem></Appear>
            <Appear><ListItem>Too many choices</ListItem></Appear>
            <Appear><ListItem>No support for routing</ListItem></Appear>
            <Appear><ListItem>No support for server side rendering</ListItem></Appear>
            <Appear><ListItem>No dev server or hot module reloading</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={1} fit textColor="secondary" caps>What you get with Next JS</Heading>
          <List>
            <Appear><ListItem>Built in configuration</ListItem></Appear>
            <Appear><ListItem>Server side rendering</ListItem></Appear>
            <Appear><ListItem>App ready to deploy for production</ListItem></Appear>
            <Appear><ListItem>Code Splitting</ListItem></Appear>
            <Appear><ListItem>Routing and Parameterization</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize={62}>Universal JavaScript refers to code that can run in 
            two or more environments such as a server, browser, native device, 
            or embedded architecture...</Quote>
            <Cite>Adam Soffer - https://dev-blog.apollodata.com/whats-next-js-for-apollo-e4dfe835d070</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>Client Side vs Server Side Rendering</Heading>
          <Appear><Text margin="40px 0" textColor="tertiary" textSize={36} bold>
             Server side rendering is like driving over to the super market every time you want to eat.
          </Text></Appear>
          <Appear><Text margin="40px 0" textColor="tertiary" textSize={36} bold>
             With client side rendering you go to the super market once, and spend 45 minutes walking around buying a bunch of food for the month. Then, whenever you want to eat, you just open the fridge.
          </Text></Appear>
          <Text textSize={11}>https://medium.com/@adamzerner/client-side-rendering-vs-server-side-rendering-a32d2cf3bfcc</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary" caps>Client Side Rendering</Heading>     
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/client-side-rendering.example")}
          />
          <Appear><Text margin="40px 0" textColor="secondary" textSize={36} bold>
          To figure out what goes inside container, the server has to run the JavaScript, create a DOM, and manipulate that DOM
          </Text></Appear>
        </Slide>
        
        <Slide transition={[ "spin", "slide" ]} bgColor="primary">
          <Heading margin="30" size={ 6 } caps fit textColor="tertiary">Let's get it started 🎉</Heading>
          <Terminal title="1. amite: ~(zsh)" output={[
            "npm install react react-dom next",
            
            ]}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary" caps>es5 function</Heading>     
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es5-functions.example")}
          />
          <Heading size={3} fit textColor="secondary" caps>es6 arrow functions</Heading>               
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/arrow-functions.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary" caps>js callbacks</Heading>     
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/callbacks.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={3} fit textColor="secondary" caps>async functions</Heading>               
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/async-functions.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary" caps>Object Spread</Heading>         
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/object-spread.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fit textColor="secondary" caps>Array Spread</Heading>            
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/array-spread.example")}
          />
        </Slide>

        
      </Deck>
    );
  }
}
