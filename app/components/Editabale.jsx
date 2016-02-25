import React from 'react';

export default class Editabale extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      editing: false
    }
  }

  render() {
    const {value, onEdit, ...props} = this.props;
    const editing = this.state.editing;

    return (
        <div {...props}>
          {editing ? this.renderEdit() : this.renderValue()}
        </div>
    );
  }

  renderEdit = () => {
    return <input type="text"
                  autoFocus={true}
                  defaultValue={this.props.value}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter}
    />;
  }

  renderValue = () => {
    const onDelete = this.props.onDelete

    return <div onClick={this.edit}>
      <span className="value">{this.props.value}</span>
      {onDelete ? this.renderDelete() : null}
    </div>;
  }

  renderDelete = () => {
    return <button className="delete" onClick={this.props.onDelete}>x</button>;
  }
}