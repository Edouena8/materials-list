export const EditMaterialModal = ({ onClose, onEdit }) => {
    return (
      <div>
        <h1>Modal window</h1>
        <button
          type="button"
          onClick={() => {
            onEdit();
            onClose();
          }}
        >
          Update
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };
  