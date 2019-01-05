import React, { Component } from 'react';

class Rule extends Component {
	state = {
		isExpanded: true,
	}

  render() {
  	const { bullets, text, title } = this.props;
    return (
      <div>
				{title && this.renderTitle()}
				{text && this.renderText()}
				{bullets && this.renderBullets()}
			</div>
    );
  }

  renderTitle = () => {
  	const { title } = this.props;
  	return (
  		<h3 className="title" onClick={this.handleClickTitle}>
  		  {this.state.isExpanded ? '-' : '+'}&nbsp;
  			{title}
  		</h3>
		);
  }

  renderText = () => {
  	if (!this.state.isExpanded) {
  		return;
  	}
  	const { text } = this.props;
  	return text
  		.split('\n')
  		.map((line, index) => <div key={index}>{line}</div>);
  }

  renderBullets = () => {
  	if (!this.state.isExpanded) {
  		return;
  	}
  	const { bullets } = this.props;
  	const items = bullets.map((bullet, index) => {
  		const child = typeof bullet === 'string' || React.isValidElement(bullet)
  			? bullet
  			: <Rule {...bullet} />;
  		return <li key={index}>{child}</li>;
  	});
  	return <ul>{items}</ul>
  }

  handleClickTitle = event => {
  	event.stopPropagation();
  	this.setState({ isExpanded: !this.state.isExpanded });
  }
}

export default Rule;
