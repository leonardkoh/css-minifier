import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.hc(e.target.value);
    }

    render() {
        return (
            <textarea className="sizeBox" 
                placeholder="Enter CSS here"
                onChange={this.handleChange}>
            </textarea>
        )}
}

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "Minified CSS Output"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    generateResult() {
        return `<!DOCTYPE html>
        <html>
            <body>
                ${this.state.result}
            </body>
        </html>`
    }

    handleChange(e) {
        this.setState({result: this.minify(e)})
    }

    minify(str) {
        return str.slice(0).replace(/\s/g,"");
    }

    render() {
        return (
            <div className="ctr">
                <h1 className="textMs">CSS Minifier</h1>
                <Input hc={this.handleChange} />
                <iframe className="sizeBox" srcDoc={this.generateResult()}></iframe>
                <br />
                <button className="btn">Copy CSS</button>
                <button className="btn">Save file</button>
            </div>
        )}
}


ReactDOM.render(<Output />, document.getElementById('root'));