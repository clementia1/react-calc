import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="calculator">
            <div className="grid-container">
                    <div className="item0">hellohellohellohellohellohellohellohello</div>
                    <div className="item1"><button>←</button></div>
                    <div className="item2"><button>CE</button></div>
                    <div className="item3"><button>C</button></div>
                    <div className="item4"><button>±</button></div>
                    <div className="item5"><button>√</button></div>
                    <div className="item6"><button>7</button></div>
                    <div className="item7"><button>8</button></div>
                    <div className="item8"><button>9</button></div>
                    <div className="item9"><button>/</button></div>
                    <div className="item10"><button>%</button></div>
                    <div className="item11"><button>4</button></div>
                    <div className="item12"><button>5</button></div>
                    <div className="item13"><button>6</button></div>
                    <div className="item14"><button>*</button></div>
                    <div className="item15"><button>1/x</button></div>
                    <div className="item16"><button>1</button></div>
                    <div className="item17"><button>2</button></div>
                    <div className="item18"><button>3</button></div>
                    <div className="item19"><button>-</button></div>
                    <div className="item20"><button>=</button></div>
                    <div className="item21"><button>0</button></div>
                    <div className="item22"><button>,</button></div>
                    <div className="item23"><button>+</button></div>            
            </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));