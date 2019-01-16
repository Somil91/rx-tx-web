import * as React from 'react';
import * as ReactDOM from 'react-dom';



type AppProps = {message : string}



// const App = ({message}) =>   <div>Hello World</div>;
const App :React.SFC<AppProps> = ({message}) =>   <div>{message}</div>;

ReactDOM.render(
     <App message="hello world with props"/>,
     document.getElementById('root')
);
