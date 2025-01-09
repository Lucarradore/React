import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Actualiza el estado para mostrar la interfaz de usuario alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Registrar el error en un servicio de reporte
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderizar una interfaz de usuario alternativa
      return <h1>Algo salió mal.</h1>;
    }

    return this.props.children; 
  }
}

// Validación de props
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
