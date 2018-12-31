import React, { Component } from 'react';

class Rule extends Component {
  render() {
  	const { bullets, text, title } = this.props;
    return (
      <div>
				{title && this.renderTitle()}
				{text && this.renderText()}
				<ul>{bullets && this.renderBullets()}</ul>
			</div>
    );
  }

  renderTitle = () => {
  	const { title } = this.props;
  	return <h3>{title}</h3>;
  }

  renderText = () => {
  	const { text } = this.props;
  	return text
  		.split('\n')
  		.map((line, index) => <div key={index}>{line}</div>);
  }

  renderBullets = () => {
  	const { bullets } = this.props;
  	return bullets.map((bullet, index) => {
  		const child = typeof bullet === 'string'
  			? bullet
  			: <Rule {...bullet} />;
  		return <li key={index}>{child}</li>;
  	});
  }
}

export default Rule;
