import React from 'react';
import './button.css';

interface IProps {
    size?:string,
    xxx?: string,
    yyy?: string,
    onClick?: React.MouseEventHandler
}
interface IState {
    n: number
}

class Button extends React.Component<IProps, IState>{
    static displayName = 'FrankButton'
    static defaultProps = {
        size: 'normal'
    }
    constructor(props: IProps){
       super(props) 
       this.state = {n:1}
    }
    onClick = ()=>{
        this.setState({
            n: this.state.n +1
        })
    }
    render(){
        return (
            <div className="button">
                <span className="frank" onClick={this.onClick}>
                    {this.props.children}
                    {this.state.n}
                </span>
            </div>
        )
    }
}

export default Button;