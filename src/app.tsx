import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { CheckBoxWithLabel } from "./checkBoxWithLabel";

type AppProps = {
    message : string
}

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

    constructor(props: AppProps){
        super(props)

        this.state = {
            count: 0
        }
    };
    
    increment = (): void => {
        this.setState({
            count: this.state.count + 1
        });
    };

    public render() {
        return ( 
            <React.Fragment>
                <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
                {/* <CheckBoxWithLabel labelOn="On" labelOff="off"/> */}
            </React.Fragment> 
            )
    }

}

export default App;

// ReactDOM.render(
//      <App message="hello world with props"/>,
//      document.getElementById('root')
// );
