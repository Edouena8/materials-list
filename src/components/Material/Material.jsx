import { Component } from 'react';
import { EditMaterialModal } from '../EditMaterialModal/EditMaterialModal';

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        <p>
          <b>Title:</b> {item.title}
        </p>
        <p>
          <b>Link:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button
          type="button"
          // onClick={() => onUpdate({ id: item.id, title: Date.now() })}
          onClick={this.openModal}
        >
          Update
        </button>

        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
