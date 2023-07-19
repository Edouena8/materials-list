import { Component } from 'react';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { MaterialsList } from './MaterialsList/MaterialsList';
import * as API from '../services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(prevState => ({
        materials: [material, ...prevState.materials],
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    await API.deleteMaterial(id);
    this.setState(({ materials }) => ({
      materials: materials.filter(material => material.id !== id),
    }));
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);

      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;

    return (
      <div>
        {error && <p>Something is wrong</p>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {isLoading ? (
          'LOADING MATERIALS...'
        ) : (
          <MaterialsList items={materials} onDelete={this.deleteMaterial} onUpdate={this.updateMaterial}/>
        )}
      </div>
    );
  }
}