import * as React from 'react';
import * as ReactDOM from 'react-dom';



type AppProps = {message : string}

type AppState  = {
    count: number
}

// const App = ({message}) =>   <div>Hello World</div>;
/** stateless component */
// const App :React.SFC<AppProps> = ({message}) =>   <div>{message}</div>;

/**
 * stateful components
 */


class App extends React.Component<AppProps, AppState> {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        render () {
            return (
                <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
            )
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}

ReactDOM.render(
     <App message="hello world with props"/>,
     document.getElementById('root')
);
