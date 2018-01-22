import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNumber: '',
            secondNumber: '',
            result: '',
            operator: null,
            calculationsCount: 0
        };

        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.cleanAll = this.cleanAll.bind(this);
        this.сalculation = this.сalculation.bind(this);
    }
    
    handleNumbers(e) {
        let number = e.target.name;
        console.log(number);
        if (this.state.operator === null) {
            this.setState({ firstNumber: this.state.firstNumber + number })
        } else if (this.state.firstNumber === 0) {
            this.setState({ firstNumber: +number })
        } else { 
            this.setState({ secondNumber: this.state.secondNumber + number })
        }
    }

    handleOperator(e) {
        let currentOperator = e.target.name;
        if (this.state.firstNumber !== "") {
            this.setState({
            operator: currentOperator            
        });
        }
    }
    
    cleanLast() {
        this.setState({            
            secondNumber: '',
            result: '',
            operator: null,
        });
    }
    
    cleanAll() {
        this.setState({
            firstNumber: '',
            secondNumber: '',
            result: '',
            operator: null,
        });
    }

    сalculation() {
        if (this.state.firstNumber !== "" && this.state.secondNumber !== "" && this.state.operator !== null && this.state.operator !== "√") {
            let currentResult = 0;
            switch(this.state.operator) {
                case '+':
                    currentResult = +this.state.firstNumber + +this.state.secondNumber;
                    break;
                case '-':
                    currentResult = +this.state.firstNumber - +this.state.secondNumber;
                    break;
                case '*':
                    currentResult = +this.state.firstNumber * +this.state.secondNumber;
                    break;
                case '/':
                    currentResult = +this.state.firstNumber / +this.state.secondNumber;
                    break;
            }
            this.setState({
                result: currentResult,
                firstNumber: currentResult,
                calculationsCount: this.state.calculationsCount + 1,
/*                secondNumber: '',
                operator: null*/
            });
        }
        
        if (this.state.firstNumber !== "" && this.state.operator === "√") {
            let currentResult = 0;
            currentResult = Math.sqrt(+this.state.firstNumber);
            this.setState({
                result: currentResult,
                firstNumber: currentResult,
                secondNumber: '',
                operator: null
            });
        }
    }

    render() {
        return (
            <div className="calculator">
            <div className="grid-container">
                    <div className="item0">{this.state.firstNumber} {this.state.operator} {this.state.secondNumber} = {this.state.result}</div>
                    <div className="item1"><button>←</button></div>
                    <div className="item2"><button>CE</button></div>
                    <div className="item3"><button onClick={this.cleanAll}>C</button></div>
                    <div className="item4"><button>±</button></div>
                    <div className="item5"><button name="√" onClick={this.handleOperator}>√</button></div>
                    <div className="item6"><button name="7" onClick={this.handleNumbers}>7</button></div>
                    <div className="item7"><button name="8" onClick={this.handleNumbers}>8</button></div>
                    <div className="item8"><button name="9" onClick={this.handleNumbers}>9</button></div>
                    <div className="item9"><button name="/" onClick={this.handleOperator}>/</button></div>
                    <div className="item10"><button>%</button></div>
                    <div className="item11"><button name="4" onClick={this.handleNumbers}>4</button></div>
                    <div className="item12"><button name="5" onClick={this.handleNumbers}>5</button></div>
                    <div className="item13"><button name="6" onClick={this.handleNumbers}>6</button></div>
                    <div className="item14"><button name="*" onClick={this.handleOperator}>*</button></div>
                    <div className="item15"><button>1/x</button></div>
                    <div className="item16"><button name="1" onClick={this.handleNumbers}>1</button></div>
                    <div className="item17"><button name="2" onClick={this.handleNumbers}>2</button></div>
                    <div className="item18"><button name="3" onClick={this.handleNumbers}>3</button></div>
                    <div className="item19"><button name="-" onClick={this.handleOperator}>-</button></div>
                    <div className="item20"><button onClick={this.сalculation}>=</button></div>
                    <div className="item21"><button name="0" onClick={this.handleNumbers}>0</button></div>
                    <div className="item22"><button>,</button></div>
                    <div className="item23"><button name="+" onClick={this.handleOperator}>+</button></div>            
            </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));