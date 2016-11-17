const React = require('react');
class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>name: {this.props.name}</li>
        <li>producer {this.props.producer}</li>
        <li>{this.props.hasWatermark ? 'Watermarked' : 'No Watermark'}</li>
        <li>color: {this.props.color}</li>
        <li>weight: {this.props.weight}</li>
      </ul>
    )
  }
}



function rightWeight(props, propName){
    let value = props[propName];
    if(value === undefined){
      return new Error ('required')
    }
    if(isNaN(value)){
      return new Error ('must be a number')
    }
      if (value <= 80 || value >= 300) {
        return new Error ('whoops')
      }
}
Product.defaultProps = {
  hasWatermark: false
}
Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: rightWeight


}
module.exports = Product
